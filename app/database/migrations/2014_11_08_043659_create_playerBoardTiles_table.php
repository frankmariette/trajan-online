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
		Schema::create('player_board_tiles', function(Blueprint $table)
		{
			$table->increments('id');
			$table->integer('userid');
			$table->integer('tileTypeId');
			$table->foreign('userid')->references('id')->on('users');
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
		Schema::drop('player_board_tiles');
	}

}
