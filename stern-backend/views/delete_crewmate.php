<?php

require_once('database.php');

$sql = $db->prepare('DELETE FROM Crewmate WHERE CrewmateID=:id;');
$sql->bindValue(':id', $id);
$sql->execute();
<<<<<<< HEAD
$sql->closeCursor();
=======
$rows = $sql->fetchAll(PDO::FETCH_OBJ);
$sql->closeCursor();
header('Content-Type: application/json');
echo(json_encode($rows));
>>>>>>> da172731453badab238d7c9ccfea8ec0824973fc
