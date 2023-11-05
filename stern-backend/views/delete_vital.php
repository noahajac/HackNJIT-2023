<?php

require_once('database.php');

$sql = $db->prepare('DELETE FROM VitalMeasurement WHERE VitalID=:id;');
$sql->bindValue(':id', $id);
$sql->execute();
$sql->closeCursor();
