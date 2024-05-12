<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Http\Requests\EnterpriseRequest;
use App\Models\Enterprise;
use Illuminate\Http\Request;

class EnterpriseController extends Controller
{
    public function index()
    {
        $enterprises = Enterprise::orderBy('id', 'desc')->get();
        return response()->json(['data' => $enterprises, 'success' => true]);
    }

    public function store(EnterpriseRequest $request)
    {
        $enterprise = new Enterprise();
        $enterprise->fill($request->all());
        $enterprise->cnpj = preg_replace('/[^\d]/', '', $request->get('cnpj'));
        $enterprise->save();

        return response()->json(['data' => $enterprise, 'success' => $enterprise ? true : false]);
    }

    public function update(Request $request, $id)
    {
        $enterprise = Enterprise::find($id);

        if($enterprise){
            $enterprise->fill($request->all());
            $enterprise->cnpj = preg_replace('/[^\d]/', '', $request->get('cnpj'));
            $enterprise->save();
        }
        
        return response()->json(['data' => $enterprise, 'success' => $enterprise ? true : false]);
    }

    public function destroy($id)
    {
        $enterprise = Enterprise::find($id);

        if($enterprise){
            $enterprise->delete();
        }else{
            $enterprise = false;
        }
        
        return response()->json(['success' => $enterprise]);
    }
}
