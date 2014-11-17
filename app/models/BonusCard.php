<?php

class BonusCard extends Eloquent {
  protected $table = 'bonus_cards';
  protected $fillable = array(
    'gold_one',
    'gold_two',
    'gold_one_vp',
    'gold_two_vp',
    'gray_one',
    'gray_two',
    'gray_one_vp',
    'gray_two_vp',
    'tileTypeId'
  );
  public $timestamps = false;
}
