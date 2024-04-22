<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Http\Requests\ModelRequest;
use App\Models\ModelTable;
use Illuminate\Http\Request;


class ModelController extends Controller
{
    public function index()
    {
        $models = ModelTable::orderBy('id', 'desc')->get();
        return response()->json(['data' => $models, 'success' => true]);
    }

    public function store(ModelRequest $request)
    {
        $model = new ModelTable();
        $model->fill($request->all());
        $model->save();

        return response()->json(['data' => $model, 'success' => $model ? true : false]);
    }

    public function update(ModelRequest $request, $id)
    {
        $model = ModelTable::find($id);

        if($model){
            $model->fill($request->all());
            $model->save();
        }
        
        return response()->json(['data' => $model, 'success' => $model ? true : false]);
    }

    public function destroy($id)
    {
        $model = ModelTable::find($id);

        if($model){
            $model->delete();
        }else{
            $model = false;
        }
        
        return response()->json(['success' => $model]);
    }
}
