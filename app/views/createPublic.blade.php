@extends('layouts.master')
@section('body')

<div class="container">
  {{ Form::open(array('url'=>'sessions', 'class'=>'form')) }}

<div>
  <h1 class="text-center">Create Public Game</h1?
</div>

<div class="form-group col-md-7 col-md-offset-3">
  {{ Form::label('numPlayers', 'Enter Size of Game') }}
  {{ Form::text('numPlayers', Input::old('numPlayers'), array('placeholder'=>'Hint 3 or 4', 'class'=>'form-control'))}}
</div>
<div class="form-group col-md-7 col-md-offset-3">
  {{ Form::submit('Submit', array('class'=>'btn btn-success pull-right')) }}
</div>
{{ Form::close() }}
</div>

@stop
