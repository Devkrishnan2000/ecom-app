<?php
include 'headers\header.php';
include 'db\dbconnect.php';

$db = new DbConnect();
$conn = $db->connect();

  if(isset($_GET['pincode']))
   {
    $pincode = $_GET['pincode'];
    $sql = "select place,dfrom,dto,deliverable from pincode where pincode=$pincode";
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
   else
   {
    $sql = "select * from pincode";
    $res = mysqli_query($conn,$sql);
    if(mysqli_num_rows($res)>0)
    {
        $rows = array();
        while($r= mysqli_fetch_assoc($res))
        {
            $rows[] = $r;
        }

        print json_encode($rows,JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES);
    }

    mysqli_close($conn);
   }
   
   
?>