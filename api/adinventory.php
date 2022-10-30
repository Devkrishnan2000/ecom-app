<?php
include 'headers\header.php';
include 'db\dbconnect.php';
include 'directories\dirs.php';
ini_set("session.cookie_domain", '.dev.local');
session_set_cookie_params(3600, '/', '.dev.local');
session_start();


if(isset($_SESSION['admin'] ))
{
    $db = new DbConnect();
    $conn = $db->connect();
    $flag =0;

    if(isset($_POST['bname']))
    {
        $bname = $_POST['bname'];
        if(isset($_POST['bid']))
        {
            $bid = $_POST['bid'];
            $sql = "update brand set bname='$bname' where brandid=$bid";
        }
        else
        $sql = "insert into brand (bname) values('$bname')";
       
    }
    else if(isset($_POST['ename']))
    {
        $dir = $prodimgdir;
        $ename = $_POST['ename'];
        $bid = $_POST['brandid'];
        $etype = $_POST['typeselc'];
        if(isset($_POST['eid']))
        {
            $eid = $_POST['eid'];
            $filedir="null";
            if(isset($_FILES['eimg']))
            {
              $filedir = $dir.basename($_FILES['eimg']['name']);
              move_uploaded_file($_FILES['eimg']['tmp_name'],$filedir);
            }

            if($filedir!="null")
          {
           
            $relpath =  abs_to_rel($filedir,$dir,"images/Products/");
            $sql = "update electronics set ename='$ename', brandid=$bid , etype='$etype', eimage='$relpath'  where eid=$eid";
          }
            else
           {
             $sql = "update electronics set ename='$ename', brandid=$bid , etype='$etype' where eid=$eid";
          }
        }
        else
        {
            if($_FILES['eimg'])
            {
              $filedir = $dir.basename($_FILES['eimg']['name']);
              move_uploaded_file($_FILES['eimg']['tmp_name'],$filedir);
            }
            $relpath =  abs_to_rel($filedir,$dir,"images/Products/");
            $sql = "insert into electronics (ename,brandid,etype,eimage) values('$ename',$bid,'$etype','$relpath')";
        }

       
    }
    else if(isset($_POST['ptype']))
    {
        $dir =  $partimgdir;
        $pname = $_POST['pname'];
        $bid = $_POST['brandid'];
        $price = $_POST['price'];
        $discount = $_POST['discount'];
        $stock = $_POST['stock'];
        $waranty = $_POST['waranty'];
        $condition = $_POST['condition'];
        $pdesc = $_POST['pdesc'];
        $partof = $_POST['partof'];
        $ptype = $_POST['ptype'];
        $doc = $_POST['doc'];
        if($discount>-1)
        $oprice = $price - ($price * ($discount/100));
        else
        $oprice = $price;

        if(isset($_POST['pid']))
        {
          $pid = $_POST['pid'];
          $filedir="null";
          if(isset($_FILES['pimg']))
          {
            $filedir = $dir.basename($_FILES['pimg']['name']);
            move_uploaded_file($_FILES['pimg']['tmp_name'],$filedir);
          }

          if($filedir!="null")
          {
            $relpath =  abs_to_rel($filedir,$dir,"images/parts/");
            $sql = "update products set brandid=$bid ,pname='$pname', pdesc='$pdesc', pimage='$relpath' , price=$price ,oprice=$oprice ,discount=$discount ,stock=$stock ,waranty=$waranty, pcondition=$condition where pid=$pid";
            if(!mysqli_query($conn,$sql))
            {
               echo mysqli_error($conn);
               $flag=-1;
            }
            else
            {
                $sql = "update elecproduct set eid=$partof, parttype='$ptype', did=$doc where pid=$pid";
            }
          }
          else
          {
            $sql = "update products set brandid=$bid ,pname='$pname', pdesc='$pdesc', price=$price ,oprice=$oprice ,discount=$discount ,stock=$stock ,waranty=$waranty, pcondition=$condition where pid=$pid";
            if(!mysqli_query($conn,$sql))
            {
               echo mysqli_error($conn);
               $flag=-1;
            }
            else
            {
                $sql = "update elecproduct set eid=$partof, parttype='$ptype', did=$doc where pid=$pid";
            }
          }


        }
        else
        {
          if($_FILES['pimg'])
          {
            $filedir = $dir.basename($_FILES['pimg']['name']);
            move_uploaded_file($_FILES['pimg']['tmp_name'],$filedir);
          }
          $relpath =  abs_to_rel($filedir,$dir,"images/parts/");
          $sql = "insert into products (brandid,ptype,pname,pdesc,pimage,price,oprice,discount,stock,waranty,pcondition) values($bid,'part','$pname','$pdesc','$relpath',$price,$oprice,$discount,$stock,$waranty,$condition)";
          if(!mysqli_query($conn,$sql))
           {
              echo mysqli_error($conn);
              $flag=-1;
           }
           else
           {
              $sql = "select pid from products where pname='$pname'";
              $res = mysqli_query($conn,$sql);
              $r = mysqli_fetch_assoc($res);
              $pid = $r['pid'];
              $sql = "insert into elecproduct  values($pid,$partof,'$ptype',$doc,0)";
           }
        }

       
    }
    else if(isset($_POST['ttype']))
    {
        $dir =  $toolimgdir;
        $pname = $_POST['pname'];
        $bid = $_POST['brandid'];
        $price = $_POST['price'];
        $discount = $_POST['discount'];
        $stock = $_POST['stock'];
        $waranty = $_POST['waranty'];
        $condition = $_POST['condition'];
        $pdesc = $_POST['pdesc'];
        $ptype = $_POST['ttype'];
        if($discount>-1)
        $oprice = $price - ($price * ($discount/100));
        else
        $oprice = $price;

        if(isset($_POST['pid']))
        {
          $pid = $_POST['pid'];
          $filedir="null";
          if(isset($_FILES['pimg']))
          {
            $filedir = $dir.basename($_FILES['pimg']['name']);
            move_uploaded_file($_FILES['pimg']['tmp_name'],$filedir);
          }

          if($filedir!="null")
          {
            $relpath =  abs_to_rel($filedir,$dir,"images/Tools/");
            $sql = "update products set brandid=$bid ,pname='$pname', pdesc='$pdesc', pimage='$relpath' , price=$price ,oprice=$oprice ,discount=$discount ,stock=$stock ,waranty=$waranty, pcondition=$condition where pid=$pid";
            if(!mysqli_query($conn,$sql))
            {
               echo mysqli_error($conn);
               $flag=-1;
            }
            else
            {
                $sql = "update tool set tooltype='$ptype' where pid=$pid";
            }
          }
          else
          {
            $sql = "update products set brandid=$bid ,pname='$pname', pdesc='$pdesc', price=$price ,oprice=$oprice ,discount=$discount ,stock=$stock ,waranty=$waranty, pcondition=$condition where pid=$pid";
            if(!mysqli_query($conn,$sql))
            {
               echo mysqli_error($conn);
               $flag=-1;
            }
            else
            {
              $sql = "update tool set tooltype='$ptype' where pid=$pid";
            }
          }


        }
        else
        {
          if($_FILES['pimg'])
          {
            $filedir = $dir.basename($_FILES['pimg']['name']);
            move_uploaded_file($_FILES['pimg']['tmp_name'],$filedir);
          }
          $relpath =  abs_to_rel($filedir,$dir,"images/Tools/");
          $sql = "insert into products (brandid,ptype,pname,pdesc,pimage,price,oprice,discount,stock,waranty,pcondition) values($bid,'tool','$pname','$pdesc','$relpath',$price,$oprice,$discount,$stock,$waranty,$condition)";
          if(!mysqli_query($conn,$sql))
           {
              echo mysqli_error($conn);
              $flag=-1;
           }
           else
           {
              $sql = "select pid from products where pname='$pname'";
              $res = mysqli_query($conn,$sql);
              $r = mysqli_fetch_assoc($res);
              $pid = $r['pid'];
              $sql = "insert into tool  values($pid,'$ptype')";
           }
        }
    }

    if($flag==0)
    {
        mysqli_query($conn,$sql);
    echo "0";
    }

    mysqli_close($conn);


}
else
{
    echo "-1";
}



?>