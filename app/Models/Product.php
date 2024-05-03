<?php

namespace App\Models;

use DateTime;
use finfo;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Product extends Model
{
    use HasFactory;
    
    protected $fillable = [
        'name',
        'model_id',
        'warranty_date',
        'description'
    ];

    protected $appends = ['model_name', 'brand_name', 'warranty_date_format'];

    public function model() : BelongsTo
    {
        return $this->belongsTo(ModelTable::class);
    }

    public function images() : HasMany
    {
        return $this->hasMany(Upload::class, 'item_id')->where('model', 'product');
    }

    public function getModelNameAttribute()
    {
        return $this->model->name;
    }

    public function getBrandNameAttribute()
    {
        return $this->model->brand_name;
    }

    public function getWarrantyDateFormatAttribute()
    {
        if($this->warranty_date){
            $date = DateTime::createFromFormat('Y-m-d', $this->warranty_date);
            return $date->format('d/m/Y');
        }
        return '';
    }
    
}
