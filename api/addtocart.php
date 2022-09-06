<?php
include 'headers/header.php';
include 'db\dbconnect.php';

$db = new DbConnect();
$conn = $db->connect();

if(isset($_GET['pid'])&&isset($_GET['cid'])&&isset($_GET['qty']))
{

   $pid = $_GET['pid'];
   $cid =$_GET['cid'];
   $qant =$_GET['qty'];

   $sqlcheck ="select stock from products where pid=$pid";
   $checkeres = mysqli_query($conn,$sqlcheck);
   $rc = mysqli_fetch_assoc($checkeres);
   if($rc['stock']>$qant)
   {
    $sql = "select qty from cart where pid=$pid and cid=$cid";
    $res = mysqli_query($conn,$sql);
    if(mysqli_num_rows($res)>0)
    {
       $r = mysqli_fetch_assoc($res);
       $qty = $r['qty'];
       $qty+=$qant;
       $sqlupdate = "update cart set qty=$qty where pid=$pid and cid=$cid";
       mysqli_query($conn,$sqlupdate);
       echo "0";
       
    }
    else
    {
        $sqlinsert = "insert into cart values($cid,$pid,$qant);";
        mysqli_query($conn,$sqlinsert);
        echo "0";
 
    }
 
   }
   else
   echo "-1";
  
   mysqli_close($conn);
}
?>

 

