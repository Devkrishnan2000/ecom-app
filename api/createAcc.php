<?php
header("Access-Control-Allow-Origin:http://localhost:3000");
header('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE, OPTIONS');
header('Access-Control-Allow-Headers', 'content-type, authorization, x-requested-with');
header('Access-Control-Allow-Credentials:true');
include 'dbconnect.php';

$db = new DbConnect();
$conn = $db->connect();

 if(isset($_POST['cname']))
 {
    $pass = password_hash($_POST['pass'],PASSWORD_DEFAULT);
    
    $cname = $_POST['cname'];
    $cmail = $_POST['cmail'];
    $addr =$_POST['adr'];
    $phno =$_POST['phno'];
    $pincode =$_POST['pincode'];

    $sql = "insert into customer (cname,caddr,cmail,cphno,cpass,pincode) values('$cname','$addr','$cmail','$phno','$pass',$pincode)";
    mysqli_query($conn,$sql);
    mysqli_close($conn);
 }

?>