<?php
$dsn = 'mysql:unix_socket=/cloudsql/hacknjit2023-strawhats:us-east4:oceanman;dbname=oceanman';
$username = "root";
$password = 'jkL`-"p])t}./Dk+';
$database = "oceanman";

$db = new PDO($dsn, $username, $password);
