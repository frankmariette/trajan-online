DROP SCHEMA IF EXISTS trajan CASCADE;
CREATE SCHEMA trajan;

SET search_path = trajan, public;

DROP TABLE IF EXISTS trajan.users;
CREATE TABLE users (
  userid SERIAL PRIMARY KEY,
  fname varchar(50),
  lname varchar(50),
  email varchar(75) default '',
  pwhash varchar(256) NOT NULL
);

DROP TABLE IF EXISTS trajan.sessions;
CREATE TABLE sessions (
  sid SERIAL PRIMARY KEY,
  started_at TIMESTAMP,
  ended_at TIMESTAMP,
  num_of_players Int
);

DROP TABLE IF EXISTS trajan.records;
CREATE TABLE records (
  sid Int REFERENCES sessions(sid),
  userid Int REFERENCES users(userid),
  won_game Boolean
);


DROP TABLE IF EXISTS trajan.playerboard;
CREATE TABLE playerboard (
  userid Int REFERENCES users(userid),
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
  TileTypeid Int,
  types varchar(50)
);

DROP TABLE IF EXISTS trajan.TrajanTile;
CREATE TABLE TrajanTile (
  ttid SERIAL PRIMARY KEY,
  action varchar(25),
  color1 varchar(25),
  color2 varchar(25),
  vp Int,
  TileTypeid Int REFERENCES TileType(typeid)
);

DROP TABLE IF EXISTS trajan.ForumTile;
CREATE TABLE ForumTile (
  ftid SERIAL PRIMARY KEY,
  action varchar(50),
  TileTypeid Int REFERENCES TileType(typeid)
);

DROP TABLE IF EXISTS trajan.ConstructionTile;
CREATE TABLE ConstructionTile (
  cid SERIAL PRIMARY KEY,
  vp Int,
  types varchar(50),
  TileTypeid Int REFERENCES TileType(typeid)
);

DROP TABLE IF EXISTS trajan.CommodityCard;
CREATE TABLE CommodityCard (
  ccid SERIAL PRIMARY KEY,
  types varchar(50),
  TileTypeid Int REFERENCES TileType(typeid)
);

DROP TABLE IF EXISTS trajan.BonusCards;
CREATE TABLE BonusCards (
  bcid SERIAL PRIMARY KEY,
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
  userid Int REFERENCES users(userid),
  tileid Int REFERENCES TileType(typeid)
);

DROP TABLE IF EXISTS trajan.GameBoard;
CREATE TABLE GameBoard (
  gbid SERIAL PRIMARY KEY,
  sid Int REFERENCES sessions(sid)
);

DROP TABLE IF EXISTS trajan.GameBoardTile;
CREATE TABLE GameBoardTile (
  bid Int REFERENCES GameBoard(gbid),
  tileid Int REFERENCES TileType(typeid)
);

INSERT INTO TileType (typeid, types) VALUES (1,'Trajan');
INSERT INTO TileType (typeid, types) VALUES (2,'Forum');
INSERT INTO TileType (typeid, types) VALUES (3,'Construction');
INSERT INTO TileType (typeid, types) VALUES (4,'CommodityCard');
INSERT INTO TileType (typeid, types) VALUES (5,'BonusCards');

