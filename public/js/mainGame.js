function Game(){

	// Attribrutes for the game to manage
	this.players = [];
	this.turn = 0;
	this.quarter = 0;
	this.pause = false;
	this.VPs;

	this.cTiles;
	this.tTiles;
	this.bTiles;
	this.mTiles;
	this.fTiles;
	this.aMarks;
	this.pMarks;
	this.littlePeople;
	this.seaportTray;
	this.forumTray;
	this.militaryTray;
	this.senateTray;
	this.constructionTray;
	this.trajanTray;
	this.textAction;
	this.ships;
	this.trajan;
	this.leader;
	this.card;
	this.senate_spaces = [];
	this.gameState;
	this.linespot;
	this.currentTray;
	this.displace;
	this.currentPlayerMarker;
	this.graphics;
	this.lastPositionX;
	this.lastPositionY;
	this.incX;
	this.incY;
	this.incX2;
	this.incY2;
	this.leaderLoc;

	// Phaser bootstrapping
	this.phaser = new Phaser.Game(1600, 1800, Phaser.AUTO, 'gameboard', {preload: this.phaserPreload, create: this.phaserCreate, update: this.phaserUpdate});
}


Game.prototype.phaserPreload = function() {
		//GAME BOARD
		G.phaser.load.image('gameBoard', '/assets/gameBoardFinal.png');
    G.phaser.load.image('playerBoard', '/assets/pBoard.png');

    G.phaser.load.image('tile', '/assets/cDoorTile.png');
    G.phaser.load.image('card', '/assets/cCardWheat.png');
		//TRAJAN TILES
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
		//CONSTRUCTION TILES
		G.phaser.load.image('cDoorTile', '/assets/cDoorTile.png');
		G.phaser.load.image('cTileRoof2', '/assets/cTileRoof2.png');
		G.phaser.load.image('cTileRoof3', '/assets/cTileRoof3.png');
		G.phaser.load.image('cTileRoof4', '/assets/cTileRoof4.png');
		G.phaser.load.image('cTileRoof5', '/assets/cTileRoof5.png');

		//FORUM TILES
		G.phaser.load.image('ftBread', '/assets/forumTiles/breadForumTile.png');
		G.phaser.load.image('ftComWC','/assets/forumTiles/commodityWildCard.png');
		G.phaser.load.image('ftConstBonus','/assets/forumTiles/constructionForumTile.png');
		G.phaser.load.image('ftDoubleWC','/assets/forumTiles/doubleActionWildCard.png');
		G.phaser.load.image('ftForumBonus','/assets/forumTiles/forumForumTile.png');
		G.phaser.load.image('ftGames','/assets/forumTiles/gamesForumTile.png');
		G.phaser.load.image('ftMilitaryBonus','/assets/forumTiles/militaryForumTile.png');
		G.phaser.load.image('ftReligion','/assets/forumTiles/religionForumTile.png');
		G.phaser.load.image('ftResourceWC','/assets/forumTiles/resourceWildCard.png');
		G.phaser.load.image('ftSeaBonus','/assets/forumTiles/seaportForumTile.png');
		G.phaser.load.image('ftSenatePlus2','/assets/forumTiles/senateForum2.png');
		G.phaser.load.image('ftSenatePlus3','/assets/forumTiles/senateForum3.png');
		G.phaser.load.image('ftSenatePlus4','/assets/forumTiles/senateForum4.png');
		G.phaser.load.image('ftSenatePlus5','/assets/forumTiles/senateForum5.png');
		G.phaser.load.image('ftSenateBonus','/assets/forumTiles/senateForumTile.png');
		G.phaser.load.image('ftTrajanBonus','/assets/forumTiles/trajanForumTile.png');

    // Other random shitakis
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

  //CONSTRUCTION TILES
  G.phaser.cTiles = G.phaser.add.group();
  var cTile0 = G.phaser.cTiles.create(710, G.phaser.world.height - 1395, 'cDoorTile');
	cTile0.type = "Door";
  var cTile1 = G.phaser.cTiles.create(790, G.phaser.world.height - 1395, 'cDoorTile');
	cTile1.type = "Door";
  var cTile2 = G.phaser.cTiles.create(865, G.phaser.world.height - 1395, 'cDoorTile');
	cTile2.type = "Door";
  var cTile3 = G.phaser.cTiles.create(945, G.phaser.world.height - 1395, 'cDoorTile');
	cTile3.type = "Door";
  var cTile4 = G.phaser.cTiles.create(1020, G.phaser.world.height - 1395, 'cTileRoof5');
	cTile4.type = "Roof";
  var cTile5 = G.phaser.cTiles.create(710, G.phaser.world.height - 1318, 'cTileRoof4');
	cTile5.type = "Roof";
  var cTile6 = G.phaser.cTiles.create(790, G.phaser.world.height - 1318, 'cTileRoof5');
	cTile6.type = "Roof";
  var cTile7 = G.phaser.cTiles.create(865, G.phaser.world.height - 1318, 'cTileRoof3');
	cTile7.type = "Roof";
  var cTile8 = G.phaser.cTiles.create(945, G.phaser.world.height - 1318, 'cTileRoof4');
	cTile8.type = "Roof";
  var cTile9 = G.phaser.cTiles.create(1020, G.phaser.world.height - 1318, 'cTileRoof5');
	cTile9.type = "Roof";
  var cTile10 = G.phaser.cTiles.create(710, G.phaser.world.height - 1241, 'cTileRoof3');
	cTile10.type = "Roof";
  var cTile11 = G.phaser.cTiles.create(790, G.phaser.world.height - 1241, 'cTileRoof2');
	cTile11.type = "Roof";
  var cTile12 = G.phaser.cTiles.create(865, G.phaser.world.height - 1241, 'cTileRoof5');
	cTile12.type = "Roof";
  var cTile13 = G.phaser.cTiles.create(945, G.phaser.world.height - 1241, 'cTileRoof4');
	cTile13.type = "Roof";
  var cTile14 = G.phaser.cTiles.create(1020, G.phaser.world.height - 1241, 'cTileRoof5');
	cTile14.type = "Roof";
  var cTile15 = G.phaser.cTiles.create(710, G.phaser.world.height - 1166, 'cTileRoof5');
	cTile15.type = "Roof";
  var cTile16 = G.phaser.cTiles.create(790, G.phaser.world.height - 1166, 'cTileRoof3');
	cTile16.type = "Roof";
  var cTile17 = G.phaser.cTiles.create(865, G.phaser.world.height - 1166, 'cTileRoof2');
	cTile17.type = "Roof";
  var cTile18 = G.phaser.cTiles.create(945, G.phaser.world.height - 1166, 'cTileRoof3');
	cTile18.type = "Roof";
  var cTile19 = G.phaser.cTiles.create(1020, G.phaser.world.height - 1166, 'cTileRoof5');
	cTile19.type = "Roof";

  G.phaser.tTiles = G.phaser.add.group();

  var tTile0 = G.phaser.tTiles.create(253, G.phaser.world.height - 1058, 'tt_VP_yellow_white');
  var tTile1 = G.phaser.tTiles.create(422, G.phaser.world.height - 1058, 'tt_two_cards_pink_green');
  var tTile2 = G.phaser.tTiles.create(253, G.phaser.world.height - 958, 'tt_two_cards_blue_orange');
  var tTile3 = G.phaser.tTiles.create(422, G.phaser.world.height - 958, 'tt_move_military_blue_blue');
  var tTile4 = G.phaser.tTiles.create(253, G.phaser.world.height - 858, 'tt_plus_two_pink_white');
  var tTile5 = G.phaser.tTiles.create(422, G.phaser.world.height - 858, 'tt_VP_orange_white');

  G.phaser.fTiles = G.phaser.add.group();

  var fTile0 = G.phaser.fTiles.create(708, G.phaser.world.height - 1035, 'ftGames');
	fTile0.type = "games";
  var fTile1 = G.phaser.fTiles.create(778, G.phaser.world.height - 1035, 'ftComWC');
	fTile1.type = "orange";
  var fTile2 = G.phaser.fTiles.create(843, G.phaser.world.height - 1035, 'ftSeaBonus');
	fTile2.type = "seaBonus";
  var fTile3 = G.phaser.fTiles.create(910, G.phaser.world.height - 1035, 'ftForumBonus');
	fTile3.type = "forumBonus";
  var fTile4 = G.phaser.fTiles.create(977, G.phaser.world.height - 1035, 'ftSenateBonus');
	fTile4.type = "senateBonus";
  var fTile5 = G.phaser.fTiles.create(708, G.phaser.world.height - 968, 'ftResourceWC');
	fTile5.type = "green";
  var fTile6 = G.phaser.fTiles.create(778, G.phaser.world.height - 968, 'ftBread');
	fTile6.type = "bread";
  var fTile7 = G.phaser.fTiles.create(843, G.phaser.world.height - 968, 'ftConstBonus');
	fTile7.type = "conBonus";
  var fTile8 = G.phaser.fTiles.create(910, G.phaser.world.height - 968, 'ftSenatePlus2');
	fTile8.type = "sPlus2";
  var fTile9 = G.phaser.fTiles.create(977, G.phaser.world.height - 968, 'ftMilitaryBonus');
	fTile9.type = "militaryBonus";
  var fTile10 = G.phaser.fTiles.create(708, G.phaser.world.height - 901, 'ftSenatePlus4');
	fTile10.type = "sPlus4";
  var fTile11 = G.phaser.fTiles.create(778, G.phaser.world.height - 901, 'ftDoubleWC');
	fTile11.type = "yellow";
  var fTile12 = G.phaser.fTiles.create(843, G.phaser.world.height - 901, 'ftTrajanBonus');
	fTile12.type = "trajanBonus";
  var fTile13 = G.phaser.fTiles.create(910, G.phaser.world.height - 901, 'ftSenatePlus3');
	fTile13.type = "sPlus3";
  var fTile14 = G.phaser.fTiles.create(977, G.phaser.world.height - 901, 'ftReligion');
	fTile14.type = "religion";

  G.phaser.mTiles = G.phaser.add.group();

  var britannia = G.phaser.mTiles.create(380, G.phaser.world.height - 1783, 'ftGames');
  var germaniaInferior = G.phaser.mTiles.create(725, G.phaser.world.height - 1735, 'ftGames');
  var germaniaSuperior = G.phaser.mTiles.create(910, G.phaser.world.height - 1700, 'ftGames');
  var belgica = G.phaser.mTiles.create(553, G.phaser.world.height - 1676, 'ftGames');
  var lugudunensis = G.phaser.mTiles.create(388, G.phaser.world.height - 1650, 'ftGames');
  var aquitania = G.phaser.mTiles.create(220, G.phaser.world.height - 1598, 'ftGames');
  var narbonensis = G.phaser.mTiles.create(280, G.phaser.world.height - 1485, 'ftGames');
  var alpes = G.phaser.mTiles.create(490, G.phaser.world.height - 1555, 'ftGames');
  var raetia = G.phaser.mTiles.create(780, G.phaser.world.height - 1614, 'ftGames');
  var noricum = G.phaser.mTiles.create(960, G.phaser.world.height - 1596, 'ftGames');

  G.phaser.bTiles = G.phaser.add.group(); // gold things

  var bTile0 = G.phaser.bTiles.create(850, G.phaser.world.height - 750, 'bonus');
  var bTile1 = G.phaser.bTiles.create(960, G.phaser.world.height - 750, 'bonus2');

  ships = G.phaser.add.group();

  var ship0 = ships.create(290, G.phaser.world.height - 1310, 'ship1');

  G.phaser.aMarks = G.phaser.add.group();

  // Tray 2 markers
  var aMark0 = G.phaser.aMarks.create(775, G.phaser.world.height-375, 'actionMarkO');
  var aMark1 = G.phaser.aMarks.create(810, G.phaser.world.height-175, 'actionMarkO');
  var aMark2 = G.phaser.aMarks.create(660, G.phaser.world.height-175, 'actionMarkG');
  var aMark3 = G.phaser.aMarks.create(810, G.phaser.world.height-340, 'actionMarkG');
  var aMark4 = G.phaser.aMarks.create(675, G.phaser.world.height-375, 'actionMarkY');
  var aMark5 = G.phaser.aMarks.create(775, G.phaser.world.height-175, 'actionMarkY');
  var aMark6 = G.phaser.aMarks.create(705, G.phaser.world.height-375, 'actionMarkB');
  var aMark7 = G.phaser.aMarks.create(705, G.phaser.world.height-175, 'actionMarkB');
  var aMark8 = G.phaser.aMarks.create(825, G.phaser.world.height-260, 'actionMarkW');
  var aMark9 = G.phaser.aMarks.create(645, G.phaser.world.height-280, 'actionMarkW');
  var aMark10 = G.phaser.aMarks.create(620, G.phaser.world.height-280, 'actionMarkP');
  var aMark11 = G.phaser.aMarks.create(845, G.phaser.world.height-280, 'actionMarkP');

  G.phaser.cards = G.phaser.add.group();

  var cCard0 = G.phaser.cards.create(1000, G.phaser.world.height-500, 'card');
  var cCard1 = G.phaser.cards.create(1125, G.phaser.world.height-500, 'card');
  var cCard2 = G.phaser.cards.create(1250, G.phaser.world.height-500, 'card');

  G.phaser.pMarks = G.phaser.add.group();

  var pMarkGreen = G.phaser.pMarks.create(253, G.phaser.world.height-700, 'playerMark');
  var pMarkRed = G.phaser.pMarks.create(303, G.phaser.world.height-700, 'playerMark');
	G.phaser.currentPlayerMarker = pMarkGreen;

  seaportTray = new Phaser.Circle(695, G.phaser.world.height-350, 75);
  forumTray = new Phaser.Circle(802, G.phaser.world.height-350, 75);
  militaryTray = new Phaser.Circle(860, G.phaser.world.height-255, 75);
  senateTray = new Phaser.Circle(805, G.phaser.world.height-160, 75);
  trajanTray = new Phaser.Circle(695, G.phaser.world.height-160, 75);
  constructionTray = new Phaser.Circle(640, G.phaser.world.height-255, 75);
  markerBounds = new Phaser.Rectangle(630, G.phaser.world.height-510, 300, 30);

	G.phaser.leader = G.phaser.add.group();
	var bigTree = G.phaser.leader.create(725, G.phaser.world.height - 1520, 'bigTree');

  // Al about that village lyfe
  G.phaser.littlePeople = G.phaser.add.group();
	var lp000 = G.phaser.littlePeople.create(750, G.phaser.world.height - 1500, 'actionMarkG');
	var lp00 = G.phaser.littlePeople.create(580, 600, 'actionMarkG');
  var lp0 = G.phaser.littlePeople.create(925, G.phaser.world.height-450, 'actionMarkG'); //make this be a dude later
	var lp1 = G.phaser.littlePeople.create(925, G.phaser.world.height-430, 'actionMarkG'); //make this be a dude later
	var lp2 = G.phaser.littlePeople.create(925, G.phaser.world.height-410, 'actionMarkG'); //make this be a dude later
	var lp3 = G.phaser.littlePeople.create(925, G.phaser.world.height-390, 'actionMarkG'); //make this be a dude later
	var lp4 = G.phaser.littlePeople.create(925, G.phaser.world.height-370, 'actionMarkG'); //make this be a dude later
	var lp5 = G.phaser.littlePeople.create(925, G.phaser.world.height-350, 'actionMarkG'); //make this be a dude later
	var lp6 = G.phaser.littlePeople.create(945, G.phaser.world.height-450, 'actionMarkG'); //make this be a dude later
	var lp7 = G.phaser.littlePeople.create(945, G.phaser.world.height-430, 'actionMarkG'); //make this be a dude later
	var lp8 = G.phaser.littlePeople.create(945, G.phaser.world.height-410, 'actionMarkG'); //make this be a dude later
	var lp9 = G.phaser.littlePeople.create(945, G.phaser.world.height-390, 'actionMarkG'); //make this be a dude later
	var lp10 = G.phaser.littlePeople.create(945, G.phaser.world.height-370, 'actionMarkG'); //make this be a dude later
	var lp11 = G.phaser.littlePeople.create(945, G.phaser.world.height-350, 'actionMarkG'); //make this be a dude later
	var lp12 = G.phaser.littlePeople.create(905, G.phaser.world.height-410, 'actionMarkG'); //make this be a dude later
	var lp13 = G.phaser.littlePeople.create(905, G.phaser.world.height-390, 'actionMarkG'); //make this be a dude later
	var lp14 = G.phaser.littlePeople.create(905, G.phaser.world.height-370, 'actionMarkG');
  G.phaser.lpStartBox = new Phaser.Rectangle(890, G.phaser.world.height-475, 100, 180);
  G.phaser.legionairreCamp = new Phaser.Rectangle(705,G.phaser.world.height-1520, 200, 100);
  G.phaser.constructionCamp = new Phaser.Rectangle(500,G.phaser.world.height-1210, 200, 100);

  G.phaser.trajan = G.phaser.add.group();
  var arch = G.phaser.trajan.create(605, G.phaser.world.height-435, 'tArch');
  arch.angle = -28;

	G.phaser.textAction = G.phaser.add.text(350, G.phaser.world.height - 550, '', {fill : '#ffffff'});
	G.phaser.textAction.text = "stuff";

	G.phaser.gameState = "selectTray";
	G.phaser.linespot = 640;
	G.phaser.displace = 0;
	G.phaser.lastPositionX =580;
	G.phaser.lastPositionY=600;
	G.phaser.incX=0;
	G.phaser.incY=0;
	G.phaser.incX2=0;
	G.phaser.incY2=0;
	G.phaser.leaderLoc = G.phaser.legionairreCamp;

}

