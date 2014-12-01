<?php

if($amountOfPlayers == 2)
	$timeTrackSpaces = 12;

if($amountOfPlayers == 3)
	$timeTrackSpaces = 17;

if($amountOfPlayers ==4)
	$timeTrackSpaces = 22;

$trackCount = 1;

$quarter = 1;

$round = 1;


function checkForEndOfRound($positionInTrack, $timeTrackSpaces){
	if($positionInTrack > $timeTrackSpaces){
		$positionInTrack = ($positionInTrack - $timeTrackSpaces);
		return 1;
	}
	else
		return 0;
}

function incrementRound($currentRound){
	$currentRound++;
}

function incrementQuarter =($currentRound, $currentQuarter){
	if($currentRound == 4){
		$currentQuarter++;
		$currentRound = 1;
	}
}

function checkForEndOfYear($currentQuarter){
	if($currentQuarter == 4)
		return 1;
	else
		return 0;
}

?>
