<?php 
include 'headAPI.php';
$result = array();
$series = array();
$data = isset($_POST['data1'])?$_POST['data1']:(isset($_GET['data1'])?$_GET['data1']:'');
$data2 = isset($_POST['data2'])?$_POST['data2']:(isset($_GET['data2'])?$_GET['data2']:'');
    $sql="SELECT reg.reg_id
    ,CASE WHEN reg.role= 1 THEN 'เจ้าหน้าที่ IT' WHEN reg.role = 2 THEN 'แพทย์'  WHEN reg.role = 3 THEN 'พยายบาล' ELSE 'เจ้าหน้าที่สาธารณสุข' END role_name
    ,inf.hos_name,reg.agency_tell,reg.pname,CONCAT(reg.fname,' ',reg.lname)fullname,reg.cid,reg.email,reg.tell,reg.line
    ,regdate 
    FROM registration reg
    INNER JOIN infirmary inf on inf.inf_id = reg.inf_id
    WHERE reg.reg_id = :reg_id 
    #and reg.reg_status = 0 
    ORDER BY reg_id DESC";
    $conn_DB->imp_sql($sql);
    $execute=array(':reg_id'=>$data);
    $rslt=$conn_DB->select_a($execute);

//print_r($rslt);

//for($i=0;$i<count($rslt);$i++){
    $series['reg_id'] = $rslt['reg_id'];
    $series['role_name'] = $rslt['role_name'];
    $series['regdate'] = DateThai1($rslt['regdate']);
    $series['hos_name'] = $rslt['hos_name'];
    $series['agency_tell'] = $rslt['agency_tell'];
    $series['pname'] = $rslt['pname'];
    $series['fullname'] = $rslt['fullname'];
    $series['cid'] = $rslt['cid'];
    $series['email'] = $rslt['email'];
    $series['tell'] = $rslt['tell'];
    $series['line'] = $rslt['line'];
    $series['timestamp'] = strtotime($rslt['regdate']);
array_push($result, $series);    
//}
//print_r($result);
print json_encode($result);
$conn_DB->close_PDO();
?>