<?php
session_start();
header("Access-Control-Allow-Origin: *");
include 'dbconnect.php';
 $db = new DbConnect();
 $conn = $db->connect(); 
 $method = $_SERVER['REQUEST_METHOD'];
 switch($method)
 {
    case "GET":
         if(isset($_GET['num']))
         {
           $limit = $_GET['num'];
         }
         $sql = "select eid, ename,eimage from electronics LIMIT $limit";
         $stmt = $conn->prepare($sql); 
         $stmt->execute();
         $electronics = $stmt->fetchAll(PDO::FETCH_ASSOC);
         echo json_encode($electronics);

 }
?>