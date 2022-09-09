<?php
include 'headers\header.php';
include 'db\dbconnect.php';
ini_set("session.cookie_domain", '.dev.local');
session_set_cookie_params(3600, '/', '.dev.local');
session_start();

$db = new DbConnect();
$conn = $db->connect();

if(isset($_SESSION['user'])&&isset($_GET['oid']))
{
   $oid = $_GET['oid'];
   $sql = "update porder set ostatus=-1 where oid=$oid";
   mysqli_query($conn,$sql);
   mysqli_close($conn);
   echo "0";
}
else
{
    echo "-1";
}