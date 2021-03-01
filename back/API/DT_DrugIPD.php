<?php
header('Content-type: text/json; charset=utf-8');
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: access");
header("Access-Control-Allow-Methods: GET,POST");
header("Access-Control-Allow-Credentials: true");

function __autoload($class_name) {
    include '../class/' . $class_name . '.php';
}
include '../plugins/funcDateThai.php';
$conn_DB = new EnDeCode();
$conv=new convers_encode();
$read = "../connection/conn_DB.txt";
$conn_DB->para_read($read);
$conn_db = $conn_DB->Read_Text();
$conn_DB->conn_PDO();
$rslt = array();
$series = array();
//$data1 = isset($_POST['data1'])?$_POST['data1']:$_GET['data1'];
$data = isset($_POST['data1'])?$_POST['data1']:(isset($_GET['data1'])?$_GET['data1']:'');
$sql = "SELECT * FROM data_ipddrug di WHERE di.fw_id = :fw_id";

$conn_DB->imp_sql($sql);
$execute=array(':fw_id'=>$data);
$num_risk=$conn_DB->select($execute);
for($i=0;$i<count($num_risk);$i++){
    $series['drugName'] = $num_risk[$i]['drugName'];
    $series['shortlist'] = $num_risk[$i]['shortlist'];
    $series['qty'] = $num_risk[$i]['qty'];
    
array_push($rslt, $series);    
}
    print json_encode($rslt);
$conn_DB->close_PDO();
?>