<?php
include 'headAPI.php';
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