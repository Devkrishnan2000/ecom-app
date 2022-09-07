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
    $sql = "select aname from admin where aid=$aid";
    $res = mysqli_query($conn,$sql);
    $row = mysqli_fetch_assoc($res);
    echo $row['aname'];
    mysqli_close($conn);
}
else
echo "-1";
?>