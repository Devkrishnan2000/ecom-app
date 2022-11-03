<?php
include 'headers\header.php';
include 'db\dbconnect.php';
include 'directories\dirs.php';
ini_set("session.cookie_domain", '.dev.local');
session_set_cookie_params(3600, '/', '.dev.local');
session_start();

$db = new DbConnect();
$conn = $db->connect();

if(isset($_SESSION['user']) && isset($_POST['oid']))
{
    $pdinfo = $_POST['pdinfo'];
    $dir =  $returndir;
    $rdesc = $_POST['rdesc'];
    $oid = $_POST['oid'];
    $filedir = null;
    if(isset($_FILES['rimg']))
    {
        $filedir = $dir.basename($_FILES['rimg']['name']);
        move_uploaded_file($_FILES['rimg']['tmp_name'],$filedir);
        $relpath =  abs_to_rel($filedir,$dir,"images/returns/");
        $sql = "insert into retprod (oid,pdinfo,rdesc,dpimg) values($oid,'$pdinfo','$rdesc','$relpath')";
        if(mysqli_query($conn,$sql))
        {
            $sql = "update porder set ostatus='Applied For Return' where oid=$oid";
            if(mysqli_query($conn,$sql))
            echo 0;
            else
            echo -1;
        }
        else
        echo -1;
    }
    
}
?>