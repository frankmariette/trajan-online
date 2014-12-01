function Game(){

	// Attribrutes for the game to manage
	this.players = [];
	this.turn = 0;
	this.quarter = 0;
	this.pause = false;

	this.cTiles; 
	this.tTiles; 
	this.bTiles; 
	this.mTiles; 
	this.fTiles; 
	this.aMarks; 
	this.pMarks; 
	this.littlePeople; 
	this.tray1; 
	this.tray2; 
	this.tray3; 
	this.tray4; 
	this.tray5; 
	this.tray6; 
	this.text; 
	this.ships; 
	this.trajan; 
	this.leader; 
	this.card;
	this.senate_spaces = [];

	// Phaser bootstrapping
	this.phaser = new Phaser.Game(1600, 1800, Phaser.AUTO, 'gameboard', {preload: this.phaserPreload, create: this.phaserCreate, update: this.phaserUpdate});
}


Game.prototype.phaserPreload = function() {
	// Trajan Tiles
	G.phaser.load.image('gameBoard', '/assets/gameBoardFinal.png');
    G.phaser.load.image('playerBoard', '/assets/pBoard.png');
    G.phaser.load.image('tile', '/assets/cDoorTile.png');
    G.phaser.load.image('card', '/assets/cCardWheat.png');
    G.phaser.load.image('tt_VP_yellow_white', '/assets/tTile00.png');
    G.phaser.load.image('tt_move_two_military_yellow_white', '/assets/tTile01.png');
    G.phaser.load.image('tt_move_military_green_blue', '/assets/tTile02.png');
    G.phaser.load.image('tt_move_two_military_yellow_white', '/assets/tTile03.png');
    G.phaser.load.image('tt_VP_yellow_yellow', '/assets/tTile04.png');
    G.phaser.load.image('tt_plus_two_pink_white', '/assets/tTile05.png');
    G.phaser.load.image('tt_move_construct_green_orange', '/assets/tTile06.png');
    G.phaser.load.image('tt_bread_pink_pink', '/assets/tTile07.png');
    G.phaser.load.image('tt_religion_white_white', '/assets/tTile09.png');
    G.phaser.load.image('tt_games_green_green', '/assets/tTile10.png');
    G.phaser.load.image('tt_two_cards_yellow_yellow', '/assets/tTile11.png');
    G.phaser.load.image('tt_two_cards_yellow_green', '/assets/tTile12.png');
    G.phaser.load.image('tt_two_cards_pink_green', '/assets/tTile13.png');
    G.phaser.load.image('tt_religion_white_green', '/assets/tTile14.png');
    G.phaser.load.image('tt_plus_two_pink_yellow', '/assets/tTile16.png');
    G.phaser.load.image('tt_plus_two_white_white', '/assets/tTile17.png');
    G.phaser.load.image('tt_move_military_blue_blue', '/assets/tTile18.png');
    G.phaser.load.image('tt_plus_two_pink_pink', '/assets/tTile19.png');
    G.phaser.load.image('tt_two_cards_blue_orange', '/assets/tTile20.png');
    G.phaser.load.image('tt_move_construct_yellow_orange', '/assets/tTile21.png');
    G.phaser.load.image('tt_two_cards_pink_white', '/assets/tTile22.png');
    G.phaser.load.image('tt_two_cards_orange_orange', '/assets/tTile23.png');
    G.phaser.load.image('tt_move_military_yellow_blue', '/assets/tTile24.png');
    G.phaser.load.image('tt_move_construct_green_blue', '/assets/tTile25.png');
    G.phaser.load.image('tt_move_two_military_yellow_pink', '/assets/tTile26.png');
    G.phaser.load.image('tt_plus_two_orange_pink', '/assets/tTile27.png');
    G.phaser.load.image('tt_move_construct_pink_orange', '/assets/tTile28.png');
    G.phaser.load.image('tt_VP_white_white', '/assets/tTile29.png');
    G.phaser.load.image('tt_bread_green_green', '/assets/tTile30.png');
    G.phaser.load.image('tt_move_two_construct_yellow_yellow', '/assets/tTile31.png');
    G.phaser.load.image('tt_two_cards_yellow_orange', '/assets/tTile32.png');
    G.phaser.load.image('tt_religion_blue_orange', '/assets/tTile33.png');
    G.phaser.load.image('tt_two_cards_blue_blue', '/assets/tTile34.png');
    G.phaser.load.image('tt_move_two_construct_orange_yellow', '/assets/tTile35.png');
    G.phaser.load.image('tt_games_pink_green', '/assets/tTile36.png');
    G.phaser.load.image('tt_move_two_military_orange_blue', '/assets/tTile37.png');
    G.phaser.load.image('tt_two_cards_blue_white', '/assets/tTile38.png');
    G.phaser.load.image('tt_VP_orange_white', '/assets/tTile39.png');
    G.phaser.load.image('tt_move_two_construct_blue_yellow', '/assets/tTile40.png');
    G.phaser.load.image('tt_plus_two_green_pink', '/assets/tTile41.png');
    G.phaser.load.image('tt_VP_orange_orange', '/assets/tTile42.png');
    G.phaser.load.image('tt_games_yellow_green', '/assets/tTile43.png');
    G.phaser.load.image('tt_bread_orange_green', '/assets/tTile44.png');
    G.phaser.load.image('tt_plus_two_blue_pink', '/assets/tTile45.png');
    G.phaser.load.image('tt_VP_blue_white', '/assets/tTile46.png');
    G.phaser.load.image('tt_move_two_construct_orange_orange', '/assets/tTile47.png');
    G.phaser.load.image('tt_plus_two_green_white', '/assets/tTile48.png');
    G.phaser.load.image('tt_move_construct_white_orange', '/assets/tTile49.png');
    G.phaser.load.image('tt_plus_two_pink_white', '/assets/tTile50.png');
    G.phaser.load.image('tt_VP_pink_pink', '/assets/tTile51.png');
    
    // Other random shitakis
    G.phaser.load.image('forum', '/assets/fTileGame.png');
    G.phaser.load.spritesheet('bonus', '/assets/bonus00.png', 100, 156);
    G.phaser.load.spritesheet('bonus2', '/assets/bonus01.png', 100, 156);
    G.phaser.load.spritesheet('ship1', '/assets/ship01.png', 174, 116);
    G.phaser.load.image('actionMarkO', '/assets/actionMarkerOrange.png');
    G.phaser.load.image('actionMarkG', '/assets/actionMarkerGreen.png');
    G.phaser.load.image('actionMarkP', '/assets/actionMarkerPink.png');
    G.phaser.load.image('actionMarkB', '/assets/actionMarkerBlue.png');
    G.phaser.load.image('actionMarkW', '/assets/actionMarkerWhite.png');
    G.phaser.load.image('actionMarkY', '/assets/actionMarkerYellow.png');
    G.phaser.load.image('tArch', '/assets/tArch.png');
    G.phaser.load.image('playerMark', '/assets/playerMarkGreen.png');
    G.phaser.load.image('bigTree', '/assets/bigTree.png');
}

