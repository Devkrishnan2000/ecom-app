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
 else if( isset($_GET['prodcat']) && isset($_GET['brandcat']))
 {
    $prodcat = $_GET['prodcat'];
    $brandcat = $_GET['brandcat'];
    if($prodcat=="null" && $brandcat=="null")
    {
        $sql = "select eid, ename,eimage from electronics";
        $res = mysqli_query($conn,$sql);
    }
    else if($prodcat=="null" && $brandcat!="null")
    {
        $sql = "select eid, ename,eimage from electronics where brandid=$brandcat";
        $res = mysqli_query($conn,$sql);
    }
    else if($prodcat!="null" && $brandcat=="null")
    {
        $sql = "select eid, ename,eimage from electronics where etype='$prodcat'";
        $res = mysqli_query($conn,$sql);
    }
    else if($prodcat!="null" && $brandcat!="null")
    {
        $sql = "select eid, ename,eimage from electronics where etype='$prodcat'and brandid=$brandcat";
        $res = mysqli_query($conn,$sql);
    }
  
   // $res = mysqli_query($conn,$sql);
    $rows = array();
    while($r= mysqli_fetch_assoc($res))
    {
        $rows[] =$r;
    }
    mysqli_close($conn);
    print json_encode($rows,JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES);
 }
 else
 {
    $sql = "select eid, ename,eimage from electronics";
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