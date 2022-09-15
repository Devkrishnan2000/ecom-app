<?php
include 'headers\header.php';
include 'db\dbconnect.php';
ini_set("session.cookie_domain", '.dev.local');
session_set_cookie_params(3600, '/', '.dev.local');
session_start();

$db = new DbConnect();
$conn = $db->connect();

if(isset($_SESSION['user']))
{
    $cid = $_SESSION['user'];
    $sql = "select products.pimage,products.pname,porder.pid,oid,qty,ostatus,olocation from porder,products where products.pid=porder.pid and cid=$cid;";
    $res = mysqli_query($conn,$sql);
    if(mysqli_num_rows($res)>0)
    {
        $rows = array();
        while($r= mysqli_fetch_assoc($res))
        {
            $rows[] = $r;
        }
        mysqli_close($conn);
        print json_encode($rows,JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES);
    }
    else
    echo "-1";
}

?>