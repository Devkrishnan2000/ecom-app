<?php
include 'headers\header.php';
include 'db\dbconnect.php';
$db = new DbConnect();
$conn = $db->connect();

if(isset($_GET['oid']))
{
    $oid = $_GET['oid'];
    $sql = "update porder set ostatus='Shipping' where oid=$oid";
    mysqli_query($conn,$sql);
    echo "0";
}
?>