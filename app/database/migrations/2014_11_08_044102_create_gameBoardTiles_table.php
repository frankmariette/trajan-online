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
		Schema::create('game_board_tiles', function(Blueprint $table)
		{
			$table->increments('id');
			$table->integer('bid');
			$table->integer('tileTypeId');
			$table->foreign('bid')->references('id')->on('game_boards');
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
		Schema::drop('game_board_tiles');
	}

}
