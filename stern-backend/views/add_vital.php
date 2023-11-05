<?php

require_once('database.php');

$body = json_decode(file_get_contents("php://input"));

$sql = $db->prepare('INSERT INTO VitalMeasurement VALUES (Height = :height, `Weight` = :`weight`, BloodPressure = :bloodPressure, AddingPhysician = :addingPhysician, TimeOfMeasure = :timeOfMeasure, VitalID = :vitalID, CrewmateID = :id);');
$sql->bindValue(':height', $body -> Height);
$sql->bindValue(':weight', $body -> Weight);
$sql->bindValue(':BloodPressure', $body -> bloodPressure);
$sql->bindValue(':AddingPhysician', $body -> addingPhysician);
$sql->bindValue(':TimeOfMeasure', $body -> timeOfMeasure);
$sql->bindValue(':BloodPressure', $body -> bloodPressure);
$sql->bindValue(':BloodPressure', $body -> bloodPressure);
$sql->bindValue(':VitalID', $body -> vitalID);
$sql->bindValue(':CrewmateID', $id);
$sql->execute();
$sql->closeCursor();
