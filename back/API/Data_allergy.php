<?php
header('Content-type: text/json; charset=utf-8');
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: access");
header("Access-Control-Allow-Methods: GET,POST");
header("Access-Control-Allow-Credentials: true");

function __autoload($class_name) {
    include '../class/' . $class_name . '.php';
}
include '../function/string_to_ascii.php';
include_once ('../plugins/funcDateThai.php');
set_time_limit(0);
$connDB = new EnDeCode();
$read = "../connection/conn_DB.txt";
$connDB->para_read($read);
$connDB->Read_Text();
$connDB->conn_PDO();
$rslt = array();
$series = array();
$data = isset($_POST['data'])?$_POST['data']:(isset($_GET['data'])?$_GET['data']:'');
$sql = "SELECT * FROM data_dgallergy dd WHERE dd.fw_id = :fw_id";
    $connDB->imp_sql($sql);
    $execute=array(':fw_id'=>$data);
    $user=$connDB->select($execute);
    for($i=0;$i<count($user);$i++){
        $series['drugallergy'] = $user[$i]['drugallergy'];
    array_push($rslt, $series);    
    }
    print json_encode($rslt);
$connDB->close_PDO();
?>