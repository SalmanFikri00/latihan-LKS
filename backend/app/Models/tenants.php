<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class tenants extends Model
{
    use HasFactory;

    protected $fillable = [
        'no_ktp',
        'name',
        'date_of_birth',
        'email',
        'phone',
        'description',
    ];

}
