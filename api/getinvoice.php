<?php
include 'headers\header.php';
include 'db\dbconnect.php';


$db = new DbConnect();
$conn = $db->connect();
if(isset($_GET['oid']))
{
    $oid = $_GET['oid'];
    $sql ="select oid,odate,porder.cid,customer.cname,customer.caddr,products.pid,products.pname,qty,porder.oprice from porder,products,customer where porder.pid=products.pid and porder.cid =customer.cid and oid=$oid;";
    $res =mysqli_query($conn,$sql);
    $r = mysqli_fetch_assoc($res);
    mysqli_close($conn);
    print json_encode($r,JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES);

}

?>