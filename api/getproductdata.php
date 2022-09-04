<?php
include 'headers\header.php';
include 'db\dbconnect.php';

$db = new DbConnect();
$conn = $db->connect();

  if(isset($_GET['pid']))
   {
    $pid = $_GET['pid'];
    $sql = "select * from products where pid=$pid";
    $res = mysqli_query($conn,$sql);
    
    if(mysqli_num_rows($res)==1)
    {
        $r= mysqli_fetch_assoc($res);
        $rows =$r;
        print json_encode($rows,JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES);
    }
    else
    {
        echo "-1";
    }
    mysqli_close($conn);
   
   }
   
   
?>