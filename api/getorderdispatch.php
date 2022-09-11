<?php
include 'headers\header.php';
include 'db\dbconnect.php';
$db = new DbConnect();
$conn = $db->connect();

if(isset($_GET['all']))
{
   
   $sql = "select oid,cid,porder.pid,ostatus,products.pname,odate from porder,products where porder.pid=products.pid";
}
else
{
    $sql = "select oid,cid,porder.pid,products.pname,odate from porder,products where porder.pid=products.pid and ostatus='Waiting for Dispatch'";
   
    
}
$res = mysqli_query($conn,$sql);
    
    
if(mysqli_num_rows($res)>0)
{
    $rows = array();
    while($r= mysqli_fetch_assoc($res))
    {
        $rows[] =$r;
    }
    mysqli_close($conn);
    print json_encode($rows,JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES);
}
else
{
    echo "-1";
}

?>