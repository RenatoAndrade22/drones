<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Sale extends Model
{
    use HasFactory;

    protected $table = "sales";

    protected $appends = ['date_format'];

    protected $with = ['enterprise'];

    public function lot_item() : BelongsTo
    {
        return $this->belongsTo(LotItem::class);
    }

    public function enterprise() : BelongsTo
    {
        return $this->belongsTo(Enterprise::class);
    }

    public function getDateFormatAttribute()
    {

        // Fazendo parsing da data
        $data = strtotime($this->created_at);

        // Formatando a data
        $dataFormatada = date("d/m/Y", $data);
        
        return $dataFormatada;

    }
}
