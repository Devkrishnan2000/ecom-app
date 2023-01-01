<?php
include 'headers\header.php';
include 'db\dbconnect.php';
ini_set("session.cookie_domain", '.dev.local');
session_set_cookie_params(3600, '/', '.dev.local');
session_start();

$db = new DbConnect();
$conn = $db->connect();

if(isset($_SESSION['user'])&& isset($_GET['pid']))
{ 
    $pid = $_GET['pid'];
    $cid =$_SESSION['user'];
    $qty = $_GET['qty'];
    $price =$_GET['price'];
    $sql ="select stock from products where pid=$pid";
    $res =mysqli_query($conn,$sql);
    $r = mysqli_fetch_assoc($res);
    if($r['stock']>=$qty)
    {
        $newstock = $r['stock']-$qty;
        $sql ="update products set stock=$newstock where pid=$pid";
        mysqli_query($conn,$sql);
        $sql =  "insert into porder (cid,pid,oprice,qty,odate) values($cid,$pid,$price,$qty,CURRENT_TIMESTAMP)";
        mysqli_query($conn,$sql);
        echo "0";
    }
    else
    {
        echo "1";
    }
    
}
else
echo "-1";

?>