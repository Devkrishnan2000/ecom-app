<?php
header("Access-Control-Allow-Origin:http://127.0.0.1:3000");
header('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE, OPTIONS');
header('Access-Control-Allow-Headers', 'content-type, authorization, x-requested-with');
header('Access-Control-Allow-Credentials:true');

session_start();
include 'dbconnect.php';

$db = new DbConnect();
$conn = $db->connect();
$_SESSION['val'] = "dev";
if(isset($_POST['email']))
{
  $email =$_POST['email'];
  $pass =$_POST['pass'];
  $sql = "select cpass,cid from customer where cmail='$email'";
  $res =mysqli_query($conn,$sql);
  if(mysqli_num_rows($res)==1)
  {
    $user = mysqli_fetch_assoc($res);
    if(password_verify($pass,$user['cpass']))
    {
      echo "1";
      $_SESSION["user"] = $user['cid'];
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