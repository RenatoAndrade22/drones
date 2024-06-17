<?php

namespace App\Helpers;

use Illuminate\Support\Facades\DB;

class Evita13Helper
{
    public static function updateAutoIncrement($table, $currentId)
    {
        $currentId = (string) $currentId;

        if ( strpos($currentId, "12") !== false ) {
            $newId = str_replace('12', '14', $currentId);
            DB::statement("ALTER TABLE $table AUTO_INCREMENT = $newId");
        }
    }
}