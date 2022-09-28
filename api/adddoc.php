<?php
include 'headers\header.php';
include 'db\dbconnect.php';
ini_set("session.cookie_domain", '.dev.local');
session_set_cookie_params(3600, '/', '.dev.local');
session_start();

$db = new DbConnect();
$conn = $db->connect();

if(isset($_SESSION['admin']) && isset($_POST['dname']))
{
  $dname = $_POST['dname'];
  $ddiff = $_POST['ddiff'];
  $dtime = $_POST['dtime'];
  $intro = $_POST['dintro'];
  $sql = "select dname from document where dname='$dname'";
  if(mysqli_num_rows(mysqli_query($conn,$sql))==0)
  {
    $sql = "insert into document (dname,ddiff,dtime,intro) values('$dname','$ddiff',$dtime,'$intro')";
    mysqli_query($conn,$sql);
    $sql = "select did from document where dname='$dname'";
    $res = mysqli_query($conn,$sql);
    $r = mysqli_fetch_assoc($res);
    echo $r['did'];

  }
  else
  {
    echo "-1";
  }

  mysqli_close($conn);

}
else
{
    echo "-2";
}