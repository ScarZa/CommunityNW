<?php 
include 'headAPI.php';
$result = array();
$series = array();
$data = isset($_POST['data'])?$_POST['data']:(isset($_GET['data'])?$_GET['data']:'');
$data2 = isset($_POST['data2'])?$_POST['data2']:(isset($_GET['data2'])?$_GET['data2']:'');

// if(!empty($data2)){
//     $sql="SELECT vn FROM an_stat WHERE an = :an";
//     $conn_DB->imp_sql($sql);
//     $execute=array(':an'=>$data2);
//     $rslt=$conn_DB->select_a($execute);
//     $data = $rslt['vn'];
// }

    $sql="SELECT * FROM dcplan WHERE an = :an";
    $conn_DB->imp_sql($sql);
    $execute=array(':an'=>$data2);
    $rslt=$conn_DB->select_a($execute);
    



//   $series['fw_id'] = $rslt['fw_id'];
//   $series['hn'] = $rslt['hn'];
//   $series['vn'] = $rslt['vn'];
//   $series['an'] = $rslt['an'];
//   $series['admit'] = $rslt['admit'];
//   $series['smiv'] = $rslt['smiv'];
//   $series['lastvisit'] = $rslt['lastvisit'];
//   $series['admdate'] = $rslt['admdate'];
//   $series['nextdate'] = isset($rslt['nextdate'])?(($rslt['nextdate']=='0000-00-00')?'':DateThai1($rslt['nextdate'])):'';
//   $series['pttype_expire'] = isset($rslt['pttype_expire'])?(($rslt['pttype_expire']=='0000-00-00')?'':DateThai3($rslt['pttype_expire'])):'';
//   $series['expire_date'] = isset($rslt['expire_date'])?(($rslt['expire_date']=='0000-00-00')?'':DateThai1($rslt['expire_date'])):'';
//   $series['vstdate'] = DateThai2($rslt['vstdate']);
//   $series['vsttime'] = $rslt['vsttime'];
//   $series['dchdate'] = isset($rslt['dchdate'])?DateThai2($rslt['dchdate']):'';
//   $series['dchtime'] = isset($rslt['dchtime'])?$rslt['dchtime']:'';
//   $series['Dhospital'] = $rslt['Dhospital'];
//   $series['fullname'] = $rslt['fullname'];
//   $series['sex'] = $rslt['sex'];
//   $series['address'] = $rslt['address'];
//   $series['cid'] = $rslt['cid'];
//   $series['birthday'] = DateThai1($rslt['birthday']);
//   $series['bloodgrp'] = $rslt['bloodgrp'];
//   $series['disease'] = $rslt['disease'];
//   $series['age'] = $rslt['age'];
//   $series['nation_name'] = $rslt['nation_name'];
//   $series['religion_name'] = $rslt['religion_name'];
//   $series['edu_name'] = $rslt['edu_name'];
//   $series['occ_name'] = $rslt['occ_name'];
//   $series['mpdx'] = $rslt['mpdx'];
//   $series['spdx'] = $rslt['spdx'];
//   $series['dxname1'] = $rslt['dxname1'];
//   $series['dxname2'] = $rslt['dxname2'];
//   $series['dxname3'] = $rslt['dxname3'];
//   $series['dxname4'] = $rslt['dxname4'];
//   $series['ptname1'] = $rslt['ptname1'];
//   $series['ptname2'] = $rslt['ptname2'];
//   $series['refername'] = $rslt['refername'];
//   $series['ovstistname'] = $rslt['ovstistname'];
//   $series['docName'] = $rslt['docName'];
//   $series['typep'] = $rslt['typep'];
//   $series['typep_1'] = $rslt['typep_1'];
//   $series['typep_3'] = $rslt['typep_3'];
//   $series['lawpsych_chk'] = $rslt['lawpsych_chk'];
//   $series['bw'] = round($rslt['bw'],2);
//   $series['height'] = $rslt['height'];
//   $series['bmi'] = round($rslt['bmi'],2);
//   $series['temp'] = round($rslt['temp'],1);
//   $series['pr'] = round($rslt['pr']);
//   $series['rr'] = round($rslt['rr']);
//   $series['bps'] = round($rslt['bps']);
//   $series['bpd'] = round($rslt['bpd']);
//   $series['Q9'] = isset($rslt['depression_score'])?$rslt['depression_score']:'-';
//   $series['Q8'] = isset($rslt['suicide_score'])?$rslt['suicide_score']:'-';
//   $series['cgi'] = isset($rslt['cgis_score'])?$rslt['cgis_score']:'-';
//   $series['Clozapine100'] = $rslt['Clozapine100'];
//   $series['Clozapine100Date'] = isset($rslt['Clozapine100Date'])?DateThai2($rslt['Clozapine100Date']):'';
//   $series['Clozapine25'] = $rslt['Clozapine25'];
//   $series['Clozapine25Date'] = isset($rslt['Clozapine25Date'])?DateThai2($rslt['Clozapine25Date']):'';
//   $series['Carbamazepine200'] = $rslt['Carbamazepine200'];
//   $series['Carbamazepine200Date'] = isset($rslt['Carbamazepine200Date'])?DateThai2($rslt['Carbamazepine200Date']):'';
//   $series['LithiumCarbonate300'] = $rslt['LithiumCarbonate300'];
//   $series['LithiumCarbonate300Date'] = isset($rslt['LithiumCarbonate300Date'])?DateThai2($rslt['LithiumCarbonate300Date']):'';
//   $series['SodiumValproate200'] = $rslt['SodiumValproate200'];
//   $series['SodiumValproate200Date'] = isset($rslt['SodiumValproate200Date'])?DateThai2($rslt['SodiumValproate200Date']):'';
//   $series['SodiumValproate200CHRONO'] = $rslt['SodiumValproate200CHRONO'];
//   $series['SodiumValproate200CHRONODate'] = isset($rslt['SodiumValproate200CHRONODate'])?DateThai2($rslt['SodiumValproate200CHRONODate']):'';
//   $series['SodiumValproate500'] = $rslt['SodiumValproate500'];
//   $series['SodiumValproate500Date'] = isset($rslt['SodiumValproate500Date'])?DateThai2($rslt['SodiumValproate500Date']):'';
// array_push($result, $series);    

print json_encode($rslt);
$conn_DB->close_PDO();
?>