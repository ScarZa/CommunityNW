<?php
include 'headAPI.php';
$rslt = array();
$series = array();
$data = isset($_POST['data'])?$_POST['data']:(isset($_GET['data'])?$_GET['data']:'');
$sql = "SELECT f10_id,f10_name FROM jvl_10_follow";

    $conn_DB->imp_sql($sql);
    $user = $conn_DB->select();
    for($i=0;$i<count($user);$i++){
        $series['f10_id'] = $user[$i]['f10_id'];
        $series['f10_name'] = $user[$i]['f10_name'];
    array_push($rslt, $series);    
    }
    print json_encode($rslt);
$conn_DB->close_PDO();
?>