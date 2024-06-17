<?php

namespace App\Http\Controllers\API;
use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class UserController extends Controller
{
    
    public function index()
    {
        $users = User::orderBy('id', 'desc')->get();;
        return response()->json(['data' => $users, 'success' => true]);
    }

    public function store(Request $request)
    {
        $user = new User();
        $user->fill($request->all());
        $user->password = Hash::make($request->get('password')); // Criptografando a senha
        $user->save();

        return response()->json(['data' => $user, 'success' => $user ? true : false]);
    }

    public function update(Request $request, $id)
    {
        $user = User::find($id);

        if($user){
            $user->fill($request->all());
            $user->password = Hash::make($request->get('password')); // Criptografando a senha
            $user->save();
        }
        
        return response()->json(['data' => $user, 'success' => $user ? true : false]);
    }

    public function destroy($id)
    {
        $user = User::find($id);

        if($user){
            $user->delete();
        }else{
            $user = false;
        }
        
        return response()->json(['success' => $user]);
    }
}
