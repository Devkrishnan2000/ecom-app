<?php
  session_start();
  if(!isset($_SESSION['val']))
  {
    echo "not set";
    $_SESSION['val']='des';
    echo session_id();
  }
  else
  echo session_id();
  
?>