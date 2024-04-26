<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Http\Requests\ProductRequest;
use App\Models\Product;
use DateTime;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class ProductController extends Controller
{
    public function index()
    {
        $products = Product::orderBy('id', 'desc')->get();
        return response()->json(['data' => $products, 'success' => true]);
    }

    public function getProductBySerialNumber($serial_number){
        $products = Product::where('serial_number_token', $serial_number)->first();
        return response()->json(['data' => $products, 'success' => true]);
    }

    public function store(ProductRequest $request)
    {

        DB::beginTransaction();

        try{

            $product = new Product();
            $product->fill($request->all());

            $date = DateTime::createFromFormat('d/m/Y', $request->get('warranty_date'));
            $product->warranty_date = $date->format('Y-m-d');

            $product->save();

            // CRIA O SERIAL NUMBER
            $serial_number = $this->generateSerialNumber($product->id);

            if(!$serial_number){
                throw new \Exception('Erro');
            }

            $product->serial_number = $serial_number;

            // CRIA O TOKEN APARTIR DO SERIAL
            $serial_number_token = $this->generateSerialToken();

            
            if(!$serial_number_token){
                throw new \Exception('Erro');
            }
            
            $product->serial_number_token = $serial_number_token;
            
            // TERMINA DE SALVAR
            $product->save();

            DB::commit();

        }catch (\Exception $e) {
            DB::rollBack();
            return response()->json(['data' => ['error'=> $e->getMessage()], 'success' => false], 500);
        }

        return response()->json(['data' => $product, 'success' => $product ? true : false]);
    }

    public function generateSerialNumber($id)
    {
        $serial = "";

        $results = DB::select("SELECT 
            br.id AS brand_id, 
            mo.serial_number AS model_serial_number, 
            mo.year AS model_year, 
            pr.id AS product_id
            
            FROM brands br
            INNER JOIN models mo
                ON mo.brand_id = br.id
            INNER JOIN products pr
                ON pr.model_id = mo.id
            WHERE
                pr.id = $id
        ");

        if(isset($results[0])){
            $serial = $results[0]->brand_id.$results[0]->model_serial_number.$results[0]->model_year.$results[0]->product_id;
        }

        return $serial;
    }

    public function generateSerialToken()
    {
        $product = true;

        while ($product !== null) {
            $token = mt_rand(10000000, 99999999);
            $token = str_replace('13', '12', $token);
            $product = Product::query()->where('serial_number_token', $token)->first();
        }
        
        return $token;
    }

    public function update(ProductRequest $request, $id)
    {
        $product = Product::find($id);

        if($product){
            $product->fill($request->all());
            $date = DateTime::createFromFormat('d/m/Y', $request->get('warranty_date'));
            $product->warranty_date = $date->format('Y-m-d');
            $product->save();
        }
        
        return response()->json(['data' => $product, 'success' => $product ? true : false]);
    }

    public function destroy($id)
    {
        $product = Product::find($id);

        if($product){
            $product->delete();
        }
        
        return response()->json(['success' =>  $product ? true : false]);
    }
}
