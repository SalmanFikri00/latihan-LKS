<?php

namespace Database\Seeders;

use App\Models\tenants;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class TenantsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $tenats = tenants::factory()->count(5)->make();
    }
}
