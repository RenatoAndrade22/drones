<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Dotenv\Exception\ValidationException;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
 
class AuthController extends Controller
{
    public function login(Request $request)
    {
        $request->validate([
            'email' => 'required|email',
            'password' => 'required',
        ]);
    
        // Verifica as credenciais e retorna o token
        $credentials = $request->only('email', 'password');
        if (Auth::attempt($credentials)) {
            // O usuário foi autenticado, gerar token
            $user = Auth::user();
            $token = $user->createToken('YourAppNameToken')->plainTextToken;  // 'YourAppNameToken' é um nome para o token
    
            return response()->json(['token' => $token], 200);
        }
    
        // Se a autenticação falhar, retornar erro
        return response()->json(['error' => 'Unauthorized'], 401);
    }

    public function logout(Request $request){
        Auth::guard('web')->logout();

        $request->session()->invalidate();
        $request->session()->regenerateToken();

        return response()->json(['message' => 'Logged out successfully'], 200);
    }
}
