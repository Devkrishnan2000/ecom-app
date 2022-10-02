<?php
include 'headers\header.php';
include 'db\dbconnect.php';
ini_set("session.cookie_domain", '.dev.local');
session_set_cookie_params(3600, '/', '.dev.local');
session_start();
if(isset($_SESSION['admin']))
{
    $aid = $_SESSION['admin'];
    $db = new DbConnect();
    $conn = $db->connect();
    $sql = "select aname,atype from admin where aid=$aid";
    $res = mysqli_query($conn,$sql);
    $row = mysqli_fetch_assoc($res);
    print json_encode($row,JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES);
    mysqli_close($conn);
}
else
echo "-1";
?>