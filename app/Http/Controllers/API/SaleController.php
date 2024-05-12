<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Http\Requests\SaleRequest;
use App\Models\Sale;
use Illuminate\Http\Request;

class SaleController extends Controller
{

    public function index()
    {
        $sales = Sale::with(['enterprise', 'lot_item'])->get();

        return response()->json(['success' => true, 'data' => $sales]);
    }

    public function store(SaleRequest $request)
    {
        $sale = new Sale();
        $sale->enterprise_id = $request->get('enterprise_id');
        $sale->lot_item_id = $request->get('lot_item_id');
        $sale->save();

        return response()->json(['success' => true]);

    }

    public function destroy($id)
    {
        $sale = Sale::find($id);

        if($sale){
            $sale->delete();
        }else{
            $sale = false;
        }
        
        return response()->json(['success' => $sale]);
    }
}
