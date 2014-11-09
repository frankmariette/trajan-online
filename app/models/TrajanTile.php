<?php

class TrajanTile extends Eloquent {

  protected $table = 'trajan_tiles';
  protected $fillable = array(
    'action', 'color1', 'color2', 'vp', 'tileTypeId'
  );
  public $timestamps = false;


}
