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

$sql = "SELECT * FROM personal_analysis WHERE Skills LIKE '%Java%'";
$result = $conn->query($sql);


if ($result->num_rows > 0) {
  // output data of each row
  $i=0;
  while($row = $result->fetch_assoc()) {
    $i++;
    echo "<div class='employee' id='e$i'>
    <section>
        <img src='avatar.png' alt='Avatar'>
        <h1 class='name'>" . $row["Ename"] ."</h1>
    </section>
    <section class='employee-content'>
        <div class='skills'>
            <h1>Skills</h1>";

    $str_arr = explode (",", $row["Skills"]);
    $str_arr2 = explode (",", $row["slevel"]); 
    foreach($str_arr as $level){
    echo "<h2 class='skill-content'> ".$level."</h2>";
    }
    echo  "</div>";
    echo "<div>
    <h1>Level</h1>";
    foreach($str_arr2 as $level){
      echo "<h2 class='skill-content'> ".$level."</h2>";
    }
    echo "</div>
    <div class='personality'>
    <div class='personality-tab'>
        <h2 class='personality-content'>Colour</h2>
        <img src='check.png' alt='Option'>
    </div>
    <div class='personality-tab'>
        <h2 class='personality-content'>Brigs</h2>
        <img src='cross-mark.png' alt='Option'>
    </div>
    <div class='personality-tab'>
        <h2 class='personality-content'>Work</h2>
        <img src='check.png' alt='Option'>
    </div>
</div>
</section>
</div>
</div>";
  }
} else {
  echo "0 results";
}
$conn->close();
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <!-- Hello -->
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <title>Document</title>
</head>
<body>
    <div id="selection">
        <div class="dropdown">
            <button class="dropbtn">Dropdown</button>
            <div class="dropdown-content">
              <input type="checkbox">Skill</input>
            </div>
          </div>
    </div>
    <div id="companyCreation"></div>
    <div id="projectCreation"></div>
</body>
</html>