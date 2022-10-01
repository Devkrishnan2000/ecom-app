<?php
include 'headers\header.php';
include 'db\dbconnect.php';
ini_set("session.cookie_domain", '.dev.local');
session_set_cookie_params(3600, '/', '.dev.local');
session_start();

$db = new DbConnect();
$conn = $db->connect();


if(isset($_SESSION['admin']) && isset($_GET['did']))
{
  $did = $_GET['did'];
  $sql = "select * from document where did=$did";
  $res = mysqli_query($conn,$sql);
  if(mysqli_num_rows($res)>0)
  {
      $rows = array();
     $r = mysqli_fetch_assoc($res);
    
  }
  
  print json_encode($r,JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES);

mysqli_close($conn);

}
else if(isset($_SESSION['admin']))
{
        $sql = "select did,dname from document";
        $res = mysqli_query($conn,$sql);
        if(mysqli_num_rows($res)>0)
        {
            $rows = array();
           while( $r = mysqli_fetch_assoc($res))
           {
             $rows[] =$r;
           }
        }
        
        print json_encode($rows,JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES);

     mysqli_close($conn);

}

else
echo "-1";