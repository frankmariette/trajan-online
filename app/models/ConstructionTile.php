<?php

class ConstructionTile extends Eloquent {

  protected $table = 'construction_tiles';
  protected $fillable = array('vp','types','tileTypeId');
  public $timestamps = false;

}
