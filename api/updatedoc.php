<?php
include 'headers\header.php';
include 'db\dbconnect.php';
ini_set("session.cookie_domain", '.dev.local');
session_set_cookie_params(3600, '/', '.dev.local');
session_start();

$db = new DbConnect();
$conn = $db->connect();

if(isset($_SESSION['admin']) && isset($_POST['did']))
{
  $did   = $_POST['did'];
  $dname = $_POST['dname'];
  $ddiff = $_POST['ddiff'];
  $dtime = $_POST['dtime'];
  $intro = $_POST['dintro'];
  $sql = "update document set dname='$dname',ddiff='$ddiff',dtime=$dtime,intro='$intro' where did=$did";
  mysqli_query($conn,$sql);
  mysqli_close($conn);
  echo "0";

}
else
{
    echo "-2";
}