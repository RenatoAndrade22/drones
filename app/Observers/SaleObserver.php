<?php

namespace App\Observers;

use App\Models\Sale;
use Illuminate\Support\Facades\DB;

class SaleObserver
{
    /**
     * Handle the Sale "created" event.
     *
     * @param  \App\Models\Sale  $sale
     * @return void
     */
    public function created(Sale $sale)
    {

        /*
        // Obtém o próximo valor de auto-incremento da tabela
        $nextId = DB::select("SHOW TABLE STATUS LIKE 'sales'")[0]->Auto_increment;

        // Converte o valor de auto-incremento para string
        $nextIdStr = (string) $nextId;

        // Substitui todos os "13" por "14"
        $adjustedIdStr = str_replace('13', '14', $nextIdStr);

        // Converte de volta para inteiro
        $adjustedId = (int) $adjustedIdStr;

        // Se o valor ajustado for diferente do original, define o novo auto-incremento
        if ($adjustedId !== $nextId) {
            DB::statement("ALTER TABLE sales AUTO_INCREMENT = $adjustedId");
        }
        */
    }

    /**
     * Handle the Sale "updated" event.
     *
     * @param  \App\Models\Sale  $sale
     * @return void
     */
    public function updated(Sale $sale)
    {
        //
    }

    /**
     * Handle the Sale "deleted" event.
     *
     * @param  \App\Models\Sale  $sale
     * @return void
     */
    public function deleted(Sale $sale)
    {
        //
    }

    /**
     * Handle the Sale "restored" event.
     *
     * @param  \App\Models\Sale  $sale
     * @return void
     */
    public function restored(Sale $sale)
    {
        //
    }

    /**
     * Handle the Sale "force deleted" event.
     *
     * @param  \App\Models\Sale  $sale
     * @return void
     */
    public function forceDeleted(Sale $sale)
    {
        //
    }
}
