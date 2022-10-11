<?php
include 'headers\header.php';
include 'db\dbconnect.php';

$db = new DbConnect();
$conn = $db->connect();

 if(isset($_GET['rev']))
 {
    $sql = "SELECT sum(oprice) from porder where ostatus!='canceled';";
    $res = mysqli_query($conn,$sql);
    if(mysqli_num_rows($res)>0)
    {
        $r = mysqli_fetch_assoc($res);
        echo $r['sum(oprice)'];
    }
    else
    echo "0";
    mysqli_close($conn);
 }
 else
 if(isset($_GET['sale']))
 {
    $sql = "SELECT count(*) from porder where ostatus!='canceled';";
    $res = mysqli_query($conn,$sql);
    if(mysqli_num_rows($res)>0)
    {
        $r = mysqli_fetch_assoc($res);
        echo $r['count(*)'];
    }
    else
    echo "0";
    mysqli_close($conn);

 }
 else

 if(isset($_GET['year']))
 {
    $sql = "SELECT DISTINCT(YEAR(odate)) as year FROM porder;";
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
    else
    echo "0";
    mysqli_close($conn);
 }
 else
 if(isset($_GET['revenueyear']))
 {
    $year =$_GET['revenueyear'];
    $curmonth = date('m');
    $curyear = date('Y');
    $rows = array();
    if($year==$curyear)
    {
        for($i=1;$i<=$curmonth;++$i)
        {
            $sql = "SELECT IFNULL(sum(oprice),0) as sum from porder where year(odate)=$year and month(odate)=$i and ostatus!='canceled';";
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
        $sql = "SELECT IFNULL(sum(oprice),0) as sum from porder where year(odate)=$year and month(odate)=$i and ostatus!='canceled';";
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
 if(isset($_GET['salesyear']))
 {
    $year =$_GET['salesyear'];
    $curmonth = date('m');
    $curyear = date('Y');
    $rows = array();
    if($year==$curyear)
    {
        for($i=1;$i<=$curmonth;++$i)
        {
            $sql = "SELECT IFNULL(count(*),0) as sum from porder where year(odate)=$year and month(odate)=$i and ostatus!='canceled';";
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
            $sql = "SELECT IFNULL(count(*),0) as sum from porder where year(odate)=$year and month(odate)=$i and ostatus!='canceled';";
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
 if(isset($_GET['yearwiserev']))
 {
    $sql = "SELECT DISTINCT(YEAR(odate)) as year FROM porder;";
    $res = mysqli_query($conn,$sql);
    if(mysqli_num_rows($res)>0)
    {
        $rows = array();
        $yearrev = array(); 
       while( $r = mysqli_fetch_assoc($res))
       {
          $rows[] = $r['year'];
       }
       for($i=0;$i<count($rows);++$i)
       {
        $sql= "SELECT IFNULL(sum(oprice),0) as sum from porder where year(odate)=$rows[$i] and ostatus!='canceled';";
        $res = mysqli_query($conn,$sql);
        if(mysqli_num_rows($res)>0)
        {
            $yearrev[] = mysqli_fetch_assoc($res);
        }

       }
       print json_encode($yearrev,JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES);
    }
 }
 else
 if(isset($_GET['yearwisesale']))
 {
    $sql = "SELECT DISTINCT(YEAR(odate)) as year FROM porder;";
    $res = mysqli_query($conn,$sql);
    if(mysqli_num_rows($res)>0)
    {
        $rows = array();
        $yearrev = array(); 
       while( $r = mysqli_fetch_assoc($res))
       {
          $rows[] = $r['year'];
       }
       for($i=0;$i<count($rows);++$i)
       {
        $sql= "SELECT IFNULL(count(*),0) as sum from porder where year(odate)=$rows[$i] and ostatus!='canceled';";
        $res = mysqli_query($conn,$sql);
        if(mysqli_num_rows($res)>0)
        {
            $yearrev[] = mysqli_fetch_assoc($res);
        }

       }
       print json_encode($yearrev,JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES);
    }
 }
 
  
?>