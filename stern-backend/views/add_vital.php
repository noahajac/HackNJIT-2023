<?php

require_once('database.php');

$body = json_decode(file_get_contents("php://input"));

$sql = $db->prepare('INSERT INTO VitalMeasurement VALUES (:height, :weight, :bloodPressure, :addingPhysician, NOW(), null, :id);');
$sql->bindValue(':height', $body -> height);
$sql->bindValue(':weight', $body -> weight);
$sql->bindValue(':bloodPressure', $body -> bloodPressure);
$sql->bindValue(':addingPhysician', $body -> addingPhysician);
$sql->bindValue(':id', $id);
$sql->execute();
$sql->closeCursor();
