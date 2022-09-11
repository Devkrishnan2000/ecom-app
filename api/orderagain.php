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
   $sql = "select cid,pid,qty,oprice from porder where oid=$oid";
   $res =mysqli_query($conn,$sql);
   $r = mysqli_fetch_assoc($res);
   $cid = $r['cid'];
   $pid = $r['pid'];
   $qty = $r['qty'];
   $oprice =$r['oprice']; 
   $sql = "insert into porder(cid,pid,qty,oprice,odate) values($cid,$pid,$qty,$oprice,CURRENT_TIMESTAMP); ";
   mysqli_query($conn,$sql);
   mysqli_close($conn);
   echo "0";
}
else
{
    echo "-1";
}