<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Sale extends Model
{
    use HasFactory;

    protected $table = "sales";

    protected $appends = ['date_format'];

    protected $with = ['enterprise'];

    public function saleItems() : HasMany
    {
        return $this->hasMany(salesItem::class);
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
