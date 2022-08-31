<?php
header("Access-Control-Allow-Origin:http://localhost:3000");
header('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE, OPTIONS');
header('Access-Control-Allow-Headers', 'content-type, authorization, x-requested-with');
header('Access-Control-Allow-Credentials:true');
include 'dbconnect.php';

$db = new DbConnect();
$conn = $db->connect();

if(isset($_GET['num']))
 {
    $limit = $_GET['num'];
    $sql = "select pid,pname,pimage,price,oprice,discount,rating from products where ptype ='tool' LIMIT $limit";
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