@extends('layouts.master')
@section('body')
<div id="header">
  <h1>Welcome to</h1>
</div>
  @if(Auth::check())
  <div id="" class="panel panel-default pull-left">
    <div class="panel-header">
      <h2>Score</h2>
    </div>
    <div class="panel-body">
      <table class="table">
        <tr>
          <th>Player</th>
          <th>Score</th>
        </tr>
        <tr>
          <td>{{Auth::user()->fname}}</td>
          <td>25</td>
        </tr>
      </table>
    </div>
  </div>
  <div class="panel panel-default pull-right">
    <div class="panel-heading">
      <h2 class="panel-title">{{ Auth::user()->fname }}'s Info</h2>
    </div>
    <div class="panel-body">
      <p>In your last game you scored  Victory Points!</p>
      <p>Total Games Played: </p>
      <p>Number of Games Won: </p>
      <p>Highest Score to Date: </p>
    </div>
  </div>
  <div class="panel panel-heading clearfix">
    <p>Games waiting for players...</p>
    <ul>
      <li><a href="link_to_game">{{Auth::user()->fname}}'s game</a></li>
    </ul>
    <p>
      <a href="http://dev.trajanonline.app/createpublic">Start a Public Game</a> or
      <a href="http://dev.trajanonline.app/createprivate">Start a Private Game</a> and add your friends!
    </p>
  </div>
  @else
    <section class="login">
      <a href="/login"><input type="button" class="btn btn-default" value="Login"></a>
      <a href="/register"><input type="button" class="btn btn-success" value="Register"></a>
    </section>
  @endif
