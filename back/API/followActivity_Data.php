<?php
session_save_path("../session/");
header('Content-type: text/json; charset=utf-8');

function __autoload($class_name) {
    include '../class/' . $class_name . '.php';
}
include '../function/string_to_ascii.php';
set_time_limit(0);
$connDB = new EnDeCode();
$read = "../connection/conn_DB.txt";
$connDB->para_read($read);
$connDB->Read_Text();
$connDB->conn_PDO();
$rslt = array();
$series = array();
$data = isset($_POST['data'])?$_POST['data']:(isset($_GET['data'])?$_GET['data']:'');
$sql = "SELECT af_id,activity FROM jvl_activity_follow WHERE f10_id = :f10_id";
$conv=new convers_encode();
    $connDB->imp_sql($sql);
    $execute=array(':f10_id'=>$data);
    $res=$connDB->select($execute);
    for($i=0;$i<count($res);$i++){
        $series['af_id'] = $res[$i]['af_id'];
        $series['activity'] = $res[$i]['activity'];
    array_push($rslt, $series);    
    }
    print json_encode($rslt);
$connDB->close_PDO();
?>