INSERT INTO TrajanTile (action, color1, color2, vp, TileTypeid)
VALUES ('move 1 to construction', 'blue', 'green', 5, 1);
INSERT INTO TrajanTile (action, color1, color2, vp, TileTypeid)
VALUES ('move 1 to construction', 'green', 'orange', 5, 1);
INSERT INTO TrajanTile (action, color1, color2, vp, TileTypeid)
VALUES ('move 2 to construction', 'blue', 'yellow', 2, 1);
INSERT INTO TrajanTile (action, color1, color2, vp, TileTypeid)
VALUES ('move 1 to military', 'blue', 'blue', 5, 1);
INSERT INTO TrajanTile (action, color1, color2, vp, TileTypeid)
VALUES ('move 2 to military', 'white', 'yellow', 2, 1);
INSERT INTO TrajanTile (action, color1, color2, vp, TileTypeid)
VALUES ('move 2 to construction', 'orange', 'orange', 2, 1);
INSERT INTO TrajanTile (action, color1, color2, vp, TileTypeid)
VALUES ('move 2 to construction', 'orange', 'yellow', 2, 1);
INSERT INTO TrajanTile (action, color1, color2, vp, TileTypeid)
VALUES ('move 1 to military', 'yellow', 'blue', 5, 1);
INSERT INTO TrajanTile (action, color1, color2, vp, TileTypeid)
VALUES ('move 1 to construction', 'yellow', 'orange', 5, 1);
INSERT INTO TrajanTile (action, color1, color2, vp, TileTypeid)
VALUES ('move 1 to military', 'white', 'blue', 5, 1);
INSERT INTO TrajanTile (action, color1, color2, vp, TileTypeid)
VALUES ('move 1 to construction', 'white', 'orange', 5, 1);
INSERT INTO TrajanTile (action, color1, color2, vp, TileTypeid)
VALUES ('move 1 to military', 'green', 'blue', 5, 1);
INSERT INTO TrajanTile (action, color1, color2, vp, TileTypeid)
VALUES ('move 1 to military', 'pink', 'blue', 5, 1);
INSERT INTO TrajanTile (action, color1, color2, vp, TileTypeid)
VALUES ('move 1 to construction', 'pink', 'orange', 5, 1);
INSERT INTO TrajanTile (action, color1, color2, vp, TileTypeid)
VALUES ('move 2 to construction', 'yellow', 'yellow', 2, 1);
INSERT INTO TrajanTile (action, color1, color2, vp, TileTypeid)
VALUES ('move 2 to military', 'orange', 'blue', 2, 1);
INSERT INTO TrajanTile (action, color1, color2, vp, TileTypeid)
VALUES ('move 2 to military', 'green', 'yellow', 2, 1);
INSERT INTO TrajanTile (action, color1, color2, vp, TileTypeid)
VALUES ('move 2 to military', 'pink', 'yellow', 2, 1);
INSERT INTO TrajanTile (action, color1, color2, vp, TileTypeid)
VALUES ('food demand', 'pink', 'pink', 1, 1);
INSERT INTO TrajanTile (action, color1, color2, vp, TileTypeid)
VALUES ('games demand', 'pink', 'green', 1, 1);
INSERT INTO TrajanTile (action, color1, color2, vp, TileTypeid)
VALUES ('bread demand', 'orange', 'green', 1, 1);
INSERT INTO TrajanTile (action, color1, color2, vp, TileTypeid)
VALUES ('religion demand', 'white', 'green', 1, 1);
INSERT INTO TrajanTile (action, color1, color2, vp, TileTypeid)
VALUES ('religion demand', 'blue', 'orange', 1, 1);
INSERT INTO TrajanTile (action, color1, color2, vp, TileTypeid)
VALUES ('games demand', 'green', 'green', 1, 1);
INSERT INTO TrajanTile (action, color1, color2, vp, TileTypeid)
VALUES ('bread demand', 'green', 'green', 1, 1);
INSERT INTO TrajanTile (action, color1, color2, vp, TileTypeid)
VALUES ('religion demands', 'white', 'white', 1, 1);
INSERT INTO TrajanTile (action, color1, color2, vp, TileTypeid)
VALUES ('draw 2 cards', 'white', 'blue', 3, 1);
INSERT INTO TrajanTile (action, color1, color2, vp, TileTypeid)
VALUES ('draw 2 cards', 'yellow', 'yellow', 3, 1);
INSERT INTO TrajanTile (action, color1, color2, vp, TileTypeid)
VALUES ('games demand', 'yellow', 'green', 1, 1);
INSERT INTO TrajanTile (action, color1, color2, vp, TileTypeid)
VALUES ('draw 2 cards', 'green', 'pink', 3, 1);
INSERT INTO TrajanTile (action, color1, color2, vp, TileTypeid)
VALUES ('draw 2 cards', 'blue', 'orange', 3, 1);
INSERT INTO TrajanTile (action, color1, color2, vp, TileTypeid)
VALUES ('draw 2 cards', 'orange', 'yellow', 3, 1);
INSERT INTO TrajanTile (action, color1, color2, vp, TileTypeid)
VALUES ('draw 2 cards', 'pink', 'white', 3, 1);
INSERT INTO TrajanTile (action, color1, color2, vp, TileTypeid)
VALUES ('draw 2 cards', 'yellow', 'green', 3, 1);
INSERT INTO TrajanTile (action, color1, color2, vp, TileTypeid)
VALUES ('draw 2 cards', 'blue', 'blue', 3, 1);
INSERT INTO TrajanTile (action, color1, color2, vp, TileTypeid)
VALUES ('draw 2 cards', 'orange', 'orange', 3, 1);
INSERT INTO TrajanTile (action, color1, color2, vp, TileTypeid)
VALUES ('plus 2 marker', 'orange', 'pink', 4, 1);
INSERT INTO TrajanTile (action, color1, color2, vp, TileTypeid)
VALUES ('plus 2 marker', 'blue', 'pink', 4, 1);
INSERT INTO TrajanTile (action, color1, color2, vp, TileTypeid)
VALUES ('plus 2 marker', 'green', 'pink', 4, 1);
INSERT INTO TrajanTile (action, color1, color2, vp, TileTypeid)
VALUES ('plus 2 marker', 'green', 'white', 4, 1);
INSERT INTO TrajanTile (action, color1, color2, vp, TileTypeid)
VALUES ('plus 2 marker', 'yellow', 'pink', 4, 1);
INSERT INTO TrajanTile (action, color1, color2, vp, TileTypeid)
VALUES ('plus 2 marker', 'white', 'white', 4, 1);
INSERT INTO TrajanTile (action, color1, color2, vp, TileTypeid)
VALUES ('plus 2 marker', 'pink', 'pink', 4, 1);
INSERT INTO TrajanTile (action, color1, color2, vp, TileTypeid)
VALUES ('plus 2 marker', 'white', 'pink', 4, 1);
INSERT INTO TrajanTile (action, color1, color2, vp, TileTypeid)
VALUES ('plus 2 marker', 'pink', 'white', 4, 1);
INSERT INTO TrajanTile (action, color1, color2, vp, TileTypeid)
VALUES ('none', 'white', 'white', 9, 1);
INSERT INTO TrajanTile (action, color1, color2, vp, TileTypeid)
VALUES ('none', 'blue', 'white', 9, 1);
INSERT INTO TrajanTile (action, color1, color2, vp, TileTypeid)
VALUES ('none', 'orange', 'orange', 9, 1);
INSERT INTO TrajanTile (action, color1, color2, vp, TileTypeid)
VALUES ('none', 'yellow', 'white', 9, 1);
INSERT INTO TrajanTile (action, color1, color2, vp, TileTypeid)
VALUES ('none', 'yellow', 'yellow', 9, 1);
INSERT INTO TrajanTile (action, color1, color2, vp, TileTypeid)
VALUES ('none', 'pink', 'pink', 9, 1);
INSERT INTO TrajanTile (action, color1, color2, vp, TileTypeid)
VALUES ('none', 'green', 'green', 9, 1);
INSERT INTO TrajanTile (action, color1, color2, vp, TileTypeid)
VALUES ('none', 'orange', 'white', 9, 1);
INSERT INTO TrajanTile (action, color1, color2, vp, TileTypeid)
VALUES ('none', 'blue', 'blue', 9, 1);
INSERT INTO CommodityCard (types,TileTypeid)
VALUES ('diamonds', 5);
INSERT INTO CommodityCard (types,TileTypeid)
VALUES ('gold', 5);
INSERT INTO CommodityCard (types,TileTypeid)
VALUES ('fish', 5);
INSERT INTO CommodityCard (types,TileTypeid)
VALUES ('wine', 5);
INSERT INTO CommodityCard (types,TileTypeid)
VALUES ('pottery', 5);
INSERT INTO CommodityCard (types,TileTypeid)
VALUES ('column', 5);
INSERT INTO CommodityCard (types,TileTypeid)
VALUES ('wheat', 5);
INSERT INTO CommodityCard (types,TileTypeid)
VALUES ('bearpelt', 5);
INSERT INTO CommodityCard (types,TileTypeid)
VALUES ('cow', 5);
INSERT INTO CommodityCard (types,TileTypeid)
VALUES ('water', 5);
INSERT INTO CommodityCard (types,TileTypeid)
VALUES ('scroll', 5);
INSERT INTO CommodityCard (types,TileTypeid)
VALUES ('fruit', 5);
INSERT INTO ForumTile (action,TileTypeid)
VALUES ('religion', 2);
INSERT INTO ForumTile (action,TileTypeid)
VALUES ('games', 2);
INSERT INTO ForumTile (action,TileTypeid)
VALUES ('bread', 2);
INSERT INTO ForumTile (action,TileTypeid)
VALUES ('construction', 2);
INSERT INTO ForumTile (action,TileTypeid)
VALUES ('seaport', 2);
INSERT INTO ForumTile (action,TileTypeid)
VALUES ('senate', 2);
INSERT INTO ForumTile (action,TileTypeid)
VALUES ('trajan', 2);
INSERT INTO ForumTile (action,TileTypeid)
VALUES ('military', 2);
INSERT INTO ForumTile (action,TileTypeid)
VALUES ('forum', 2);
INSERT INTO ForumTile (action,TileTypeid)
VALUES ('3 votes', 2);
INSERT INTO ForumTile (action,TileTypeid)
VALUES ('2 votes', 2);
INSERT INTO ForumTile (action,TileTypeid)
VALUES ('4 votes', 2);
INSERT INTO ForumTile (action,TileTypeid)
VALUES ('5 votes', 2);
INSERT INTO ForumTile (action,TileTypeid)
VALUES ('construction wildcard', 2);
INSERT INTO ForumTile (action,TileTypeid)
VALUES ('demand wildcard', 2);
INSERT INTO ForumTile (action,TileTypeid)
VALUES ('commodity wildcard', 2);
INSERT INTO ForumTile (action,TileTypeid)
VALUES ('bonus action wildcard', 2);
