<?php
session_start();
header("Access-Control-Allow-Origin:http://127.0.0.1:3000");
header('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE, OPTIONS');
header('Access-Control-Allow-Headers', 'content-type, authorization, x-requested-with');
header('Access-Control-Allow-Credentials:true');
include 'dbconnect.php';
/*
if(!isset($_SESSION["user"]))
echo "hello";
else
{
    $cid = $_SESSION['user'];
    $sql = "select cname from customer where cid=$cid";
    $res = mysqli_query($conn,$sql);
    if(mysqli_num_rows($res)==1)
    {
        $user = mysqli_fetch_assoc($res);
        echo $user['cname'];
    }
}
*/
if(isset($_SESSION['val']))
echo "val";
else
echo session_id(); 

?>