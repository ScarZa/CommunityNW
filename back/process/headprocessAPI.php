<?php 
//session_save_path("../session/");
//session_start(); 
header('Content-type: text/json; charset=utf-8');
// header("Access-Control-Allow-Origin: *");
// header("Access-Control-Allow-Headers: access");
// header("Access-Control-Allow-Methods: GET,POST");
// header("Access-Control-Allow-Credentials: true");
// header('Content-Type: application/json;charset=utf-8');


function __autoload($class_name) {
    include '../class/' . $class_name . '.php';
}
include_once ('../plugins/funcDateThai.php');
include '../function/string_to_ascii.php';
set_time_limit(0);
$connDB= new EnDeCode();
$conv=new convers_encode();
$read="../connection/conn_DB.php";
$connDB->para_read($read);
$connDB->Read_Text();
$connDB->conn_PDO();

?>