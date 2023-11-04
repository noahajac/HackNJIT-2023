<?php
$socket = "/cloudsql/hacknjit2023-strawhats:us-east4:oceanman";
$username = "root";
$password = 'jkL`-"p])t}./Dk+';
$database = "oceanman";

// Create connection
$conn = mysqli_connect(null, $username, $password, $database, null, $socket);

// Check connection
if (!$conn) {
  die("Connection failed: " . mysqli_connect_error());
}
echo "Connected successfully";

$sql = "SELECT `CrewmateID`, `FirstName`, `LastName`, `DOB` FROM `Crewmate`";
$result = mysqli_query($conn, $sql);
if (!$result) {
  die("". mysqli_error($conn));
}

if (mysqli_num_rows($result) > 0) {
  while ($nextField = mysqli_fetch_field($result)) {
      $messages .= "<th>";
      $messages .= $nextField->name;
      $messages .= "</th>";
  }
           
  $messages .= "</tr>";
           
  while ($row = mysqli_fetch_assoc($result)) {
      $messages .="<tr>";
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
