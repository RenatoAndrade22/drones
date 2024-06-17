<?php

namespace App\Http\Controllers\API;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use SimpleSoftwareIO\QrCode\Facades\QrCode;

class QRCodeController extends Controller
{
    public function index()
    {
       return QrCode::size(200)->generate('My first QR Code');
    }
    public function colorQrCodeIndex()
    {
      return QrCode::size(100)
               ->backgroundColor(255,255,10)
               ->generate('Example of Colored QR code');
    }
}
