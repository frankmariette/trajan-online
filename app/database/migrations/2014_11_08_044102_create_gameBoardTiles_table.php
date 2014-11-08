<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateGameBoardTilesTable extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::create('gameBoardTiles', function(Blueprint $table)
		{
			$table->integer('bid');
			$table->integer('tileTypeId');
			$table->foreign('bid')->references('id')->on('gameBoards');
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
		Schema::drop('gameBoardTiles');
	}

}
