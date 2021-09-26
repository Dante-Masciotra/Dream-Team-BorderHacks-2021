<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "rolecall";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}
$user_info = "INSERT INTO personal_analysis (`ID`, `Ename`, `department`, `position`, `MBTI`, `Work`, `Colour`, `Skills`, `slevel`, `Program`, `plevel`) VALUES ('$_POST[id]', '$_POST[name]', '$_POST[department]', '$_POST[position]', '$_POST[mbti]', '$_POST[workingGenius]', '$_POST[colorTraits]', '$_POST[skills]', '$_POST[slevel]', '$_POST[program]', '$_POST[plevel]')"; 


if ($conn->query($user_info) === TRUE) {
    echo "New record created successfully";
  } else {
    echo "Error: " . $sql . "<br>" . $conn->error;
  }
  
  $conn->close();
?>