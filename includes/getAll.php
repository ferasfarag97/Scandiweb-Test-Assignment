<?php
require_once 'Db.php';
$sql = "SELECT * FROM dvds";
$result = $conn->query($sql);
if ($result->num_rows > 0) {
  // output data of each row
  $data= array();
  while($row = $result->fetch_assoc()) {
   $data[]=$row;
  }
} else {
  echo "0 results";
}
echo json_encode($data);
$conn->close();
?>