<?php

header("Access-Control-Allow-Origin: *");
include 'dbconnect.php';

$db = new DbConnect();
$conn = $db->connect();


    $sql = "select pincode from pincode";
    $res = mysqli_query($conn,$sql);
    $rows = array();
    while($r= mysqli_fetch_assoc($res))
    {
        $rows[] =$r;
    }
    mysqli_close($conn);
    print json_encode($rows,JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES);
?>