@extends('layouts.master')

<div class="container">
  {{ Form::open(array('url'=>'register', 'class'=>'form')) }}

  <div>
    <h1 class="text-center">Register</h1>
  </div>
  <div class="error">
    {{ $errors->first('fname') }}
    {{ $errors->first('lname') }}
    {{ $errors->first('email') }}
    {{ $errors->first('password') }}
  </div>

  <div class="form-group col-md-7 col-md-offset-3">
    {{ Form::label('fname', 'First Name') }}
    {{ Form::text('fname', Input::old('fname'), array('placeholder'=>'John', 'class'=>'form-control'))}}
  </div>
  <div class="form-group col-md-7 col-md-offset-3">
    {{ Form::label('lname', 'Last Name') }}
    {{ Form::text('lname', Input::old('lname'), array('placeholder' => 'Doe', 'class' => 'form-control') )}}
  </div>
  <div class="form-group col-md-7 col-md-offset-3">
    {{ Form::label('email', 'Email Address') }}
    {{ Form::email('email', Input::old('email'), array('placeholder' => 'example@example.com', 'class' => 'form-control') )}}
  </div>

  <div class="form-group col-md-7 col-md-offset-3">
    {{ Form::label('password', 'Password') }}
    {{ Form::password('password', array('class'=>'form-control')) }}
  </div>
  <div class="form-group col-md-7 col-md-offset-3">
    {{ Form::label('password_confirmation', 'Password Confirmation') }}
    {{ Form::password('password_confirmation', array('class'=>'form-control')) }}
  </div>

  <div class="form-group col-md-7 col-md-offset-3">
    {{ Form::submit('Submit', array('class'=>'btn btn-success pull-right')) }}
  </div>
  {{ Form::close() }}
</div>


</div>
