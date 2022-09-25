<?php
include 'headers\header.php';
include 'db\dbconnect.php';
ini_set("session.cookie_domain", '.dev.local');
session_set_cookie_params(3600, '/', '.dev.local');
session_start();

$db = new DbConnect();
$conn = $db->connect();

$dir = "F:/XAMPP/htdocs/sem8project/ecom-app/ecom-app/public/images/documentation/";
if(isset($_SESSION['user']))
{
  
  if($_FILES['stimg'])
  {
    $filedir = $dir.basename($_FILES['stimg']['name']);
    move_uploaded_file($_FILES['stimg']['tmp_name'],$filedir);
  }

  $did = $_POST['did'];
  $sid = $_POST['stid'];
  $stitle = $_POST['stitle'];
  $sdesc = $_POST['stdesc'];
  $sql = "insert into steps values($did,$sid,'$stitle','$sdesc','$filedir')";
  mysqli_query($conn,$sql);
  mysqli_close($conn);
  echo "1";
}
else

{
    echo "0";
}