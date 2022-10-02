<?php
include 'headers\header.php';
include 'db\dbconnect.php';
ini_set("session.cookie_domain", '.dev.local');
session_set_cookie_params(3600, '/', '.dev.local');
session_start();

$db = new DbConnect();
$conn = $db->connect();

if(isset($_SESSION['admin'])&& isset($_POST['usrname']))
{
    $usrname = $_POST['usrname'];
    $sql = "select aid from admin where ausrname='$usrname'";
   $res = mysqli_query($conn,$sql);
    if(mysqli_num_rows($res)>0)
    {
        echo "1";
    }
    else
    {
        $name = $_POST['name'];
        $pass = password_hash($_POST['pass'],PASSWORD_DEFAULT);
        $sql = "insert into admin (atype,aname,ausrname,apass) values(1,'$name','$usrname','$pass');";
        mysqli_query($conn,$sql);
        echo "0";
    }
    mysqli_close($conn);
}
else
echo "-1";