<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Http\Requests\BrandRequest;
use App\Models\Brand;
use Illuminate\Http\Request;

class BrandController extends Controller
{

    public function index()
    {
        $brands = Brand::orderBy('id', 'desc')->get();;
        return response()->json(['data' => $brands, 'success' => true]);
    }

    public function store(BrandRequest $request)
    {
        $brand = new Brand();
        $brand->fill($request->all());
        $brand->save();

        return response()->json(['data' => $brand, 'success' => $brand ? true : false]);
    }

    public function update(BrandRequest $request, $id)
    {
        $brand = Brand::find($id);

        if($brand){
            $brand->fill($request->all());
            $brand->save();
        }
        
        return response()->json(['data' => $brand, 'success' => $brand ? true : false]);
    }

    public function destroy($id)
    {
        $brand = Brand::find($id);

        if($brand){
            $brand->delete();
        }else{
            $brand = false;
        }
        
        return response()->json(['success' => $brand]);
    }

}
