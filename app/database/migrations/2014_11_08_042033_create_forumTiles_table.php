<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateForumTilesTable extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::create('forum_tiles', function(Blueprint $table)
		{
			$table->increments('id');
			$table->string('action', 50);
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
		Schema::drop('forum_tiles');
	}

}
