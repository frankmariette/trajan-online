<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateConstructionTilesTable extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::create('construction_tiles', function(Blueprint $table)
		{
			$table->increments('id');
			$table->integer('vp');
			$table->string('types', 50);
			$table->integer('tileTypeId');
			$table->foreign('tileTypeId')->references('typeid')->on('tile_types');
		});
	}

	/**
	 * Reverse the migrations.
	 *
	 * @return void
	 */
	public function down()
	{
		Schema::drop('construction_tiles');
	}

}
