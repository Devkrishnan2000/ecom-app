<?php
include 'headers\header.php';
include 'db\dbconnect.php';

$db = new DbConnect();
$conn = $db->connect();

  if(isset($_GET['pid']))
   {
    $pid = $_GET['pid'];
    $sql = "select review.cid,cname,rrating,rtitle,rdesc from customer,review where customer.cid=review.cid and pid=$pid";
    $res = mysqli_query($conn,$sql);
    $rows =array();
    if(mysqli_num_rows($res)>0)
    {
       while( $r= mysqli_fetch_assoc($res))
       {
          $rows[] =$r;
       }
        print json_encode($rows,JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES);
    }
    else
    {
        echo "-1";
    }
    mysqli_close($conn);
   
   }
   
   
?>