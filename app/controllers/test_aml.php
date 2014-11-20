<?php 
include 'action_marker_logic.php';

$test = new ActionCircle();
$test->randCircle();
var_dump($test->circle);
$tray = 2;
$test->select_tray = $tray;
$test->move();
echo $test->target_tray . "\n";
var_dump($test->circle);
?>
