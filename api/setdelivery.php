<?php
include 'headers\header.php';
include 'db\dbconnect.php';
ini_set("session.cookie_domain", '.dev.local');
session_set_cookie_params(3600, '/', '.dev.local');
session_start();
$db = new DbConnect();
$conn = $db->connect();

if(isset($_SESSION['admin'])&& isset($_GET['oid']) && isset($_GET['msg']))
{
    $oid = $_GET['oid'];
    $msg = $_GET['msg'];
    $sql ="update porder set ostatus='$msg' where oid=$oid";
    mysqli_query($conn,$sql);
    echo "0";
    
}
else
{
    echo "-1";
}
    

?>