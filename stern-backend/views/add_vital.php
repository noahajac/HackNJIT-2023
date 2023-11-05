<?php

require_once('database.php');

$body = json_decode(file_get_contents("php://input"));

$sql = $db->prepare('INSERT INTO VitalMeasurement VALUES (Height = :height, Weight = :weight, BloodPressure = :bloodPressure, AddingPhysician = :addingPhysician, TimeOfMeasure = NOW(), null, CrewmateID = :id);');
$sql->bindValue(':height', $body -> Height);
$sql->bindValue(':weight', $body -> Weight);
$sql->bindValue(':bloodPressure', $body -> bloodPressure);
$sql->bindValue(':addingPhysician', $body -> addingPhysician);
$sql->bindValue(':id', $id);
$sql->execute();
$sql->closeCursor();
