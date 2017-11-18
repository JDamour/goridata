<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Symfony\Component\HttpFoundation\File\UploadedFile;
class Dataset extends Model
{
    protected $fillable = [
        'name',  'description', 'user_upload_id', 'tag_id','upload_data_path',
    ];
    protected $baseDirJson = '/files/datasets';
    public function user()
    {
        return $this->belongsTo('App\User');
    }
    public function tag(){
        return $this->hasMany('App\Tag');
    }
    public function star(){
        return $this->hasMany('App\Star');
    }
    public static function jsonFile($namejson){

        return (new static)->saveJson($namejson);

    }
    public function saveJson($namejson){
        $this->$namejson=sprintf("%s-%s",time(),$namejson);
        $this->path=sprintf("%s/%s",$this->baseDirJson,$this->$namejson);
        return $this;
    }

    public  function move(UploadedFile $file){
        $file->move($this->baseDirJson,$this->namejson);
        return $this;
    }
}
