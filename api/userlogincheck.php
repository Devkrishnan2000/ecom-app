<?php
ini_set("session.cookie_domain", 'localhost');
session_set_cookie_params(3600, '/', 'localhost');
if(!isset($_SESSION)) {
   session_start();
}
// csrf code add here (see below...)
$http_origin = $_SERVER['HTTP_ORIGIN'];
if ($http_origin == "http://dev.local:3000" || $http_origin == "http://localhost:3000"){
    header("Access-Control-Allow-Origin: $http_origin");
}
include 'headers\header.php';
include 'db\dbconnect.php';
// code starts here
if(isset($_SESSION['user']))
{
    $cid = $_SESSION['user'];
    $db = new DbConnect();
    $conn = $db->connect();
    $sql = "select cname from customer where cid=$cid";
    $res = mysqli_query($conn,$sql);
    $row = mysqli_fetch_assoc($res);
    echo $row['cname'];
    mysqli_close($conn);
}
else
echo "LOGIN";

session_write_close();
?>