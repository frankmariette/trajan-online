<?php 
include 'action_marker_logic.php';

$test = new ActionCircle();
$test->circle = $test->randCircle();
var_dump($test->circle);
$test->chosen_tray = 3;
$test->target_tray = $test->move($test->circle, $test->chosen_tray);
var_dump($test->target_tray);
var_dump($test->circle);
?>