Game.prototype.phaserCreate = function() {
	this.senate_spaces = [
	    new Phaser.Circle(300, G.phaser.world.height-680, 175),
	    new Phaser.Circle(393, G.phaser.world.height-680, 25),
	    new Phaser.Circle(456, G.phaser.world.height-680, 25),
	    new Phaser.Circle(522, G.phaser.world.height-680, 25),
	    new Phaser.Circle(585, G.phaser.world.height-680, 25),
	    new Phaser.Circle(649, G.phaser.world.height-680, 25),
	    new Phaser.Circle(715, G.phaser.world.height-680, 25),
	    new Phaser.Circle(778, G.phaser.world.height-680, 25)
	];
  var background = G.phaser.add.sprite(150, 0, 'gameBoard');

  var player = G.phaser.add.sprite(275, G.phaser.world.height-500, 'playerBoard');
  graphics = G.phaser.add.graphics(0, 0);

  text = G.phaser.add.text(350, G.phaser.world.height - 550, '', {fill : '#ffffff'});

  this.cTiles = G.phaser.add.group();


  var cTile0 = this.cTiles.create(710, G.phaser.world.height - 1395, 'tile');
  var cTile1 = this.cTiles.create(790, G.phaser.world.height - 1395, 'tile');
  var cTile2 = this.cTiles.create(865, G.phaser.world.height - 1395, 'tile');
  var cTile3 = this.cTiles.create(945, G.phaser.world.height - 1395, 'tile');
  var cTile4 = this.cTiles.create(1020, G.phaser.world.height - 1395, 'tile');
  var cTile5 = this.cTiles.create(710, G.phaser.world.height - 1318, 'tile');
  var cTile6 = this.cTiles.create(790, G.phaser.world.height - 1318, 'tile');
  var cTile7 = this.cTiles.create(865, G.phaser.world.height - 1318, 'tile');
  var cTile8 = this.cTiles.create(945, G.phaser.world.height - 1318, 'tile');
  var cTile9 = this.cTiles.create(1020, G.phaser.world.height - 1318, 'tile');
  var cTile10 = this.cTiles.create(710, G.phaser.world.height - 1241, 'tile');
  var cTile11 = this.cTiles.create(790, G.phaser.world.height - 1241, 'tile');
  var cTile12 = this.cTiles.create(865, G.phaser.world.height - 1241, 'tile');
  var cTile13 = this.cTiles.create(945, G.phaser.world.height - 1241, 'tile');
  var cTile14 = this.cTiles.create(1020, G.phaser.world.height - 1241, 'tile');
  var cTile15 = this.cTiles.create(710, G.phaser.world.height - 1166, 'tile');
  var cTile16 = this.cTiles.create(790, G.phaser.world.height - 1166, 'tile');
  var cTile17 = this.cTiles.create(865, G.phaser.world.height - 1166, 'tile');
  var cTile18 = this.cTiles.create(945, G.phaser.world.height - 1166, 'tile');
  var cTile19 = this.cTiles.create(1020, G.phaser.world.height - 1166, 'tile');

  this.tTiles = G.phaser.add.group();

  var tTile0 = this.tTiles.create(253, G.phaser.world.height - 1058, 'tt_VP_yellow_white');
  var tTile1 = this.tTiles.create(422, G.phaser.world.height - 1058, 'tt_two_cards_pink_green');
  var tTile2 = this.tTiles.create(253, G.phaser.world.height - 958, 'tt_two_cards_blue_orange');
  var tTile3 = this.tTiles.create(422, G.phaser.world.height - 958, 'tt_move_military_blue_blue');
  var tTile4 = this.tTiles.create(253, G.phaser.world.height - 858, 'tt_plus_two_pink_white');
  var tTile5 = this.tTiles.create(422, G.phaser.world.height - 858, 'tt_VP_orange_white');

  this.fTiles = G.phaser.add.group();

  var fTile0 = this.fTiles.create(708, G.phaser.world.height - 1035, 'forum');
  var fTile1 = this.fTiles.create(778, G.phaser.world.height - 1035, 'forum');
  var fTile2 = this.fTiles.create(843, G.phaser.world.height - 1035, 'forum');
  var fTile3 = this.fTiles.create(910, G.phaser.world.height - 1035, 'forum');
  var fTile4 = this.fTiles.create(977, G.phaser.world.height - 1035, 'forum');
  var fTile5 = this.fTiles.create(708, G.phaser.world.height - 968, 'forum');
  var fTile6 = this.fTiles.create(778, G.phaser.world.height - 968, 'forum');
  var fTile7 = this.fTiles.create(843, G.phaser.world.height - 968, 'forum');
  var fTile8 = this.fTiles.create(910, G.phaser.world.height - 968, 'forum');
  var fTile9 = this.fTiles.create(977, G.phaser.world.height - 968, 'forum');
  var fTile10 = this.fTiles.create(708, G.phaser.world.height - 901, 'forum');
  var fTile11 = this.fTiles.create(778, G.phaser.world.height - 901, 'forum');
  var fTile12 = this.fTiles.create(843, G.phaser.world.height - 901, 'forum');
  var fTile13 = this.fTiles.create(910, G.phaser.world.height - 901, 'forum');
  var fTile14 = this.fTiles.create(977, G.phaser.world.height - 901, 'forum');

  this.mTiles = G.phaser.add.group();

  var britannia = this.mTiles.create(380, G.phaser.world.height - 1783, 'forum');
  var germaniaInferior = this.mTiles.create(725, G.phaser.world.height - 1735, 'forum');
  var germaniaSuperior = this.mTiles.create(910, G.phaser.world.height - 1700, 'forum');
  var belgica = this.mTiles.create(553, G.phaser.world.height - 1676, 'forum');
  var lugudunensis = this.mTiles.create(388, G.phaser.world.height - 1650, 'forum');
  var aquitania = this.mTiles.create(220, G.phaser.world.height - 1598, 'forum');
  var narbonensis = this.mTiles.create(280, G.phaser.world.height - 1485, 'forum');
  var alpes = this.mTiles.create(490, G.phaser.world.height - 1555, 'forum');
  var raetia = this.mTiles.create(780, G.phaser.world.height - 1614, 'forum');
  var noricum = this.mTiles.create(960, G.phaser.world.height - 1596, 'forum');

  this.bTiles = G.phaser.add.group(); // gold things

  var bTile0 = this.bTiles.create(850, G.phaser.world.height - 750, 'bonus');
  var bTile1 = this.bTiles.create(960, G.phaser.world.height - 750, 'bonus2');

  ships = G.phaser.add.group();

  var ship0 = ships.create(290, G.phaser.world.height - 1310, 'ship1');

  this.aMarks = G.phaser.add.group();

  // Tray 2 markers
  var aMark0 = this.aMarks.create(775, G.phaser.world.height-375, 'actionMarkO');
  var aMark1 = this.aMarks.create(810, G.phaser.world.height-175, 'actionMarkO');
  var aMark2 = this.aMarks.create(660, G.phaser.world.height-175, 'actionMarkG');
  var aMark3 = this.aMarks.create(810, G.phaser.world.height-340, 'actionMarkG');
  var aMark4 = this.aMarks.create(675, G.phaser.world.height-375, 'actionMarkY');
  var aMark5 = this.aMarks.create(775, G.phaser.world.height-175, 'actionMarkY');
  var aMark6 = this.aMarks.create(705, G.phaser.world.height-375, 'actionMarkB');
  var aMark7 = this.aMarks.create(705, G.phaser.world.height-175, 'actionMarkB');
  var aMark8 = this.aMarks.create(825, G.phaser.world.height-260, 'actionMarkW');
  var aMark9 = this.aMarks.create(645, G.phaser.world.height-280, 'actionMarkW');
  var aMark10 = this.aMarks.create(620, G.phaser.world.height-280, 'actionMarkP');
  var aMark11 = this.aMarks.create(845, G.phaser.world.height-280, 'actionMarkP');

  this.cards = G.phaser.add.group();

  var cCard0 = this.cards.create(1000, G.phaser.world.height-500, 'card');
  var cCard1 = this.cards.create(1125, G.phaser.world.height-500, 'card');
  var cCard2 = this.cards.create(1250, G.phaser.world.height-500, 'card');

  this.pMarks = G.phaser.add.group();

  var pMarkGreen = this.pMarks.create(253, G.phaser.world.height-700, 'playerMark');
  var pMarkRed = this.pMarks.create(303, G.phaser.world.height-700, 'playerMark');

  seaportTray = new Phaser.Circle(695, G.phaser.world.height-350, 75);
  forumTray = new Phaser.Circle(802, G.phaser.world.height-350, 75);
  militaryTray = new Phaser.Circle(860, G.phaser.world.height-255, 75);
  senateTray = new Phaser.Circle(805, G.phaser.world.height-160, 75);
  trajanTray = new Phaser.Circle(695, G.phaser.world.height-160, 75);
  constructionTray = new Phaser.Circle(640, G.phaser.world.height-255, 75);
  markerBounds = new Phaser.Rectangle(630, G.phaser.world.height-510, 300, 30);

  // Al about that village lyfe
  this.littlePeople = G.phaser.add.group();

  var lp0 = this.littlePeople.create(925, G.phaser.world.height-390, 'actionMarkO'); //make this be a dude later
  this.lpStartBox = new Phaser.Rectangle(890, G.phaser.world.height-475, 100, 180);
  this.legionairreCamp = new Phaser.Rectangle(705,G.phaser.world.height-1520, 200, 100);
  this.constructionCamp = new Phaser.Rectangle(500,G.phaser.world.height-1210, 200, 100);

  this.leader = G.phaser.add.group();
  var bigTree = this.leader.create(725, G.phaser.world.height - 1520, 'bigTree');

  this.trajan = G.phaser.add.group();
  var arch = this.trajan.create(605, G.phaser.world.height-435, 'tArch');
  arch.angle = -28;
}

