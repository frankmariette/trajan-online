@extends('layouts.master')
@section('content')
  @if(Auth::check())
  <div class="container-fluid">
  <h1 class="text-center">Trajan Online</h1>
    <div class="row">
      <div class="col-md-3">
        <div class="panel panel-default">
          <div class="panel-header">
            <h2 class="text-center">Score</h2>
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
      </div>

      <div class="col-md-5">
        <div class="panel panel-default">
          <div class="panel-heading">
            <h2 class="panel-title">Game setup</h2>
          </div>
          <div class="panel-body">
            <ul>
              <li><a href="link_to_game">{{Auth::user()->fname}}'s game</a></li>
              <li>{{link_to('createpublic', 'Start a Public Game') }}</li>
              <li><a href="http://dev.trajanonline.app/createprivate">Start a Private Game</a></li>
            </ul>
          </div>
        </div>
      </div>

      <div class="col-md-4">
        <div class="panel panel-default">
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
      </div>
    </div>
  </div>


  @else
  <div class="vertical-center jumbotron">
    <div class="text-center">
      <h1 class="text-center">Welcome to Trajan Online</h1>
      <a href="/login"><input type="button" class="btn btn-lg btn-primary" value="Login"></a>
      <a href="/register"><input type="button" class="btn btn-lg btn-success" value="Register"></a>
    </div>
  </div>
  @endif
