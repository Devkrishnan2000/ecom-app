<?php
include 'headers\header.php';
include 'db\dbconnect.php';
ini_set("session.cookie_domain", '.dev.local');
session_set_cookie_params(3600, '/', '.dev.local');
session_start();

$db = new DbConnect();
$conn = $db->connect();

if(isset($_SESSION['user'])&&$_GET['oid'])
{
    $cid = $_SESSION['user'];
    $oid = $_GET['oid'];
    $sql = "select pincode.dto from pincode,customer where pincode.pincode =customer.pincode and cid=$cid;";
    $res = mysqli_query($conn,$sql);
    $r = mysqli_fetch_assoc($res);
    $days = $r['dto'];
    $sql = "select odate from porder where oid=$oid";
    $res = mysqli_query($conn,$sql);
    $r = mysqli_fetch_assoc($res);
    $odate = $r['odate'];
    $date = strtotime("+".$days." day", strtotime($odate));
    echo date("Y-m-d", $date);
}