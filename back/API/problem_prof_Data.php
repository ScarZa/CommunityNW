<?php
include 'headAPI.php';
$rslt = array();
$series = array();
$data = isset($_POST['data'])?$_POST['data']:(isset($_GET['data'])?$_GET['data']:'');
$sql = "SELECT * FROM admit_problem";

    $conn_DB->imp_sql($sql);
    $user = $conn_DB->select();
    for($i=0;$i<count($user);$i++){
        $series['ap_id'] = $user[$i]['ap_id'];
        $series['ap_name'] = $user[$i]['ap_name'];
    array_push($rslt, $series);    
    }
    print json_encode($rslt);
$conn_DB->close_PDO();
?>