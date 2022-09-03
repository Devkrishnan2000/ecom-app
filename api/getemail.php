<?php
include 'headers\header.php';
include 'db\dbconnect.php';

$db = new DbConnect();
$conn = $db->connect();


    $sql = "select cmail from customer";
    $res = mysqli_query($conn,$sql);
    $rows = array();
    while($r= mysqli_fetch_assoc($res))
    {
        $rows[] =$r;
    }
    mysqli_close($conn);
    print json_encode($rows,JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES);
?>