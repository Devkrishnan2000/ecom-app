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
    $cid = $_SESSION['user'];
    $sql = "select caddr,pincode from customer where cid=$cid";
    $res = mysqli_query($conn,$sql);
    $r = mysqli_fetch_assoc($res);
    print json_encode($r,JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES);
    mysqli_close($conn);
}
else
{
    echo "-1";
}

?>