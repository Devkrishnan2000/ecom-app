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
   $pid =$_GET['pid'];
   $qty =$_GET['qty'];
   $sql ="select stock from products where pid=$pid";
   $res =mysqli_query($conn,$sql);
   $r = mysqli_fetch_assoc($res);
   $stock = $r['stock'];
   $newstock = $stock +$qty;
   $sql = "update porder set ostatus='Canceled' where oid=$oid";
   mysqli_query($conn,$sql);
   $sql = "update products set stock=$newstock where pid=$pid";
   mysqli_query($conn,$sql);
   mysqli_close($conn);
   echo "0";
}
else
{
    echo "-1";
}