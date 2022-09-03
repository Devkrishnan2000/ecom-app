<?php
//$sql = "select eid, ename,eimage from electronics LIMIT $limit";

include 'headers/header.php';
include 'db\dbconnect.php';

$db = new DbConnect();
$conn = $db->connect();
 

if(isset($_GET['num']))
 {
    $limit = $_GET['num'];
    $sql = "select eid, ename,eimage from electronics LIMIT $limit";
    $res = mysqli_query($conn,$sql);
    $rows = array();
    while($r= mysqli_fetch_assoc($res))
    {
        $rows[] =$r;
    }
    mysqli_close($conn);
    print json_encode($rows,JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES);
 }
?>