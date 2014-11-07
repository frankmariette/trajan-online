<html>
  <head>
    <title>Login</title>
  </head>
  <body>
    {{ Form::open(array('url' => 'login')) }}

      <h1>Login</h1>

      <p>
        {{ $errors->first('email') }}
        {{ $errors->first('password') }}
      </p>
      <p>
        {{ Form::label('email', 'Email Address') }}
        {{ Form::text('email', Input::old('email'), array('placeholder' => 'example@example.com') )}}
      </p>

      <p>
        {{ Form::label('password', 'Password') }}
        {{ Form::password('password') }}
      </p>

      <p>
        {{ Form::submit('Submit') }}
      </p>
      {{ Form::close() }}
  </body>
</html>