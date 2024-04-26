<?php

namespace App\Models;

use DateTime;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Product extends Model
{
    use HasFactory;
 
    
    protected $fillable = [
        'name',
        'model_id',
        'warranty_date'
    ];

    protected $appends = ['model_name', 'brand_name', 'warranty_date_format'];

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

    public function getWarrantyDateFormatAttribute()
    {
        if($this->warranty_date){
            $date = DateTime::createFromFormat('Y-m-d', $this->warranty_date);
            return $date->format('d/m/Y');
        }
        return '';
    }
    
}
