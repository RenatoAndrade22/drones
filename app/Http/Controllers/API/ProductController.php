<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Http\Requests\ProductRequest;
use App\Models\Product;
use App\Models\Upload;
use DateTime;
use finfo;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Storage;

class ProductController extends Controller
{
    public function index()
    {
        $products = Product::orderBy('id', 'desc')->with('images')->get();
        return response()->json(['data' => $products, 'success' => true]);
    }

    public function getProductBySerialNumber($serial_number){
        $products = Product::where('serial_number_token', $serial_number)->with('images')->first();

        $products = collect([$products]);

        $products = $products->map(function ($product) {

            $arrBase64 = [];

            foreach($product['images'] as $img){
                $imageData = file_get_contents($img['url']);  // Supondo que 'url' seja o campo correto

                // Converter dados de imagem para base64
                $base64 = base64_encode($imageData);

                // Detectar o tipo de conteúdo da imagem
                $finfo = new finfo(FILEINFO_MIME_TYPE);
                $mimeType = $finfo->buffer($imageData);

                // Criar a string base64 completa
                $base64Image = 'data:' . $mimeType . ';base64,' . $base64;
                $arrBase64[] = ['url' => $base64Image];
            }

            $product['images_base'] = $arrBase64;
            return $product;
        });

        return response()->json(['data' => $products, 'success' => true]);
    }

    public function store(ProductRequest $request)
    {

        DB::beginTransaction();

        try{

            $product = new Product();
            $product->fill($request->all());

            $date = DateTime::createFromFormat('d/m/Y', $request->get('warranty_date'), );
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

            if ($request->hasfile('files')) {

                $images = $this->uploadImage($request);

                if(!empty($images)){
                    $this->saveImages($images, $product->id);
                }

            }


            DB::commit();

        }catch (\Exception $e) {
            DB::rollBack();
            return response()->json(['data' => ['error'=> $e->getMessage()], 'success' => false], 500);
        }

        return response()->json(['data' => $product, 'success' => $product ? true : false]);
    }

    public function saveImages($images, $product_id)
    {
        foreach ($images as $img_url) {
            $uploads = new Upload();
            $uploads->url = $img_url;
            $uploads->model = 'product';
            $uploads->item_id = $product_id;
            $uploads->save();
        }
    }

    public function uploadImage($request)
    {
        $uploadedUrls = [];

        foreach ($request->file('files') as $file) {
            $path = $file->store('public/images', 's3');
            Storage::disk('s3')->setVisibility($path, 'public');  // Set visibility to public

            $url = Storage::disk('s3')->url($path);
            $uploadedUrls[] = $url;  // Store the URL to array
        }
  
        return $uploadedUrls;
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

            if ($request->hasfile('files')) {

                $images = $this->uploadImage($request);

                if(!empty($images)){
                    $this->saveImages($images, $product->id);
                }

            }
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

    public function destroyImage($id)
    {
        $upload = Upload::find($id);

        if (!$upload) {
            return response()->json(['message' => 'File not found.'], 404);
        }

        // Assumindo que a URL ou a chave do arquivo esteja armazenada no campo `url`
        // Extraia a chave do arquivo a partir da URL completa, se necessário
        $fileKey = basename($upload->url);

        if (Storage::disk('s3')->delete('public/images/' . $fileKey)) {
            // Opcional: remover ou atualizar o registro no banco de dados
            $upload->delete();
            return response()->json(['message' => 'File successfully deleted.']);
        }

        return response()->json(['message' => 'Error deleting the file.'], 500);

    }
}
