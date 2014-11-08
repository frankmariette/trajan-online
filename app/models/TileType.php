<?php

class TileType extends Eloquent {

  protected $table = 'tile_types';
  protected $fillable = array('typeid', 'types');
  public $timestamps = false;

}
