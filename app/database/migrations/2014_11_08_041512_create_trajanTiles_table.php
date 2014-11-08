<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateTrajanTilesTable extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::create('trajanTiles', function(Blueprint $table)
		{
			$table->increments('id');
			$table->string('action', 25);
			$table->string('color1', 25);
			$table->string('color2', 25);
			$table->integer('vp');
			$table->integer('tileTypeId');
			$table->foreign('tileTypeId')->references('typeid')->on('tileTypes');
		});
	}

	/**
	 * Reverse the migrations.
	 *
	 * @return void
	 */
	public function down()
	{
		Schema::drop('trajanTiles');
	}

}
