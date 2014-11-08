<?php

class ConstructionTileSeeder extends Seeder {

  public function run(){
    DB::table('construction_tiles')->delete();
    ConstructionTile::create(array(
      'vp'         => 2,
      'types'      => 'fountain',
      'tileTypeId' => 3
    ));
    ConstructionTile::create(array(
      'vp'         => 3,
      'types'      => 'fountain',
      'tileTypeId' => 3
    ));
    ConstructionTile::create(array(
      'vp'         => 4,
      'types'      => 'fountain',
      'tileTypeId' => 3
    ));
    ConstructionTile::create(array(
      'vp'         => 5,
      'types'      => 'fountain',
      'tileTypeId' => 3
    ));
    ConstructionTile::create(array(
      'vp'         => 2,
      'types'      => 'stairs',
      'tileTypeId' => 3
    ));
    ConstructionTile::create(array(
      'vp'         => 3,
      'types'      => 'stairs',
      'tileTypeId' => 3
    ));
    ConstructionTile::create(array(
      'vp'         => 4,
      'types'      => 'stairs',
      'tileTypeId' => 3
    ));
    ConstructionTile::create(array(
      'vp'         => 5,
      'types'      => 'stairs',
      'tileTypeId' => 3
    ));
    ConstructionTile::create(array(
      'vp'         => 2,
      'types'      => 'window',
      'tileTypeId' => 3
    ));
    ConstructionTile::create(array(
      'vp'         => 3,
      'types'      => 'window',
      'tileTypeId' => 3
    ));
    ConstructionTile::create(array(
      'vp'         => 4,
      'types'      => 'window',
      'tileTypeId' => 3
    ));
    ConstructionTile::create(array(
      'vp'         => 5,
      'types'      => 'window',
      'tileTypeId' => 3
    ));
    ConstructionTile::create(array(
      'vp'         => 2,
      'types'      => 'door',
      'tileTypeId' => 3
    ));
    ConstructionTile::create(array(
      'vp'         => 3,
      'types'      => 'door',
      'tileTypeId' => 3
    ));
    ConstructionTile::create(array(
      'vp'         => 4,
      'types'      => 'door',
      'tileTypeId' => 3
    ));
    ConstructionTile::create(array(
      'vp'         => 5,
      'types'      => 'door',
      'tileTypeId' => 3
    ));
    ConstructionTile::create(array(
      'vp'         => 2,
      'types'      => 'roof',
      'tileTypeId' => 3
    ));
    ConstructionTile::create(array(
      'vp'         => 3,
      'types'      => 'roof',
      'tileTypeId' => 3
    ));
    ConstructionTile::create(array(
      'vp'         => 4,
      'types'      => 'roof',
      'tileTypeId' => 3
    ));
    ConstructionTile::create(array(
      'vp'         => 5,
      'types'      => 'roof',
      'tileTypeId' => 3
    ));
  }
}
