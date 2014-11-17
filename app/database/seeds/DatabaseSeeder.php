<?php

class DatabaseSeeder extends Seeder {

	/**
	 * Run the database seeds.
	 *
	 * @return void
	 */
	public function run()
	{
		Eloquent::unguard();

		// $this->call('UserTableSeeder');
		$this->call('TileTypeSeeder');
		$this->call('BonusCardSeeder');
		$this->call('CommodityCardSeeder');
		$this->call('ConstructionTileSeeder');
		$this->call('ForumTileSeeder');
		$this->call('TrajanTileSeeder');

	}

}
