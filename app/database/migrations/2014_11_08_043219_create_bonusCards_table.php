<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateBonusCardsTable extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::create('bonusCards', function(Blueprint $table)
		{
			$table->increments('id');
			$table->string('gold_one', 25);
			$table->string('gold_two', 25);
			$table->integer('gold_one_vp');
			$table->integer('gold_two_vp');

			$table->string('gray_one', 25);
			$table->string('gray_two', 25);
			$table->integer('gray_one_vp');
			$table->integer('gray_two_vp');
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
		Schema::drop('bonusCards');
	}

}
