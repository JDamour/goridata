<?php

namespace App\Providers;


use App\Topic;
use Illuminate\Support\Facades\Schema;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\View;
use Illuminate\Support\ServiceProvider;
use Symfony\Component\HttpFoundation\File\UploadedFile;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {
        Schema::defaultStringLength(191);

        $topics = Topic::all();
        View::share('categories', $topics);

        Validator::extend('json_file', function($attribute, $value, $parameters) {
            $ext =$value->getClientOriginalExtension();
//            dd();
            return ($ext=='json') ? true : false;
        });
    }

    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        //
    }
}
