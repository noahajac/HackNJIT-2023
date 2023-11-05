<?php

require_once('database.php');

$sql = $db->prepare('DELETE FROM Crewmate WHERE CrewmateID=:id;');
$sql->bindValue(':id', $id);
$sql->execute();
$sql->closeCursor();