Game.prototype.phaserUpdate = function() {
	
}

Game.prototype.turnLogic = function() {
  G.phaser.text.text = "Select a Tray";
  G.phaser.input.onUp.add(G.getTray());
  this.text.text = "Move Cursor Over a Marker to Place it in the Next Tray";
  this.aMarks.forEach(placeMarkers, this, true);
}

Game.prototype.getTray = function(){
	var x = G.phaser.input.activePointer.positionDown.x;
    var y = G.phaser.input.activePointer.positionDown.y;
    //Get which tray the user selected!

    if(seaportTray.contains(x,y)){
      //Place Action Markers from tray to top!
      this.aMarks.forEach(lineUp, this, true, seaportTray);
      this.currentTray = this.seaportTray;
    }
    else if(forumTray.contains(x,y)){
      //Place Action Markers from tray to top!
      this.aMarks.forEach(lineUp, this, true, forumTray);
      this.currentTray = this.forumTray;
    }
    else if(militaryTray.contains(x,y)){
      //Place Action Markers from tray to top!
      this.aMarks.forEach(lineUp, this, true, militaryTray);
      this.currentTray = this.militaryTray;
    }
    else if(senateTray.contains(x,y)){
      //Place Action Markers from tray to top!
      this.aMarks.forEach(lineUp, this, true, senateTray);
      this.currentTray = this.senateTray;
    }
    else if(trajanTray.contains(x,y)){
      //Place Action Markers from tray to top!
      this.aMarks.forEach(lineUp, this, true, trajanTray);
      this.currentTray = this.trajanTray;
    }
    else if(constructionTray.contains(x,y)){
      //Place Action Markers from tray to top!
      this.aMarks.forEach(lineUp, this, true, constructionTray);
      this.currentTray = this.constructionTray;
    }
}

