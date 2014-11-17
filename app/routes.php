<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It's a breeze. Simply tell Laravel the URIs it should respond to
| and give it the Closure to execute when that URI is requested.
|
*/

Route::get('/', array('uses' => 'HomeController@index'));

Route::get('/login', array('uses' => 'UserController@showLogin'));
Route::post('/login', array('uses' => 'UserController@doLogin'));
Route::get('/logout', array('uses' => 'UserController@doLogout'));


Route::get('/register', array('uses' => 'UserController@showRegister'));
Route::post('/register', array('uses'=> 'UserController@doRegister'));

//Test Routes!
Route::get('/welcome', array('uses'=> 'HomeController@welcome'));
Route::get('/createPublic', array('uses'=> 'GameController@createPublic'));
Route::get('/createPrivate', array('uses'=> 'GameController@createPrivate'));
Route::get('/gamePage', array('uses'=> 'GameController@gamePage'));
Route::get('/senate', array('uses' => 'SenateController@action'));
Route::post('/senate', array('uses' => 'SenateController@action'));
