SET search_path = trajan;

DROP TABLE IF EXISTS trajan.sessions;
CREATE TABLE sessions (
	id SERIAL PRIMARY KEY,
	started_at TIMESTAMP,
	ended_at TIMESTAMP,
	num_of_players Int
);

DROP TABLE IF EXISTS trajan.records;
CREATE TABLE records (
	sid Int REFERENCES sessions(id),
	userid Int REFERENCES users(id),
	won_game Boolean
);


DROP TABLE IF EXISTS trajan.playerboard;
CREATE TABLE playerboard (
	userid Int REFERENCES users(id),
	navy_bonus Int,
	forum_bonus Int,
	military_bonus Int,
	trajan_bonus Int,
	senate_bonus Int,
	construction_bonus Int
);

DROP TABLE IF EXISTS trajan.TileType;
CREATE TABLE TileType (
	typeid Int PRIMARY KEY,
	types varchar(50)
);
DROP TABLE IF EXISTS trajan.TrajanTile;
CREATE TABLE TrajanTile (
	id SERIAL PRIMARY KEY,
	action varchar(25),
	color1 varchar(25),
	color2 varchar(25),
	vp Int,
	TileTypeid Int REFERENCES TileType(typeid)
);

DROP TABLE IF EXISTS trajan.ForumTile;
CREATE TABLE ForumTile (
	id SERIAL PRIMARY KEY,
	action varchar(50),
	TileTypeid Int REFERENCES TileType(typeid)
);

DROP TABLE IF EXISTS trajan.ConstructionTile;
CREATE TABLE ConstructionTile (
	id SERIAL PRIMARY KEY,
	vp Int,
	types varchar(50),
	TileTypeid Int REFERENCES TileType(typeid)
);

DROP TABLE IF EXISTS trajan.CommodityCard;
CREATE TABLE CommodityCard (
	id SERIAL PRIMARY KEY,
	types varchar(50),
	TileTypeid Int REFERENCES TileType(typeid)
);

DROP TABLE IF EXISTS trajan.BonusCards;
CREATE TABLE BonusCards (
	id SERIAL PRIMARY KEY,
	gold_one varchar(25),
	gold_two varchar(25),
	gold_one_vp Int,
	gold_two_vp Int,
	gray_one varchar(25),
	gray_two varchar(25),
	gray_one_vp Int,
	gray_two_vp Int,
	TileTypeid Int REFERENCES TileType(typeid)
);

DROP TABLE IF EXISTS trajan.PlayerBoardTile;
CREATE TABLE PlayerBoardTile (
	userid Int REFERENCES users(id),
	tileid Int REFERENCES TileType(typeid)
);

DROP TABLE IF EXISTS trajan.GameBoard;
CREATE TABLE GameBoard (
	id SERIAL PRIMARY KEY,
	sid Int REFERENCES sessions(id)
);

DROP TABLE IF EXISTS trajan.GameBoardTile;
CREATE TABLE GameBoardTile (
	bid Int REFERENCES GameBoard(id),
	tileid Int REFERENCES TileType(typeid)
);
