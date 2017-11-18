<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Star extends Model
{
    protected $fillable = [
        'stars_counter',  'datasets_id',
    ];
    public function dataset(){
        return $this->belongsTo('App\Dataset');
    }
}
