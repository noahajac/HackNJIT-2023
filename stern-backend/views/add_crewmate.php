<?php

require_once('database.php');

$body = json_decode(file_get_contents("php://input"));

$sql = $db->prepare('INSERT INTO Crewmate VALUES (null, FirstName = :firstName, LastName = :lastName, DOB = :dob);');
$sql->bindValue(':firstName', $body -> FirstName);
$sql->bindValue(':lastName', $body -> LastName);
$sql->bindValue(':dob', $body -> DOB);
$sql->execute();
$sql->closeCursor();
