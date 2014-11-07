<?php

class UserTableSeeder extends Seeder{

  public function run(){
    DB::table('users')->delete();
    User::create(array(
      'fname'     => 'Frank',
      'lname'    => 'Mariette',
      'email'    => 'frank@example.com',
      'password' => Hash::make('password')
    ));
  }
}
