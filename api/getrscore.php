<?php
include 'headers\header.php';
include 'db\dbconnect.php';

$db = new DbConnect();
$conn = $db->connect();

if(isset($_GET['pid']))
{
    $pid = $_GET['pid'];
    $sql = "select rscore from elecproduct where pid=$pid";
    $res = mysqli_query($conn,$sql);
    if(mysqli_num_rows($res)>0)
    {
        $r = mysqli_fetch_assoc($res);
        echo $r['rscore'];
    }
    else
    echo "0";
    mysqli_close($conn);
}