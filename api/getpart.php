<?php
include 'headers\header.php';
include 'db\dbconnect.php';

$db = new DbConnect();
$conn = $db->connect();

if(isset($_GET['num']))
 {
    $limit = $_GET['num'];
    $sql = "select pid,pname,pimage,price,oprice,discount,rating from products where ptype ='tool' LIMIT $limit";
    
 }

 else if(isset($_GET['pricel'])&&isset($_GET['priceh'])&&isset($_GET['category'])&&isset($_GET['eid']))
 {
    $eid = $_GET['eid'];
    $pricel =$_GET['pricel'];
    $priceh =$_GET['priceh'];
    $category =$_GET['category'];
    $sql ="select products.pid,pname,pimage,price,oprice,discount,rating from products,elecproduct WHERE products.pid=elecproduct.pid and elecproduct.eid=$eid and products.oprice BETWEEN $pricel and $priceh and elecproduct.parttype='$category'";
   
 }

 else if(isset($_GET['pricel'])&&isset($_GET['priceh'])&&isset($_GET['eid']))
 {
    $eid = $_GET['eid'];
    $pricel =$_GET['pricel'];
    $priceh =$_GET['priceh'];
    $sql ="select products.pid,pname,pimage,price,oprice,discount,rating from products,elecproduct WHERE products.pid=elecproduct.pid and elecproduct.eid=$eid and products.oprice BETWEEN $pricel and $priceh";
   
 }

 else if(isset($_GET['category'])&&isset($_GET['eid']))
 {
    $eid = $_GET['eid'];
    $category =$_GET['category'];
    $sql ="select products.pid,pname,pimage,price,oprice,discount,rating from products,elecproduct WHERE products.pid=elecproduct.pid and elecproduct.eid=$eid and elecproduct.parttype='$category';";
   
 }
 else if(isset($_GET['eid']))
 {
    $eid = $_GET['eid'];
    $sql ="select products.pid,pname,pimage,price,oprice,discount,rating from products,elecproduct WHERE products.pid=elecproduct.pid and elecproduct.eid=$eid";
   
 }

 $res = mysqli_query($conn,$sql);
 $rows = array();
 while($r= mysqli_fetch_assoc($res))
 {
     $rows[] =$r;
 }
 mysqli_close($conn);
 print json_encode($rows,JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES);
?>