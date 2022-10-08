<?php
include 'headers\header.php';
include 'db\dbconnect.php';
ini_set("session.cookie_domain", '.dev.local');
session_set_cookie_params(3600, '/', '.dev.local');
session_start();

$db = new DbConnect();
$conn = $db->connect();

if(isset($_SESSION['admin']))
{
    if(isset($_POST['pincode']))
    {
        $pincode = $_POST['pincode'];
        $place = $_POST['place'];
        $dfrom = $_POST['dfrom'];
        $dto = $_POST['dto'];
        $sql = "insert into pincode values($pincode,'$place',$dfrom,$dto,0)";
        if(!mysqli_query($conn,$sql))
        {
            echo "-1";
        }
        else
        {
            echo "0";
        }
    }
    else if(isset($_POST['deliv']))
    {
        $deliv = $_POST['deliv'];
        $place = $_POST['place'];
        $dfrom = $_POST['dfrom'];
        $dto = $_POST['dto'];
        $pid = $_POST['pid'];
        $sql = "update pincode set place='$place', dfrom=$dfrom, dto=$dto, deliverable=$deliv where pincode=$pid";
        if(!mysqli_query($conn,$sql))
        {
            echo "-1";
        }
        else
        {
            echo "0";
        }
    }
    

    mysqli_close($conn);
}

