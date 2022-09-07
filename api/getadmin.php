<?php
include 'headers\header.php';
include 'db\dbconnect.php';
ini_set("session.cookie_domain", '.dev.local');
session_set_cookie_params(3600, '/', '.dev.local');
session_start();

if(isset($_SESSION['admin']))
{
    echo $_SESSION['admin'];
}
else
{
    echo "-1";
}

?>