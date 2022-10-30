<?php
  $docimgdir = "F:/XAMPP/htdocs/sem8project/ecom-app/ecom-app/public/images/documentation/";
  $prodimgdir = "F:/XAMPP/htdocs/sem8project/ecom-app/ecom-app/public/images/Products/";
  $partimgdir = "F:/XAMPP/htdocs/sem8project/ecom-app/ecom-app/public/images/parts/";
  $toolimgdir = "F:/XAMPP/htdocs/sem8project/ecom-app/ecom-app/public/images/Tools/";

  function abs_to_rel($abspath,$dir,$relpath)
  {
    $path=str_replace($dir,$relpath,$abspath);
    return $path;
  }
?>