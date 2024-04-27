<?php

namespace App\Http\Controllers;

use App\Http\Resources\TenantsResource;
use App\Models\tenants;
use Illuminate\Http\Request;

class TenantsController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $datas = tenants::all();

        return TenantsResource::collection($datas);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {

        $validate = $request->validate([
            'no_ktp' => 'required',
            'name' => 'required',
            'date_of_birth' => 'required',
            'email' => 'required',
            'phone' => 'required',
            'description' => 'required',
        ]);

        $result = tenants::create($validate);

        if(!$result){
            return response()->json([
                'message' => 'kesalahan dalam membuat tenants'
            ], 401);
        }

        return response()->json([
            'message' => 'berhasil terbuat'
        ], 200);

    }

    /**
     * Display the specified resource.
     */
    public function show($id)
    {
        $data = tenants::find($id);

        if(!$id){
            return response()->json([
                'message' => 'failed'
            ], 200);
        }
        return response()->json($data, 200);

    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, $id)
    {
        $result = tenants::find($id)->update($request->all());

        if(!$result){
            return response()->json([
                'message' => 'gagal update data'
            ], 200);
        }

        return response()->json([
            'message' => $result
        ], 200);

    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy( Request $request )
    {
        $id = $request->id;

        $result = tenants::find($id)->delete();

        if(!$result){
            return response()->json([
                'message' => 'gagal menghapus data'
            ], 200);
        }

        return response()->json([
            'message' => $result
        ], 200);

    }
}
