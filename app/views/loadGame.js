<script>
  function preload() { //load images for each game piece
    game.load.image('gameBoard', '/assets/gameBoardFinal.png');
    game.load.image('playerBoard', '/assets/pBoard.png');
    game.load.image('tile', '/assets/cDoorTile.png');
    game.load.image('card', '/assets/cCardWheatTexture.png');
    game.load.image('trajan', '/assets/trajanTile00.png')
    game.load.image('forum', '/assets/fTileGame.png')
    game.load.spritesheet('bonus', '/assets/bonus00.png', 100, 156);
    game.load.image('actionMark', '/assets/actionMarkerOrange.png');
    game.load.image('tArch', '/assets/tArch.png');
    game.load.image('playerMark', '/assets/playerMarkGreen.png');
  }
    var cTiles, tTiles, bTiles, mTiles, fTiles, aMarks, pMarks, tray1, tray2, tray3, tray4, tray5, tray6, text;
    var graphics;
  function create() { //initial positions of all pieces on gameBoard
    var background = game.add.sprite(150, 0, 'gameBoard');

    var player = game.add.sprite(275, game.world.height-500, 'playerBoard');
    graphics = game.add.graphics(0, 0);

    text = game.add.text(1075, game.world.height - 1200, '', {fill : '#ffffff'});

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

    bTiles = game.add.group();

    var bTile0 = bTiles.create(850, game.world.height - 750, 'bonus');
    var bTile1 = bTiles.create(960, game.world.height - 750, 'bonus');

    aMarks = game.add.group();
    tray1 = game.add.group();
    tray2 = game.add.group();
    tray3 = game.add.group();
    tray4 = game.add.group();
    tray5 = game.add.group();
    tray6 = game.add.group();

    var aMark0 = aMarks.create(800, game.world.height-350, 'actionMark');

    pMarks = game.add.group();

    var pMarkGreen = pMarks.create(253, game.world.height-700, 'playerMark');

  }
</script>