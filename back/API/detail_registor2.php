<?php 
include 'headAPI.php';
$result = array();
$series = array();
$data = isset($_POST['data1'])?$_POST['data1']:(isset($_GET['data1'])?$_GET['data1']:'');
$data2 = isset($_POST['data2'])?$_POST['data2']:(isset($_GET['data2'])?$_GET['data2']:'');
    $sql="SELECT * FROM registration reg INNER JOIN user_member um on um.reg_id = reg.reg_id WHERE reg.reg_id = :reg_id ";
    $conn_DB->imp_sql($sql);
    $execute=array(':reg_id'=>$data);
    $rslt=$conn_DB->select_a($execute);
    $series['timestamp'] = strtotime($rslt['regdate']);
    array_push($rslt, $series['timestamp']);
print json_encode($rslt);
$conn_DB->close_PDO();
?>