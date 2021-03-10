<?php
include 'headAPI.php';
$rslt = array();
$series = array();
$data = isset($_POST['data'])?$_POST['data']:(isset($_GET['data'])?$_GET['data']:'');
$sql = "SELECT act1,act2,act3,act4,act5,act6,act7,act8,act9,act10
,act11,act12,act13,act14,act15,act16,act17,act18,act19,act20
,act21,act22,act23,act24,act25,act26,act27,act28,act29
FROM dcplan WHERE an = :an";

    $conn_DB->imp_sql($sql);
    $execute=array(':an'=>$data);
    $rslt=$conn_DB->select($execute);
    // for($i=0;$i<count($user);$i++){
    //     $series['f10_id'] = $user[$i]['f10_id'];
    //     $series['f10_name'] = $user[$i]['f10_name'];
    // array_push($rslt, $series);    
    // }
    print json_encode($rslt);
$conn_DB->close_PDO();
?>