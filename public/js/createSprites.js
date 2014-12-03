function createSprites(){
  var background = game.add.sprite(150, 0, 'gameBoard');

  var player = game.add.sprite(275, game.world.height-500, 'playerBoard');
  graphics = game.add.graphics(0, 0);

  text = game.add.text(350, game.world.height - 550, '', {fill : '#ffffff'});

  cTiles = game.add.group();


  var cTile0 = cTiles.create(710, game.world.height - 1395, 'tile');
  var cTile1 = cTiles.create(790, game.world.height - 1395, 'tile');
  var cTile2 = cTiles.create(865, game.world.height - 1395, 'tile');
  var cTile3 = cTiles.create(945, game.world.height - 1395, 'tile');
  var cTile4 = cTiles.create(1020, game.world.height - 1395, 'tile');
  var cTile5 = cTiles.create(710, game.world.height - 1318, 'tile');
  var cTile6 = cTiles.create(790, game.world.height - 1318, 'tile');
  var cTile7 = cTiles.create(865, game.world.height - 1318, 'tile');
  var cTile8 = cTiles.create(945, game.world.height - 1318, 'tile');
  var cTile9 = cTiles.create(1020, game.world.height - 1318, 'tile');
  var cTile10 = cTiles.create(710, game.world.height - 1241, 'tile');
  var cTile11 = cTiles.create(790, game.world.height - 1241, 'tile');
  var cTile12 = cTiles.create(865, game.world.height - 1241, 'tile');
  var cTile13 = cTiles.create(945, game.world.height - 1241, 'tile');
  var cTile14 = cTiles.create(1020, game.world.height - 1241, 'tile');
  var cTile15 = cTiles.create(710, game.world.height - 1166, 'tile');
  var cTile16 = cTiles.create(790, game.world.height - 1166, 'tile');
  var cTile17 = cTiles.create(865, game.world.height - 1166, 'tile');
  var cTile18 = cTiles.create(945, game.world.height - 1166, 'tile');
  var cTile19 = cTiles.create(1020, game.world.height - 1166, 'tile');

  tTiles = game.add.group();

  var tTile0 = tTiles.create(253, game.world.height - 1058, 'trajan');
  var tTile1 = tTiles.create(422, game.world.height - 1058, 'trajan');
  var tTile2 = tTiles.create(253, game.world.height - 958, 'trajan');
  var tTile3 = tTiles.create(422, game.world.height - 958, 'trajan');
  var tTile4 = tTiles.create(253, game.world.height - 858, 'trajan');
  var tTile5 = tTiles.create(422, game.world.height - 858, 'trajan');

  fTiles = game.add.group();

  var fTile0 = fTiles.create(708, game.world.height - 1035, 'forum');
  var fTile1 = fTiles.create(778, game.world.height - 1035, 'forum');
  var fTile2 = fTiles.create(843, game.world.height - 1035, 'forum');
  var fTile3 = fTiles.create(910, game.world.height - 1035, 'forum');
  var fTile4 = fTiles.create(977, game.world.height - 1035, 'forum');
  var fTile5 = fTiles.create(708, game.world.height - 968, 'forum');
  var fTile6 = fTiles.create(778, game.world.height - 968, 'forum');
  var fTile7 = fTiles.create(843, game.world.height - 968, 'forum');
  var fTile8 = fTiles.create(910, game.world.height - 968, 'forum');
  var fTile9 = fTiles.create(977, game.world.height - 968, 'forum');
  var fTile10 = fTiles.create(708, game.world.height - 901, 'forum');
  var fTile11 = fTiles.create(778, game.world.height - 901, 'forum');
  var fTile12 = fTiles.create(843, game.world.height - 901, 'forum');
  var fTile13 = fTiles.create(910, game.world.height - 901, 'forum');
  var fTile14 = fTiles.create(977, game.world.height - 901, 'forum');

  mTiles = game.add.group();

  var britannia = mTiles.create(380, game.world.height - 1783, 'forum');
  var germaniaInferior = mTiles.create(725, game.world.height - 1735, 'forum');
  var germaniaSuperior = mTiles.create(910, game.world.height - 1700, 'forum');
  var belgica = mTiles.create(553, game.world.height - 1676, 'forum');
  var lugudunensis = mTiles.create(388, game.world.height - 1650, 'forum');
  var aquitania = mTiles.create(220, game.world.height - 1598, 'forum');
  var narbonensis = mTiles.create(280, game.world.height - 1485, 'forum');
  var alpes = mTiles.create(490, game.world.height - 1555, 'forum');
  var raetia = mTiles.create(780, game.world.height - 1614, 'forum');
  var noricum = mTiles.create(960, game.world.height - 1596, 'forum');

  bTiles = game.add.group(); // gold things

  var bTile0 = bTiles.create(850, game.world.height - 750, 'bonus');
  var bTile1 = bTiles.create(960, game.world.height - 750, 'bonus2');

  ships = game.add.group();

  var ship0 = ships.create(290, game.world.height - 1310, 'ship1');

  /*cards = game.add.group();

  var card0 = cards.create(1100, game.world.height - 460, 'tile');
  var card1 = cards.create(1100, game.world.height - 440, 'tile');
  var card2 = cards.create(1100, game.world.height - 420, 'tile');
  var card3 = cards.create(1100, game.world.height - 400, 'tile');
  var card4 = cards.create(1100, game.world.height - 380, 'tile');
  var card5 = cards.create(1100, game.world.height - 360, 'tile');
  var card6 = cards.create(1100, game.world.height - 340, 'tile');
  var card7 = cards.create(1100, game.world.height - 320, 'tile');
  var card8 = cards.create(1100, game.world.height - 300, 'tile');
*/
  aMarks = game.add.group();

  // Tray 2 markers
  var aMark0 = aMarks.create(775, game.world.height-375, 'actionMarkO');
  var aMark1 = aMarks.create(810, game.world.height-175, 'actionMarkO');
  var aMark2 = aMarks.create(670, game.world.height-175, 'actionMarkG');
  var aMark3 = aMarks.create(810, game.world.height-340, 'actionMarkG');
  var aMark4 = aMarks.create(675, game.world.height-375, 'actionMarkY');
  var aMark5 = aMarks.create(775, game.world.height-175, 'actionMarkY');
  var aMark6 = aMarks.create(705, game.world.height-375, 'actionMarkB');
  var aMark7 = aMarks.create(705, game.world.height-175, 'actionMarkB');
  var aMark8 = aMarks.create(825, game.world.height-260, 'actionMarkW');
  var aMark9 = aMarks.create(645, game.world.height-280, 'actionMarkW');
  var aMark10 = aMarks.create(620, game.world.height-280, 'actionMarkP');
  var aMark11 = aMarks.create(845, game.world.height-280, 'actionMarkP');

  cards = game.add.group();

  var cCard0 = cards.create(1000, game.world.height-500, 'card');
  var cCard1 = cards.create(1125, game.world.height-500, 'card');
  var cCard2 = cards.create(1250, game.world.height-500, 'card');

  pMarks = game.add.group();

  var pMarkGreen = pMarks.create(253, game.world.height-700, 'playerMark');
  var pMarkRed = pMarks.create(303, game.world.height-700, 'playerMark');

  seaportTrayGroup = game.add.group();
  forumTrayGroup = game.add.group();
  militaryTrayGroup = game.add.group();
  senateTrayGroup = game.add.group();
  trajanTrayGroup = game.add.group();
  constructionTrayGroup = game.add.group();

  seaportTray = new Phaser.Circle(695, game.world.height-350, 75);
  forumTray = new Phaser.Circle(802, game.world.height-350, 75);
  militaryTray = new Phaser.Circle(860, game.world.height-255, 75);
  senateTray = new Phaser.Circle(805, game.world.height-160, 75);
  trajanTray = new Phaser.Circle(695, game.world.height-160, 75);
  constructionTray = new Phaser.Circle(640, game.world.height-255, 75);
  markerBounds = new Phaser.Rectangle(630, game.world.height-510, 300, 30);

  littlePeople = game.add.group();

  var lp0 = littlePeople.create(925, game.world.height-390, 'actionMarkO'); //make this be a dude later
  lpStartBox = new Phaser.Rectangle(890, game.world.height-475, 100, 180);
  legionairreCamp = new Phaser.Rectangle(705,game.world.height-1520, 200, 100);
  constructionCamp = new Phaser.Rectangle(500,game.world.height-1210, 200, 100);

  leader = game.add.group();
  var bigTree = leader.create(725, game.world.height - 1520, 'bigTree');

  trajan = game.add.group();
  var arch = trajan.create(605, game.world.height-435, 'tArch');
  arch.angle = -28;
}
