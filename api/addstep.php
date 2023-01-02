<?php
include 'headers\header.php';
include 'db\dbconnect.php';
include 'directories\dirs.php';
ini_set("session.cookie_domain", '.dev.local');
session_set_cookie_params(3600, '/', '.dev.local');
session_start();

$db = new DbConnect();
$conn = $db->connect();

$dir =$docimgdir;
if(isset($_SESSION['admin']))
{
  
  if($_FILES['stimg'])
  {
    //$filedir = $dir.basename($_FILES['stimg']['name']);
    $predir = basename($_FILES['stimg']['name']);
    $rand = random_int(1000,9999);
    $filedir = $dir.$rand.'_'.$predir;
  }

  $did = $_POST['did'];
  $sid = $_POST['stid'];
  $stitle = $_POST['stitle'];
  $sdesc = $_POST['stdesc'];
  $relpath =  abs_to_rel($filedir,$dir,"images/documentation/");
  $sql = "insert into steps values($did,$sid,'$stitle','$sdesc','$relpath')";
  if(mysqli_query($conn,$sql))
  {
    move_uploaded_file($_FILES['stimg']['tmp_name'],$filedir);
    echo "1";
  }
  else
  echo "-1";
  mysqli_close($conn);
 
}
else

{
    echo "0";
}