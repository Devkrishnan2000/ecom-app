<?php
include 'headers\header.php';
include 'db\dbconnect.php';
ini_set("session.cookie_domain", '.dev.local');
session_set_cookie_params(3600, '/', '.dev.local');
session_start();

if(isset($_SESSION['admin'])&& isset($_GET['cat']) && isset($_GET['id']))
{
  $db = new DbConnect();
    $conn = $db->connect();
    $id = $_GET['id'];

    switch($_GET['cat'])
    {
        case "Brand": $sql = "select * from brand where brandid=$id ";
        break;
        case "Electronics": $sql = "select * from electronics where eid=$id ";
        break;
        case "Parts": $sql = " select  products.pid , products.pname, products.price ,products.oprice, products.discount, products.waranty, products.pdesc ,products.stock ,elecproduct.parttype from products,elecproduct where products.pid = elecproduct.pid and products.pid=$id";
        break;
        case "Tools":  $sql = " select  products.pid , products.pname, products.price ,products.oprice, products.discount, products.waranty, products.pdesc ,products.stock ,tool.tooltype from products,tool where products.pid = tool.pid and products.pid=$id";
        break;
        case "Doc" :$sql = "select * from document where did=$id";
        break;
        default : $sql =-1;
    }

    if($sql!=-1)
    {
      $res = mysqli_query($conn,$sql);
      if(mysqli_num_rows($res)>0)
      {
         $r = mysqli_fetch_assoc($res);
         print json_encode($r,JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES);
      }
      else
      {
          echo "1";
      }
    }
    else
    {
      echo "-1";
    }
   
  mysqli_close($conn);

}
else if(isset($_SESSION['admin'])&& isset($_GET['cat']))
{
    $db = new DbConnect();
    $conn = $db->connect();

    switch($_GET['cat'])
    {
        case "Brand": $sql = "select * from brand ";
        break;
        case "Electronics": $sql = "select * from Electronics";
        break;
        case "Parts": $sql = " select  products.pid , products.pname, products.price ,products.oprice ,products.stock ,elecproduct.parttype from products,elecproduct where products.pid = elecproduct.pid";
        break;
        case "Tools":  $sql = " select  products.pid , products.pname, products.price ,products.oprice, products.discount, products.waranty, products.pdesc ,products.stock ,tool.tooltype from products,tool where products.pid = tool.pid";
        break;
        case "Doc" :$sql = "select * from document";
        break;
        default : $sql =-1;
    }

    if($sql!=-1)
    {
      $res = mysqli_query($conn,$sql);
      if(mysqli_num_rows($res)>0)
      {
         $rows = array();
         while($r = mysqli_fetch_assoc($res))
         {
           $rows[] =$r;
         }
         print json_encode($rows,JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES);
      }
      else
      {
          echo "1";
      }
    }
    else
    {
      echo "-1";
    }
   
  mysqli_close($conn);
}

?>