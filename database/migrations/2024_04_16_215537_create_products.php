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
        Schema::create('products', function (Blueprint $table) {

            $table->id();
            $table->string('name');
            $table->string('serial_number')->unique()->nullable()->default(null);
            $table->string('serial_number_token')->unique()->nullable()->default(null);

            $table->unsignedBigInteger('model_id');

            $table->timestamps();

            $table->foreign('model_id')
                ->references('id')->on('models');

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
