function Game(){

	// Attribrutes for the game to manage
	initialize(){
		this.players = [];
		this.turn = 0;
		this.quarter = 0;
		this.pause = false;
		this.senate_spaces = [
		    new Phaser.Circle(300, game.world.height-680, 175),
		    new Phaser.Circle(393, game.world.height-680, 25),
		    new Phaser.Circle(456, game.world.height-680, 25),
		    new Phaser.Circle(522, game.world.height-680, 25),
		    new Phaser.Circle(585, game.world.height-680, 25),
		    new Phaser.Circle(649, game.world.height-680, 25),
		    new Phaser.Circle(715, game.world.height-680, 25),
		    new Phaser.Circle(778, game.world.height-680, 25)
		];

		// Phaser bootstrapping
		this.phaser = new Phaser.Game(1600, 1800, Phaser.AUTO, 'gameboard', {preload: phaserPreload, create: phaserCreate, update: phaserUpdate});


	}
}


Game.prototype.phaserPreload = function() {
	// Trajan Tiles
	this.phaser.load.image('gameBoard', '/assets/gameBoardFinal.png');
    this.phaser.load.image('playerBoard', '/assets/pBoard.png');
    this.phaser.load.image('tile', '/assets/cDoorTile.png');
    this.phaser.load.image('card', '/assets/cCardWheat.png');
    this.phaser.load.image('tt_VP_yellow_white', '/assets/tTile00.png');
    this.phaser.load.image('tt_move_two_military_yellow_white', '/assets/tTile01.png');
    this.phaser.load.image('tt_move_military_green_blue', '/assets/tTile02.png');
    this.phaser.load.image('tt_move_two_military_yellow_white', '/assets/tTile03.png');
    this.phaser.load.image('tt_VP_yellow_yellow', '/assets/tTile04.png');
    this.phaser.load.image('tt_plus_two_pink_white', '/assets/tTile05.png');
    this.phaser.load.image('tt_move_construct_green_orange', '/assets/tTile06.png');
    this.phaser.load.image('tt_bread_pink_pink', '/assets/tTile07.png');
    this.phaser.load.image('tt_religion_white_white', '/assets/tTile09.png');
    this.phaser.load.image('tt_games_green_green', '/assets/tTile10.png');
    this.phaser.load.image('tt_two_cards_yellow_yellow', '/assets/tTile11.png');
    this.phaser.load.image('tt_two_cards_yellow_green', '/assets/tTile12.png');
    this.phaser.load.image('tt_two_cards_pink_green', '/assets/tTile13.png');
    this.phaser.load.image('tt_religion_white_green', '/assets/tTile14.png');
    this.phaser.load.image('tt_plus_two_pink_yellow', '/assets/tTile16.png');
    this.phaser.load.image('tt_plus_two_white_white', '/assets/tTile17.png');
    this.phaser.load.image('tt_move_military_blue_blue', '/assets/tTile18.png');
    this.phaser.load.image('tt_plus_two_pink_pink', '/assets/tTile19.png');
    this.phaser.load.image('tt_two_cards_blue_orange', '/assets/tTile20.png');
    this.phaser.load.image('tt_move_construct_yellow_orange', '/assets/tTile21.png');
    this.phaser.load.image('tt_two_cards_pink_white', '/assets/tTile22.png');
    this.phaser.load.image('tt_two_cards_orange_orange', '/assets/tTile23.png');
    this.phaser.load.image('tt_move_military_yellow_blue', '/assets/tTile24.png');
    this.phaser.load.image('tt_move_construct_green_blue', '/assets/tTile25.png');
    this.phaser.load.image('tt_move_two_military_yellow_pink', '/assets/tTile26.png');
    this.phaser.load.image('tt_plus_two_orange_pink', '/assets/tTile27.png');
    this.phaser.load.image('tt_move_construct_pink_orange', '/assets/tTile28.png');
    this.phaser.load.image('tt_VP_white_white', '/assets/tTile29.png');
    this.phaser.load.image('tt_bread_green_green', '/assets/tTile30.png');
    this.phaser.load.image('tt_move_two_construct_yellow_yellow', '/assets/tTile31.png');
    this.phaser.load.image('tt_two_cards_yellow_orange', '/assets/tTile32.png');
    this.phaser.load.image('tt_religion_blue_orange', '/assets/tTile33.png');
    this.phaser.load.image('tt_two_cards_blue_blue', '/assets/tTile34.png');
    this.phaser.load.image('tt_move_two_construct_orange_yellow', '/assets/tTile35.png');
    this.phaser.load.image('tt_games_pink_green', '/assets/tTile36.png');
    this.phaser.load.image('tt_move_two_military_orange_blue', '/assets/tTile37.png');
    this.phaser.load.image('tt_two_cards_blue_white', '/assets/tTile38.png');
    this.phaser.load.image('tt_VP_orange_white', '/assets/tTile39.png');
    this.phaser.load.image('tt_move_two_construct_blue_yellow', '/assets/tTile40.png');
    this.phaser.load.image('tt_plus_two_green_pink', '/assets/tTile41.png');
    this.phaser.load.image('tt_VP_orange_orange', '/assets/tTile42.png');
    this.phaser.load.image('tt_games_yellow_green', '/assets/tTile43.png');
    this.phaser.load.image('tt_bread_orange_green', '/assets/tTile44.png');
    this.phaser.load.image('tt_plus_two_blue_pink', '/assets/tTile45.png');
    this.phaser.load.image('tt_VP_blue_white', '/assets/tTile46.png');
    this.phaser.load.image('tt_move_two_construct_orange_orange', '/assets/tTile47.png');
    this.phaser.load.image('tt_plus_two_green_white', '/assets/tTile48.png');
    this.phaser.load.image('tt_move_construct_white_orange', '/assets/tTile49.png');
    this.phaser.load.image('tt_plus_two_pink_white', '/assets/tTile50.png');
    this.phaser.load.image('tt_VP_pink_pink', '/assets/tTile51.png');
    
    // Other random shitakis
    this.phaser.load.image('forum', '/assets/fTileGame.png');
    this.phaser.load.spritesheet('bonus', '/assets/bonus00.png', 100, 156);
    this.phaser.load.spritesheet('bonus2', '/assets/bonus01.png', 100, 156);
    this.phaser.load.spritesheet('ship1', '/assets/ship01.png', 174, 116);
    this.phaser.load.image('actionMarkO', '/assets/actionMarkerOrange.png');
    this.phaser.load.image('actionMarkG', '/assets/actionMarkerGreen.png');
    this.phaser.load.image('actionMarkP', '/assets/actionMarkerPink.png');
    this.phaser.load.image('actionMarkB', '/assets/actionMarkerBlue.png');
    this.phaser.load.image('actionMarkW', '/assets/actionMarkerWhite.png');
    this.phaser.load.image('actionMarkY', '/assets/actionMarkerYellow.png');
    this.phaser.load.image('tArch', '/assets/tArch.png');
    this.phaser.load.image('playerMark', '/assets/playerMarkGreen.png');
    this.phaser.load.image('bigTree', '/assets/bigTree.png');
}

