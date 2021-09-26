<html>
    <head>
    <link rel="stylesheet" href="style.css">

        <style>
            body{
                text-align: center;
                background-color: #313131;
            }
            .Title{
                font-size: 25px;
                padding: 5px 5px;
                text-align: center;
            }
            .Text{
                margin-top: 3vw;
                font-size: 20px;
                padding: 20px 10px;
                text-align: center;  
            }
            .buttons{
                justify-content:center;
                background-color: #383838;
                color: white;
                margin-top:5vw;
                padding: 20px 10px;
                font-size: 15px;
                width: 50%;
                cursor: pointer;
                display: inline-block;
                box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
                text-align: center; /*centers text in box*/
                text-decoration: none;
                border-radius:5px;
                margin-bottom: 1%;
            }
            .centerButtons{
                width: 25%;
                justify-content: center;
              display: inline-block;
              margin-bottom: 1%;
            }
            input{
                margin-bottom: 3vw;
            }
            .back{
                top: 5vw;    
            }
        </style>
    </head>
    <body>
    <div class="title">
    <h1>EMPLOYEE SURVEY</h1>
    <a href="\.." class="back"><img src="back button.png" alt=""></a>  
  </div>
        <div class=Text>
            Please follow the provided links and complete the MBTI personality quiz, The Working Genius, and the Color Traits assesment.<br>
            After completing the assessments please fill in the forms with your responses.
        </div>
        <div class = centerButtons>
            <a href = "https://www.mbtionline.com/" target = "_blank" class = buttons>
                MBTI Test
            </a>
            <a href = "https://www.workinggenius.com/" target = "_blank" class = buttons>
                Working Genius Test
            </a>
            <a href =  "Colour Traits Form Master Copy.xlsx" download class = buttons>
                Color Traits Assessment
            </a>
        </div>
        <form class = 'centerForms' action="<?php echo $_SERVER['PHP_SELF'] ?>" method='post'>
            <label for="name" >Name:</label><br>
            <input type="text" id="name" name="name"><br>

            <label for="id">ID Number:</label><br>
            <input type="text" id="id" name="id"><br>

            <label for="department" >Department:</label><br>
            <input type="text" id="department" name="department"><br>

            <label for="position" >Position:</label><br>
            <input type="text" id="position" name="position"><br>

            <label for="mbti">MBTI Results:</label><br>
            <input type="text" id="mbti" name="mbti"><br>

            <label for="workingGenius">Working Genius Reults:</label><br>
            <input type="text" id="workingGenius" name="workingGenius"><br>

            <label for="colorTraits">Color Traits Results:</label><br>
            <input type="text" id="colorTraits" name="colorTraits"><br>

            <label for="skills">Skills(seprated by a comma please):</label><br>
            <input type="text" id="skills" name="skills"><br>

            <label for="slevel">Skill Level(seprated by a comma please):</label><br>
            <input type="text" id="slevel" name="slevel"><br>

            <label for="program">Program(seprated by a comma please):</label><br>
            <input type="text" id="program" name="program"><br>

            <label for="plevel">Program level (seprated by a comma please):</label><br>
            <input type="text" id="plevel" name="plevel"><br>

            <input class="buttons centerButtons" type="submit" value="submit">
        </form>
    </body>
</html>
<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "rolecall";

$id='';
$name='';
$department='';
$position='';
$MBTI='';
$workingGenius='';
$colourTraits='';
$Skills='';
$slevel='';
$Program='';
$plevel='';

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}

if (isset($_POST['name'])) {
    $name = $_POST['name'];
}
if (isset($_POST['id'])) {
    $id = $_POST['id'];
}
if (isset($_POST['department'])) {
    $department = $_POST['department'];
}
if (isset($_POST['position'])) {
    $position = $_POST['position'];
}
if (isset($_POST['MBTI'])) {
    $position = $_POST['MBTI'];
}
if (isset($_POST['workingGenius'])) {
    $position = $_POST['workingGenius'];
}
if (isset($_POST['colourTraits'])) {
    $position = $_POST['colourTraits'];
}
if (isset($_POST['Skills'])) {
    $position = $_POST['Skills'];
}
if (isset($_POST['slevel'])) {
    $position = $_POST['slevel'];
}
if (isset($_POST['Program'])) {
    $position = $_POST['Program'];
}
if (isset($_POST['plevel'])) {
    $position = $_POST['plevel'];
}
$user_info = "INSERT INTO personal_analysis (`ID`, `Ename`, `department`, `position`, `MBTI`, `Work`, `Colour`, `Skills`, `slevel`, `Program`, `plevel`) VALUES ('$id', '$name', '$department', '$position', '$MBTI', '$workingGenius', '$colourTraits', '$Skills', '$slevel', '$Program', '$plevel')"; 


if ($conn->query($user_info) === TRUE) {
  } else {
    echo "Error: " . $sql . "<br>" . $conn->error;
  }
  
  $conn->close();
?>