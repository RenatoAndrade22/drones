<?php

use App\Http\Controllers\API\BrandController;
use App\Http\Controllers\API\ModelController;
use App\Http\Controllers\API\ProductController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::resource('/marca', BrandController::class);
Route::resource('/modelo', ModelController::class);
Route::resource('/produto', ProductController::class);
Route::get('search-seral-number/{serial_number}', [ProductController::class, 'getProductBySerialNumber']);