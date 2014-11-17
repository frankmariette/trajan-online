<?php

  class TileTypeSeeder extends Seeder {
      public function run(){
          DB::table('tile_types')->delete();
          TileType::create(array(
            'typeid' => 1,
            'types'  => 'Trajan'
          ));
          TileType::create(array(
            'typeid' => 2,
            'types'  => 'Forum'
          ));
          TileType::create(array(
            'typeid' => 3,
            'types'  => 'Construction'
          ));
          TileType::create(array(
            'typeid' => 4,
            'types'  => 'CommodityCard'
          ));
          TileType::create(array(
            'typeid' => 5,
            'types'  => 'BonusCards'
          ));
      }
  }
