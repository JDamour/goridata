<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Topic extends Model
{
    protected $fillable = [
        'topic_name',  'description',
    ];
    public function tag(){
        return $this->hasMany('App\Tag');
    }
}
