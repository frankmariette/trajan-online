<?php

class CommodityCard extends Eloquent {

  protected $table = 'commodity_cards';
  protected $fillable = array('types', 'tileTypeId');
  public $timestamps = false;

}
