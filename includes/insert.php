<?php 
 if(isset($_POST['submit'])){
      require_once 'Db.php';
      $Type=$_POST['type'];
      $Name= $_POST['Name'];
      $Price=$_POST['Price'].' $';

      switch($Type){
        case "DVD":
      $a="Size: ";
      $b="  MB";
      $jvc="JVC";
      $SKU= $jvc. $_POST['SKU'];
      $description= $a. $_POST['Size'] .$b;
           break;
            
            case "Book":
              $a="Weight: ";
              $b="  KG";
              $jvc="GGWP";
              $SKU= $jvc. $_POST['SKU'];
              $description= $a. $_POST['wieght'] .$b;
                   break;
                   case "Furniture":
                    $a="Dimension: ";
                    $b="x";
                    $jvc="TR";
                    $SKU= $jvc. $_POST['SKU'];
                    $description= $a. $_POST['Height'] .'x' . $_POST['Width'] . 'x' . $_POST['Length'];
                         break;
                        }
                     ///////////
        $sql="Select SKU FROM dvds WHERE SKU = ?";
        $stmt=mysqli_stmt_init($conn);
        if(!mysqli_stmt_prepare($stmt, $sql)){
          header("Location: ../AddProduct.html?error=SQLerror");
          exit();
        }else{
            mysqli_stmt_bind_param($stmt, "s", $SKU);
            mysqli_stmt_execute($stmt);
            mysqli_stmt_store_result($stmt);
            $rowcount = mysqli_stmt_num_rows($stmt);
            if($rowcount>0){
              header("Location: ../AddProduct.html?error=SKUtaken");
              exit();
            }
            else{
              $sql="INSERT INTO dvds (SKU, Name, Price, Size) VALUES (?, ?, ?, ?)";
              $stmt=mysqli_stmt_init($conn);
              if(!mysqli_stmt_prepare($stmt, $sql)){
                header("Location: ../AddProduct.html?error=SQLerror");
                exit();
              }else{
                mysqli_stmt_bind_param($stmt, "ssss", $SKU, $Name, $Price, $description);
                mysqli_stmt_execute($stmt);
                header("Location: ../index.php");
                exit();
              }
            
        }

      /////////////////////////////////////
    }
      mysqli_stmt_close($stmt);
      mysqli_close($conn);

   }