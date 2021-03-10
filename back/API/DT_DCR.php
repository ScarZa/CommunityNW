<?php
header('Content-type: text/json; charset=utf-8');
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: access");
header("Access-Control-Allow-Methods: GET,POST");
header("Access-Control-Allow-Credentials: true");

function __autoload($class_name) {
    include '../../class/' . $class_name . '.php';
}
include_once '../../plugins/function_date.php';
include_once '../../plugins/funcDateThai.php';
$conn_DB = new EnDeCode();
$read = "../../connection/conn_DB.txt";
$conn_DB->para_read($read);
$conn_db = $conn_DB->Read_Text();
$conn_DB->conn_PDO();
set_time_limit(0);
$rslt = array();
$series = array();
$data = isset($_POST['data1'])?$_POST['data1']:(isset($_GET['data1'])?$_GET['data1']:'');
$data2 = isset($_POST['data2'])?$_POST['data2']:(isset($_GET['data2'])?$_GET['data2']:'');
$sql="SELECT df.cid,df.an,df.address,df.dchdate,df.fullname
,CASE WHEN dcp.assent_tel = 1 THEN 'ยินยอม' ELSE	'ไม่ยินยอม' END assent_tel
,CASE WHEN dcp.assent_jvl = 1 THEN 'ยินยอม' ELSE	'ไม่ยินยอม' END assent_jvl
,CASE WHEN dcp.assent_cn = 1 THEN 'ยินยอม' ELSE	'ไม่ยินยอม' END assent_cn
,CASE WHEN dcp.assent_drug = 1 THEN 'ยินยอม' ELSE	'ไม่ยินยอม' END assent_drug
FROM data_forward df
INNER JOIN dcplan dcp on dcp.an = df.an"; 
$conn_DB->imp_sql($sql);
    $num_risk = $conn_DB->select();
    $conv=new convers_encode();
    
    for($i=0;$i<count($num_risk);$i++){
      $series['an']= $num_risk[$i]['an'];
      //$count = strlen($num_risk[$i]['cid']) - 7;
      //$sensorCID = substr_replace($num_risk[$i]['cid'], str_repeat('*', $count), 7, $count);
    $series['cid']= $num_risk[$i]['cid'];
    
    //$fullname = explode(" ", $conv->tis620_to_utf8($num_risk[$i]['fullname']));
    //$countfname = strlen($fullname[0]);
    //$sensorfname = substr_replace($fullname[0], str_repeat('*', 7), 0);
    $series['fullname'] = $num_risk[$i]['fullname'];
    $address = explode(" ", $num_risk[$i]['address']);
    $series['informaddr']= $address[2].' '.$address[3].' '.$address[4];
    $series['dchdate'] = DateThai1($num_risk[$i]['dchdate']);
    $series['assent_tel']= $num_risk[$i]['assent_tel'];
    $series['assent_jvl']= $num_risk[$i]['assent_jvl'];
    $series['assent_cn']= $num_risk[$i]['assent_cn'];
    $series['assent_drug']= $num_risk[$i]['assent_drug'];
    array_push($rslt, $series);    
    }
print json_encode($rslt);
$conn_DB->close_PDO();