Game.prototype.phaserUpdate = function() {
	//console.log(G.phaser.input.activePointer.positionDown.x, G.phaser.input.activePointer.positionDown.y);
}

Game.prototype.turnLogic = function() {
	//console.log("turn logic function");
	if(G.phaser.gameState == "selectTray"){
  	G.phaser.textAction.text = "Select a Tray";
  	G.phaser.input.onUp.add(G.getTray);
	}
}

Game.prototype.sleep = function(milliseconds){
	console.log("sleep");
	var start = new Date().getTime();
	for(var i = 0; i< 1e7; i++){
		if((new Date().getTime() - start) > milliseconds){
			break;
		}
	}
}

Game.prototype.getTray = function(){
	if(G.phaser.gameState != "selectTray"){
		return;
	}
	G.phaser.displace = 0;
	var x = G.phaser.input.activePointer.positionDown.x;
    var y = G.phaser.input.activePointer.positionDown.y;
    //Get which tray the user selected!
    if(seaportTray.contains(x,y)){
      //Place Action Markers from tray to top!
      G.phaser.aMarks.forEach(G.lineUp, this, true, seaportTray);
      currentTray = seaportTray;
			G.phaser.gameState = "placeMarker";
    }
    else if(forumTray.contains(x,y)){
      //Place Action Markers from tray to top!
      G.phaser.aMarks.forEach(G.lineUp, this, true, forumTray);
      currentTray = forumTray;
			G.phaser.gameState = "placeMarker";
    }
    else if(militaryTray.contains(x,y)){
      //Place Action Markers from tray to top!
      G.phaser.aMarks.forEach(G.lineUp, this, true, militaryTray);
      currentTray = militaryTray;
			G.phaser.gameState = "placeMarker";
    }
    else if(senateTray.contains(x,y)){
      //Place Action Markers from tray to top!
      G.phaser.aMarks.forEach(G.lineUp, this, true, senateTray);
      currentTray = senateTray;
			G.phaser.gameState = "placeMarker";
    }
    else if(trajanTray.contains(x,y)){
      //Place Action Markers from tray to top!
      G.phaser.aMarks.forEach(G.lineUp, this, true, trajanTray);
      currentTray = trajanTray;
			G.phaser.gameState = "placeMarker";
    }
    else if(constructionTray.contains(x,y)){
      //Place Action Markers from tray to top!
      G.phaser.aMarks.forEach(G.lineUp, this, true, constructionTray);
      currentTray = constructionTray;
			G.phaser.gameState = "placeMarker";
    }

		if(G.phaser.gameState == "placeMarker"){
			G.phaser.textAction.text = "Click on a Marker to Place it in the Next Tray";
			G.phaser.aMarks.forEach(G.clickMarker, this, true);
		}
}

