<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class salesItem extends Model
{
    use HasFactory;

    protected $table = "sales_items";
    protected $with = [
        'lot_item'
    ];

    public function lot_item() : BelongsTo
    {
        return $this->belongsTo(LotItem::class);
    }
}
