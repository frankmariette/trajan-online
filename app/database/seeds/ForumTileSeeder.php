<?php

class ForumTileSeeder extends Seeder {

  public function run(){
    DB::table('forum_tiles')->delete();
    ForumTile::create(array(
      'action'     => 'scroll',
      'tileTypeId' => 2
    ));
    ForumTile::create(array(
      'action'     => 'fruit',
      'tileTypeId' => 2
    ));
    ForumTile::create(array(
      'action'     => 'religion',
      'tileTypeId' => 2
    ));
    ForumTile::create(array(
      'action'     => 'games',
      'tileTypeId' => 2
    ));
    ForumTile::create(array(
      'action'     => 'bread',
      'tileTypeId' => 2
    ));
    ForumTile::create(array(
      'action'     => 'construction',
      'tileTypeId' => 2
    ));
    ForumTile::create(array(
      'action'     => 'seaport',
      'tileTypeId' => 2
    ));
    ForumTile::create(array(
      'action'     => 'senate',
      'tileTypeId' => 2
    ));
    ForumTile::create(array(
      'action'     => 'trajan',
      'tileTypeId' => 2
    ));
    ForumTile::create(array(
      'action'     => 'military',
      'tileTypeId' => 2
    ));
    ForumTile::create(array(
      'action'     => 'forum',
      'tileTypeId' => 2
    ));
    ForumTile::create(array(
      'action'     => '3 votes',
      'tileTypeId' => 2
    ));
    ForumTile::create(array(
      'action'     => '2 votes',
      'tileTypeId' => 2
    ));
    ForumTile::create(array(
      'action'     => '4 votes',
      'tileTypeId' => 2
    ));
    ForumTile::create(array(
      'action'     => '5 votes',
      'tileTypeId' => 2
    ));
    ForumTile::create(array(
      'action'     => 'construction wildcard',
      'tileTypeId' => 2
    ));
    ForumTile::create(array(
      'action'     => 'demand wildcard',
      'tileTypeId' => 2
    ));
    ForumTile::create(array(
      'action'     => 'commodity wildcard',
      'tileTypeId' => 2
    ));
    ForumTile::create(array(
      'action'     => 'bonus action wildcard',
      'tileTypeId' => 2
    ));
  }
}
