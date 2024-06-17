<?php

namespace App\Models;

use DateTime;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasOne;

class LotItem extends Model
{
    use HasFactory;

    protected $table = "lot_items";

    protected $appends = ['date_format'];

    protected $with = [
        'product'
    ];

    public function lot() : BelongsTo
    {
        return $this->belongsTo(Lot::class);
    }

    public function product() : BelongsTo
    {
        return $this->belongsTo(Product::class);
    }

    public function sale() : HasOne
    {
        return $this->hasOne(SalesItem::class);
    }

    public function getDateFormatAttribute()
    {

        $lot = $this->lot()->first();

        if(isset($lot->created_at) && $lot->created_at){
            // Fazendo parsing da data
            $data = strtotime($lot->created_at);

            // Formatando a data
            $dataFormatada = date("d/m/Y", $data);


            return $dataFormatada;

        }
        
        return null;
    }

}
