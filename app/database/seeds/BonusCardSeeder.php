<?php

class BonusCardSeeder extends Seeder {

  public function run(){
    DB::table('bonus_cards')->delete();
    BonusCard::insert(
    array(
      'gold_one'    => 'scroll',
      'gold_two'    => 'water',
      'gold_one_vp' => 3,
      'gold_two_vp' => 3,
      'gray_one'    => 'scroll',
      'gray_two'    => 'water',
      'gray_one_vp' => 2,
      'gray_two_vp' => 2,
      'tileTypeId'  => 5
    ),
    array(
      'gold_one'    => 'wine',
      'gold_two'    => 'fish',
      'gold_one_vp' => 3,
      'gold_two_vp' => 3,
      'gray_one'    => 'wine',
      'gray_two'    => 'fish',
      'gray_one_vp' => 2,
      'gray_two_vp' => 2,
      'tileTypeId'  => 5
    ),
    array(
      'gold_one'    => 'gold',
      'gold_two'    => 'diamonds',
      'gold_one_vp' => 3,
      'gold_two_vp' => 3,
      'gray_one'    => 'gold',
      'gray_two'    => 'diamonds',
      'gray_one_vp' => 2,
      'gray_two_vp' => 2,
      'tileTypeId'  => 5
    ),
    array(
      'gold_one'    => 'columns',
      'gold_two'    => 'bearpelt',
      'gold_one_vp' => 3,
      'gold_two_vp' => 3,
      'gray_one'    => 'columns',
      'gray_two'    => 'bearpelt',
      'gray_one_vp' => 2,
      'gray_two_vp' => 2,
      'tileTypeId'  => 5
    ),
    array(
      'gold_one'    => 'fruit',
      'gold_two'    => 'pottery',
      'gold_one_vp' => 3,
      'gold_two_vp' => 3,
      'gray_one'    => 'fruit',
      'gray_two'    => 'pottery',
      'gray_one_vp' => 2,
      'gray_two_vp' => 2,
      'tileTypeId'  => 5
    ),
    array(
      'gold_one'    => 'cow',
      'gold_two'    => 'wheat',
      'gold_one_vp' => 3,
      'gold_two_vp' => 3,
      'gray_one'    => 'cow',
      'gray_two'    => 'wheat',
      'gray_one_vp' => 2,
      'gray_two_vp' => 2,
      'tileTypeId'  => 5
    ),
    array(
      'gold_one'    => 'soldier',
      'gold_two'    => null,
      'gold_one_vp' => 2,
      'gold_two_vp' => null,
      'gray_one'    => 'soldier',
      'gray_two'    => null,
      'gray_one_vp' => 1,
      'gray_two_vp' => null,
      'tileTypeId'  => 5
    ),
    array(
      'gold_one'    => 'builder',
      'gold_two'    => null,
      'gold_one_vp' => 2,
      'gold_two_vp' => null,
      'gray_one'    => 'builder',
      'gray_two'    => null,
      'gray_one_vp' => 1,
      'gray_two_vp' => null,
      'tileTypeId'  => 5
    ),
    array(
      'gold_one'    => 'bonus tile',
      'gold_two'    => null,
      'gold_one_vp' => 3,
      'gold_two_vp' => null,
      'gray_one'    => 'bonus tile',
      'gray_two'    => null,
      'gray_one_vp' => 2,
      'gray_two_vp' => null,
      'tileTypeId'  => 5
    ),
    array(
      'gold_one'    => 'bread',
      'gold_two'    => null,
      'gold_one_vp' => 9,
      'gold_two_vp' => null,
      'gray_one'    => 'bread',
      'gray_two'    => null,
      'gray_one_vp' => 6,
      'gray_two_vp' => null,
      'tileTypeId'  => 5
    ),
    array(
      'gold_one'    => 'games',
      'gold_two'    => null,
      'gold_one_vp' => 9,
      'gold_two_vp' => null,
      'gray_one'    => 'games',
      'gray_two'    => null,
      'gray_one_vp' => 6,
      'gray_two_vp' => null,
      'tileTypeId'  => 5
    ),
    array(
      'gold_one'    => 'religion',
      'gold_two'    => null,
      'gold_one_vp' => 9,
      'gold_two_vp' => null,
      'gray_one'    => 'religion',
      'gray_two'    => null,
      'gray_one_vp' => 6,
      'gray_two_vp' => null,
      'tileTypeId'  => 5
    ));
  }
}
