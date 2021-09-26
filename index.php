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
// $skill = $_POST["drone"];
// echo "<p>".$skill."</p>";
?>


<!DOCTYPE html>
<html lang="en">
<head>
    <!-- Hello -->
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <script src="logic.js"></script>
    <title>Document</title>
</head>
<body>
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
  $sql = "SELECT * FROM skills";
  $result = $conn->query($sql);
  if ($result->num_rows > 0) {
  // output data of each row

    echo"<div id='selection'>
        <div class='dropdown'>
            <button class='dropbtn'>Dropdown</button>
            <div class='dropdown-content'>
            <form action='index.php'>";
            while($row = $result->fetch_assoc()) {
              echo "<input type='radio' value='".$row['Skill']."' name='drone'>".$row['Skill']."</input>";
            }
    echo     "
    </div>
    <input type='submit'>  </form>
          </div>
    </div>";
  } else {
    echo "No Skills";
  }
?>
<div class="current" id="current"></div>
<div class="suggested" style=" height:100%;" >
<iframe src="form.php" style="width:100%; height:100%;" frameborder="0"></iframe>
</div>

    <div id="companyCreation"></div>
    <div id="projectCreation"></div>
</body>
</html>