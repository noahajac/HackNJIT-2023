<?php

require_once('database.php');

$sql = $db->prepare('SELECT * FROM Crewmate;');
$sql->execute();
$rows = $sql->fetchAll(PDO::FETCH_OBJ);
$sql->closeCursor();
header('Content-Type: application/json');
echo(json_encode($rows));



// function get_crewmates_handler()
// {
//     require 'database.php';

//     $sql = "SELECT * FROM `Crewmate`";
//     $result = mysqli_query($conn, $sql);
//     $rows = mysqli_fetch_all($result);
//     header('Content-Type: application/json');
//     print json_encode($rows);
// }
