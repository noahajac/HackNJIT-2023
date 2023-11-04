<?php
$socket = "/cloudsql/hacknjit2023-strawhats:us-east4:oceanman";
$username = "root";
$password = 'jkL`-"p])t}./Dk+';
$database = "oceanman";

// Create Database connection
$conn = mysqli_connect(null, $username, $password, $database, null, $socket);

// Check connection
if (!$conn) {
  die("Connection failed: " . mysqli_connect_error());
}
echo "Connected successfully";

// Select statement will select the chosen information from the specified table
$sql = "SELECT `CrewmateID`, `FirstName`, `LastName`, `DOB` FROM `Crewmate`";

// This will get all the desired data from the MySQL database
$result = mysqli_query($conn, $sql);

// Checks if information was properly retrieved 
if (!$result) {
  die("" . mysqli_error($conn));
}

// Will print out all the data that was retrieve from $result
$messages = "<table><tr>";

if (mysqli_num_rows($result) > 0) {
  while ($nextField = mysqli_fetch_field($result)) {
    $messages .= "<th>";
    $messages .= $nextField->name;
    $messages .= "</th>";
  }

  $messages .= "</tr>";

  while ($row = mysqli_fetch_assoc($result)) {
    $messages .= "<tr>";
    foreach ($row as $value) {
      $messages .= "<td>";
      $messages .= $value;
      $messages .= "</td>";
    }
    $messages .= "</tr>";
  }

  $messages .= "</table>";

  echo $messages;
}

mysqli_close($conn);
