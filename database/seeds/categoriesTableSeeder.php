<?php

use Illuminate\Database\Seeder;
class categoriesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('topics')->delete();

        $categories = [
            ['topic_name' => 'Agriculture', 'description' => 'Agriculture'],
            ['topic_name' => 'Climate', 'description' => 'Climate'],
            ['topic_name' => 'Consumer', 'description' => 'Consumer'],
            ['topic_name' => 'Ecosystems', 'description' => 'Ecosystems'],
            ['topic_name' => 'Education', 'description' => 'Education'],
            ['topic_name' => 'Energy', 'description' => 'Energy'],
            ['topic_name' => 'Finance', 'description' => 'Finance'],
            ['topic_name' => 'Health', 'description' => 'Health'],
            ['topic_name' => 'Local Government', 'description' => 'Local Government'],
            ['topic_name' => 'Manufacturing', 'description' => 'Manufacturing'],
            ['topic_name' => 'Maritime', 'description' => 'Maritime'],
            ['topic_name' => 'Public Safety', 'description' => 'Public Safety'],
            ['topic_name' => 'Science & Research', 'description' => 'Science & Research'],
       ];

        foreach($categories as $category){
            \App\Topic::create($category);
        }
    }
}
