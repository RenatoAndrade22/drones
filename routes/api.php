<?php

use App\Http\Controllers\API\AuthController;
use App\Http\Controllers\API\BrandController;
use App\Http\Controllers\API\EnterpriseController;
use App\Http\Controllers\API\LotController;
use App\Http\Controllers\API\ModelController;
use App\Http\Controllers\API\ProductController;
use App\Http\Controllers\API\SaleController;
use App\Http\Controllers\API\UserController;
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

// LOGIN


Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});


Route::middleware(['auth:sanctum'])->group(function () {
    Route::post('logout', [AuthController::class, 'logout']);
    Route::resource('/marca', BrandController::class);
    Route::resource('/modelo', ModelController::class);
    Route::resource('/enterprise', EnterpriseController::class);
    Route::resource('/user', UserController::class);
    Route::resource('/lot', LotController::class);
    Route::resource('/sale', SaleController::class);
    Route::post('produto-update/{id}', [ProductController::class, 'update']);
    Route::post('produto-image-delete/{id}', [ProductController::class, 'destroyImage']);
    Route::resource('/produto', ProductController::class);

    Route::get('produtos-vendas', [ProductController::class, 'getProductsBySale']);

});

Route::post('auth', [AuthController::class, 'login']);

Route::get('search-seral-number/{serial_number}', [LotController::class, 'getProductBySerialNumber']);
