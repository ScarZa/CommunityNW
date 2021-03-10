<?php
include 'headAPI.php';
$rslt = array();
$series = array();
$data = isset($_POST['data'])?$_POST['data']:(isset($_GET['data'])?$_GET['data']:'');
$sql = "SELECT af_id,activity FROM jvl_activity_follow WHERE f10_id = :f10_id";
$conv=new convers_encode();
    $conn_DB->imp_sql($sql);
    $execute=array(':f10_id'=>$data);
    $res=$conn_DB->select($execute);
    for($i=0;$i<count($res);$i++){
        $series['af_id'] = $res[$i]['af_id'];
        $series['activity'] = $res[$i]['activity'];
    array_push($rslt, $series);    
    }
    print json_encode($rslt);
$conn_DB->close_PDO();
?>