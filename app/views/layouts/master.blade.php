<!DOCTYPE html>
<html>
<head>
    <title>Trajan Online</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    {{HTML::style('http://maxcdn.bootstrapcdn.com/bootstrap/3.1.1/css/bootstrap.min.css')}}
    {{HTML::script('http://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.1/jquery.min.js')}}
    {{HTML::script('http://maxcdn.bootstrapcdn.com/bootstrap/3.1.1/js/bootstrap.min.js')}}
    {{HTML::script('js/brain-socket.min.js')}}
    {{HTML::style('/css/custom.css')}}
    <style>
        @section('style')

        @show
    </style>

    @section('js')

    @show

</head>
<body>
<div class="page">
    <div class="container-fluid">
        <nav class="navbar navbar-inverse navbar-fixed-top" role="navigation">
            <div class="container">
                <div class="navbar-header">
                    <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                        <span class="sr-only">Toggle navigation</span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                    </button>
                    <a class="navbar-brand" href="/">Trajan Online</a>
                </div>

                <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                    <ul class="nav navbar-nav navbar-right">
                        @if (Auth::check())
                        <li><a href="/profile">{{ Auth::user()->email }}</a></li>
                        <li><a href="/logout">Log Out</a></li>
                        @else
                        <li><a href="/login">Login</a></li>
                        <li><a href="/register">Sign Up</a></li>
                        @endif
                    </ul>

                </div><!-- /.navbar-collapse -->
            </div>
        </nav>
    </div>
    <div class="container-fluid">
        <div class="row">
            <div class="col-md-4 col-md-offset-4">
                @if(Session::has('message'))
                <div class="alert-box success">
                    <h2>{{ Session::get('message') }}</h2>
                </div>
                @endif
            </div>
        </div>
    </div>
    @yield('body')
</div>

    <!-- Chat box -->
    @if (Auth::check())
    <div class="module pull-right" style="max-height: 10;overflow-y: scroll;margin-right:20px;">
      <header class="top-bar">
        <h1>Group Chat</h1>
      </header>
      <div class="messenger-body open">
          <ol class="discussion" id="chat-log">

          </ol>
          <div class="chat-footer">
              <div class="p-lr-10">
                  <input type="text" id="chat-message"
                      class="input-light input-large brad chat-search" placeholder="Your message...">
              </div>
          </div>
      </div>
    </div>
  <script>
  $(function(){

      // var user_id = Math.floor((Math.random()*1000)+1);
      var user_id = {{ Auth::user()->id }};
      //make sure to update the port number if your ws server is running on a different one.
      window.app = {};

      app.BrainSocket = new BrainSocket(
              new WebSocket('ws://localhost:8080'),
              new BrainSocketPubSub()
      );

      app.BrainSocket.Event.listen('generic.event',function(msg){
          console.log(msg);
          if(msg.client.data.user_id == user_id){
              $('#chat-log').append(
                '<li class="self"><div class="avatar"><img src="{{Auth::user()->get_gravatar(Auth::user()->email)}}"/></div><div class="message"><p><strong>'+msg.client.data.user_name+'</strong>: ' +msg.client.data.message+'</p><p><i>{{ date("M d, H:ia") }}</i></p></div></li>');
          }else{
              var str_test='<li class="other"><div class="avatar"><img class="avatar" src="'+msg.client.data.user_pic+'"/></div><div class="message"><p><strong>'+msg.client.data.user_name+'</strong>: '+msg.client.data.message+' <i>{{ date("M d, H:ia") }}</i></p></div></li>';
              $('#chat-log').append(str_test);
          }
      });

      app.BrainSocket.Event.listen('app.success',function(data){
          console.log('An app success message was sent from the ws server!');
          console.log(data);
      });

      app.BrainSocket.Event.listen('app.error',function(data){
          console.log('An app error message was sent from the ws server!');
          console.log(data);
      });

      $('#chat-message').keypress(function(event) {

          if(event.keyCode == 13){

              app.BrainSocket.message('generic.event',
                      {
                          'message':$(this).val(),
                          'user_id':user_id,
                          'user_name':'{{ Auth::user()->fname}}',
                          'user_pic': '{{ Auth::user()->get_gravatar(Auth::user()->email) }}'
                      }
              );
              $(this).val('');

          }

          return event.keyCode != 13; }
      );
  });
  </script>
  @endif
@show
</body>
</html>
