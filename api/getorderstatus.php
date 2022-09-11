<?php
include 'headers\header.php';
include 'db\dbconnect.php';
ini_set("session.cookie_domain", '.dev.local');
session_set_cookie_params(3600, '/', '.dev.local');
session_start();
$db = new DbConnect();
$conn = $db->connect();

if(isset($_SESSION['admin'])&& isset($_GET['oid']))
{
    $oid = $_GET['oid'];
    $sql ="select customer.cname,customer.caddr,customer.cphno,ostatus,olocation from customer,porder where porder.cid =customer.cid and oid=$oid and ostatus='Shipping'";
    $res = mysqli_query($conn,$sql);
    if(mysqli_num_rows($res)>0)
    {
        $r = mysqli_fetch_assoc($res);
        mysqli_close($conn);
        print json_encode($r,JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES);
    }
    else
    {
        echo "1";
    }
}
else
{
    echo "-1";
}
    
?>