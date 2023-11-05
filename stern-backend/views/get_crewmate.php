<?php

require_once('database.php');

$sql = $db->prepare('SELECT * FROM Crewmate WHERE CrewmateID=:id;');
$sql->bindValue(':id', $id);
$sql->execute();
$rows = $sql->fetchAll();
header('Content-Type: application/json');
print json_encode($rows);
