<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreatePlayerboardsTable extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::create('playerboards', function(Blueprint $table)
		{
			$table->increments('id');
			$table->integer('userid');
			$table->foreign('userid')->references('id')->on('users');
			$table->integer('navy_bonus');
			$table->integer('forum_bonus');
			$table->integer('military_bonus');
			$table->integer('trajan_bonus');
			$table->integer('senate_bonus');
			$table->integer('construction_bonus');
		});
	}

	/**
	 * Reverse the migrations.
	 *
	 * @return void
	 */
	public function down()
	{
		Schema::drop('playerboards');
	}

}
