<?php
  session_start();
  if(isset($_SESSION['val']))
  {
    echo $_SESSION['val']."<br>";
    echo session_id();
  }
 

?>