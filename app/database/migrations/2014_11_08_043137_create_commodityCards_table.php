<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateCommodityCardsTable extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::create('commodity_cards', function(Blueprint $table)
		{
			$table->increments('id');
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
		Schema::drop('commodity_cards');
	}

}
