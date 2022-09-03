<?php
include 'headers\header.php';
ini_set("session.cookie_domain", '.dev.local');
session_set_cookie_params(3600, '/', '.dev.local');
session_start();
unset ($_SESSION["user"]);

?>