Game.prototype.lineUp = function(marker, sourceTray) {
  var mx = marker.position.x;
  var my = marker.position.y;
  var linespot = 640;
  if(sourceTray.contains(mx, my)){
    marker.position.x = this.linespot;
    marker.position.y = G.phaser.world.height-500;
    linespot += 35;
  }
}

Game.prototype.placeMarkers = function(marker){
	//get position of maker
    var mx = marker.position.x;
    var my = marker.position.y;
    var currentTray;
	var i = 0;

    marker.inputEnabled = true;

    if(marker.input.pointerOver()){ //get if pointer is over marker
      if(markerBounds.contains(mx, my)){ //make sure marker is part of source tray group

        if(currentTray == this.seaportTray){ //add marker to next tray
          marker.position.x = this.forumTray.x;
          marker.position.y = this.forumTray.y;
          currentTray = this.forumTray;
        }
        else if(currentTray == this.forumTray){
          marker.position.x = this.militaryTray.x;
          marker.position.y = this.militaryTray.y;
          currentTray = this.militaryTray;
        }
        else if(currentTray == this.militaryTray){
          marker.position.x = this.senateTray.x;
          marker.position.y = this.senateTray.y;
          currentTray = this.senateTray;
        }
        else if(currentTray == this.senateTray){
          marker.position.x = this.trajanTray.x;
          marker.position.y = this.trajanTray.y;
          currentTray = this.trajanTray;
        }
        else if(currentTray == this.trajanTray){
          marker.position.x = this.constructionTray.x;
          marker.position.y = this.constructionTray.y;
          currentTray = this.constructionTray;
        }
        else{
          marker.position.x = this.seaportTray.x;
          marker.position.y = this.seaportTray.y;
          currentTray = this.seaportTray;
        }
        i += 5;
      }
    }
}

