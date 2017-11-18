<?php

use Illuminate\Database\Seeder;

class UsersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {


        $faker = Faker\Factory::create();

        for($i = 0; $i < 50; $i++) {
            App\User::create([
                'first_name' => $faker->lastName,
                'last_name' => $faker->firstName(),
                'email' => $faker->email,
                'password' =>bcrypt(rand(8,12)),
                'token' =>bcrypt($faker->lastName),
                'avatar' => "https://graph.facebook.com/v2.10/640456763011274/picture?type=normal",

            ]);
        }

        $faker2 = Faker\Factory::create();
        // following line retrieve all the user_ids from DB
        $topics = \App\Topic::all()->pluck('id')->toArray();
        foreach(range(1,50) as $index2){
            \App\Tag::create([
                'topic_id' => $faker2->randomElement($topics),
                'tag_name' => $faker2->name
            ]);
        }


        $faker1 = Faker\Factory::create();
        // following line retrieve all the user_ids from DB
        $users = \App\User::all()->pluck('id')->toArray();;
        $Tags = \App\Tag::all()->pluck('id')->toArray();;
        foreach(range(1,50) as $index1){
            \App\Dataset::create([
                'name' => $faker1->company,
                'description' => $faker1->text(50),
                'user_id' => $faker1->randomElement($users),
                'tag_id' => $faker1->randomElement($Tags),
                'upload_data_path' => "/files/package.json",
            ]);
        }

        $faker3 = Faker\Factory::create();
        // following line retrieve all the user_ids from DB
        $Dataset = \App\Dataset::all()->pluck('id')->toArray();
        foreach(range(1,50) as $index2){
            \App\Star::create([
                'stars_counter' => $faker3->randomDigit,
                'dataset_id' => $faker3->randomElement($Dataset)
            ]);
        }


    }
}
