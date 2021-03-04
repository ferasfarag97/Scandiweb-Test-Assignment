<?php   
require_once 'Db.php';
$myArray = $_REQUEST['activitiesArray']; 
$arr_length = count($myArray);
for($i=0;$i<$arr_length;$i++)
{
    $sql = "DELETE FROM `dvds` WHERE SKU='$myArray[$i]';";
   if ($conn->query($sql) === TRUE) {
        echo "Record deleted successfully";
     } else {
       echo "Error deleting record: " . $conn->error;
     }  
}
$conn->close();
echo $sql;
?>