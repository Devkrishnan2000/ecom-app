<?php
include 'headers\header.php';
include 'db\dbconnect.php';

$db = new DbConnect();
$conn = $db->connect();

 if(isset($_GET['curpartyear'])&&isset($_GET['curpartid']))
{
    $year =$_GET['curpartyear'];
    $pid = $_GET['curpartid'];
    $curmonth = date('m');
    $curyear = date('Y');
    $rows = array();
    if($year==$curyear)
    {
        for($i=1;$i<=$curmonth;++$i)
        {
            $sql = "SELECT IFNULL(count(*),0) as sum from porder where year(odate)=$year and month(odate)=$i and ostatus!='canceled' and pid=$pid";
            $res = mysqli_query($conn,$sql);
            if(mysqli_num_rows($res)>0)
            {
                $rows[] = mysqli_fetch_assoc($res);
            }
        }
    }
    else
    {
        for($i=1;$i<=12;++$i)
        {
            $sql = "SELECT IFNULL(count(*),0) as sum from porder where year(odate)=$year and month(odate)=$i and ostatus!='canceled0' and pid=$pid";
            $res = mysqli_query($conn,$sql);
            if(mysqli_num_rows($res)>0)
            {
                $rows[] = mysqli_fetch_assoc($res);
            }
        }
    }
   
    print json_encode($rows,JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES);
}
else
if(isset($_GET['getpopprod']))
{
    $sql = "SELECT products.pname,products.rating, count(porder.pid) count from porder,products where porder.pid=products.pid and products.ptype='part' and porder.ostatus!='canceled' GROUP by porder.pid ORDER BY COUNT DESC LIMIT 1";
    $res = mysqli_query($conn,$sql);
    if(mysqli_num_rows($res)>0)
    {
        $r = mysqli_fetch_assoc($res);
        print json_encode($r,JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES);
    }
    mysqli_close($conn);
}
else
if(isset($_GET['gett5sales']))
{
    $sql = "SELECT products.pname ,count(porder.pid) count from porder,products where porder.pid=products.pid and products.ptype='part' and porder.ostatus!='canceled' GROUP by porder.pid ORDER BY COUNT DESC LIMIT 5";
    $res = mysqli_query($conn,$sql);
    if(mysqli_num_rows($res)>0)
    {
        $rows = array();
       while( $r = mysqli_fetch_assoc($res))
       {
          $rows[] = $r;
       }
       print json_encode($rows,JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES);
    }
    mysqli_close($conn);
}
else
if(isset($_GET['gett5rating']))
{
    $sql = "SELECT products.pname ,count(porder.pid),products.rating  from porder,products where porder.pid=products.pid and products.ptype='part' and porder.ostatus!='canceled' GROUP by porder.pid ORDER BY products.rating DESC LIMIT 5";
    $res = mysqli_query($conn,$sql);
    if(mysqli_num_rows($res)>0)
    {
        $rows = array();
       while( $r = mysqli_fetch_assoc($res))
       {
          $rows[] = $r;
       }
       print json_encode($rows,JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES);
    }
    mysqli_close($conn);
}
else
if(isset($_GET['getparts']))
{
    $sql = "select pname,pid from products where ptype='part'";
    $res = mysqli_query($conn,$sql);
    if(mysqli_num_rows($res)>0)
    {
        $rows = array();
       while( $r = mysqli_fetch_assoc($res))
       {
          $rows[] = $r;
       }
       print json_encode($rows,JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES);
    }
    mysqli_close($conn);
    
}
else
if(isset($_GET['currating']))
{
    $pid = $_GET['currating'];
    $rows = array();
    for($i=1;$i<=5;++$i)
    {
        $sql = "SELECT COUNT(rrating) as count from review where pid=$pid and rrating=$i";
        $res = mysqli_query($conn,$sql);
        $rows[] = mysqli_fetch_assoc($res);
    }
    print json_encode($rows,JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES);
    mysqli_close($conn);
}


?>