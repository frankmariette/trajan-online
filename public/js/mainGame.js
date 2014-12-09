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
	this.hand;
	this.playerID;

	// Phaser bootstrapping
	this.phaser = new Phaser.Game(1600, 1800, Phaser.AUTO, 'gameboard', {preload: this.phaserPreload, create: this.phaserCreate, update: this.phaserUpdate});
}


Game.prototype.phaserPreload = function() {
		//GAME BOARD
		G.phaser.load.image('gameBoard', '/assets/gameBoardFinal.png');
    G.phaser.load.image('playerBoard', '/assets/pBoard.png');

		//PLAYER PIECES
		G.phaser.load.image('redBigTree', '/assets/redBigTree.png');
		G.phaser.load.image('blueBigTree', '/assets/blueBigTree.png');
		G.phaser.load.image('grayBigTree', '/assets/grayBigTree.png');
		G.phaser.load.image('greenBigTree', '/assets/greenBigTree.png');
		G.phaser.load.image('blueLittleDude', '/assets/blueLittleDude.png');
		G.phaser.load.image('redLittleDude', '/assets/redLittleDude.png');
		G.phaser.load.image('grayLittleDude', '/assets/grayLittleDude.png');
		G.phaser.load.image('greenLittleDude', '/assets/greenLittleDude.png');
		G.phaser.load.image('pMarkBlue', '/assets/playerMarkBlue.png');
		G.phaser.load.image('pMarkGreen', '/assets/playerMarkGreen.png');
		G.phaser.load.image('pMarkGray', '/assets/playerMarkGray.png');
		G.phaser.load.image('pMarkRed', '/assets/playerMarkRed.png');



		//CARDS
		G.phaser.load.image('wheat', '/assets/cards/cWheat.png');
		G.phaser.load.image('bearSkin', '/assets/cards/cBearSkin.png');
		G.phaser.load.image('bling', '/assets/cards/cBling.png');
		G.phaser.load.image('lamp', '/assets/cards/cAladdinsLamp.png');
		G.phaser.load.image('bull', '/assets/cards/cBull.png');
		G.phaser.load.image('fish', '/assets/cards/cFish.png');
		G.phaser.load.image('scroll', '/assets/cards/cScroll.png');

		//TRAJAN TILES
    G.phaser.load.image('tt_VP_yellow_white', '/assets/trajanTiles/tTile00.png');
    G.phaser.load.image('tt_VP_yellow_yellow', '/assets/trajanTiles/tTile04.png');
    G.phaser.load.image('tt_bread_pink_pink', '/assets/trajanTiles/tTile07.png');
    G.phaser.load.image('tt_religion_white_white', '/assets/trajanTiles/tTile09.png');
    G.phaser.load.image('tt_games_green_green', '/assets/trajanTiles/tTile10.png');
    G.phaser.load.image('tt_religion_white_green', '/assets/trajanTiles/tTile14.png');
    G.phaser.load.image('tt_VP_white_white', '/assets/trajanTiles/tTile29.png');
    G.phaser.load.image('tt_bread_green_green', '/assets/trajanTiles/tTile30.png');
    G.phaser.load.image('tt_religion_blue_orange', '/assets/trajanTiles/tTile33.png');
    G.phaser.load.image('tt_games_pink_green', '/assets/trajanTiles/tTile36.png');
    G.phaser.load.image('tt_VP_orange_white', '/assets/trajanTiles/tTile39.png');
    G.phaser.load.image('tt_VP_orange_orange', '/assets/trajanTiles/tTile42.png');
    G.phaser.load.image('tt_games_yellow_green', '/assets/trajanTiles/tTile43.png');
    G.phaser.load.image('tt_bread_orange_green', '/assets/trajanTiles/tTile44.png');
    G.phaser.load.image('tt_VP_blue_white', '/assets/trajanTiles/tTile46.png');
    G.phaser.load.image('tt_VP_pink_pink', '/assets/trajanTiles/tTile51.png');
		//CONSTRUCTION TILES
		G.phaser.load.image('cDoorTile', '/assets/cDoorTile.png');
		G.phaser.load.image('cTileRoof2', '/assets/constructionTiles/cTileRoof2.png');
		G.phaser.load.image('cTileRoof3', '/assets/constructionTiles/cTileRoof3.png');
		G.phaser.load.image('cTileRoof4', '/assets/constructionTiles/cTileRoof4.png');
		G.phaser.load.image('cTileRoof5', '/assets/constructionTiles/cTileRoof5.png');

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
    G.phaser.load.spritesheet('bonus', '/assets/bonusTiles/bonus00.png', 100, 156);
    G.phaser.load.spritesheet('bonus2', '/assets/bonusTiles/bonus01.png', 100, 156);

    G.phaser.load.spritesheet('ship1', '/assets/ship01.png', 174, 116);
		G.phaser.load.spritesheet('ship2', '/assets/seaportAssets/2ndBoatSpriteSheet.png', 174, 116);
		G.phaser.load.spritesheet('ship3', '/assets/seaportAssets/3rdShipSpriteSheet.png', 174, 116);

    G.phaser.load.image('actionMarkO', '/assets/actionMarkers/actionMarkerOrange.png');
    G.phaser.load.image('actionMarkG', '/assets/actionMarkers/actionMarkerGreen.png');
    G.phaser.load.image('actionMarkP', '/assets/actionMarkers/actionMarkerPink.png');
    G.phaser.load.image('actionMarkB', '/assets/actionMarkers/actionMarkerBlue.png');
    G.phaser.load.image('actionMarkW', '/assets/actionMarkers/actionMarkerWhite.png');
    G.phaser.load.image('actionMarkY', '/assets/actionMarkers/actionMarkerYellow.png');
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
  cTile0.player = "none";
	var cTile1 = G.phaser.cTiles.create(790, G.phaser.world.height - 1395, 'cDoorTile');
	cTile1.type = "Door";
  cTile1.player = "none";
	var cTile2 = G.phaser.cTiles.create(865, G.phaser.world.height - 1395, 'cDoorTile');
	cTile2.type = "Door";
  cTile2.player = "none";
	var cTile3 = G.phaser.cTiles.create(945, G.phaser.world.height - 1395, 'cDoorTile');
	cTile3.type = "Door";
  cTile3.player = "none";
	var cTile4 = G.phaser.cTiles.create(1020, G.phaser.world.height - 1395, 'cTileRoof5');
	cTile4.type = "Roof";
  cTile4.player = "none";
	var cTile5 = G.phaser.cTiles.create(710, G.phaser.world.height - 1318, 'cTileRoof4');
	cTile5.type = "Roof";
  cTile5.player = "none";
	var cTile6 = G.phaser.cTiles.create(790, G.phaser.world.height - 1318, 'cTileRoof5');
	cTile6.type = "Roof";
  cTile6.player = "none";
	var cTile7 = G.phaser.cTiles.create(865, G.phaser.world.height - 1318, 'cTileRoof3');
	cTile7.type = "Roof";
  cTile7.player = "none";
	var cTile8 = G.phaser.cTiles.create(945, G.phaser.world.height - 1318, 'cTileRoof4');
	cTile8.type = "Roof";
  cTile8.player = "none";
	var cTile9 = G.phaser.cTiles.create(1020, G.phaser.world.height - 1318, 'cTileRoof5');
	cTile9.type = "Roof";
  cTile9.player = "none";
	var cTile10 = G.phaser.cTiles.create(710, G.phaser.world.height - 1241, 'cTileRoof3');
	cTile10.type = "Roof";
  cTile10.player = "none";
	var cTile11 = G.phaser.cTiles.create(790, G.phaser.world.height - 1241, 'cTileRoof2');
	cTile11.type = "Roof";
  cTile11.player = "none";
	var cTile12 = G.phaser.cTiles.create(865, G.phaser.world.height - 1241, 'cTileRoof5');
	cTile12.type = "Roof";
  cTile12.player = "none";
	var cTile13 = G.phaser.cTiles.create(945, G.phaser.world.height - 1241, 'cTileRoof4');
	cTile13.type = "Roof";
  cTile13.player = "none";
	var cTile14 = G.phaser.cTiles.create(1020, G.phaser.world.height - 1241, 'cTileRoof5');
	cTile14.type = "Roof";
  cTile14.player = "none";
	var cTile15 = G.phaser.cTiles.create(710, G.phaser.world.height - 1166, 'cTileRoof5');
	cTile15.type = "Roof";
  cTile15.player = "none";
	var cTile16 = G.phaser.cTiles.create(790, G.phaser.world.height - 1166, 'cTileRoof3');
	cTile16.type = "Roof";
  cTile16.player = "none";
	var cTile17 = G.phaser.cTiles.create(865, G.phaser.world.height - 1166, 'cTileRoof2');
	cTile17.type = "Roof";
  cTile17.player = "none";
	var cTile18 = G.phaser.cTiles.create(945, G.phaser.world.height - 1166, 'cTileRoof3');
	cTile18.type = "Roof";
  cTile18.player = "none";
	var cTile19 = G.phaser.cTiles.create(1020, G.phaser.world.height - 1166, 'cTileRoof5');
	cTile19.type = "Roof";
	cTile19.player = "none";

  G.phaser.tTiles = G.phaser.add.group();

  var tTile0 = G.phaser.tTiles.create(253, G.phaser.world.height - 1058, 'tt_VP_yellow_white');
	tTile0.colorOne = "yellow";
	tTile0.colorTwo = "white";
	tTile0.type = "VP";
	tTile0.player = "none";
  var tTile1 = G.phaser.tTiles.create(422, G.phaser.world.height - 1058, 'tt_bread_pink_pink');
	tTile1.colorOne = "pink";
	tTile1.colorTwo = "pink";
	tTile1.type = "bread";
  tTile1.player = "none";
	var tTile2 = G.phaser.tTiles.create(253, G.phaser.world.height - 968, 'tt_religion_white_white');
	tTile2.colorOne = "white";
	tTile2.colorTwo = "white";
	tTile2.type = "religion";
	tTile2.player = "none";
	var tTile3 = G.phaser.tTiles.create(422, G.phaser.world.height - 968, 'tt_games_green_green');
	tTile3.colorOne = "green";
	tTile3.colorTwo = "green";
	tTile3.type = "games";
  tTile3.player = "none";
	var tTile4 = G.phaser.tTiles.create(253, G.phaser.world.height - 884, 'tt_VP_yellow_yellow');
	tTile4.colorOne = "yellow";
	tTile4.colorTwo = "yellow";
	tTile4.type = "VP";
  tTile4.player = "none";
	var tTile5 = G.phaser.tTiles.create(422, G.phaser.world.height - 884, 'tt_religion_white_green');
	tTile5.colorOne = "green";
	tTile5.colorTwo = "white";
	tTile5.type = "religion";
	tTile5.player = "none";
	var tTile6 = G.phaser.tTiles.create(253, G.phaser.world.height - 1058, 'tt_VP_orange_white');
	tTile6.colorOne = "orange";
	tTile6.colorTwo = "white";
	tTile6.type = "VP";
	tTile6.player = "none";
	var tTile7 = G.phaser.tTiles.create(422, G.phaser.world.height - 1058, 'tt_religion_blue_orange');
	tTile7.colorOne = "blue";
	tTile7.colorTwo = "orange";
	tTile7.type = "religion";
	tTile7.player = "none";
	var tTile8 = G.phaser.tTiles.create(253, G.phaser.world.height - 968, 'tt_bread_green_green');
	tTile8.colorOne = "green";
	tTile8.colorTwo = "green";
	tTile8.type = "bread";
	tTile8.player = "none";
	var tTile9 = G.phaser.tTiles.create(422, G.phaser.world.height - 968, 'tt_VP_orange_white');
	tTile9.colorOne = "orange";
	tTile9.colorTwo = "white";
	tTile9.type = "VP";
	tTile9.player = "none";
	var tTile10 = G.phaser.tTiles.create(253, G.phaser.world.height - 884, 'tt_games_pink_green');
	tTile10.colorOne = "pink";
	tTile10.colorTwo = "green";
	tTile10.type = "games";
	tTile10.player = "none";
	var tTile11 = G.phaser.tTiles.create(422, G.phaser.world.height - 884, 'tt_VP_orange_orange');
	tTile11.colorOne = "orange";
	tTile11.colorTwo = "orange";
	tTile11.type = "VP";
	tTile11.player = "none";
	var tTile12 = G.phaser.tTiles.create(253, G.phaser.world.height - 1058, 'tt_games_yellow_green');
	tTile12.colorOne = "yellow";
	tTile12.colorTwo = "green";
	tTile12.type = "games";
	tTile12.player = "none";
	var tTile13 = G.phaser.tTiles.create(422, G.phaser.world.height - 1058, 'tt_bread_orange_green');
	tTile13.colorOne = "orange";
	tTile13.colorTwo = "green";
	tTile13.type = "bread";
	tTile13.player = "none";
	var tTile14 = G.phaser.tTiles.create(253, G.phaser.world.height - 968, 'tt_VP_blue_white');
	tTile14.colorOne = "blue";
	tTile14.colorTwo = "white";
	tTile14.type = "VP";
	tTile14.player = "none";
	var tTile15 = G.phaser.tTiles.create(422, G.phaser.world.height - 968, 'tt_VP_pink_pink');
	tTile15.colorOne = "pink";
	tTile15.colorTwo = "pink";
	tTile15.type = "VP";
	tTile15.player = "none";
	var tTile16 = G.phaser.tTiles.create(253, G.phaser.world.height - 884, 'tt_religion_white_green');
	tTile16.colorOne = "white";
	tTile16.colorTwo = "green";
	tTile16.type = "religion";
	tTile16.player = "none";
	var tTile17 = G.phaser.tTiles.create(422, G.phaser.world.height - 884, 'tt_VP_yellow_white');
	tTile17.colorOne = "yellow";
	tTile17.colorTwo = "white";
	tTile17.type = "VP";
	tTile17.player = "none";

  G.phaser.fTiles = G.phaser.add.group();

  var fTile0 = G.phaser.fTiles.create(708, G.phaser.world.height - 1035, 'ftGames');
	fTile0.type = "games";
	fTile0.player = "none";
  var fTile1 = G.phaser.fTiles.create(778, G.phaser.world.height - 1035, 'ftComWC');
	fTile1.type = "orange";
	fTile1.player = "none";
  var fTile2 = G.phaser.fTiles.create(843, G.phaser.world.height - 1035, 'ftSeaBonus');
	fTile2.type = "seaBonus";
	fTile2.player = "none";
  var fTile3 = G.phaser.fTiles.create(910, G.phaser.world.height - 1035, 'ftForumBonus');
	fTile3.type = "forumBonus";
	fTile3.player = "none";
  var fTile4 = G.phaser.fTiles.create(977, G.phaser.world.height - 1035, 'ftSenateBonus');
	fTile4.type = "senateBonus";
	fTile4.player = "none";
  var fTile5 = G.phaser.fTiles.create(708, G.phaser.world.height - 968, 'ftResourceWC');
	fTile5.type = "green";
	fTile5.player = "none";
  var fTile6 = G.phaser.fTiles.create(778, G.phaser.world.height - 968, 'ftBread');
	fTile6.type = "bread";
	fTile6.player = "none";
  var fTile7 = G.phaser.fTiles.create(843, G.phaser.world.height - 968, 'ftConstBonus');
	fTile7.type = "conBonus";
	fTile7.player = "none";
  var fTile8 = G.phaser.fTiles.create(910, G.phaser.world.height - 968, 'ftSenatePlus2');
	fTile8.type = "sPlus2";
	fTile8.player = "none";
  var fTile9 = G.phaser.fTiles.create(977, G.phaser.world.height - 968, 'ftMilitaryBonus');
	fTile9.type = "militaryBonus";
  fTile9.player = "none";
	var fTile10 = G.phaser.fTiles.create(708, G.phaser.world.height - 901, 'ftSenatePlus4');
	fTile10.type = "sPlus4";
  fTile10.player = "none";
	var fTile11 = G.phaser.fTiles.create(778, G.phaser.world.height - 901, 'ftDoubleWC');
	fTile11.type = "yellow";
  fTile11.player = "none";
	var fTile12 = G.phaser.fTiles.create(843, G.phaser.world.height - 901, 'ftTrajanBonus');
	fTile12.type = "trajanBonus";
  fTile12.player = "none";
	var fTile13 = G.phaser.fTiles.create(910, G.phaser.world.height - 901, 'ftSenatePlus3');
	fTile13.type = "sPlus3";
  fTile13.player = "none";
	var fTile14 = G.phaser.fTiles.create(977, G.phaser.world.height - 901, 'ftReligion');
	fTile14.type = "religion";
	fTile14.player = "none";
  G.phaser.mTiles = G.phaser.add.group();

  var britannia = G.phaser.mTiles.create(380, G.phaser.world.height - 1783, 'ftGames');
	britannia.player = "none";
  var germaniaInferior = G.phaser.mTiles.create(725, G.phaser.world.height - 1735, 'ftGames');
	germaniaInferior.player = "none";
  var germaniaSuperior = G.phaser.mTiles.create(910, G.phaser.world.height - 1700, 'ftGames');
	germaniaSuperior.player = "none";
  var belgica = G.phaser.mTiles.create(553, G.phaser.world.height - 1676, 'ftGames');
	belgica.player = "none";
  var lugudunensis = G.phaser.mTiles.create(388, G.phaser.world.height - 1650, 'ftGames');
	lugudunensis.player = "none";
  var aquitania = G.phaser.mTiles.create(220, G.phaser.world.height - 1598, 'ftGames');
	aquitania.player = "none";
  var narbonensis = G.phaser.mTiles.create(280, G.phaser.world.height - 1485, 'ftGames');
	narbonensis.player = "none";
  var alpes = G.phaser.mTiles.create(490, G.phaser.world.height - 1555, 'ftGames');
	alpes.player = "none";
  var raetia = G.phaser.mTiles.create(780, G.phaser.world.height - 1614, 'ftGames');
	raetia.player = "none";
  var noricum = G.phaser.mTiles.create(960, G.phaser.world.height - 1596, 'ftGames');
	noricum.player = "none";

  G.phaser.bTiles = G.phaser.add.group(); // gold things

  var bTile0 = G.phaser.bTiles.create(850, G.phaser.world.height - 750, 'bonus');
  var bTile1 = G.phaser.bTiles.create(960, G.phaser.world.height - 750, 'bonus2');

  G.phaser.ships = G.phaser.add.group();

  var ship0 = G.phaser.ships.create(290, G.phaser.world.height - 1310, 'ship1');
	ship0.side = "color";
	var ship1 = G.phaser.ships.create(165, G.phaser.world.height - 1225, 'ship2');
	ship1.side = "color";
	var ship2 = G.phaser.ships.create(435, G.phaser.world.height - 1390, 'ship3');
	ship2.side = "color";

	// Tray markers
  G.phaser.aMarks1 = G.phaser.add.group();
  var aMark0 = G.phaser.aMarks1.create(775, G.phaser.world.height-375, 'actionMarkO');
	aMark0.color = "orange";
  var aMark1 = G.phaser.aMarks1.create(810, G.phaser.world.height-175, 'actionMarkO');
	aMark1.color = "orange";
  var aMark2 = G.phaser.aMarks1.create(660, G.phaser.world.height-175, 'actionMarkG');
	aMark2.color = "green";
  var aMark3 = G.phaser.aMarks1.create(810, G.phaser.world.height-340, 'actionMarkG');
	aMark3.color = "green";
  var aMark4 = G.phaser.aMarks1.create(675, G.phaser.world.height-375, 'actionMarkY');
	aMark4.color = "yellow";
  var aMark5 = G.phaser.aMarks1.create(775, G.phaser.world.height-175, 'actionMarkY');
	aMark5.color = "yellow";
  var aMark6 = G.phaser.aMarks1.create(705, G.phaser.world.height-375, 'actionMarkB');
	aMark6.color = "blue";
  var aMark7 = G.phaser.aMarks1.create(705, G.phaser.world.height-175, 'actionMarkB');
	aMark7.color = "blue";
  var aMark8 = G.phaser.aMarks1.create(825, G.phaser.world.height-260, 'actionMarkW');
	aMark8.color = "white";
  var aMark9 = G.phaser.aMarks1.create(645, G.phaser.world.height-280, 'actionMarkW');
	aMark9.color = "white";
  var aMark10 = G.phaser.aMarks1.create(620, G.phaser.world.height-280, 'actionMarkP');
	aMark10.color = "pink";
  var aMark11 = G.phaser.aMarks1.create(845, G.phaser.world.height-280, 'actionMarkP');
	aMark11.color = "pink";

  G.phaser.aMarks2 = G.phaser.add.group();
	var aMark12 = G.phaser.aMarks2.create(775, G.phaser.world.height-375, 'actionMarkO');
	aMark12.color = "orange";
	var aMark13 = G.phaser.aMarks2.create(810, G.phaser.world.height-175, 'actionMarkO');
	aMark13.color = "orange";
	var aMark14 = G.phaser.aMarks2.create(660, G.phaser.world.height-175, 'actionMarkG');
	aMark14.color = "green";
	var aMark15 = G.phaser.aMarks2.create(810, G.phaser.world.height-340, 'actionMarkG');
	aMark15.color = "green";
	var aMark16 = G.phaser.aMarks2.create(675, G.phaser.world.height-375, 'actionMarkY');
	aMark16.color = "yellow";
	var aMark17 = G.phaser.aMarks2.create(775, G.phaser.world.height-175, 'actionMarkY');
	aMark17.color = "yellow";
	var aMark18 = G.phaser.aMarks2.create(705, G.phaser.world.height-375, 'actionMarkB');
	aMark18.color = "blue";
	var aMark19 = G.phaser.aMarks2.create(705, G.phaser.world.height-175, 'actionMarkB');
	aMark19.color = "blue";
	var aMark20 = G.phaser.aMarks2.create(825, G.phaser.world.height-260, 'actionMarkW');
	aMark20.color = "white";
	var aMark21 = G.phaser.aMarks2.create(645, G.phaser.world.height-280, 'actionMarkW');
	aMark21.color = "white";
	var aMark22 = G.phaser.aMarks2.create(620, G.phaser.world.height-280, 'actionMarkP');
	aMark22.color = "pink";
	var aMark23 = G.phaser.aMarks2.create(845, G.phaser.world.height-280, 'actionMarkP');
	aMark23.color = "pink";

  G.phaser.aMarks3 = G.phaser.add.group();
	var aMark24 = G.phaser.aMarks3.create(775, G.phaser.world.height-375, 'actionMarkO');
	aMark24.color = "orange";
	var aMark25 = G.phaser.aMarks3.create(810, G.phaser.world.height-175, 'actionMarkO');
	aMark25.color = "orange";
	var aMark26 = G.phaser.aMarks3.create(660, G.phaser.world.height-175, 'actionMarkG');
	aMark26.color = "green";
	var aMark27 = G.phaser.aMarks3.create(810, G.phaser.world.height-340, 'actionMarkG');
	aMark27.color = "green";
	var aMark28 = G.phaser.aMarks3.create(675, G.phaser.world.height-375, 'actionMarkY');
	aMark28.color = "yellow";
	var aMark29 = G.phaser.aMarks3.create(775, G.phaser.world.height-175, 'actionMarkY');
	aMark29.color = "yellow";
	var aMark30 = G.phaser.aMarks3.create(705, G.phaser.world.height-375, 'actionMarkB');
	aMark30.color = "blue";
	var aMark31 = G.phaser.aMarks3.create(705, G.phaser.world.height-175, 'actionMarkB');
	aMark31.color = "blue";
	var aMark32 = G.phaser.aMarks3.create(825, G.phaser.world.height-260, 'actionMarkW');
	aMark32.color = "white";
	var aMark33 = G.phaser.aMarks3.create(645, G.phaser.world.height-280, 'actionMarkW');
	aMark33.color = "white";
	var aMark34 = G.phaser.aMarks3.create(620, G.phaser.world.height-280, 'actionMarkP');
	aMark34.color = "pink";
	var aMark35 = G.phaser.aMarks3.create(845, G.phaser.world.height-280, 'actionMarkP');
	aMark35.color = "pink";

  G.phaser.aMarks4 = G.phaser.add.group();
	var aMark36 = G.phaser.aMarks4.create(775, G.phaser.world.height-375, 'actionMarkO');
	aMark36.color = "orange";
	var aMark37 = G.phaser.aMarks4.create(810, G.phaser.world.height-175, 'actionMarkO');
	aMark37.color = "orange";
	var aMark38 = G.phaser.aMarks4.create(660, G.phaser.world.height-175, 'actionMarkG');
	aMark38.color = "green";
	var aMark39 = G.phaser.aMarks4.create(810, G.phaser.world.height-340, 'actionMarkG');
	aMark39.color = "green";
	var aMark40 = G.phaser.aMarks4.create(675, G.phaser.world.height-375, 'actionMarkY');
	aMark40.color = "yellow";
	var aMark41 = G.phaser.aMarks4.create(775, G.phaser.world.height-175, 'actionMarkY');
	aMark41.color = "yellow";
	var aMark42 = G.phaser.aMarks4.create(705, G.phaser.world.height-375, 'actionMarkB');
	aMark42.color = "blue";
	var aMark43 = G.phaser.aMarks4.create(705, G.phaser.world.height-175, 'actionMarkB');
	aMark43.color = "blue";
	var aMark44 = G.phaser.aMarks4.create(825, G.phaser.world.height-260, 'actionMarkW');
	aMark44.color = "white";
	var aMark45 = G.phaser.aMarks4.create(645, G.phaser.world.height-280, 'actionMarkW');
	aMark45.color = "white";
	var aMark46 = G.phaser.aMarks4.create(620, G.phaser.world.height-280, 'actionMarkP');
	aMark46.color = "pink";
	var aMark47 = G.phaser.aMarks4.create(845, G.phaser.world.height-280, 'actionMarkP');
	aMark47.color = "pink";
  G.phaser.aMarks = G.phaser.add.group();

  G.phaser.cards = G.phaser.add.group();
	G.phaser.hand = [true, true, true, true];
  var cCard0 = G.phaser.cards.create(1000, G.phaser.world.height-500, 'wheat');
	cCard0.player = "none";
  var cCard1 = G.phaser.cards.create(1125, G.phaser.world.height-500, 'bull');
	cCard1.player = "none";
  var cCard2 = G.phaser.cards.create(1250, G.phaser.world.height-500, 'bling');
	cCard2.player = "none";
	var cCard3 = G.phaser.cards.create(1000, G.phaser.world.height-500, 'lamp');
	cCard3.player = "none";
	var cCard4 = G.phaser.cards.create(1125, G.phaser.world.height-500, 'bearSkin');
	cCard4.player = "none";
	var cCard5 = G.phaser.cards.create(1250, G.phaser.world.height-500, 'bling');
	cCard5.player = "none";
	var cCard6 = G.phaser.cards.create(1000, G.phaser.world.height-500, 'fish');
	cCard6.player = "none";
	var cCard7 = G.phaser.cards.create(1125, G.phaser.world.height-500, 'scroll');
	cCard7.player = "none";
	var cCard8 = G.phaser.cards.create(1250, G.phaser.world.height-500, 'bull');
	cCard8.player = "none";
	var cCard9 = G.phaser.cards.create(1000, G.phaser.world.height-500, 'wheat');
	cCard9.player = "none";
	var cCard10 = G.phaser.cards.create(1125, G.phaser.world.height-500, 'bearSkin');
	cCard10.player = "none";
	var cCard11 = G.phaser.cards.create(1250, G.phaser.world.height-500, 'bling');
	cCard11.player = "none";
	var cCard12 = G.phaser.cards.create(1000, G.phaser.world.height-500, 'scroll');
	cCard12.player = "none";
	var cCard13 = G.phaser.cards.create(1125, G.phaser.world.height-500, 'fish');
	cCard13.player = "none";
	var cCard14 = G.phaser.cards.create(1250, G.phaser.world.height-500, 'lamp');
	cCard14.player = "none";


	G.phaser.pMarks = G.phaser.add.group();
  var pMarkGreen = G.phaser.pMarks.create(253, G.phaser.world.height-700, 'pMarkGreen');
	var pMarkRed = G.phaser.pMarks.create(303, G.phaser.world.height-700, 'pMarkRed');
	var pMarkBlue = G.phaser.pMarks.create(284, G.phaser.world.height-725, 'pMarkBlue');
	var pMarkGray = G.phaser.pMarks.create(282, G.phaser.world.height-675, 'pMarkGray');
	G.phaser.currentPlayerMarker = G.phaser.pMarks.getAt(3);

  seaportTray = new Phaser.Circle(695, G.phaser.world.height-350, 75);
  forumTray = new Phaser.Circle(802, G.phaser.world.height-350, 75);
  militaryTray = new Phaser.Circle(860, G.phaser.world.height-255, 75);
  senateTray = new Phaser.Circle(805, G.phaser.world.height-160, 75);
  trajanTray = new Phaser.Circle(695, G.phaser.world.height-160, 80);
  constructionTray = new Phaser.Circle(640, G.phaser.world.height-255, 75);
  markerBounds = new Phaser.Rectangle(630, G.phaser.world.height-510, 300, 30);

	G.phaser.leader = G.phaser.add.group();
	var bigTreeGreen = G.phaser.leader.create(725, G.phaser.world.height - 1520, 'greenBigTree');
  var bigTreeRed = G.phaser.leader.create(745, G.phaser.world.height - 1520, 'redBigTree');
  var bigTreeBlue = G.phaser.leader.create(765, G.phaser.world.height - 1520, 'blueBigTree');
  var bigTreeGray = G.phaser.leader.create(785, G.phaser.world.height - 1520, 'grayBigTree');
  G.phaser.currentLeader = G.phaser.leader.getAt(3);


  // Al about that village lyfe
  G.phaser.littlePeople = G.phaser.add.group();
  var lp0 = G.phaser.littlePeople.create(925, G.phaser.world.height-450, 'greenLittleDude');
	var lp1 = G.phaser.littlePeople.create(925, G.phaser.world.height-430, 'greenLittleDude');
	var lp2 = G.phaser.littlePeople.create(925, G.phaser.world.height-410, 'greenLittleDude');
	var lp3 = G.phaser.littlePeople.create(925, G.phaser.world.height-390, 'greenLittleDude');
	var lp4 = G.phaser.littlePeople.create(925, G.phaser.world.height-370, 'greenLittleDude');
	var lp5 = G.phaser.littlePeople.create(925, G.phaser.world.height-350, 'greenLittleDude');
	var lp6 = G.phaser.littlePeople.create(945, G.phaser.world.height-450, 'greenLittleDude');
	var lp7 = G.phaser.littlePeople.create(945, G.phaser.world.height-430, 'greenLittleDude');
	var lp8 = G.phaser.littlePeople.create(945, G.phaser.world.height-410, 'greenLittleDude');
	var lp9 = G.phaser.littlePeople.create(945, G.phaser.world.height-390, 'greenLittleDude');
	var lp10 = G.phaser.littlePeople.create(945, G.phaser.world.height-370, 'greenLittleDude');
	var lp11 = G.phaser.littlePeople.create(945, G.phaser.world.height-350, 'greenLittleDude');
	var lp12 = G.phaser.littlePeople.create(905, G.phaser.world.height-410, 'greenLittleDude');
	var lp13 = G.phaser.littlePeople.create(905, G.phaser.world.height-390, 'greenLittleDude');
	var lp14 = G.phaser.littlePeople.create(905, G.phaser.world.height-370, 'greenLittleDude');
	var lp15 = G.phaser.littlePeople.create(750, G.phaser.world.height - 1500, 'greenLittleDude');
	var lp16 = G.phaser.littlePeople.create(580, 600, 'greenLittleDude');

	var lp17 = G.phaser.littlePeople.create(925, G.phaser.world.height-450, 'redLittleDude');
	var lp18 = G.phaser.littlePeople.create(925, G.phaser.world.height-430, 'redLittleDude');
	var lp19 = G.phaser.littlePeople.create(925, G.phaser.world.height-410, 'redLittleDude');
	var lp20 = G.phaser.littlePeople.create(925, G.phaser.world.height-390, 'redLittleDude');
	var lp21 = G.phaser.littlePeople.create(925, G.phaser.world.height-370, 'redLittleDude');
	var lp22 = G.phaser.littlePeople.create(925, G.phaser.world.height-350, 'redLittleDude');
	var lp23 = G.phaser.littlePeople.create(945, G.phaser.world.height-450, 'redLittleDude');
	var lp24 = G.phaser.littlePeople.create(945, G.phaser.world.height-430, 'redLittleDude');
	var lp25 = G.phaser.littlePeople.create(945, G.phaser.world.height-410, 'redLittleDude');
	var lp26 = G.phaser.littlePeople.create(945, G.phaser.world.height-390, 'redLittleDude');
	var lp27 = G.phaser.littlePeople.create(945, G.phaser.world.height-370, 'redLittleDude');
	var lp28 = G.phaser.littlePeople.create(945, G.phaser.world.height-350, 'redLittleDude');
	var lp29 = G.phaser.littlePeople.create(905, G.phaser.world.height-410, 'redLittleDude');
	var lp30 = G.phaser.littlePeople.create(905, G.phaser.world.height-390, 'redLittleDude');
	var lp31 = G.phaser.littlePeople.create(905, G.phaser.world.height-370, 'redLittleDude');
	var lp32 = G.phaser.littlePeople.create(750, G.phaser.world.height - 1500, 'redLittleDude');
	var lp33 = G.phaser.littlePeople.create(580, 600, 'redLittleDude');

	var lp34 = G.phaser.littlePeople.create(925, G.phaser.world.height-450, 'blueLittleDude');
	var lp35 = G.phaser.littlePeople.create(925, G.phaser.world.height-430, 'blueLittleDude');
	var lp36 = G.phaser.littlePeople.create(925, G.phaser.world.height-410, 'blueLittleDude');
	var lp37 = G.phaser.littlePeople.create(925, G.phaser.world.height-390, 'blueLittleDude');
	var lp38 = G.phaser.littlePeople.create(925, G.phaser.world.height-370, 'blueLittleDude');
	var lp39 = G.phaser.littlePeople.create(925, G.phaser.world.height-350, 'blueLittleDude');
	var lp40 = G.phaser.littlePeople.create(945, G.phaser.world.height-450, 'blueLittleDude');
	var lp41 = G.phaser.littlePeople.create(945, G.phaser.world.height-430, 'blueLittleDude');
	var lp42 = G.phaser.littlePeople.create(945, G.phaser.world.height-410, 'blueLittleDude');
	var lp43 = G.phaser.littlePeople.create(945, G.phaser.world.height-390, 'blueLittleDude');
	var lp44 = G.phaser.littlePeople.create(945, G.phaser.world.height-370, 'blueLittleDude');
	var lp45 = G.phaser.littlePeople.create(945, G.phaser.world.height-350, 'blueLittleDude');
	var lp46 = G.phaser.littlePeople.create(905, G.phaser.world.height-410, 'blueLittleDude');
	var lp47 = G.phaser.littlePeople.create(905, G.phaser.world.height-390, 'blueLittleDude');
	var lp48 = G.phaser.littlePeople.create(905, G.phaser.world.height-370, 'blueLittleDude');
	var lp49 = G.phaser.littlePeople.create(750, G.phaser.world.height - 1500, 'blueLittleDude');
	var lp50 = G.phaser.littlePeople.create(580, 600, 'blueLittleDude');

	var lp51 = G.phaser.littlePeople.create(925, G.phaser.world.height-450, 'grayLittleDude');
	var lp52 = G.phaser.littlePeople.create(925, G.phaser.world.height-430, 'grayLittleDude');
	var lp53 = G.phaser.littlePeople.create(925, G.phaser.world.height-410, 'grayLittleDude');
	var lp54 = G.phaser.littlePeople.create(925, G.phaser.world.height-390, 'grayLittleDude');
	var lp55 = G.phaser.littlePeople.create(925, G.phaser.world.height-370, 'grayLittleDude');
	var lp56 = G.phaser.littlePeople.create(925, G.phaser.world.height-350, 'grayLittleDude');
	var lp57 = G.phaser.littlePeople.create(945, G.phaser.world.height-450, 'grayLittleDude');
	var lp58 = G.phaser.littlePeople.create(945, G.phaser.world.height-430, 'grayLittleDude');
	var lp59 = G.phaser.littlePeople.create(945, G.phaser.world.height-410, 'grayLittleDude');
	var lp60 = G.phaser.littlePeople.create(945, G.phaser.world.height-390, 'grayLittleDude');
	var lp61 = G.phaser.littlePeople.create(945, G.phaser.world.height-370, 'grayLittleDude');
	var lp62 = G.phaser.littlePeople.create(945, G.phaser.world.height-350, 'grayLittleDude');
	var lp63 = G.phaser.littlePeople.create(905, G.phaser.world.height-410, 'grayLittleDude');
	var lp64 = G.phaser.littlePeople.create(905, G.phaser.world.height-390, 'grayLittleDude');
	var lp65 = G.phaser.littlePeople.create(905, G.phaser.world.height-370, 'grayLittleDude');
	var lp66 = G.phaser.littlePeople.create(750, G.phaser.world.height - 1500, 'grayLittleDude');
	var lp67 = G.phaser.littlePeople.create(580, 600, 'grayLittleDude');

  G.phaser.lpStartBox = new Phaser.Rectangle(890, G.phaser.world.height-475, 100, 180);
  G.phaser.legionairreCamp = new Phaser.Rectangle(705,G.phaser.world.height-1520, 200, 100);
  G.phaser.constructionCamp = new Phaser.Rectangle(500,G.phaser.world.height-1210, 200, 100);

  G.phaser.trajan1 = G.phaser.add.group();
  G.phaser.trajan2 = G.phaser.add.group();
  G.phaser.trajan3 = G.phaser.add.group();
  G.phaser.trajan4 = G.phaser.add.group();
  var arch1 = G.phaser.trajan1.create(605, G.phaser.world.height-435, 'tArch');
  var arch2 = G.phaser.trajan2.create(605, G.phaser.world.height-435, 'tArch');
	var arch3 = G.phaser.trajan3.create(605, G.phaser.world.height-435, 'tArch');
	var arch4 = G.phaser.trajan4.create(605, G.phaser.world.height-435, 'tArch');
	arch1.angle = -28;
	arch2.angle = -28;
	arch3.angle = -28;
	arch4.angle = -28;
  G.phaser.currentArch = G.phaser.trajan1;

	G.phaser.textAction = G.phaser.add.text(350, G.phaser.world.height - 550, '', {fill : '#ffffff'});
	G.phaser.textAction.text = "Loading...";

	G.phaser.gameState = "selectTray";
	G.phaser.linespot = 640;
	G.phaser.displace = -20;
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

Game.prototype.loadPlayersData = function(){
	var aMarkStartPosition;
	var lpStartPosition;
  var idIndex;
		if(G.phaser.currentPlayerMarker == G.phaser.pMarks.getAt(0)){
      idIndex = 1;
			G.phaser.currentPlayerMarker = G.phaser.pMarks.getAt(idIndex);
      G.phaser.currentLeader = G.phaser.leader.getAt(idIndex);
      G.phaser.currentArch = G.phaser.trajan2;
      G.phaser.currentArch.visible = true;
      G.phaser.trajan1.visible = false;
      G.phaser.trajan3.visible = false;
      G.phaser.trajan4.visible = false;
      G.phaser.currentArch.visible = true;
      G.phaser.aMarks = G.phaser.aMarks2;
      G.phaser.aMarks.visible = true;
      G.phaser.aMarks1.visible = false;
      G.phaser.aMarks3.visible = false;
      G.phaser.aMarks4.visible = false;
		}
		else if(G.phaser.currentPlayerMarker == G.phaser.pMarks.getAt(1)){
     idIndex = 2;
	   G.phaser.currentPlayerMarker = G.phaser.pMarks.getAt(idIndex);
     G.phaser.currentLeader = G.phaser.leader.getAt(idIndex);
     G.phaser.currentArch = G.phaser.trajan3;
     G.phaser.currentArch.visible = true;
     G.phaser.trajan1.visible = false;
     G.phaser.trajan2.visible = false;
     G.phaser.trajan4.visible = false;
     G.phaser.aMarks = G.phaser.aMarks3;
     G.phaser.aMarks.visible = true;
     G.phaser.aMarks1.visible = false;
     G.phaser.aMarks2.visible = false;
     G.phaser.aMarks4.visible = false;
		}
    else if(G.phaser.currentPlayerMarker == G.phaser.pMarks.getAt(2)){
		  idIndex = 3;
      G.phaser.currentPlayerMarker = G.phaser.pMarks.getAt(idIndex);
      G.phaser.currentLeader = G.phaser.leader.getAt(idIndex);
      G.phaser.currentArch = G.phaser.trajan4;
      G.phaser.currentArch.visible = true;
      G.phaser.trajan1.visible = false;
      G.phaser.trajan2.visible = false;
      G.phaser.trajan3.visible = false;
      G.phaser.aMarks = G.phaser.aMarks4;
      G.phaser.aMarks.visible = true;
      G.phaser.aMarks1.visible = false;
      G.phaser.aMarks2.visible = false;
      G.phaser.aMarks3.visible = false;
    }
    else{
      idIndex = 0;
      G.phaser.currentPlayerMarker = G.phaser.pMarks.getAt(idIndex);
      G.phaser.currentLeader = G.phaser.leader.getAt(idIndex);
      G.phaser.currentArch = G.phaser.trajan1;
      G.phaser.currentArch.visible = true;
      G.phaser.trajan3.visible = false;
      G.phaser.trajan2.visible = false;
      G.phaser.trajan4.visible = false;
      G.phaser.aMarks = G.phaser.aMarks1;
      G.phaser.aMarks.visible = true;
      G.phaser.aMarks4.visible = false;
      G.phaser.aMarks2.visible = false;
      G.phaser.aMarks3.visible = false;
    }
    G.phaser.playerID = idIndex;
		
	if(G.phaser.playerID == 0){
		lpStartPosition = 0;
	}
	else if(G.phaser.playerID == 1){
		lpStartPosition = 17;
	}
	else if(G.phaser.playerID == 2){
		lpStartPosition = 34;
	}
	else{
		lpStartPosition = 51;
	}
	
	G.phaser.littlePeople.forEach(function(dude){
		if(G.phaser.littlePeople.getIndex(dude) < lpStartPosition || G.phaser.littlePeople.getIndex(dude) >= (lpStartPosition+17)){
			dude.alive = false;
      dude.visible = false;
		}
		else{
			dude.alive = true;
      dude.visible = true;
		}
	}, this, true);

	G.phaser.mTiles.forEach(G.belongs, this, true, G.phaser.playerID);
	G.phaser.tTiles.forEach(G.belongs, this, true, G.phaser.playerID);
	G.phaser.fTiles.forEach(G.belongs, this, true, G.phaser.playerID);
	G.phaser.cTiles.forEach(G.belongs, this, true, G.phaser.playerID);
	G.phaser.cards.forEach(G.belongs, this, true, G.phaser.playerID);
}

Game.prototype.belongs = function(tile, player){
	if(tile.player == "none" || tile.player == player){
		tile.visible = true;
	}
	else{
		tile.visible = false;
	}
}

Game.prototype.turnLogic = function() {
	G.loadPlayersData();
	G.phaser.linespot = 640;
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
	G.phaser.displace = -20;
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
				G.checkTrajanTile(0, seaportTray);
				G.seaportLogic();
			}
			else if(currentTray == forumTray){
				G.phaser.gameState = 'forum';
				G.checkTrajanTile(1, forumTray);
				G.getForumTile();
			}
			else if(currentTray == militaryTray){
				G.phaser.gameState = 'military';
				G.checkTrajanTile(2, militaryTray);
				G.militaryLogic();
			}
			else if(currentTray == senateTray){
				G.phaser.gameState = 'senate';
				G.checkTrajanTile(3, senateTray);
				G.senateSpaces(G.phaser.currentPlayerMarker);
			}
			else if(currentTray == trajanTray){
				G.phaser.gameState = 'trajan';
				G.checkTrajanTile(4, trajanTray);
				G.getTrajanTile();
			}
			else if(currentTray == constructionTray){
				G.phaser.gameState = 'construction';
				G.checkTrajanTile(5, constructionTray);
				G.constructionAction();
			}
		}
}

