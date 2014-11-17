@extends('layouts.master')
  <div class="container">
    {{ Form::open(array('url' => 'login', 'class'=>'form')) }}
      <div class="form-group col-md-offset-6">
        <h1>Login</h1>
      </div>
      <div class="error">
        {{ $errors->first('email') }}
        {{ $errors->first('password') }}
      </div>
      <div class="form-group col-md-7 col-md-offset-3">
        {{ Form::label('email', 'Email Address') }}
        {{ Form::text('email', Input::old('email'), array('placeholder' => 'example@example.com', 'class' => 'form-control') )}}
      </div>

      <div class="form-group col-md-7 col-md-offset-3">
        {{ Form::label('password', 'Password') }}
        {{ Form::password('password', array('class'=>'form-control')) }}
      </div>

      <div class="form-group col-md-7 col-md-offset-3">
        {{ Form::submit('Submit', array('class'=>'btn btn-success pull-right')) }}
      </div>
      {{ Form::close() }}
    </div>

  </div>
