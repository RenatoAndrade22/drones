<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Http\Requests\LotRequest;
use App\Models\Lot;
use App\Models\LotItem;
use App\Models\Product;
use finfo;
use Illuminate\Http\Request;

class LotController extends Controller
{
    public function index()
    {
        $lots = LotItem::with(['lot', 'product'])->orderBy('id', 'desc')->get();
        return response()->json(['data' => $lots, 'success' => true]);
    }

    public function getProductBySerialNumber($serial_number){

        $lot_item = LotItem::with('sale')->where('serial_number_token', $serial_number)->first();

        $products = [];

        if ($lot_item) {

            $products = Product::where('id', $lot_item->product_id)->with('images')->first();

            $products = collect([$products]);

            $products = $products->map(function ($product) {

                $arrBase64 = [];

                if(isset($product['images'])){
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
                }
            

                $product['images_base'] = $arrBase64;
                
                return $product;
            });

        }

        if(isset($products[0])){
            $products[0]['enterprise_name'] = isset($lot_item->sale->enterprise->name) ? $lot_item->sale->enterprise->name : null;
            $products[0]['enterprise_cnpj'] = isset($lot_item->sale->enterprise->cnpj) ? $lot_item->sale->enterprise->cnpj : null;
        }

        return response()->json(['data' => $products, 'success' => true]);

    }

    public function store(LotRequest $request)
    {

        $qnt_products = $request->get('qnt_products');

        $lot = new Lot();
        $lot->name = $request->get('name');
        $lot->product_id = $request->get('product_id');
        $lot->qnt_products = $qnt_products;
        $lot->save();

        for ($i=0; $i < $qnt_products; $i++) { 
            $lotItem = new LotItem();
            $lotItem->lot_id = $lot->id;
            $lotItem->product_id = $lot->product_id;
            $lotItem->serial_number_token = $this->generateSerialToken();
            $lotItem->save();
        }

        return response()->json(['success' => true]);
    }

    public function update(Request $request, $id)
    {
        $lot = Lot::find($id);

        if($lot){
            $lot->fill($request->all());
            $lot->save();
        }
        
        return response()->json(['data' => $lot, 'success' => $lot ? true : false]);
    }

    public function destroy($id)
    {
        $lot = LotItem::find($id);

        $delete_lot = false;

        $items = LotItem::query()->where('product_id', $lot->product_id)->get();

        if(count($items) <= 1){
            $delete_lot = true;
            $lot_id = $lot->lot_id;
        }

        if($lot){
            $lot->delete();
        }else{
            $lot = false;
        }

        if($delete_lot){
            $destroy_lot = Lot::find($lot_id);
            $destroy_lot->delete();
        }

        
        return response()->json(['success' => $lot]);
    }

    public function generateSerialToken()
    {
        $product = true;

        while ($product !== null) {
            $token = mt_rand(10000000, 99999999);
            $token = str_replace('13', '12', $token);
            $product = LotItem::query()->where('serial_number_token', $token)->first();
        }
        
        return $token;
    }
}
