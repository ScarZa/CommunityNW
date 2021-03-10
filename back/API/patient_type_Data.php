<?php
include 'headAPI.php';
$rslt = array();
$series = array();
$data = isset($_POST['data'])?$_POST['data']:(isset($_GET['data'])?$_GET['data']:'');
$sql = "SELECT * FROM dc_special_type";
$conv=new convers_encode();
    $conn_DB->imp_sql($sql);
    $user = $conn_DB->select();
    for($i=0;$i<count($user);$i++){
        $series['dcs_id'] = $user[$i]['dcs_id'];
        $series['dcs_name'] = $user[$i]['dcs_name'];
    array_push($rslt, $series);    
    }
    print json_encode($rslt);
$conn_DB->close_PDO();
?>