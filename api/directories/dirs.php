<?php
  $docimgdir = "F:/XAMPP/htdocs/sem8project/ecom-app/ecom-app/public/images/documentation/";

  function abs_to_rel($abspath,$dir,$relpath)
  {
    $path=str_replace($dir,$relpath,$abspath);
    return $path;
  }
?>