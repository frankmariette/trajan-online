@extends('layouts.master')

<div class="container">
  {{ Form::open(array('url'=>'register', 'class'=>'form')) }}

  <div>
    <h1 class="text-center">Create Private Game</h1>
  </div>

  <div class="form-group col-md-7 col-md-offset-3">
    {{ Form::radio('numPlayers', '3', true, array('class'=>'form-control')) }}
    {{ Form::radio('numPlayers', '4', array('class'=>'form-control')) }}
  </div>
  @if(numPlayers.value === 3)
    <div class="form-group col-md-7 col-md-offset-3">
      {{ Form::label('pTwo', 'Enter Username of Player to Invite') }}
      {{ Form::text('pTwo', Input::old('pTwo'), array('placeholder' => 'trajan43', 'class' => 'form-control') )}}
    </div>
    <div class="form-group col-md-7 col-md-offset-3">
      {{ Form::label('pThree', 'Enter Username of Next Player to Invite') }}
      {{ Form::text('pThree', Input::old('pThree'), array('placeholder' => 'trajan43', 'class' => 'form-control') )}}
    </div>
  @else
    <div class="form-group col-md-7 col-md-offset-3">
      {{ Form::label('pTwo', 'Enter Username of Player to Invite') }}
      {{ Form::text('pTwo', Input::old('pTwo'), array('placeholder' => 'trajan43', 'class' => 'form-control') )}}
    </div>
    <div class="form-group col-md-7 col-md-offset-3">
      {{ Form::label('pThree', 'Enter Username of Next Player to Invite') }}
      {{ Form::text('pThree', Input::old('pThree'), array('placeholder' => 'trajan43', 'class' => 'form-control') )}}
    </div>
    <div class="form-group col-md-7 col-md-offset-3">
      {{ Form::label('pFour', 'Enter Username of Final Player to Invite') }}
      {{ Form::text('pFour', Input::old('pFour'), array('placeholder' => 'trajan43', 'class' => 'form-control') )}}
    </div>
  @endif
  <div class="form-group col-md-7 col-md-offset-3">
    {{ Form::submit('Submit', array('class'=>'btn btn-success pull-right')) }}
  </div>
  {{ Form::close() }}
</div>


</div>
