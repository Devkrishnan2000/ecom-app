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
  $filedir ="null";
  if($_FILES['stimg'])
  {
    $filedir = $dir.basename($_FILES['stimg']['name']);
    move_uploaded_file($_FILES['stimg']['tmp_name'],$filedir);
  }

  $did = $_POST['did'];
  $sid = $_POST['stid'];
  $stitle = $_POST['stitle'];
  $sdesc = $_POST['stdesc'];
  if($filedir!="null")
  {
    $relpath =  abs_to_rel($filedir,$dir,"images/documentation/");
    $sql = "update steps set stitle='$stitle',stdesc='$sdesc',stimg='$relpath' where did=$did and stid=$sid";
  }
  else
  {
    $sql = "update steps set stitle='$stitle',stdesc='$sdesc' where did=$did and stid=$sid";
  }

  mysqli_query($conn,$sql);
  mysqli_close($conn);
  echo "1";
}
else

{
    echo "0";
}