Game.prototype.lineUp = function(marker, sourceTray) {
  var mx = marker.position.x;
  var my = marker.position.y;

  if(sourceTray.contains(mx, my)){
    marker.position.x = G.phaser.linespot;
    marker.position.y = G.phaser.world.height-500;
    G.phaser.linespot += 35;
  }
}

Game.prototype.clickMarker = function(actionMarker){
	var mx = actionMarker.position.x;
	var my = actionMarker.position.y;
	actionMarker.inputEnabled = true;
	if(markerBounds.contains(mx, my)){
		actionMarker.events.onInputDown.addOnce(G.placeMarkers, this);
	}
}

Game.prototype.placeMarkers = function(marker){
  if(currentTray == seaportTray){ //add marker to next tray
		marker.position.x = forumTray.x + G.phaser.displace;
		marker.position.y = forumTray.y + G.phaser.displace;
		currentTray = forumTray;
	}
	else if(currentTray == forumTray){
		marker.position.x = militaryTray.x + G.phaser.displace;
		marker.position.y = militaryTray.y + G.phaser.displace;
		currentTray = militaryTray;
	}
	else if(currentTray == militaryTray){
		marker.position.x = senateTray.x + G.phaser.displace;
		marker.position.y = senateTray.y + G.phaser.displace;
		currentTray = senateTray;
	}
	else if(currentTray == senateTray){
		marker.position.x = trajanTray.x + G.phaser.displace;
		marker.position.y = trajanTray.y + G.phaser.displace;
		currentTray = trajanTray;
	}
	else if(currentTray == trajanTray){
		marker.position.x = constructionTray.x + G.phaser.displace;
		marker.position.y = constructionTray.y + G.phaser.displace;
		currentTray = constructionTray;
	}
	else{
		marker.position.x = seaportTray.x + G.phaser.displace;
		marker.position.y = seaportTray.y + G.phaser.displace;
		currentTray = seaportTray;
	}
	G.phaser.displace +=5;
	G.getAction();
}

