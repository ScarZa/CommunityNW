<?php
include 'headAPI.php';
$rslt = array();
$series = array();
//$data1 = isset($_POST['data1'])?$_POST['data1']:$_GET['data1'];
$data = isset($_POST['data1'])?$_POST['data1']:(isset($_GET['data1'])?$_GET['data1']:'');
$sql = "SELECT reg.reg_id
,CASE WHEN reg.role= 1 THEN 'เจ้าหน้าที่ IT' WHEN reg.role = 2 THEN 'แพทย์'  WHEN reg.role = 3 THEN 'พยายบาล' ELSE 'เจ้าหน้าที่สาธารณสุข' END role_name
,CASE WHEN reg.reg_status= 1 THEN 'Active' ELSE 'Non active' END active
,um.mem_status
,inf.hos_name,CONCAT(reg.fname,' ',reg.lname)fullname,regdate 
FROM registration reg
INNER JOIN user_member um on um.reg_id = reg.reg_id
INNER JOIN infirmary inf on inf.inf_id = reg.inf_id";

$conn_DB->imp_sql($sql);
$num_risk = $conn_DB->select();

for($i=0;$i<count($num_risk);$i++){
    $series['reg_id'] = $num_risk[$i]['reg_id'];
    $series['role_name'] = $num_risk[$i]['role_name'];
    $series['hos_name'] = $num_risk[$i]['hos_name'];
    $series['fullname'] = $num_risk[$i]['fullname'];
    $series['mem_status'] = $num_risk[$i]['mem_status'];
    $series['active'] = $num_risk[$i]['active'];
    $series['regdate'] = DateThai2($num_risk[$i]['regdate']);
    
array_push($rslt, $series);    
}
    print json_encode($rslt);
$conn_DB->close_PDO();
?>