Game.prototype.checkTrajanTile = function(trayIndex, currentTray){
	var trayBoxes = [
		new Phaser.Rectangle(603, G.phaser.world.height-480, 100, 100),
		new Phaser.Rectangle(830, G.phaser.world.height-470, 100, 100),
		new Phaser.Rectangle(900, G.phaser.world.height-300, 100, 100),
		new Phaser.Rectangle(795, G.phaser.world.height-100, 100, 100),
		new Phaser.Rectangle(630, G.phaser.world.height-139, 100, 100),
		new Phaser.Rectangle(515, G.phaser.world.height-300, 100, 100),
		new Phaser.Rectangle(709, G.phaser.world.height-300, 100, 100)
	];
	var firstColor;
	var secondColor;
	var action;
	var firstCheck = false;
	var secondCheck = false;
	var usedTile;

	G.phaser.tTiles.forEach(function(tile){
		if(trayBoxes[trayIndex].contains(tile.position.x, tile.position.y)){
			firstColor = tile.colorOne;
			secondColor = tile.colorTwo;
			action = tile.type;
			usedTile = tile;
		}
	}, this, true);
	G.phaser.aMarks.forEach(function(marker){
		if(currentTray.contains(marker.position.x, marker.position.y)){
			if(marker.color == firstColor && firstCheck == false)
				firstCheck = true;
			else if(marker.color == secondColor)
				secondCheck = true;
		}
	}, this, true);

	if(firstCheck == true && secondCheck == true){
		if(action == "VP"){
			G.phaser.textAction.text = "You recieved 9 additional Victory Points";
			usedTile.position.x = 1700;
		}
		else if(action == "bread"){
			G.phaser.textAction.text = "This tile can be used to meet one demand for the remainder of the game";
			usedTile.position.x = 377;
			usedTile.position.y = 1335;
			usedTile.angle = 0;
		}
		else if(action == "religion"){
			G.phaser.textAction.text = "This tile can be used to meet one demand for the remainder of the game";
			usedTile.position.x = 453;
			usedTile.position.y = 1335;
			usedTile.angle = 0;
		}
		else if(action == "games"){
			G.phaser.textAction.text = "This tile can be used to meet one demand for the remainder of the game";
			usedTile.position.x = 530;
			usedTile.position.y = 1335;
			usedTile.angle = 0;
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
		new Phaser.Circle(300, G.phaser.world.height-680, 125),
		new Phaser.Circle(393, G.phaser.world.height-680, 75),
		new Phaser.Circle(456, G.phaser.world.height-680, 75),
		new Phaser.Circle(522, G.phaser.world.height-680, 75),
		new Phaser.Circle(585, G.phaser.world.height-680, 75),
		new Phaser.Circle(649, G.phaser.world.height-680, 75),
		new Phaser.Circle(715, G.phaser.world.height-680, 75),
		new Phaser.Circle(778, G.phaser.world.height-680, 75)
	]

  for (var i = 0; i < senate_spaces.length-1; i++) {
    if (senate_spaces[i].contains(currentPlayer.x, currentPlayer.y)) {
      currentPlayer = G.movePlayerSenatePiece(currentPlayer, senate_spaces[i+1]);
      victory_points = i+2;
      break;
    };
  };

	G.bonusAction();
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
	tile.player = G.phaser.playerID;
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

	G.bonusAction();
}

	//EXTRA ACTION TILE MOVEMENT
Game.prototype.seaBonusMovement = function(tile){
	tile.player = G.phaser.playerID;
	tile.position.x = 293;
	tile.position.y = 1657;
	G.bonusAction();
}
Game.prototype.forumBonusMovement = function(tile){
	tile.player = G.phaser.playerID;
	tile.position.x = 346;
	tile.position.y = 1657;
	G.bonusAction();
}
Game.prototype.senateBonusMovement = function(tile){
	tile.player = G.phaser.playerID;
	tile.position.x = 530;
	tile.position.y = 1657;
	G.bonusAction();
}
Game.prototype.militaryBonusMovement = function(tile){
	tile.player = G.phaser.playerID;
	tile.position.x = 397;
	tile.position.y = 1657;
	G.bonusAction();
}
Game.prototype.trajanBonusMovement = function(tile){
	tile.player = G.phaser.playerID;
	tile.position.x = 501;
	tile.position.y = 1657;
	G.bonusAction();
}
Game.prototype.constructionBonusMovement = function(tile){
	tile.player = G.phaser.playerID;
	tile.position.x = 554;
	tile.position.y = 1657;
	G.bonusAction();
}

	//RESOURCES MOVEMENT
Game.prototype.gamesMovement = function(tile){
	tile.player = G.phaser.playerID;
	tile.position.x = 530;
	tile.position.y = 1402;
	G.bonusAction();
}

Game.prototype.breadMovement = function(tile){
	tile.player = G.phaser.playerID;
	tile.position.x = 375;
	tile.position.y = 1402;
	G.bonusAction();
}

Game.prototype.religionMovement = function(tile){
	tile.player = G.phaser.playerID;
	tile.position.x = 452;
	tile.position.y = 1402;
	G.bonusAction();
}

	// WILD CARD MOVEMENT
Game.prototype.yellowWildMovement = function(tile){
	tile.player = G.phaser.playerID;
	tile.position.x = 382;
	tile.position.y = 1482;
	G.bonusAction();
}

Game.prototype.orangeWildMovement = function(tile){
	tile.player = G.phaser.playerID;
	tile.position.x = 448;
	tile.position.y = 1482;
	G.bonusAction();
}

Game.prototype.greenWildMovement = function(tile){
	tile.player = G.phaser.playerID;
	tile.position.x = 382;
	tile.position.y = 1545;
	G.bonusAction();
}

Game.prototype.redWildMovement = function(tile){
	tile.player = G.phaser.playerID;
	tile.position.x = 448;
	tile.position.y = 1545;
	G.bonusAction();
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
		G.phaser.littlePeople.forEach(G.makeLittleDudeActive, this, true);
	}
	else{
		G.phaser.leader.forEach(G.makeLeaderActive, this, true);
		G.phaser.littlePeople.forEach(G.makeLittleDudeActive, this, true);
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

Game.prototype.makeLittleDudeActive = function(littleDude){
	littleDude.inputEnabled = true;
	littleDude.events.onInputDown.add(G.moveLegionairre, this);
}

Game.prototype.moveLegionairre = function(littleDude){
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
	else if(G.phaser.gameState == "military"){
		littleDude.position.x = G.phaser.leader.getAt(0).position.x + 25;
		littleDude.position.y = G.phaser.leader.getAt(0).position.y + 35;
		G.phaser.gameState = "bonusAction";
	}

	G.bonusAction();
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
	var lastLeaderPositionX = G.phaser.currentLeader.position.x;
	var lastLeaderPositionY = G.phaser.currentLeader.position.y;

	for(i=0;i<countries.length;i++){
		if(countries[i].contains(xInput,yInput)){
			if(G.phaser.leaderLoc.intersects(countries[i])){
				G.phaser.currentLeader.position.x = countries[i].x + 100;
				G.phaser.currentLeader.position.y = countries[i].y ;
				G.phaser.incX = 0;
				G.phaser.incY = 0;
				G.phaser.leaderLoc = countries[i];
				G.phaser.VPs += vpPts[i];
			}
		}
	}

	if(G.phaser.leaderLoc != countries[0] && lastLeaderPositionX != G.phaser.currentLeader.position.x && lastLeaderPositionY != G.phaser.currentLeader.position.y){
		G.phaser.gameState = "bonusAction";
		G.bonusAction();
	}



}

Game.prototype.constructionAction = function(){
	G.phaser.textAction.text = "Select a little dude to move to camp or click on a tile to gain tile and move a worker to that spot";
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
	var worker;
	G.phaser.littlePeople.forEach(function(dude){
		if(G.phaser.constructionCamp.contains(dude.position.x, dude.position.y)){
			validAction = true;
			worker = dude;
		}
	}, this, true);

	if(validAction == true){
		tile.player = G.phaser.playerID;
		G.phaser.lastPositionX = tile.position.x;
		G.phaser.lastPositionY = tile.position.y;
		worker.position.x = tile.position.x + 10;
		worker.position.y = tile.position.y + 10;
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
				G.getForumTile();
			}
			else if(tile.type == "Door"){
				G.phaser.gameState = "senate";
				G.senateSpaces(G.phaser.currentPlayerMarker);
			}
			else if(tile.type == "Roof"){
				G.phaser.gameState = "trajan";
				G.getTrajanTile();
			}
			else if(tile.type == "Fountain"){
				G.phaser.gameState = "seaport";
			}
			else if(tile.type == "Window"){
				G.phaser.gameState = "military";
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


	G.bonusAction();
}

Game.prototype.moveWorker = function(littleDude){ //move game piece to correct location
	if(G.phaser.gameState == "bonusAction"){
		return;
	}
	if(G.phaser.lpStartBox.contains(littleDude.position.x, littleDude.position.y) && G.phaser.gameState == "moveToWorkerCamp" || G.phaser.gameState == "construction"){
		littleDude.position.x = 580;
		littleDude.position.y = 600;
		G.phaser.gameState = "bonusAction";
	}
	else if(G.phaser.gameState == "moveWorker"){
		littleDude.position.x = G.phaser.lastPositionX;
		littleDude.position.y = G.phaser.lastPositionY;
		G.phaser.gameState = "bonusAction";
	}

	G.bonusAction();
}

Game.prototype.getTrajanTile = function(){
	G.phaser.textAction.text = "Please Select a Trajan Tile";
	G.phaser.tTiles.forEach(function(tile){
		tile.inputEnabled = true;
		tile.events.onInputDown.add(G.trajanLogic, this, G.phaser.currentArch);
	}, this, true);
}

Game.prototype.trajanLogic = function(currentTile, arch){
	if(G.phaser.gameState != "trajan"){
		return;
	}
	var trajan_Spaces = [
		new Phaser.Rectangle(603, G.phaser.world.height-480, 100, 100),
		new Phaser.Rectangle(830, G.phaser.world.height-470, 100, 100),
		new Phaser.Rectangle(900, G.phaser.world.height-300, 100, 100),
		new Phaser.Rectangle(795, G.phaser.world.height-100, 100, 100),
		new Phaser.Rectangle(630, G.phaser.world.height-139, 100, 100),
		new Phaser.Rectangle(515, G.phaser.world.height-300, 100, 100),
		new Phaser.Rectangle(709, G.phaser.world.height-300, 100, 100)

	]


	var spaces = [0,0,0,0,0,0];
	var index = 0;
	//check if arch is in the middle. If so then don't do anything else.
	if (trajan_Spaces[6].contains(G.phaser.currentArch.position.x, G.phaser.currentArch.position.y)){
		console.log("Can't do the Trajan Action.");
		return 0;
	}
	//check spaces to see if they are occupied.
	for (i=0;i<6;i++) {
		if (trajan_Spaces[i].contains(G.phaser.currentArch.position.x, G.phaser.currentArch.position.y)) {
			spaces[i] = 2;
			index = i;
		}
		if (trajan_Spaces[i].contains(currentTile.position.x, currentTile.position.y)) {
			spaces[i] = 1;
		}
	}
	//OK THIS LOGIC IS TO MOVE THE "TILE" TO THE ARCH POSITION AND MOVE THE ARCH TO THE
	//NEXT SPOT!!
	if (spaces[index] = 2) {
		if (G.moveTile(currentTile, G.phaser.currentArch, spaces)) {
			G.moveArch(G.phaser.currentArch, trajan_Spaces, spaces, index);
		}
	}


	G.bonusAction();
}

Game.prototype.moveTile = function(tile, arch, spaces) {
	tile.player = G.phaser.playerID;
	tile.position.x = arch.position.x;
	tile.position.y = arch.position.y;
	tile.angle = arch.angle;
	spaces[0] = 1;
	G.phaser.gameState = "bonusAction";
	return true;
}

Game.prototype.moveArch = function(arch, trajanSpaces, spaces, index) {
	arch.position.x = trajanSpaces[index += 1].x;
	arch.position.y = trajanSpaces[index].y;
	if (index == 0 || index == 3) {
		arch.angle = -28;
	} else if (index == 1 || index == 4) {
		arch.angle = 28;
	} else if (index == 2 || index == 5) {
		arch.angle = 0;
	}
	spaces[index] = 2;
}

Game.prototype.seaportLogic = function(){
	G.phaser.textAction.text = "Select a Card to add it to your hand, click a ship to trade cards for points, or click cards in hand to play them";
	G.phaser.ships.forEach(G.shipsActive, this, true);
	G.phaser.cards.forEach(G.cardsActive, this, true);
}

Game.prototype.cardsActive = function(card){
	if(G.phaser.gameState != 'seaport'){return;}
	card.inputEnabled = true;
	card.events.onInputDown.add(G.move, this);

}
Game.prototype.move = function(card){
	card.player = G.phaser.playerID;
	if(G.phaser.hand[0]){
		card.position.x = 25;
		card.position.y = 1300;
		G.phaser.hand[0] = false;
	}
	else if(G.phaser.hand[1]){
		card.position.x = 135;
		card.position.y = 1300;
		G.phaser.hand[1] = false;
	}
	else if(G.phaser.hand[2]){
		card.position.x = 25;
		card.position.y = 1500;
		G.phaser.hand[2] = false;
	}
	else if(G.phaser.hand[3]){
		card.position.x = 135;
		card.position.y = 1500;
		G.phaser.hand[3] = false;
	}

	G.phaser.gameState = "selectTray";
	G.turnLogic();

}
Game.prototype.shipsActive = function(ship){
	if(G.phaser.gameState != 'seaport'){
		return;
	}
	ship.inputEnabled = true;
	ship.animations.add("flip", [1], 1, true);
	ship.animations.add("flipBack", [0], 1, true);
	ship.events.onInputDown.add(G.flip, this); //if this piece is clicked, flip

}

Game.prototype.flip = function(ship){
	var vp=0;
	if(ship.side == "color"){
		ship.play("flip");
		ship.side = "grey";
		vp += 5;
		console.log(vp);
	}
	else{
		ship.play("flipBack");
		ship.side = "color";
		vp += 2;
		console.log(vp);
	}

	G.phaser.gameState = "selectTray";
	G.turnLogic();
}