Game.prototype.phaserCreate = function() {
	 var background = this.phaser.add.sprite(150, 0, 'gameBoard');

  var player = this.phaser.add.sprite(275, this.phaser.world.height-500, 'playerBoard');
  graphics = this.phaser.add.graphics(0, 0);

  text = this.phaser.add.text(350, this.phaser.world.height - 550, '', {fill : '#ffffff'});

  cTiles = this.phaser.add.group();


  var cTile0 = cTiles.create(710, this.phaser.world.height - 1395, 'tile');
  var cTile1 = cTiles.create(790, this.phaser.world.height - 1395, 'tile');
  var cTile2 = cTiles.create(865, this.phaser.world.height - 1395, 'tile');
  var cTile3 = cTiles.create(945, this.phaser.world.height - 1395, 'tile');
  var cTile4 = cTiles.create(1020, this.phaser.world.height - 1395, 'tile');
  var cTile5 = cTiles.create(710, this.phaser.world.height - 1318, 'tile');
  var cTile6 = cTiles.create(790, this.phaser.world.height - 1318, 'tile');
  var cTile7 = cTiles.create(865, this.phaser.world.height - 1318, 'tile');
  var cTile8 = cTiles.create(945, this.phaser.world.height - 1318, 'tile');
  var cTile9 = cTiles.create(1020, this.phaser.world.height - 1318, 'tile');
  var cTile10 = cTiles.create(710, this.phaser.world.height - 1241, 'tile');
  var cTile11 = cTiles.create(790, this.phaser.world.height - 1241, 'tile');
  var cTile12 = cTiles.create(865, this.phaser.world.height - 1241, 'tile');
  var cTile13 = cTiles.create(945, this.phaser.world.height - 1241, 'tile');
  var cTile14 = cTiles.create(1020, this.phaser.world.height - 1241, 'tile');
  var cTile15 = cTiles.create(710, this.phaser.world.height - 1166, 'tile');
  var cTile16 = cTiles.create(790, this.phaser.world.height - 1166, 'tile');
  var cTile17 = cTiles.create(865, this.phaser.world.height - 1166, 'tile');
  var cTile18 = cTiles.create(945, this.phaser.world.height - 1166, 'tile');
  var cTile19 = cTiles.create(1020, this.phaser.world.height - 1166, 'tile');

  tTiles = this.phaser.add.group();

  var tTile0 = tTiles.create(253, this.phaser.world.height - 1058, 'tt_VP_yellow_white');
  var tTile1 = tTiles.create(422, this.phaser.world.height - 1058, 'tt_two_cards_pink_green');
  var tTile2 = tTiles.create(253, this.phaser.world.height - 958, 'tt_two_cards_blue_orange');
  var tTile3 = tTiles.create(422, this.phaser.world.height - 958, 'tt_move_military_blue_blue');
  var tTile4 = tTiles.create(253, this.phaser.world.height - 858, 'tt_plus_two_pink_white');
  var tTile5 = tTiles.create(422, this.phaser.world.height - 858, 'tt_VP_orange_white');

  fTiles = this.phaser.add.group();

  var fTile0 = fTiles.create(708, this.phaser.world.height - 1035, 'forum');
  var fTile1 = fTiles.create(778, this.phaser.world.height - 1035, 'forum');
  var fTile2 = fTiles.create(843, this.phaser.world.height - 1035, 'forum');
  var fTile3 = fTiles.create(910, this.phaser.world.height - 1035, 'forum');
  var fTile4 = fTiles.create(977, this.phaser.world.height - 1035, 'forum');
  var fTile5 = fTiles.create(708, this.phaser.world.height - 968, 'forum');
  var fTile6 = fTiles.create(778, this.phaser.world.height - 968, 'forum');
  var fTile7 = fTiles.create(843, this.phaser.world.height - 968, 'forum');
  var fTile8 = fTiles.create(910, this.phaser.world.height - 968, 'forum');
  var fTile9 = fTiles.create(977, this.phaser.world.height - 968, 'forum');
  var fTile10 = fTiles.create(708, this.phaser.world.height - 901, 'forum');
  var fTile11 = fTiles.create(778, this.phaser.world.height - 901, 'forum');
  var fTile12 = fTiles.create(843, this.phaser.world.height - 901, 'forum');
  var fTile13 = fTiles.create(910, this.phaser.world.height - 901, 'forum');
  var fTile14 = fTiles.create(977, this.phaser.world.height - 901, 'forum');

  mTiles = this.phaser.add.group();

  var britannia = mTiles.create(380, this.phaser.world.height - 1783, 'forum');
  var germaniaInferior = mTiles.create(725, this.phaser.world.height - 1735, 'forum');
  var germaniaSuperior = mTiles.create(910, this.phaser.world.height - 1700, 'forum');
  var belgica = mTiles.create(553, this.phaser.world.height - 1676, 'forum');
  var lugudunensis = mTiles.create(388, this.phaser.world.height - 1650, 'forum');
  var aquitania = mTiles.create(220, this.phaser.world.height - 1598, 'forum');
  var narbonensis = mTiles.create(280, this.phaser.world.height - 1485, 'forum');
  var alpes = mTiles.create(490, this.phaser.world.height - 1555, 'forum');
  var raetia = mTiles.create(780, this.phaser.world.height - 1614, 'forum');
  var noricum = mTiles.create(960, this.phaser.world.height - 1596, 'forum');

  bTiles = this.phaser.add.group(); // gold things

  var bTile0 = bTiles.create(850, this.phaser.world.height - 750, 'bonus');
  var bTile1 = bTiles.create(960, this.phaser.world.height - 750, 'bonus2');

  ships = this.phaser.add.group();

  var ship0 = ships.create(290, this.phaser.world.height - 1310, 'ship1');

  aMarks = this.phaser.add.group();

  // Tray 2 markers
  var aMark0 = aMarks.create(775, this.phaser.world.height-375, 'actionMarkO');
  var aMark1 = aMarks.create(810, this.phaser.world.height-175, 'actionMarkO');
  var aMark2 = aMarks.create(660, this.phaser.world.height-175, 'actionMarkG');
  var aMark3 = aMarks.create(810, this.phaser.world.height-340, 'actionMarkG');
  var aMark4 = aMarks.create(675, this.phaser.world.height-375, 'actionMarkY');
  var aMark5 = aMarks.create(775, this.phaser.world.height-175, 'actionMarkY');
  var aMark6 = aMarks.create(705, this.phaser.world.height-375, 'actionMarkB');
  var aMark7 = aMarks.create(705, this.phaser.world.height-175, 'actionMarkB');
  var aMark8 = aMarks.create(825, this.phaser.world.height-260, 'actionMarkW');
  var aMark9 = aMarks.create(645, this.phaser.world.height-280, 'actionMarkW');
  var aMark10 = aMarks.create(620, this.phaser.world.height-280, 'actionMarkP');
  var aMark11 = aMarks.create(845, this.phaser.world.height-280, 'actionMarkP');

  cards = this.phaser.add.group();

  var cCard0 = cards.create(1000, this.phaser.world.height-500, 'card');
  var cCard1 = cards.create(1125, this.phaser.world.height-500, 'card');
  var cCard2 = cards.create(1250, this.phaser.world.height-500, 'card');

  pMarks = this.phaser.add.group();

  var pMarkGreen = pMarks.create(253, this.phaser.world.height-700, 'playerMark');
  var pMarkRed = pMarks.create(303, this.phaser.world.height-700, 'playerMark');

  seaportTrayGroup = this.phaser.add.group();
  forumTrayGroup = this.phaser.add.group();
  militaryTrayGroup = this.phaser.add.group();
  senateTrayGroup = this.phaser.add.group();
  trajanTrayGroup = this.phaser.add.group();
  constructionTrayGroup = this.phaser.add.group();

  seaportTray = new Phaser.Circle(695, this.phaser.world.height-350, 75);
  forumTray = new Phaser.Circle(802, this.phaser.world.height-350, 75);
  militaryTray = new Phaser.Circle(860, this.phaser.world.height-255, 75);
  senateTray = new Phaser.Circle(805, this.phaser.world.height-160, 75);
  trajanTray = new Phaser.Circle(695, this.phaser.world.height-160, 75);
  constructionTray = new Phaser.Circle(640, this.phaser.world.height-255, 75);
  markerBounds = new Phaser.Rectangle(630, this.phaser.world.height-510, 300, 30);

  littlePeople = this.phaser.add.group();

  var lp0 = littlePeople.create(925, this.phaser.world.height-390, 'actionMarkO'); //make this be a dude later
  lpStartBox = new Phaser.Rectangle(890, this.phaser.world.height-475, 100, 180);
  legionairreCamp = new Phaser.Rectangle(705,this.phaser.world.height-1520, 200, 100);
  constructionCamp = new Phaser.Rectangle(500,this.phaser.world.height-1210, 200, 100);

  leader = this.phaser.add.group();
  var bigTree = leader.create(725, this.phaser.world.height - 1520, 'bigTree');

  trajan = this.phaser.add.group();
  var arch = trajan.create(605, this.phaser.world.height-435, 'tArch');
  arch.angle = -28;
}

Game.prototype.phaserUpdate = function() {
	// Stuff goes down here
}


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



