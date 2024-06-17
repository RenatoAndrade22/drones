<?php

namespace App\Http\Controllers\API;

use App\Helpers\Evita13Helper;
use App\Http\Controllers\Controller;
use App\Http\Requests\SaleRequest;
use App\Models\LotItem;
use App\Models\Sale;
use App\Models\salesItem;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class SaleController extends Controller
{

    public function index()
    {
        $sales = Sale::with(['enterprise', 'saleItems'])->get();

        return response()->json(['success' => true, 'data' => $sales]);
    }

    public function store(SaleRequest $request)
    {
        $sale = new Sale();
        $sale->enterprise_id = $request->get('enterprise_id');
        $sale->save();

        foreach ( $request->get('products') as $product ) {
          
            $lots = DB::select("
                SELECT lotI.id FROM lot_items lotI
                    LEFT join sales_items saleI
                        ON saleI.lot_item_id = lotI.id		
                WHERE
                    saleI.id IS NULL
                AND
                    lotI.product_id = ? 
                LIMIT ?
            ", [$product['product']['product_id'], $product['qnt']]);

            foreach( $lots as $lot ) {
                
                $saleItem = new salesItem();
                $saleItem->sale_id = $sale->id;
                $saleItem->lot_item_id = $lot->id;
                $saleItem->save();

            }
            
        }

        Evita13Helper::updateAutoIncrement('sales', $sale->id);

        return response()->json(['success' => true]);
    }

    public function destroy($id)
    {
        $sale = Sale::find($id);

        if($sale){
            salesItem::query()->where('sale_id', $sale->id)->delete();
            $sale->delete();            
        }else{
            $sale = false;
        }
        
        return response()->json(['success' => $sale]);
    }
}