Game.prototype.getAction = function(){
	var boxEmpty = true;
		G.phaser.aMarks.forEach(function(current){
			if(markerBounds.contains(current.position.x, current.position.y)){ //check that box is empty
				boxEmpty = false;
			}
		}, this, true);
		if(boxEmpty){ //set game state to correct action for next phase of turn logic
			if(currentTray == seaportTray){
				G.phaser.gameState = 'seaport';
			}
			else if(currentTray == forumTray){
				G.phaser.gameState = 'forum';
				G.getForumTile();
			}
			else if(currentTray == militaryTray){
				G.phaser.gameState = 'military';
				G.militaryLogic();
			}
			else if(currentTray == senateTray){
				G.phaser.gameState = 'senate';
				G.senateSpaces(G.phaser.currentPlayerMarker);
			}
			else if(currentTray == trajanTray){
				G.phaser.gameState = 'trajan';
			}
			else if(currentTray == constructionTray){
				G.phaser.gameState = 'construction';
				G.constructionAction();
			}
		}
}


Game.prototype.movePlayerSenatePiece = function(currentPlayer, nextSpace) {
  currentPlayer.x = nextSpace.x -20;
  currentPlayer.y = nextSpace.y -20;
	G.bonusAction();
  return currentPlayer;
}

Game.prototype.senateSpaces = function(currentPlayer){
	var senate_spaces = [
		new Phaser.Circle(300, G.phaser.world.height-680, 175),
		new Phaser.Circle(393, G.phaser.world.height-680, 25),
		new Phaser.Circle(456, G.phaser.world.height-680, 25),
		new Phaser.Circle(522, G.phaser.world.height-680, 25),
		new Phaser.Circle(585, G.phaser.world.height-680, 25),
		new Phaser.Circle(649, G.phaser.world.height-680, 25),
		new Phaser.Circle(715, G.phaser.world.height-680, 25),
		new Phaser.Circle(778, G.phaser.world.height-680, 25)
	]

  for (var i = 0; i < senate_spaces.length-1; i++) {
    if (senate_spaces[i].contains(currentPlayer.x-10, currentPlayer.y-10)) {
      currentPlayer = G.movePlayerSenatePiece(currentPlayer, senate_spaces[i+1]);
      victory_points = i+2;
      break;
    };
  };
}

