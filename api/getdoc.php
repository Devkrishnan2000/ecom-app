<?php
include 'headers\header.php';
include 'db\dbconnect.php';
ini_set("session.cookie_domain", '.dev.local');
session_set_cookie_params(3600, '/', '.dev.local');
session_start();

$db = new DbConnect();
$conn = $db->connect();

if(isset($_GET['pid']))
{
    $pid =$_GET['pid'];
    $sql = "select did from elecproduct where pid=$pid";
    $res = mysqli_query($conn,$sql);
    if(mysqli_num_rows($res)==1)
    {

        $r = mysqli_fetch_assoc($res);
        $did = $r['did'];
        $sql = "select did,dname,ddiff,dtime,intro from document where did=$did";
        $res = mysqli_query($conn,$sql);
        $r = mysqli_fetch_assoc($res);
        print json_encode($r,JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES);

    }
     mysqli_close($conn);

}