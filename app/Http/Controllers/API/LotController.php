<?php

namespace App\Http\Controllers\API;

use App\Helpers\Evita13Helper;
use App\Http\Controllers\Controller;
use App\Http\Requests\LotRequest;
use App\Models\Lot;
use App\Models\LotItem;
use App\Models\Product;
use finfo;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use SimpleSoftwareIO\QrCode\Facades\QrCode;
use Endroid\QrCode\Builder\Builder;
use Endroid\QrCode\Writer\PngWriter;

class LotController extends Controller
{
    public function index()
    {
        $lots = LotItem::with(['lot', 'product'])->orderBy('id', 'desc')->get();

        $lots = $lots->map(function ($item) {
            $result = Builder::create()
                ->data(env('APP_URL').$item['serial_number_token'])
                ->writer(new PngWriter())
                ->size(500)
                ->build();
        
            $qrCodeBase64 = base64_encode($result->getString());
            $item['qrcode'] = 'data:image/png;base64,' . $qrCodeBase64;
        
            return $item;
        });

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



        $sale = db::select("
            SELECT 
                ent.name AS enterprise_name,
                ent.cnpj AS enterprise_cnpj
            FROM lot_items item
                LEFT JOIN sales_items s_item
                    ON s_item.lot_item_id = item.id
                LEFT JOIN sales sale
                    ON sale.id = s_item.sale_id
                LEFT JOIN enterprises ent
                    ON ent.id = sale.enterprise_id
            WHERE
                item.id = ".$lot_item->id."
        ");

        if($sale && isset($products[0])){
            $products[0]['enterprise_name'] = $sale[0]->enterprise_name;
            $products[0]['enterprise_cnpj'] = $sale[0]->enterprise_cnpj;
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

            Evita13Helper::updateAutoIncrement('lot_items', $lotItem->id);
        }

        Evita13Helper::updateAutoIncrement('lots', $lot->id);

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
