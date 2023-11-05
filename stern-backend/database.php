<?php
$socket = "/cloudsql/hacknjit2023-strawhats:us-east4:oceanman";
$host = "35.245.44.75";
$username = "root";
$password = 'jkL`-"p])t}./Dk+';
$database = "oceanman";

// Google Database connection
//$conn = mysqli_connect(null, $username, $password, $database, null, $socket);

// Local Connection
$conn = mysqli_connect($host, $username, $password, $database);
?>