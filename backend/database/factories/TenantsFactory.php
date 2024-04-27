<?php

namespace Database\Factories;

use App\Models\tenants;
use Illuminate\Database\Eloquent\Factories\Factory;
use Stringable;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Tenants>
 */
class TenantsFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */

     protected $model = tenants::class;

    public function definition(): array
    {
        return [
            'no_ktp' => $this->faker->name(),
            'name' => $this->faker->name(),
            'date_of_birth' => $this->faker->date(),
            'email' => $this->faker->email(),
            'phone' => $this->faker->phoneNumber(),
            'description' => $this->faker->name(),

        ];
    }
}
