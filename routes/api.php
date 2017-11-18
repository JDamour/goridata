<?php

use Illuminate\Http\Request;

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
Route::get('/latest', function () {
    $datasets = DB::table('datasets')
        ->join('tags', 'datasets.tag_id', '=', 'tags.id')
        ->join('users', 'datasets.user_id', '=', 'users.id')
        ->join('stars', 'datasets.id', '=','stars.dataset_id')
        ->join('topics', 'tags.topic_id', '=', 'topics.id')
        ->select('datasets.id as datasetId','datasets.name','datasets.user_id','datasets.description','datasets.upload_data_path','datasets.url_api','datasets.created_at', 'users.first_name', 'users.avatar', 'tags.tag_name','stars.stars_counter','topics.topic_name')
        ->latest()
        ->limit(10)
        ->get();
    return $datasets;
});
Route::get('/search', function () {
    $query = \Illuminate\Support\Facades\Input::get('q');
    $search = DB::table('datasets')
        ->join('tags', 'datasets.tag_id', '=', 'tags.id')
        ->join('users', 'datasets.user_id', '=', 'users.id')
        ->join('stars', 'datasets.id', '=','stars.dataset_id')
        ->join('topics', 'tags.topic_id', '=', 'topics.id')
        ->select('datasets.id as datasetId','datasets.name','datasets.user_id','datasets.description','datasets.upload_data_path','datasets.url_api','datasets.created_at', 'users.first_name', 'users.avatar', 'tags.tag_name','stars.stars_counter','topics.topic_name')
        ->where('datasets.name','LIKE','%'.$query.'%')
        ->orWhere('datasets.description','LIKE','%'.$query.'%')
        ->limit(20)
        ->get();
    return $search;
});
Route::get('/developers', function () {
    $developers = DB::table('datasets')
        ->join('users', 'datasets.user_id', '=', 'users.id')
        ->select('datasets.name','datasets.user_id','datasets.id','datasets.upload_data_path','datasets.url_api','datasets.created_at', 'users.first_name','users.last_name', 'users.avatar')
        ->latest()
        ->limit(10)
        ->get();
    return $developers;
});
Route::get('/stars', function () {
    $query = \Illuminate\Support\Facades\Input::get('query');
    if($query == 'all'){
        $stars = DB::table('stars')
            ->join('datasets', 'stars.dataset_id', '=', 'datasets.id')
            ->select('datasets.id as datasetId','datasets.name','datasets.description','datasets.upload_data_path','datasets.url_api','stars.stars_counter')
            ->orderBy('stars_counter','desc')
            ->limit(10)
            ->get();
    }else{
        $stars = DB::table('stars')
            ->join('datasets', 'stars.dataset_id', '=', 'datasets.id')
            ->select('datasets.id as datasetId','datasets.name','datasets.description','datasets.upload_data_path','datasets.url_api','stars.stars_counter')
            ->where('datasets.name','LIKE','%'.$query.'%')
            ->orWhere('datasets.description','LIKE','%'.$query.'%')
            ->orderBy('stars_counter','desc')
            ->limit(10)
            ->get();
    }

//    dd($stars);
    return $stars;
});
Route::get('/explore/{topic}', function ($topic) {

    $topics = DB::table('datasets')
        ->join('tags', 'datasets.tag_id', '=', 'tags.id')
        ->join('users', 'datasets.user_id', '=', 'users.id')
        ->join('stars', 'stars.dataset_id', '=', 'datasets.id')
        ->join('topics', 'tags.topic_id', '=', 'topics.id')
        ->select('datasets.name','datasets.user_id','datasets.id as datasetId','datasets.description','datasets.upload_data_path','datasets.url_api','datasets.created_at', 'users.first_name', 'users.avatar', 'tags.tag_name','stars.stars_counter','topics.topic_name')
        ->where('topics.topic_name','=',$topic)
        ->latest()
        ->limit(25)
        ->get();
    return $topics;
});
Route::get('/data/file/{datasetId}', function ($datasetId) {
    $dataView = DB::table('datasets')
        ->join('tags', 'datasets.tag_id', '=', 'tags.id')
        ->join('users', 'datasets.user_id', '=', 'users.id')
        ->join('stars', 'stars.dataset_id', '=', 'datasets.id')
        ->join('topics', 'tags.topic_id', '=', 'topics.id')
        ->select('datasets.name','datasets.user_id','datasets.id as datasetId','datasets.description','datasets.upload_data_path','datasets.url_api','datasets.created_at', 'users.first_name', 'users.avatar', 'tags.tag_name','stars.stars_counter','topics.topic_name')
        ->where('datasets.id','=',$datasetId)
        ->first();
    return json_encode($dataView);
});
Route::get('/profile/{userId}', function ($userId) {
    $users = DB::table('datasets')
        ->join('users', 'datasets.user_id', '=', 'users.id')
        ->join('tags', 'datasets.tag_id', '=', 'tags.id')
        ->join('stars', 'stars.dataset_id', '=', 'datasets.id')
        ->join('topics', 'tags.topic_id', '=', 'topics.id')
        ->select('datasets.name','datasets.user_id','datasets.id as datasetId','datasets.description','datasets.upload_data_path','datasets.url_api','datasets.created_at', 'users.first_name', 'users.avatar', 'tags.tag_name','stars.stars_counter','topics.topic_name')
        ->where('users.id','=',$userId)
        ->latest()
        ->get();
    return $users;
});
Route::get('/profile/user/{userId}', function ($userId) {
    $users = \App\User::find($userId);
    return $users;
});
Route::get('/mydataset/{userId}', function ($userId) {
    $query = \Illuminate\Support\Facades\Input::get('myquery');
    if($query == 'all' || empty($query)) {
        $users = DB::table('datasets')
            ->join('users', 'datasets.user_id', '=', 'users.id')
            ->join('tags', 'datasets.tag_id', '=', 'tags.id')
            ->join('stars', 'stars.dataset_id', '=', 'datasets.id')
            ->join('topics', 'tags.topic_id', '=', 'topics.id')
            ->select('datasets.name', 'datasets.user_id', 'datasets.id as datasetId', 'datasets.description', 'datasets.upload_data_path', 'datasets.url_api', 'datasets.created_at', 'users.first_name', 'users.avatar', 'tags.tag_name', 'stars.stars_counter', 'topics.topic_name')
            ->where('users.id', '=', $userId)
            ->latest()
            ->limit(10)
            ->get();
    }else{
        $users = DB::table('datasets')
            ->join('users', 'datasets.user_id', '=', 'users.id')
            ->join('tags', 'datasets.tag_id', '=', 'tags.id')
            ->join('stars', 'stars.dataset_id', '=', 'datasets.id')
            ->join('topics', 'tags.topic_id', '=', 'topics.id')
            ->select('datasets.name', 'datasets.user_id', 'datasets.id as datasetId', 'datasets.description', 'datasets.upload_data_path', 'datasets.url_api', 'datasets.created_at', 'users.first_name', 'users.avatar', 'tags.tag_name', 'stars.stars_counter', 'topics.topic_name')
            ->where('datasets.name','LIKE','%'.$query.'%')
            ->where('users.id', '=', $userId)
            ->limit(10)
            ->get();
    }

    return $users;
});
Route::post('/datasets', function (Request $request) {
    return $request->all();
});
Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});