Game.prototype.bonusAction = function(){
	G.phaser.textAction.text = "Click on Bonus Action Tile to repeat this action or click HERE to end turn";
	G.phaser.gameState = "selectTray";
	G.turnLogic();
}

Game.prototype.getForumTile = function(){
	G.phaser.textAction.text = "Select a Forum Tile";
	G.phaser.fTiles.forEach(G.forumAction, this, true);
}

Game.prototype.forumAction = function(currentTile){
	currentTile.inputEnabled = true;
	if(currentTile.type == "games")
		currentTile.events.onInputDown.add(G.gamesMovement, this);
	else if(currentTile.type == "bread")
		currentTile.events.onInputDown.add(G.breadMovement, this);
	else if(currentTile.type == "religion")
		currentTile.events.onInputDown.add(G.religionMovement, this);
	else if(currentTile.type == "yellow")
		currentTile.events.onInputDown.add(G.yellowWildMovement, this);
	else if(currentTile.type == "orange")
		currentTile.events.onInputDown.add(G.orangeWildMovement, this);
	else if(currentTile.type == "green")
		currentTile.events.onInputDown.add(G.greenWildMovement, this);
	else if(currentTile.type == "red")
		currentTile.events.onInputDown.add(G.redWildMovement, this);
	else if(currentTile.type == "seaBonus")
		currentTile.events.onInputDown.add(G.seaBonusMovement, this);
	else if(currentTile.type == "forumBonus")
		currentTile.events.onInputDown.add(G.forumBonusMovement, this);
	else if(currentTile.type == "militaryBonus")
		currentTile.events.onInputDown.add(G.militaryBonusMovement, this);
	else if(currentTile.type == "trajanBonus")
		currentTile.events.onInputDown.add(G.trajanBonusMovement, this);
	else if(currentTile.type == "senateBonus")
		currentTile.events.onInputDown.add(G.senateBonusMovement, this);
	else if(currentTile.type == "conBonus")
		currentTile.events.onInputDown.add(G.constructionBonusMovement, this);
	else if(currentTile.type == "sPlus2" || currentTile.type == "sPlus3" || currentTile.type == "sPlus4" || currentTile.type == "sPlus5")
		currentTile.events.onInputDown.add(G.sPlusMovement, this);
}
	//STACK TILES
