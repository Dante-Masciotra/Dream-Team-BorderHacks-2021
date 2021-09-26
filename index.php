<html>
    <head>
        <!-- Button One -->
        <link rel="stylesheet" href="style.css">
        <style>
            .body{
                background-color: rgb(49, 49, 49);
                text-align: center;
            }
            .buttons{
                justify-content:center;
                background-color: #383838;
                color: gainsboro;
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
            .Title{
                color: gainsboro;
                font-size: 25px;
                padding: 5px 5px;
                text-align: center;
                margin-bottom: 5vw;
            }
            .Text{
                color: #8c7b88;
                font-size: 20px;
                font-family: "Trebuchet MS", Helvetica, sans-serif;
                padding: 5px 5px;
                text-align: center;
            }
            .centerButtons{
              width: 25%;
              justify-content: center;
              display: inline-block;
                /* margin: 0;
                position: absolute;
                top: 30%;
                left: 49.5%;
                -ms-transform: translate(-50%, -50%);
                transform: translate(-50%, -50%); */
            }
        </style>
    </head>

    <body class=body>
        <!-- Project Name-->
        <div class="title">
    <h1>DREAM TEAM</h1>
  </div>
        <!--Program Description-->
        <div class=Text>
            Create a team of employees ready to conquer any task 
        </div>
        <div class=Text>
            Please select your whether your profile is an admin or employee
        </div>
        <!-- Do linking here-->
        <!-- <div class="ParentButtons"> -->
          <div class=centerButtons>
              <a href="admin.php" class="buttons">
              ADMIN
              </a>  
              <a href="EmployeeInfo.php" class="buttons">
              EMPLOYEE
              </a>
              <a href="initialize.php" class="buttons">
              INITALIZE
              </a>
          </div>
        <!-- </div> -->

    </body>
</html>