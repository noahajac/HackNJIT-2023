<?php

require 'database.php';

$sql = "SELECT * FROM `Crewmate` WHERE `CrewmateID` = $id";
$result = mysqli_query($conn, $sql);
$rows = mysqli_fetch_all($result);
header('Content-Type: application/json');
print json_encode($rows);
