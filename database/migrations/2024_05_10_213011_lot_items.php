<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('lot_items', function (Blueprint $table) {
            $table->id();

            $table->unsignedBigInteger('lot_id');
            $table->unsignedBigInteger('product_id');
            $table->string('serial_number_token')->unique()->nullable()->default(null);

            $table->foreign('lot_id')->references('id')->on('lots');
            $table->foreign('product_id')->references('id')->on('products');
            
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        //
    }
};
