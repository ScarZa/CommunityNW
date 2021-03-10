<?php
include 'headAPI.php';
$rslt = array();
$series = array();
$data = isset($_POST['data1'])?$_POST['data1']:(isset($_GET['data1'])?$_GET['data1']:'');
$data2 = isset($_POST['data2'])?$_POST['data2']:(isset($_GET['data2'])?$_GET['data2']:'');
$sql="SELECT df.cid,df.hn hn_se,df.an,df.fullname,df.address,df.dchdate
FROM data_forward df
INNER JOIN dcplan dcp on dcp.an = df.an
WHERE dcp.hos_nearby = ".$data; 
$conn_DB->imp_sql($sql);
    $num_risk = $conn_DB->select();
    $conv=new convers_encode();
    
    for($i=0;$i<count($num_risk);$i++){
      $series['an']= $num_risk[$i]['an'];
      $count = strlen($num_risk[$i]['cid']) - 7;
      $sensorCID = substr_replace($num_risk[$i]['cid'], str_repeat('*', $count), 7, $count);
    $series['cid']= $sensorCID;
    
    $fullname = explode(" ", $num_risk[$i]['fullname']);
    //$countfname = strlen($fullname[0]);
    $sensorfname = substr_replace($fullname[0], str_repeat('*', 7), 0);
    $series['fullname'] = $sensorfname.'  '.$fullname[1];
    $address = explode(" ", $num_risk[$i]['address']);
    $series['informaddr']= $address[2].' '.$address[3].' '.$address[4];
    $series['dchdate'] = DateThai1($num_risk[$i]['dchdate']);
    array_push($rslt, $series);    
    }
print json_encode($rslt);
$conn_DB->close_PDO();