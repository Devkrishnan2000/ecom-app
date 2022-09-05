<?php
//$sql = "select eid, ename,eimage from electronics LIMIT $limit";

include 'headers/header.php';
include 'db\dbconnect.php';

$db = new DbConnect();
$conn = $db->connect();
 

if(isset($_GET['eid']))
 {
    $eid = $_GET['eid'];
    $sql = "select elecproduct.pid,parttype FROM elecproduct,electronics where elecproduct.eid=electronics.eid and electronics.eid=$eid";
    $res = mysqli_query($conn,$sql);
    $rows = array();
    if(mysqli_num_rows($res)>0)
    {
        while($r= mysqli_fetch_assoc($res))
        {
            $rows[] =$r;
        }
        print json_encode($rows,JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES);
    }
    else
    {
        echo "-1";
    }
    
    mysqli_close($conn);
   
 }
?>