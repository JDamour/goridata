<?php

namespace App\Http\Controllers;

use App\Dataset;
use App\Star;
use App\Tag;
use App\Topic;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Input;
use Illuminate\Support\Facades\Route;
use JavaScript;
use Session;
use Symfony\Component\HttpFoundation\File\UploadedFile;

class HomeController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('auth');
    }

    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $user = \Auth::user();
        JavaScript::put([
            'first_name' => $user->first_name,
            'avatar' => $user->avatar,
            'User_id' => $user->id
        ]);

        return view('home');
    }
    public function star($id)
    {
        $star=Star::where('dataset_id','=',$id)->first();
        $star->stars_counter=$star->stars_counter+1;
        $star->save();
        return redirect()->back();
    }

    public function create(){
        $user = \Auth::user();
        JavaScript::put([
            'first_name' => $user->first_name,
            'avatar' => $user->avatar,
            'User_id' => $user->id
        ]);
        $topics=Topic::all();
        return view('create',compact('topics'));
    }
    public function store(Request $request){
        $this->validate($request,[
                'data_name' => 'required|string',
                'topic' => 'required',
                'description' => 'required',
                'dataset_type' => 'required',
            ]
        );

        $fileapi='';
        $urlapi='';
        if ($request->hasFile('dataset_type')) {
            $this->validate($request, [
                // check validtion for image or file dd(Input::all());
//                'dataset_type' => 'required|file|mimes:application/json'
                'dataset_type' => 'required|mimes:json,txt'
            ]);
            $getimageName = time().'.'.$request->dataset_type->getClientOriginalExtension();
             $request->dataset_type->move(public_path('files/datasets'), $getimageName);
            $fileapi ='/files/datasets/'.$getimageName;
        }else{
            $urlapi =$request->input('dataset_type');
        }
        $tag=new Tag();
        $tag->topic_id=$request->input('topic');
        if(!empty($request->input('tagname'))){
            $tag->tag_name=$request->input('tagname');
        }else{
            $tag->tag_name=$request->input('tagname');
        }
        $tag->save();
        $tagId =$tag->id;
        $dataset =new Dataset();
        $dataset->name=$request->input('data_name');
        $dataset->description=$request->input('description');
        $dataset->user_id=\Auth::user()->id;
        $dataset->tag_id=$tagId;
        $dataset->upload_data_path=$fileapi;
        $dataset->url_api=$urlapi;
        $dataset->save();
        $datasetId =$dataset->id;
        $star =new Star();
        $star->stars_counter=0;
        $star->dataset_id=$datasetId;
        $star->save();
        Session::flash('message', ' Dataset has been submit successful.');
        return redirect()->back();
    }
    public function makeJson(UploadedFile $file){
        return Dataset::jsonFile($file->getClientOriginalName())
            ->move($file);
    }

}
