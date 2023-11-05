<?php

require_once('database.php');

$sql = $db->prepare('SELECT * FROM Crewmate WHERE CrewmateID=:id;');
$sql->bindValue(':id', $id);
$sql->execute();
$rows = $sql->fetchAll(PDO::FETCH_OBJ);
$sql->closeCursor();
header('Content-Type: application/json');
echo(json_encode($rows));