Game.prototype.stackTiles = function(tile){
	tile.position.y += 10;
}
  //SENATE BONUS MOVEMENT
Game.prototype.sPlusMovement = function(tile){
	var firstSpotTaken = false;
	var secSpotTaken = false;
	G.phaser.fTiles.forEach(function(allTiles){
		if(allTiles.position.x == 935 && allTiles.position.y == 1601){
			firstSpotTaken = true;
		}
		if(allTiles.position.x == 935 && allTiles.position.y == 1654){
			secSpotTaken = true;
		}
	}, this, true);
	if(firstSpotTaken == false){
		tile.position.x = 935;
		tile.position.y = 1601;
	}
	else if(secSpotTaken == false){
		tile.position.x = 935;
		tile.position.y = 1654;
	}
	else{
		tile.position.x = 935;
		tile.position.y = 1710;
	}
}

	//EXTRA ACTION TILE MOVEMENT
Game.prototype.seaBonusMovement = function(tile){
	tile.position.x = 293;
	tile.position.y = 1657;
}
Game.prototype.forumBonusMovement = function(tile){
	tile.position.x = 346;
	tile.position.y = 1657;
}
Game.prototype.senateBonusMovement = function(tile){
	tile.position.x = 530;
	tile.position.y = 1657;
}
Game.prototype.militaryBonusMovement = function(tile){
	tile.position.x = 397;
	tile.position.y = 1657;
}
Game.prototype.trajanBonusMovement = function(tile){
	tile.position.x = 501;
	tile.position.y = 1657;
}
Game.prototype.constructionBonusMovement = function(tile){
	tile.position.x = 554;
	tile.position.y = 1657;
}

	//RESOURCES MOVEMENT
