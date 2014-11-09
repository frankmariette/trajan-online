<?php

class TrajanTileSeeder extends Seeder {

  public function run(){
    DB::table('trajan_tiles')->delete();
    TrajanTile::create(array(
      'action'     => 'move 1 to construction',
      'color1'     => 'blue',
      'color2'     => 'green',
      'vp'         => 5,
      'tileTypeId' => 1
    ));
    TrajanTile::create(array(
      'action'     => 'move 1 to construction',
      'color1'     => 'green',
      'color2'     => 'orange',
      'vp'         => 5,
      'tileTypeId' => 1
    ));
    TrajanTile::create(array(
      'action'     => 'move 2 to construction',
      'color1'     => 'blue',
      'color2'     => 'yellow',
      'vp'         => 2,
      'tileTypeId' => 1
    ));
    TrajanTile::create(array(
      'action'     => 'move 1 to military',
      'color1'     => 'blue',
      'color2'     => 'blue',
      'vp'         => 5,
      'tileTypeId' => 1
    ));
    TrajanTile::create(array(
      'action'     => 'move 2 to military',
      'color1'     => 'white',
      'color2'     => 'yellow',
      'vp'         => 2,
      'tileTypeId' => 1
    ));
    TrajanTile::create(array(
      'action'     => 'move 2 to construction',
      'color1'     => 'orange',
      'color2'     => 'orange',
      'vp'         => 2,
      'tileTypeId' => 1
    ));
    TrajanTile::create(array(
      'action'     => 'move 2 to construction',
      'color1'     => 'orange',
      'color2'     => 'yellow',
      'vp'         => 2,
      'tileTypeId' => 1
    ));
    TrajanTile::create(array(
      'action'     => 'move 1 to military',
      'color1'     => 'yellow',
      'color2'     => 'blue',
      'vp'         => 5,
      'tileTypeId' => 1
    ));
    TrajanTile::create(array(
      'action'     => 'move 1 to construction',
      'color1'     => 'yellow',
      'color2'     => 'orange',
      'vp'         => 5,
      'tileTypeId' => 1
    ));
    TrajanTile::create(array(
      'action'     => 'move 1 to military',
      'color1'     => 'white',
      'color2'     => 'blue',
      'vp'         => 5,
      'tileTypeId' => 1
    ));
    TrajanTile::create(array(
      'action'     => 'move 1 to construction',
      'color1'     => 'white',
      'color2'     => 'orange',
      'vp'         => 5,
      'tileTypeId' => 1
    ));
    TrajanTile::create(array(
      'action'     => 'move 1 to military',
      'color1'     => 'green',
      'color2'     => 'blue',
      'vp'         => 5,
      'tileTypeId' => 1
    ));
    TrajanTile::create(array(
      'action'     => 'move 1 to military',
      'color1'     => 'pink',
      'color2'     => 'blue',
      'vp'         => 5,
      'tileTypeId' => 1
    ));
    TrajanTile::create(array(
      'action'     => 'move 1 to construction',
      'color1'     => 'pink',
      'color2'     => 'orange',
      'vp'         => 5,
      'tileTypeId' => 1
    ));
    TrajanTile::create(array(
      'action'     => 'move 2 to construction',
      'color1'     => 'yellow',
      'color2'     => 'yellow',
      'vp'         => 2,
      'tileTypeId' => 1
    ));
    TrajanTile::create(array(
      'action'     => 'move 2 to military',
      'color1'     => 'orange',
      'color2'     => 'blue',
      'vp'         => 2,
      'tileTypeId' => 1
    ));
    TrajanTile::create(array(
      'action'     => 'move 2 to military',
      'color1'     => 'green',
      'color2'     => 'yellow',
      'vp'         => 2,
      'tileTypeId' => 1
    ));
    TrajanTile::create(array(
      'action'     => 'move 2 to military',
      'color1'     => 'pink',
      'color2'     => 'yellow',
      'vp'         => 2,
      'tileTypeId' => 1
    ));
    TrajanTile::create(array(
      'action'     => 'food demand',
      'color1'     => 'pink',
      'color2'     => 'pink',
      'vp'         => 1,
      'tileTypeId' => 1
    ));
    TrajanTile::create(array(
      'action'     => 'games demand',
      'color1'     => 'pink',
      'color2'     => 'green',
      'vp'         => 1,
      'tileTypeId' => 1
    ));
    TrajanTile::create(array(
      'action'     => 'bread demand',
      'color1'     => 'orange',
      'color2'     => 'green',
      'vp'         => 1,
      'tileTypeId' => 1
    ));
    TrajanTile::create(array(
      'action'     => 'religion demand',
      'color1'     => 'white',
      'color2'     => 'green',
      'vp'         => 1,
      'tileTypeId' => 1
    ));
    TrajanTile::create(array(
      'action'     => 'religion demand',
      'color1'     => 'blue',
      'color2'     => 'orange',
      'vp'         => 1,
      'tileTypeId' => 1
    ));
    TrajanTile::create(array(
      'action'     => 'games demand',
      'color1'     => 'green',
      'color2'     => 'green',
      'vp'         => 1,
      'tileTypeId' => 1
    ));
    TrajanTile::create(array(
      'action'     => 'bread demand',
      'color1'     => 'green',
      'color2'     => 'green',
      'vp'         => 1,
      'tileTypeId' => 1
    ));
    TrajanTile::create(array(
      'action'     => 'religion demand',
      'color1'     => 'white',
      'color2'     => 'white',
      'vp'         => 1,
      'tileTypeId' => 1
    ));
    TrajanTile::create(array(
      'action'     => 'draw 2 cards',
      'color1'     => 'white',
      'color2'     => 'blue',
      'vp'         => 3,
      'tileTypeId' => 1
    ));
    TrajanTile::create(array(
      'action'     => 'draw 2 cards',
      'color1'     => 'yellow',
      'color2'     => 'yellow',
      'vp'         => 3,
      'tileTypeId' => 1
    ));
    TrajanTile::create(array(
      'action'     => 'games demand',
      'color1'     => 'yellow',
      'color2'     => 'green',
      'vp'         => 1,
      'tileTypeId' => 1
    ));
    TrajanTile::create(array(
      'action'     => 'draw 2 cards',
      'color1'     => 'green',
      'color2'     => 'pink',
      'vp'         => 3,
      'tileTypeId' => 1
    ));
    TrajanTile::create(array(
      'action'     => 'draw 2 cards',
      'color1'     => 'blue',
      'color2'     => 'orange',
      'vp'         => 3,
      'tileTypeId' => 1
    ));
    TrajanTile::create(array(
      'action'     => 'draw 2 cards',
      'color1'     => 'orange',
      'color2'     => 'yellow',
      'vp'         => 3,
      'tileTypeId' => 1
    ));
    TrajanTile::create(array(
      'action'     => 'draw 2 cards',
      'color1'     => 'pink',
      'color2'     => 'white',
      'vp'         => 3,
      'tileTypeId' => 1
    ));
    TrajanTile::create(array(
      'action'     => 'draw 2 cards',
      'color1'     => 'yellow',
      'color2'     => 'green',
      'vp'         => 3,
      'tileTypeId' => 1
    ));
    TrajanTile::create(array(
      'action'     => 'draw 2 cards',
      'color1'     => 'blue',
      'color2'     => 'blue',
      'vp'         => 3,
      'tileTypeId' => 1
    ));
    TrajanTile::create(array(
      'action'     => 'draw 2 cards',
      'color1'     => 'orange',
      'color2'     => 'orange',
      'vp'         => 3,
      'tileTypeId' => 1
    ));
    TrajanTile::create(array(
      'action'     => 'plus 2 marker',
      'color1'     => 'orange',
      'color2'     => 'pink',
      'vp'         => 4,
      'tileTypeId' => 1
    ));
    TrajanTile::create(array(
      'action'     => 'plus 2 marker',
      'color1'     => 'blue',
      'color2'     => 'pink',
      'vp'         => 4,
      'tileTypeId' => 1
    ));
    TrajanTile::create(array(
      'action'     => 'plus 2 marker',
      'color1'     => 'green',
      'color2'     => 'pink',
      'vp'         => 4,
      'tileTypeId' => 1
    ));
    TrajanTile::create(array(
      'action'     => 'plus 2 marker',
      'color1'     => 'green',
      'color2'     => 'white',
      'vp'         => 4,
      'tileTypeId' => 1
    ));
    TrajanTile::create(array(
      'action'     => 'plus 2 marker',
      'color1'     => 'yellow',
      'color2'     => 'pink',
      'vp'         => 4,
      'tileTypeId' => 1
    ));
    TrajanTile::create(array(
      'action'     => 'plus 2 marker',
      'color1'     => 'white',
      'color2'     => 'white',
      'vp'         => 4,
      'tileTypeId' => 1
    ));
    TrajanTile::create(array(
      'action'     => 'plus 2 marker',
      'color1'     => 'pink',
      'color2'     => 'pink',
      'vp'         => 4,
      'tileTypeId' => 1
    ));
    TrajanTile::create(array(
      'action'     => 'plus 2 marker',
      'color1'     => 'white',
      'color2'     => 'pink',
      'vp'         => 4,
      'tileTypeId' => 1
    ));
    TrajanTile::create(array(
      'action'     => 'plus 2 marker',
      'color1'     => 'pink',
      'color2'     => 'white',
      'vp'         => 4,
      'tileTypeId' => 1
    ));
    TrajanTile::create(array(
      'action'     => 'none',
      'color1'     => 'white',
      'color2'     => 'white',
      'vp'         => 9,
      'tileTypeId' => 1
    ));
    TrajanTile::create(array(
      'action'     => 'none',
      'color1'     => 'blue',
      'color2'     => 'white',
      'vp'         => 9,
      'tileTypeId' => 1
    ));
    TrajanTile::create(array(
      'action'     => 'none',
      'color1'     => 'orange',
      'color2'     => 'orange',
      'vp'         => 9,
      'tileTypeId' => 1
    ));
    TrajanTile::create(array(
      'action'     => 'none',
      'color1'     => 'yellow',
      'color2'     => 'white',
      'vp'         => 9,
      'tileTypeId' => 1
    ));
    TrajanTile::create(array(
      'action'     => 'none',
      'color1'     => 'yellow',
      'color2'     => 'yellow',
      'vp'         => 9,
      'tileTypeId' => 1
    ));
    TrajanTile::create(array(
      'action'     => 'none',
      'color1'     => 'pink',
      'color2'     => 'pink',
      'vp'         => 9,
      'tileTypeId' => 1
    ));
    TrajanTile::create(array(
      'action'     => 'none',
      'color1'     => 'green',
      'color2'     => 'green',
      'vp'         => 9,
      'tileTypeId' => 1
    ));
    TrajanTile::create(array(
      'action'     => 'none',
      'color1'     => 'orange',
      'color2'     => 'white',
      'vp'         => 9,
      'tileTypeId' => 1
    ));
    TrajanTile::create(array(
      'action'     => 'none',
      'color1'     => 'blue',
      'color2'     => 'blue',
      'vp'         => 9,
      'tileTypeId' => 1
    ));
  }
}
