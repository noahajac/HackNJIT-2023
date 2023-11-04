<?php
$servername = "localhost:/cloudsql/hacknjit2023-strawhats:us-east4:oceanman";
$username = "root";
$password = 'jkL`-"p])t}./Dk+';
$database = "oceanman";

// Create connection
$conn = mysqli_connect($servername, $username, $password);

// Check connection
if (!$conn) {
  die("Connection failed: " . mysqli_connect_error());
}
echo "Connected successfully";

$sql = "SELECT `CrewmateID`, `FirstName`, `LastName`, `DOB` FROM `oceanman`";
$result = mysqli_query($conn, $sql);
if (!$result) {
  die("". mysqli_error($conn));
}

echo "$result";

?>