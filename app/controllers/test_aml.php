<?php 
include 'action_marker_logic.php';

$test = new ActionCircle();
$test->randCircle();
var_dump($test->circle);

$test->move(3);
var_dump($test->target_tray);
var_dump($test->circle);
?>
