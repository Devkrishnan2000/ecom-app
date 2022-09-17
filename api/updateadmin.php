<?php
include 'headers\header.php';
include 'db\dbconnect.php';
ini_set("session.cookie_domain", '.dev.local');
session_set_cookie_params(3600, '/', '.dev.local');
session_start();
$db = new DbConnect();
$conn = $db->connect();

if(isset($_SESSION['admin']))
{
  $aid = $_SESSION['admin'];
  
   $sql = "select apass from admin where aid=$aid";
   $res = mysqli_query($conn,$sql);
   $r = mysqli_fetch_assoc($res);
   if(password_verify($_POST['prevpass'],$r['apass']))
   {
     $aname = $_POST['aname'];
     $ausrname =$_POST['ausrname'];
     $apass = password_hash($_POST['apass'],PASSWORD_DEFAULT);
     $sql = "update admin set aname='$aname',ausrname='$ausrname',apass='$apass' where aid=$aid";
     mysqli_query($conn,$sql);
     echo "0";
     mysqli_close($conn);
   }
   else
   echo "-1";
    
}
else
echo "-2";

?>