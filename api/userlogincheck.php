<?php
ini_set("session.cookie_domain", 'localhost');
session_set_cookie_params(3600, '/', 'localhost');
if(!isset($_SESSION)) {
   session_start();
}
// csrf code add here (see below...)
$http_origin = $_SERVER['HTTP_ORIGIN'];
if ($http_origin == "http://dev.local:3000" || $http_origin == "http://localhost:3000"){
    header("Access-Control-Allow-Origin: $http_origin");
}
header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
header('Access-Control-Allow-Credentials: true');
header('Access-Control-Allow-Headers: X-Requested-With, Origin, Content-Type, X-CSRF-Token, Accept');
// code starts here
$_SESSION['test'] = 'whatever';
if(isset($_SESSION['user']))
echo $_SESSION['user'];
session_write_close();
?>