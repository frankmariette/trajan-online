<?php

  class UserController extends BaseController {

    protected $layout = 'layouts.master';

    public function showLogin(){
      return View::make('login');
    }

    public function doLogin(){
      $rules = array(
        'email' 	 => 'required|email',
        'password' => 'required|alphaNum|min:3'
      );

      $validator = Validator::make(Input::all(), $rules);

      if ($validator->fails()){
        return Redirect::to('login')
          ->withErrors($validator)
          ->withInput(Input::except('password'));
      } else {

        $userdata = array(
          'email'    => Input::get('email'),
          'password' => Input::get('password')
        );

        if (Auth::attempt($userdata)){
          return Redirect::to('home');
        }
        else {
          return Redirect::to('login');
        }
      }
    }

    public function doLogout(){
      Auth::logout();
      Redirect::to('login');
    }

    public function showRegister(){
      return View::make('register');
    }

    public function doRegister(){
      $rules = array(
        'fname'                 => 'required|alpha',
        'lname'                 => 'required|alpha',
        'email'                 => 'required|email|unique:users',
        'password'              => 'required|alphaNum|min:7|confirmed',
        'password_confirmation' => 'required|alphaNum|min:7'
      );

      $validator = Validator::make(Input::all(), $rules);

      if ($validator->fails()){
        return Redirect::to('register')
          ->withErrors($validator)
          ->withInput(Input::except('password','confirmation'));
      } else {
        $data = Input::only(['fname','lname','password', 'email']);
        $newUser = User::create($data);

        if ($newUser){
          Auth::login($newUser);
          return Redirect::to('');
        } else{
          return Redirect::to('register')-withInput();
        }
      }

    }
  }
