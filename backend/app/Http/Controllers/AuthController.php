<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class AuthController extends Controller
{
    public function index ( Request $request ) {

        return response()->json([
            'user' => $request->user()
        ], 200);

    }

    public function auth( Request $request )
    {

        $credentials = $request->validate([
            'email' => 'required|email',
            'password' => 'required'
        ]);

        if(!Auth::attempt($credentials)){
            return response()->json([
                'message' => 'invalid login'
            ], 401);
        }

        $email = $request->email;
        $token = $request->user()->createToken("$email")->plainTextToken;

        return response()->json([
            'token' => $token
        ], 200);
    }


    public function store(Request $request)
    {
        $credentials = $request->validate([
            'name' => 'required',
            'email' => 'required|email',
            'password' => 'required'
        ]);

        $result = User::create($credentials);

        if(!$result){
            return response()->json([
                'message' => 'gagal membuat user'
            ], 401);
        }
        return response()->json([
            'message' => 'berhasil membuat user'
        ], 200);
    }


    public function destroy(Request $request)
    {

        if(!$request->user()->tokens()->delete()){
            return response()->json([
                'message' => 'gagal logout'
            ], 401);
        }
        return response()->json([
            'message' => 'berhasil logout'
        ], 200);


    }
}
