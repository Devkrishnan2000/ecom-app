<?php
include 'headers\header.php';
include 'db\dbconnect.php';
ini_set("session.cookie_domain", '.dev.local');
session_set_cookie_params(3600, '/', '.dev.local');
session_start();
$db = new DbConnect();
$conn = $db->connect();
if(isset($_POST['cname'])&&isset($_SESSION['user']))
{
   $pass = password_hash($_POST['pass'],PASSWORD_DEFAULT);
   $oldpass = $_POST['opass'];
   $cname = $_POST['cname'];
   $cmail = $_POST['cmail'];
   $addr =$_POST['adr'];
   $phno =$_POST['phno'];
   $pincode =$_POST['pincode'];
   $cid = $_SESSION['user'];

   $sql = "select cpass from customer where cid=$cid";
   $res = mysqli_query($conn,$sql);
   $r = mysqli_fetch_assoc($res);
   $opass = $r['cpass'];
   if(password_verify($oldpass,$opass))
   {
    $sql = "update customer set cname='$cname',cmail='$cmail',caddr='$addr',cphno='$phno',cpass='$pass',pincode='$pincode' where cid=$cid";
    mysqli_query($conn,$sql);
    echo "0";
   }
   else
   echo "-1";

   
   mysqli_close($conn);
   
}
else
echo "-2";


?>