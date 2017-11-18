<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    if(\Auth::check()){
        $user = \Auth::user();
        JavaScript::put([
            'user_check' => $user->id
        ]);
    }else{
        JavaScript::put([
            'user_check' => null
        ]);
    }

    return view('welcome');
});
Route::get('/profile/{id}/{name}', function ($id,$name) {
    JavaScript::put([
        'id' => $id,
        'name' => $name
    ]);
    return view('profile');
});
Route::get('/data/{datasetId}', function ($datasetId) {
    $dataset =\App\Dataset::find($datasetId);
//    $urldata='';
    if(!empty($dataset->upload_data_path)){
        $urldata=$dataset->upload_data_path;
    }else{
        $urldata=$dataset->url_api;
    }

    JavaScript::put([
        'urldata' => $urldata,
        'datasetId' => $datasetId
    ]);
    return view('datafile');
});
Route::get('/explore/{topic}', function ($topic) {
    JavaScript::put([
        'topic' => $topic
    ]);
    return view('explore');
});
Route::get('/search', function () {
    $query = \Illuminate\Support\Facades\Input::get('q');
    JavaScript::put([
        'keyword' => $query
    ]);
    return view('search');
});
$s = 'social.';
Route::get('/social/redirect/{provider}',   ['as' => $s . 'redirect',   'uses' => 'Auth\SocialController@getSocialRedirect']);
Route::get('/social/handle/{provider}',     ['as' => $s . 'handle',     'uses' => 'Auth\SocialController@getSocialHandle']);

Auth::routes();

Route::get('/star/{id}', 'HomeController@star');
Route::get('/home', 'HomeController@index')->name('home');
Route::get('/dataset/form', 'HomeController@create')->name('create');
Route::post('/store', 'HomeController@store')->name('store');
