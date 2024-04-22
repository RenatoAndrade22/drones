<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Product extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'model_id'
    ];

    protected $appends = ['model_name', 'brand_name'];

    public function model() : BelongsTo
    {
        return $this->belongsTo(ModelTable::class);
    }

    public function getModelNameAttribute()
    {
        return $this->model->name;
    }

    public function getBrandNameAttribute()
    {
        return $this->model->brand_name;
    }
    
}
