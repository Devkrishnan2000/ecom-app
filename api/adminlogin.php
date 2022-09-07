<?php
include 'headers\header.php';
include 'db\dbconnect.php';
ini_set("session.cookie_domain", '.dev.local');
session_set_cookie_params(3600, '/', '.dev.local');
session_start();
$db = new DbConnect();
$conn = $db->connect();
$_SESSION['val'] = "dev";
if(isset($_POST['email']))
{
  $usrname =$_POST['email'];
  $pass =$_POST['pass'];
  $sql = "select apass,aid from admin where ausrname='$usrname'";
  $res =mysqli_query($conn,$sql);
  if(mysqli_num_rows($res)==1)
  {
    $user = mysqli_fetch_assoc($res);
    if(password_verify($pass,$user['apass']))
    {
      echo "1";
      $_SESSION["admin"] = $user['aid'];
    }
    
    else
    echo "-1";
  }
  else
  {
    echo "-2";
  }
 }
 else
 {
  echo "-3";
 }
 mysqli_close($conn);

?>