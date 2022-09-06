<?php
include 'headers\header.php';
include 'db\dbconnect.php';
ini_set("session.cookie_domain", '.dev.local');
session_set_cookie_params(3600, '/', '.dev.local');
session_start();

$db = new DbConnect();
$conn = $db->connect();

 if(isset($_SESSION['user']))
 {
    $userid =$_SESSION['user'];
    $sql = "select cart.pid,qty,products.pname,products.oprice,products.pimage from cart, products where products.pid = cart.pid and cid=$userid";
    $res = mysqli_query($conn,$sql);
    $rows = array();
    while($r= mysqli_fetch_assoc($res))
    {
        $rows[] =$r;
    }
    mysqli_close($conn);
    print json_encode($rows,JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES);
 }
 else
  echo "-1";
 

?>