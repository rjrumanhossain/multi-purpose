<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class UserController extends Controller
{
    public function index(){
        $user = User::orderBy('id', 'desc')->get();
        return $user;
    }

    public function store(Request $request){
        $user  = User::create([
            'name'  => $request->name,
            'email'  => $request->email,
            'password'  => Hash::make($request->password),

        ]);

        return $user;
    }
}
