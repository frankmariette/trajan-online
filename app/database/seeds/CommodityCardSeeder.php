<?php

class CommodityCardSeeder extends Seeder {

  public function run(){
    DB::table('commodity_cards')->delete();
    CommodityCard::create(array(
      'types'      => 'diamonds',
      'tileTypeId' => 4
    ));
    CommodityCard::create(array(
      'types'      => 'gold',
      'tileTypeId' => 4
    ));
    CommodityCard::create(array(
      'types'      => 'fish',
      'tileTypeId' => 4
    ));
    CommodityCard::create(array(
      'types'      => 'wine',
      'tileTypeId' => 4
    ));
    CommodityCard::create(array(
      'types'      => 'pottery',
      'tileTypeId' => 4
    ));
    CommodityCard::create(array(
      'types'      => 'column',
      'tileTypeId' => 4
    ));
    CommodityCard::create(array(
      'types'      => 'wheat',
      'tileTypeId' => 4
    ));
    CommodityCard::create(array(
      'types'      => 'bearpelt',
      'tileTypeId' => 4
    ));
    CommodityCard::create(array(
      'types'      => 'cow',
      'tileTypeId' => 4
    ));
    CommodityCard::create(array(
      'types'      => 'water',
      'tileTypeId' => 4
    ));
    CommodityCard::create(array(
      'types'      => 'scroll',
      'tileTypeId' => 4
    ));
    CommodityCard::create(array(
      'types'      => 'fruit',
      'tileTypeId' => 4
    ));
  }
}
