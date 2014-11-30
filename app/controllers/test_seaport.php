<?php
include 'seaport.php';
$test = new Seaport();
$discard1 = array(1, 2, 3, 4, 5);
$discard2 = array(6, 7, 8, 9, 10);
$facedown = array(11, 12, 13, 14, 15);
$test->drawtwo($facedown, $discard1, $discard2);
print("playercards\n---------------------\n");
var_dump($test->playerCards);
print("discard1\n---------------------\n");
var_dump($discard1);
print("discard2\n---------------------\n");
var_dump($discard2);
print("facedown\n---------------------\n");
var_dump($facedown);
?>
