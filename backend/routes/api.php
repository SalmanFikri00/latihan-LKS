<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\TenantsController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::prefix('/a1')->group(function () {

    Route::prefix('/auth')->group(function () {

        Route::get('/get' , [ AuthController::class , 'index'])->middleware(['auth:sanctum']);

        Route::post('/login' , [ AuthController::class , 'auth']);

        Route::post('/register' , [ AuthController::class , 'store']);

        Route::post('/logout' , [ AuthController::class , 'destroy'])->middleware(['auth:sanctum']);

    });

    Route::prefix('/register')->group(function () {

        Route::get('/' , [ TenantsController::class , 'index']);

        Route::post('/' , [ TenantsController::class , 'store']);

        Route::put('/{id}' , [ TenantsController::class , 'update']);

        Route::delete('/' , [ TenantsController::class , 'destroy']);

        Route::get('/{id}' , [ TenantsController::class , 'show']);
    });







});
