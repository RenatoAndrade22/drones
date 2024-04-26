<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasOne;

class ModelTable extends Model
{
    use HasFactory;

    protected $table = 'models';

    protected $fillable = [
        'name',
        'serial_number',
        'year',
        'brand_id',
        'lot'
    ];

    protected $appends = ['brand_name'];

    public function brand() : BelongsTo
    {
        return $this->belongsTo(Brand::class);
    }

    public function getBrandNameAttribute()
    {
        return $this->brand->name;
    }
}
