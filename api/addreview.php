<?php
include 'headers\header.php';
include 'db\dbconnect.php';
ini_set("session.cookie_domain", '.dev.local');
session_set_cookie_params(3600, '/', '.dev.local');
session_start();

$db = new DbConnect();
$conn = $db->connect();

if(isset($_SESSION['user']) && isset($_POST['pid']))
{
   $cid = $_SESSION['user'];
   $pid = $_POST['pid'];
   $title = $_POST['title'];
   $content = $_POST['content'];
   $rating = $_POST['rating'];
   $score = $_POST['score'];
   $sql = "select * from review where cid=$cid and pid=$pid";
   $res = mysqli_query($conn,$sql);
   if(mysqli_num_rows($res)>0)
   {
      $sql = "update review set rtitle='$title',rdesc='$content',rrating=$rating,rscore=$score where cid=$cid and pid=$pid";
      mysqli_query($conn,$sql);
      
   }
   else
   {
    $sql = "insert into review values($cid,$pid,'$title','$content',$rating,$score)";
    mysqli_query($conn,$sql);
    
   }

   $sql = "select AVG(rrating) from review  where pid=$pid";
   $res = mysqli_query($conn,$sql);
   $r = mysqli_fetch_assoc($res);
   if($r['AVG(rrating)']!='')
   {
       $rating = round($r['AVG(rrating)'],0);
       $sql = "update products set rating=$rating where pid=$pid";
       mysqli_query($conn,$sql);
   }
   else
   {
       $sql = "update products set rating=0 where pid=$pid";
       mysqli_query($conn,$sql);
   }

   $sql = "SELECT AVG(rscore) from review where rscore >0 and pid=$pid";
   $res = mysqli_query($conn,$sql);
   $r = mysqli_fetch_assoc($res);

   if($r['AVG(rscore)']!='')
   {
    $rscore = round($r['AVG(rscore)'],0);
    $sql = "update elecproduct set rscore=$rscore where pid=$pid";
    mysqli_query($conn,$sql);
   }
   


   mysqli_close($conn);
   echo "0";

}
else
echo "-1";