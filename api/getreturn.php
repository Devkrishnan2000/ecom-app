<?php
include 'headers\header.php';
include 'db\dbconnect.php';
include 'directories\dirs.php';
ini_set("session.cookie_domain", '.dev.local');
session_set_cookie_params(3600, '/', '.dev.local');
session_start();

$db = new DbConnect();
$conn = $db->connect();

if(isset($_SESSION['admin']))
{
    $sql = "select dpimg,retprod.oid,pdinfo,rdesc,pname from retprod,products,porder where retprod.pid= products.pid and porder.ostatus='Applied For Return' and retprod.oid = porder.oid";
    $res = mysqli_query($conn,$sql);
    if(mysqli_num_rows($res)>0 )
    {
        while($r= mysqli_fetch_assoc($res))
        {
            $rows[] =$r;
        }
        mysqli_close($conn);
        print json_encode($rows,JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES);
    }
    else
    echo -1;
}

?>