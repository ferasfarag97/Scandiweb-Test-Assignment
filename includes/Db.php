<?php
$servername = "MYSQL5039.site4now.net";
$username = "a706d6_ferasar";
$password = "Aa12345321";
$dbname = "db_a706d6_ferasar";
$conn = new mysqli($servername, $username, $password, $dbname);
if($conn->connect_error){
    die("Database connection failed!");
}
    
































function introduction(){
    echo "hello user!";
}


?>