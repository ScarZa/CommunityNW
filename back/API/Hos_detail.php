<?php 
header('Content-type: text/json; charset=utf-8');
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: access");
header("Access-Control-Allow-Methods: GET,POST");
header("Access-Control-Allow-Credentials: true");

function __autoload($class_name) {
    include '../class/' . $class_name . '.php';
}
include_once ('../plugins/funcDateThai.php');
set_time_limit(0);
$conn_DB= new EnDeCode();
$read="../connection/conn_DB.txt";
$conn_DB->para_read($read);
$conn_DB->Read_Text();
$conn_DB->conn_PDO();
$result = array();
$series = array();
$data = isset($_POST['data'])?$_POST['data']:(isset($_GET['data'])?$_GET['data']:'');
$data2 = isset($_POST['data2'])?$_POST['data2']:(isset($_GET['data2'])?$_GET['data2']:'');
// if(empty($data2)){
//     $sql1 = "SELECT an
//     FROM an_stat 
//     WHERE vn = :vn";
//     $conn_DB->imp_sql($sql1);
//     $execute=array(':vn' => $data);
//     $rslt=$conn_DB->select_a($execute);
//     $data2 = empty($rslt['an'])?'':$rslt['an'];
// }
$sql="SELECT *
FROM infirmary
WHERE inf_id = :inf_id";


$conn_DB->imp_sql($sql);
// $execute=array(':vn' => $data,':an'=>$data2);
$execute=array(':inf_id' => $data);
$rslt=$conn_DB->select_a($execute);

//print_r($rslt);
// $conv=new convers_encode();
//     $series['total'] = $rslt1['sum'];
//     $series['admit'] = $rslt2['sum'];
//     $series['follow_up'] = $rslt3['sum'];
//array_push($result, $series);    
//print_r($result);
print json_encode($rslt);
$conn_DB->close_PDO();
?>