<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreatePlayerBoardTilesTable extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::create('playerBoardTiles', function(Blueprint $table)
		{
			$table->integer('userid');
			$table->integer('tileTypeId');
			$table->foreign('userid')->references('id')->on('users');
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
		Schema::drop('playerBoardTiles');
	}

}
