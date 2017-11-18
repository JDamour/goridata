<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Tag extends Model
{
    protected $fillable = [
        'cat_id',  'tag_name',
    ];
    public function topic(){
        return $this->belongsTo('App\Topic');
    }
    public function dataset(){
        return $this->belongsTo('App\Dataset');
    }
}
