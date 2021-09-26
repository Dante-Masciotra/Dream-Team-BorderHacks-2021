<html>
    <head>
        <style>
            body{
                text-align: center;
                background-color: #313131;
                color: white;
            }
            .Title{
                font-size: 25px;
                padding: 5px 5px;
                text-align: center;
            }
            .Text{
                font-size: 20px;
                padding: 20px 10px;
                text-align: center;  
            }
            .buttons{
                color: white;
                background-color: #313131;
                border: 2px solid white;
                padding: 7px 10px;
                font-size: 15px;
                width: 100%;
                margin-bottom: 1%;
                cursor: pointer;
                display: block;
                text-align: center; /*centers text in box*/
                text-decoration: none;
            }
            .centerButtons{
                width: 25%;
                justify-content: center;
              display: inline-block;
              margin-bottom: 1%;
            }
            input{
                margin-bottom: 2.5%;
            }
            .inputs{
                display: inline-flex;
            }
            #Spacer{
                width: 10%;
            }
            .back{
                float: right;
                position: absolute;
                bottom: 0;
                right:1%;
            }

        </style>
    </head>
    <body>
        <div class=Title>
            Employee Information
            </div>
        <div class=Text>
            Please add Skills on the right and add Programs on the left
        </div>
        <form class = 'centerForms' action="<?php echo $_SERVER['PHP_SELF'] ?>" method='post'>
            <div class="inputs">
            <div id="Skill"> 
            <label for="Skill" >Skill:</label><br>
            <input type="text" id="Skill" name="Skill">
            </div>
            <div id="Spacer"></div>
            <div id="Program">
            <label for="program">Program:</label><br>
            <input type="text" id="program" name="program">
            </div>
            </div>
                <br>
            <input class="buttons centerButtons" type="submit" value="submit">
        </form>

        <a href="\.." class="buttons Back" style="width: 10%;">BACK</a>  
    </body>
</html>
<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "rolecall";


$Skills='';
$Program='';


// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}

if (isset($_POST['Skill'])) {
    $Skills = $_POST['Skill'];
}

if (isset($_POST['program'])) {
    $Program = $_POST['program'];
}

$Skill_info = "INSERT INTO skills (`ID`, `Skill`) VALUES (0,'$Skills')"; 
$Program_info = "INSERT INTO program (`ID`, `Program`) VALUES (0,'$Program')"; 

if($Skills!=''){
if ($conn->query($Skill_info) === TRUE) {
  } else {
    echo "Error: " . $sql . "<br>" . $conn->error;
  }
}
if($Program!=''){
  if ($conn->query($Program_info) === TRUE) {
} else {
  echo "Error: " . $sql . "<br>" . $conn->error;
}
}
  
  $conn->close();
?>