// var boxEmpty = true;
//   this.aMarks.forEach(function(current){
//     if(markerBounds.contains(current.position.x, current.position.y)){ //check that box is empty
//       boxEmpty = false;
//     }
//   }, this, true);
//   if(boxEmpty){ //set game state to correct action for next phase of turn logic
//     if(currentTray == seaportTray){
//       busy = 'seaport';
//     }
//     else if(currentTray == forumTray){
//       busy = 'forum';
//     }
//     else if(currentTray == militaryTray){
//       busy = 'military';
//     }
//     else if(currentTray == senateTray){
//       busy = 'senate';
//     }
//     else if(currentTray == trajanTray){
//       busy = 'trajan';
//     }
//     else if(currentTray == t6){
//       busy = 'construction';
//     }
//   }
// }


Game.prototype.movePlayerSenatePiece = function(currentPlayer, nextSpace) {
  currentPlayer.x = nextSpace.x;
  currentPlayer.y = nextSpace.y;
  // console.log(currentPlayer);
  return currentPlayer;
}

Game.prototype.senateSpaces = function(currentPlayer){
  for (var i = 0; i < this.senate_spaces.length-1; i++) {
    if (this.senate_spaces[i].contains(currentPlayer.x, currentPlayer.y)) {
      currentPlayer = this.movePlayerSenatePiece(currentPlayer, this.senate_spaces[i+1]);
      this.victory_points = i+2;
      break;
    };
  };
}



