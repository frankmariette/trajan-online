@extends('layouts.master')
@section('style')
  body {
    background-image: url("http://i.imgur.com/9rXxPkQ.png");
    background-size: 80%;
    background-repeat: no-repeat;
    background-position: center top;
    background-color: rgb(23, 21, 17);
  }
  #highScores{
    float: left;
    width: 20%;
    min-height: 400px;
  }
  #lobby {
    float: right;
    width: 20%;
    min-height: 300px;
    margin-top: 100px;
  }
  #playerStats {
    float: left;
    width: 45%;
    min-height: 400px;
    margin-top: 250px;
    margin-right: 0px;
    padding: 0px;
  }
  #gameStats p{
    padding: 10px;
    margin: 10px;
  }
  #header {
    margin-top: 30px;
    text-align: center;
    color: white;
  }
  h1 {
    font-size: 100px;
  }
  .blocks{
    background-color: rgba(149, 147, 147, 0.72);
    padding: 10px;
    border: 1px solid black;
    border-radius: 10px;
    margin: 10px;
    postion: absolute;
    color: black;
  }
  td, th {
    padding: 5px;
  }
  h2 {
    background-color: rgba(6, 6, 6, 0.89);
    color: rgb(185, 185, 185);
    font-size: 30px;
  }
  div {
    font-weight: bold;
  }

@stop
@section('body')
<div id="header">
  <h1>Welcome to</h1>
</div>
<div id="container-fluid">
  <div id="highScores" class="blocks">
    <table>
      <tr>
        <th>Player</th>
        <th>Score</th>
      </tr>
      <tr>
        <td>playerName</td>
        <td>playerScore</td>
      </tr>
    </table>
  </div>
  <div id="playerStats" class="blocks">
    <h2>playerName's Info</h2>
    <div id="gamesStats">
      <p>In your last game you scored  Victory Points!</p>
      <p>Total Games Played: </p>
      <p>Number of Games Won: </p>
      <p>Highest Score to Date: </p>
    </div>
  </div>
  <div id="lobby" class="blocks">
    <p>Games waiting for players...</p>
    <ul>
      <li><a href="link_to_game">playerName's_game</a></li>
    </ul>
    <p>
      <a href="http://dev.trajanonline.app/createPublic">Start a Public Game</a> or
      <a href="http://dev.trajanonline.app/createPrivate">Start a Private Game</a> and add your friends!
    </p>
  </div>
</div>
@stop
