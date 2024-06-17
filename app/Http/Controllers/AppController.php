<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use SimpleSoftwareIO\QrCode\Facades\QrCode;

class AppController extends Controller
{
    public function index()
    {
        return view('app');
    }

    public function home()
    {
        return view('home');
    }
}
