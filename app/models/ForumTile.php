<?php

class ForumTile extends Eloquent {

  protected $table = 'forum_tiles';
  protected $fillable = array('action', 'tileTypeId');
  public $timestamps = false;

}