Game.prototype.gamesMovement = function(tile){
	tile.position.x = 530;
	tile.position.y = 1402;
}

Game.prototype.breadMovement = function(tile){
	tile.position.x = 375;
	tile.position.y = 1402;
}

Game.prototype.religionMovement = function(tile){
	tile.position.x = 452;
	tile.position.y = 1402;
}

	// WILD CARD MOVEMENT
Game.prototype.yellowWildMovement = function(tile){
	tile.position.x = 382;
	tile.position.y = 1482;
}

Game.prototype.orangeWildMovement = function(tile){
	tile.position.x = 448;
	tile.position.y = 1482;
}

Game.prototype.greenWildMovement = function(tile){
	tile.position.x = 382;
	tile.position.y = 1545;
}

Game.prototype.redWildMovement = function(tile){
	tile.position.x = 448;
	tile.position.y = 1545;
}



Game.prototype.militaryLogic = function()
{
	G.phaser.textAction.text = "Military Action";
	G.phaser.textAction.text= G.phaser.textAction.text + "\nDouble-click on little dude to move to camp \nDouble-click on legionairre in camp to move to leader \nOr click the leader and then an adjacent provence to move leader";

	G.phaser.input.onUp.add(G.getClick);
}

Game.prototype.getClick = function(){
	if(G.phaser.gameState != "military"){
		return;
	}
	if(G.phaser.lpStartBox.contains(G.phaser.input.activePointer.positionDown.x, G.phaser.input.activePointer.positionDown.y)){
		G.phaser.gameState = "moveLittleDudeToCamp";
		G.phaser.littlePeople.forEach(G.makeLPActive, this, true);
	}
	else{
		G.phaser.leader.forEach(G.makeLeaderActive, this, true);
		G.phaser.littlePeople.forEach(G.makeLPActive, this, true);
	}
}

Game.prototype.makeLeaderActive = function(leader) {
	leader.inputEnabled = true;
	leader.events.onInputDown.add(G.moveLeader, this);
}

Game.prototype.moveLeader = function(leader){
	G.phaser.textAction.text="Select an adjacent providence to move your leader. (click the middle)";
	G.phaser.input.onUp.add(G.checkAdj);
}

Game.prototype.checkAdj = function(){
	if(G.phaser.gameState != "military"){
		return;
	}
	var countries = [
	new Phaser.Rectangle(615,248,350,120), //base
	new Phaser.Rectangle(885,210,150,100), //noricum
	new Phaser.Rectangle(682,155,240,125), //raetia
	new Phaser.Rectangle(713,108,250,80), //germaniaSup
	new Phaser.Rectangle(643,24,210,110), //germaniaInf
	new Phaser.Rectangle(465,73,300,150), //belgica
	new Phaser.Rectangle(325,94,220,200), //lugudunensis
	new Phaser.Rectangle(220,2,420,125), //britannia
	new Phaser.Rectangle(150,162,225,110), //aquitania
	new Phaser.Rectangle(202,236,250,120), //narbonensis
	new Phaser.Rectangle(440,194,280,130) //aepes
	]

	var vpPts = [
		0,5,3,6,10,6,6,10,10,6,3
	]
	var xInput = G.phaser.input.activePointer.positionDown.x;
	var yInput = G.phaser.input.activePointer.positionDown.y;

	for(i=0;i<countries.length;i++){
		if(countries[i].contains(xInput,yInput)){
			if(G.phaser.leaderLoc.intersects(countries[i])){
				G.phaser.leader.getAt(0).position.x = countries[i].x + 100;
				G.phaser.leader.getAt(0).position.y = countries[i].y ;
				G.phaser.incX = 0;
				G.phaser.incY = 0;
				G.phaser.leaderLoc = countries[i];
				G.phaser.VPs += vpPts[i];
			}
		}
	}

	if(G.phaser.leaderLoc != countries[0]){
		G.phaser.gameState = "bonusAction";
	}
}

