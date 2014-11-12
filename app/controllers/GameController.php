<?php

class GameController extends BaseController {

  protected $layout = 'layouts.master';

  public function index()
  {
    return View::make('home');
  }

  public function welcome()
  {
    return View::make('welcome');
  }

  public function createPublic()
  {
    return View::make('createPublic');
  }
  public function createPrivate()
  {
    return View::make('createPrivate');
  }
  public function gamePage()
  {
    return View::make('gamePage');
  }
}
