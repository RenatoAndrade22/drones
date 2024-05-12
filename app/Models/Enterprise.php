<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Enterprise extends Model
{
    use HasFactory;

    protected $table = "enterprises";

    protected $fillable = [
        'name',
        'cnpj'
    ];

    protected $appends = ['cnpj_format'];

    public function getCnpjFormatAttribute()
    {
        if($this->cnpj){
            $cnpj = $this->cnpj;
            return substr($cnpj, 0, 3) . '.' . substr($cnpj, 3, 3) . '.' . substr($cnpj, 6, 3) . '/' . substr($cnpj, 9, 4) . '-' . substr($cnpj, 13, 2);
        }

        return null;
    }

}