Game.prototype.constructionAction = function(){
	G.phaser.textAction.text = "Select a little dude to move to camp or click on a tile followed by a worker in camp to gain tile";
	G.phaser.cTiles.forEach(G.makeActive, this, true);
	G.phaser.littlePeople.forEach(G.makeLPActive, this, true);
}

Game.prototype.makeActive = function(tile){
	tile.inputEnabled = true;
	tile.events.onInputDown.add(G.moveConstructTile, tile);
}

Game.prototype.makeLPActive = function(littleDude){
	littleDude.inputEnabled = true;
	littleDude.events.onInputDown.add(G.moveWorker, this);
}

Game.prototype.moveConstructTile = function(tile){ //move game piece to correct location
	if(G.phaser.gameState != "construction"){
		return;
	}
	var validAction = false;
	G.phaser.littlePeople.forEach(function(dude){
		if(G.phaser.constructionCamp.contains(dude.position.x, dude.position.y)){
			validAction = true;
		}
	}, this, true);

	if(validAction == true){
		G.phaser.lastPositionX = tile.position.x;
		G.phaser.lastPositionY = tile.position.y;
		//Place Tile Correctly on Player Board
		if(tile.type == "Stairs"){
			tile.position.x = 285;
			tile.position.y = 1325;
		}
		else if(tile.type == "Door"){
			tile.position.x = 285;
			tile.position.y = 1395;
		}
		else if(tile.type == "Fountain"){
			tile.position.x = 285;
			tile.position.y = 1450;
		}
		else if(tile.type == "Roof"){
			tile.position.x = 285;
			tile.position.y = 1510;
		}
		else if(tile.type == "Window"){
			tile.position.x = 285;
			tile.position.y = 1575;
		}
		var firstTile = true; //check if tile added is first tile on player board of that kind
		G.phaser.cTiles.forEach(function(allTiles){
			if(allTiles.position.x == tile.position.x && allTiles.position.y == tile.position.y && allTiles != tile){
				firstTile = false;
			}
		}, this, true);
		if(firstTile == true){
			if(tile.type == "Stairs"){
				G.phaser.gameState = "forum";
				G.phaser.textAction.text = "Bonus Forum Action!";
			}
			else if(tile.type == "Door"){
				G.phaser.gameState = "senate";
				G.phaser.textAction.text = "Bonus Senate Action!";
				G.senateSpaces(G.phaser.currentPlayerMarker);
			}
			else if(tile.type == "Roof"){
				G.phaser.gameState = "trajan";
				G.phaser.textAction.text = "Bonus Trajan Action!";
			}
			else if(tile.type == "Fountain"){
				G.phaser.gameState = "seaport";
				G.phaser.textAction.text = "Bonus Seaport Action!";
			}
			else if(tile.type == "Window"){
				G.phaser.gameState = "military";
				G.phaser.textAction.text = "Bonus Military Action!";
				G.militaryLogic();
			}
		}
		G.phaser.textAction.text = "Select the worker you wish to move to that space";
		G.phaser.gameState = "moveWorker";
	}
	else{
		G.phaser.textAction.text = "Please move a worker to your camp";
		G.phaser.gameState = "moveToWorkerCamp";
	}
}

Game.prototype.moveWorker = function(littleDude){ //move game piece to correct location
	if(G.phaser.gameState == "bonusAction"){
		return;
	}
	if(G.phaser.gameState == "moveLittleDudeToCamp"){
		console.log("move dude to camp");
		littleDude.position.x = 750 + G.phaser.incX;
		littleDude.position.y = 280 + G.phaser.incY;
		G.phaser.incX +=10;
		if(G.phaser.incX > 40){
			G.phaser.incX=0;
			G.phaser.incY+=10;
		}
		G.phaser.gameState = "bonusAction";
	}
	else if(G.phaser.lpStartBox.contains(littleDude.position.x, littleDude.position.y) && G.phaser.gameState == "moveToWorkerCamp" || G.phaser.gameState == "construction"){
		littleDude.position.x = 580;
		littleDude.position.y = 600;
		G.phaser.gameState = "bonusAction";
	}
	else if(G.phaser.gameState == "moveWorker"){
		littleDude.position.x = G.phaser.lastPositionX;
		littleDude.position.y = G.phaser.lastPositionY;
		G.phaser.gameState = "bonusAction";
	}
	else {
		littleDude.position.x = G.phaser.leader.getAt(0).position.x + 25;
		littleDude.position.y = G.phaser.leader.getAt(0).position.y + 35;
		G.phaser.gameState = "bonusAction";
	}
}
