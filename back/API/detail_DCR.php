<?php 
session_save_path("../session/");
//session_start(); 
header('Content-type: text/json; charset=utf-8');
// header("Access-Control-Allow-Origin: *");
// header("Access-Control-Allow-Headers: access");
// header("Access-Control-Allow-Methods: GET,POST");
// header("Access-Control-Allow-Credentials: true");
// header('Content-Type: application/json;charset=utf-8');


function __autoload($class_name) {
    include '../class/' . $class_name . '.php';
}
include_once ('../plugins/funcDateThai.php');
set_time_limit(0);
$conn_DB= new EnDeCode();
$conv=new convers_encode();
$read="../connection/conn_DB.txt";
$conn_DB->para_read($read);
$conn_DB->Read_Text();
$conn_DB->conn_PDO();
$result = array();
$series = array();
$data = isset($_POST['data'])?$_POST['data']:(isset($_GET['data'])?$_GET['data']:'');
$data2 = isset($_POST['data2'])?$_POST['data2']:(isset($_GET['data2'])?$_GET['data2']:'');

    $sql="SELECT dcp.iname0,dcp.inject0,dcp.iname1,dcp.inject1,dct.dct_name,dcs1.dcs_name dcs1,dcs2.dcs_name dcs2,dcs3.dcs_name dcs3,dcs4.dcs_name dcs4,dcs5.dcs_name dcs5
    ,dcs6.dcs_name dcs6,dcs7.dcs_name dcs7,dcs8.dcs_name dcs8,dcs9.dcs_name dcs9,dcs10.dcs_name dcs10
    ,dcp.biographer,dcp.relative,dcp.patient_add,dcp.tel0,dcp.relative0,dcp.tel1,dcp.relative1,dcp.tel2,dcp.relative2
    ,dcp.cc,dcp.hpi
    ,CASE WHEN dcp.assent_tel = 1 THEN 'ยินยอม' ELSE	'ไม่ยินยอม' END assent_tel
    ,CASE WHEN dcp.assent_jvl = 1 THEN 'ยินยอม' ELSE	'ไม่ยินยอม' END assent_jvl
    ,CASE WHEN dcp.assent_cn = 1 THEN 'ยินยอม' ELSE	'ไม่ยินยอม' END assent_cn
    ,CASE WHEN dcp.assent_drug = 1 THEN 'ยินยอม' ELSE	'ไม่ยินยอม' END assent_drug
    ,inf1.hos_name hos_nearby,inf2.hos_name hos_forward
    ,ap1.ap_name ap1,ap2.ap_name ap2,ap3.ap_name ap3,ap4.ap_name ap4,ap5.ap_name ap5,ap6.ap_name ap6,ap7.ap_name ap7
    ,ap8.ap_name ap8,ap9.ap_name ap9,ap10.ap_name ap10,fol1.f10_name fol1,fol2.f10_name fol2,fol3.f10_name fol3
    ,fol4.f10_name fol4,fol5.f10_name fol5,fol6.f10_name fol6,fol7.f10_name fol7,fol8.f10_name fol8,fol9.f10_name fol9,fol10.f10_name fol10,dcp.dc_con_detial
	,(SELECT act.activity FROM dcplan dcp INNER JOIN jvl_activity_follow act on act.af_id = dcp.act1 WHERE dcp.an =  :an)act1
		,(SELECT act.activity FROM dcplan dcp INNER JOIN jvl_activity_follow act on act.af_id = dcp.act2 WHERE dcp.an =  :an)act2
		,(SELECT act.activity FROM dcplan dcp INNER JOIN jvl_activity_follow act on act.af_id = dcp.act3 WHERE dcp.an =  :an)act3
		,(SELECT act.activity FROM dcplan dcp INNER JOIN jvl_activity_follow act on act.af_id = dcp.act4 WHERE dcp.an =  :an)act4
		,(SELECT act.activity FROM dcplan dcp INNER JOIN jvl_activity_follow act on act.af_id = dcp.act5 WHERE dcp.an =  :an)act5
		,(SELECT act.activity FROM dcplan dcp INNER JOIN jvl_activity_follow act on act.af_id = dcp.act6 WHERE dcp.an =  :an)act6
		,(SELECT act.activity FROM dcplan dcp INNER JOIN jvl_activity_follow act on act.af_id = dcp.act7 WHERE dcp.an =  :an)act7
		,(SELECT act.activity FROM dcplan dcp INNER JOIN jvl_activity_follow act on act.af_id = dcp.act8 WHERE dcp.an =  :an)act8
		,(SELECT act.activity FROM dcplan dcp INNER JOIN jvl_activity_follow act on act.af_id = dcp.act9 WHERE dcp.an =  :an)act9
		,(SELECT act.activity FROM dcplan dcp INNER JOIN jvl_activity_follow act on act.af_id = dcp.act10 WHERE dcp.an =  :an)act10
		,(SELECT act.activity FROM dcplan dcp INNER JOIN jvl_activity_follow act on act.af_id = dcp.act11 WHERE dcp.an =  :an)act11
		,(SELECT act.activity FROM dcplan dcp INNER JOIN jvl_activity_follow act on act.af_id = dcp.act12 WHERE dcp.an =  :an)act12
		,(SELECT act.activity FROM dcplan dcp INNER JOIN jvl_activity_follow act on act.af_id = dcp.act13 WHERE dcp.an =  :an)act13
		,(SELECT act.activity FROM dcplan dcp INNER JOIN jvl_activity_follow act on act.af_id = dcp.act14 WHERE dcp.an =  :an)act14
		,(SELECT act.activity FROM dcplan dcp INNER JOIN jvl_activity_follow act on act.af_id = dcp.act15 WHERE dcp.an =  :an)act15
		,(SELECT act.activity FROM dcplan dcp INNER JOIN jvl_activity_follow act on act.af_id = dcp.act16 WHERE dcp.an =  :an)act16
		,(SELECT act.activity FROM dcplan dcp INNER JOIN jvl_activity_follow act on act.af_id = dcp.act17 WHERE dcp.an =  :an)act17
		,(SELECT act.activity FROM dcplan dcp INNER JOIN jvl_activity_follow act on act.af_id = dcp.act18 WHERE dcp.an =  :an)act18
		,(SELECT act.activity FROM dcplan dcp INNER JOIN jvl_activity_follow act on act.af_id = dcp.act19 WHERE dcp.an =  :an)act19
		,(SELECT act.activity FROM dcplan dcp INNER JOIN jvl_activity_follow act on act.af_id = dcp.act20 WHERE dcp.an =  :an)act20
		,(SELECT act.activity FROM dcplan dcp INNER JOIN jvl_activity_follow act on act.af_id = dcp.act21 WHERE dcp.an =  :an)act21
		,(SELECT act.activity FROM dcplan dcp INNER JOIN jvl_activity_follow act on act.af_id = dcp.act22 WHERE dcp.an =  :an)act22
		,(SELECT act.activity FROM dcplan dcp INNER JOIN jvl_activity_follow act on act.af_id = dcp.act23 WHERE dcp.an =  :an)act23
		,(SELECT act.activity FROM dcplan dcp INNER JOIN jvl_activity_follow act on act.af_id = dcp.act24 WHERE dcp.an =  :an)act24
		,(SELECT act.activity FROM dcplan dcp INNER JOIN jvl_activity_follow act on act.af_id = dcp.act25 WHERE dcp.an =  :an)act25
		,(SELECT act.activity FROM dcplan dcp INNER JOIN jvl_activity_follow act on act.af_id = dcp.act26 WHERE dcp.an =  :an)act26
		,(SELECT act.activity FROM dcplan dcp INNER JOIN jvl_activity_follow act on act.af_id = dcp.act27 WHERE dcp.an =  :an)act27
		,(SELECT act.activity FROM dcplan dcp INNER JOIN jvl_activity_follow act on act.af_id = dcp.act28 WHERE dcp.an =  :an)act28
		,(SELECT act.activity FROM dcplan dcp INNER JOIN jvl_activity_follow act on act.af_id = dcp.act29 WHERE dcp.an =  :an)act29
    FROM dcplan dcp
    INNER JOIN dc_type dct on dct.dct_id = dcp.dc_type
    LEFT JOIN dc_special_type dcs1 on dcs1.dcs_id = dcp.patient_type01 
    LEFT JOIN dc_special_type dcs2 on dcs2.dcs_id = dcp.patient_type02
    LEFT JOIN dc_special_type dcs3 on dcs3.dcs_id = dcp.patient_type03
    LEFT JOIN dc_special_type dcs4 on dcs4.dcs_id = dcp.patient_type04
    LEFT JOIN dc_special_type dcs5 on dcs5.dcs_id = dcp.patient_type05
    LEFT JOIN dc_special_type dcs6 on dcs6.dcs_id = dcp.patient_type06
    LEFT JOIN dc_special_type dcs7 on dcs7.dcs_id = dcp.patient_type07
    LEFT JOIN dc_special_type dcs8 on dcs8.dcs_id = dcp.patient_type08
    LEFT JOIN dc_special_type dcs9 on dcs9.dcs_id = dcp.patient_type09
    LEFT JOIN dc_special_type dcs10 on dcs10.dcs_id = dcp.patient_type10
    INNER JOIN infirmary inf1 on inf1.inf_id = dcp.hos_nearby
    INNER JOIN infirmary inf2 on inf2.inf_id = dcp.hos_forward
    LEFT JOIN admit_problem ap1 on ap1.ap_id = dcp.problem_prof01
    LEFT JOIN admit_problem ap2 on ap2.ap_id = dcp.problem_prof02
    LEFT JOIN admit_problem ap3 on ap3.ap_id = dcp.problem_prof03
    LEFT JOIN admit_problem ap4 on ap4.ap_id = dcp.problem_prof04
    LEFT JOIN admit_problem ap5 on ap5.ap_id = dcp.problem_prof05
    LEFT JOIN admit_problem ap6 on ap6.ap_id = dcp.problem_prof06
    LEFT JOIN admit_problem ap7 on ap7.ap_id = dcp.problem_prof07
    LEFT JOIN admit_problem ap8 on ap8.ap_id = dcp.problem_prof08
    LEFT JOIN admit_problem ap9 on ap9.ap_id = dcp.problem_prof09
    LEFT JOIN admit_problem ap10 on ap10.ap_id = dcp.problem_prof10
    LEFT JOIN jvl_10_follow fol1 on fol1.f10_id = dcp.dc_conclude01
    LEFT JOIN jvl_10_follow fol2 on fol2.f10_id = dcp.dc_conclude02
    LEFT JOIN jvl_10_follow fol3 on fol3.f10_id = dcp.dc_conclude03
    LEFT JOIN jvl_10_follow fol4 on fol4.f10_id = dcp.dc_conclude04
    LEFT JOIN jvl_10_follow fol5 on fol5.f10_id = dcp.dc_conclude05
    LEFT JOIN jvl_10_follow fol6 on fol6.f10_id = dcp.dc_conclude06
    LEFT JOIN jvl_10_follow fol7 on fol7.f10_id = dcp.dc_conclude07
    LEFT JOIN jvl_10_follow fol8 on fol8.f10_id = dcp.dc_conclude08
    LEFT JOIN jvl_10_follow fol9 on fol9.f10_id = dcp.dc_conclude09
    LEFT JOIN jvl_10_follow fol10 on fol10.f10_id = dcp.dc_conclude10
    WHERE dcp.an =  :an";
    $conn_DB->imp_sql($sql);
    $execute=array(':an'=>$data2);
    $rslt=$conn_DB->select_a($execute);


//print_r($rslt);

//for($i=0;$i<count($rslt);$i++){
    $series['iname0'] = isset($rslt['iname0'])?$rslt['iname0']:'';
    $series['iname1'] = isset($rslt['iname1'])?$rslt['iname1']:'';
    $series['inject0'] = isset($rslt['inject0'])?$rslt['inject0']:'';
    $series['inject1'] = isset($rslt['inject1'])?$rslt['inject1']:'';
    $series['dct_name'] = $rslt['dct_name'];
    $series['dcs1'] = isset($rslt['dcs1'])?$rslt['dcs1']:'';
    $series['dcs2'] = isset($rslt['dcs2'])?$rslt['dcs2']:'';
    $series['dcs3'] = isset($rslt['dcs3'])?$rslt['dcs3']:'';
    $series['dcs4'] = isset($rslt['dcs4'])?$rslt['dcs4']:'';
    $series['dcs5'] = isset($rslt['dcs5'])?$rslt['dcs5']:'';
    $series['dcs6'] = isset($rslt['dcs6'])?$rslt['dcs6']:'';
    $series['dcs7'] = isset($rslt['dcs7'])?$rslt['dcs7']:'';
    $series['dcs8'] = isset($rslt['dcs8'])?$rslt['dcs8']:'';
    $series['dcs9'] = isset($rslt['dcs9'])?$rslt['dcs9']:'';
    $series['dcs10'] = isset($rslt['dcs10'])?$rslt['dcs10']:'';
    $series['biographer'] = isset($rslt['biographer'])?$rslt['biographer']:'';
    $series['relative'] = isset($rslt['relative'])?$rslt['relative']:'';
    $series['patient_add'] = isset($rslt['patient_add'])?$rslt['patient_add']:'';
    $series['tel0'] = isset($rslt['tel0'])?$rslt['tel0']:'';
    $series['relative0'] = isset($rslt['relative0'])?$rslt['relative0']:'';
    $series['tel1'] = isset($rslt['tel1'])?$rslt['tel1']:'';
    $series['relative1'] = isset($rslt['relative1'])?$rslt['relative1']:'';
    $series['tel2'] = isset($rslt['tel2'])?$rslt['tel2']:'';
    $series['relative2'] = isset($rslt['relative2'])?$rslt['relative2']:'';
    $series['cc'] = isset($rslt['cc'])?$rslt['cc']:'';
    $series['hpi'] = isset($rslt['hpi'])?$rslt['hpi']:'';
    $series['assent_tel'] = $rslt['assent_tel'];
    $series['assent_jvl'] = $rslt['assent_jvl'];
    $series['assent_cn'] = $rslt['assent_cn'];
    $series['assent_drug'] = $rslt['assent_drug'];
    $series['hos_nearby'] = $rslt['hos_nearby'];
    $series['hos_forward'] = $rslt['hos_forward'];
    $series['ap1'] = isset($rslt['ap1'])?$rslt['ap1']:'';
    $series['ap2'] = isset($rslt['ap2'])?$rslt['ap2']:'';
    $series['ap3'] = isset($rslt['ap3'])?$rslt['ap3']:'';
    $series['ap4'] = isset($rslt['ap4'])?$rslt['ap4']:'';
    $series['ap5'] = isset($rslt['ap5'])?$rslt['ap5']:'';
    $series['ap6'] = isset($rslt['ap6'])?$rslt['ap6']:'';
    $series['ap7'] = isset($rslt['ap7'])?$rslt['ap7']:'';
    $series['ap8'] = isset($rslt['ap8'])?$rslt['ap8']:'';
    $series['ap9'] = isset($rslt['ap9'])?$rslt['ap9']:'';
    $series['ap10'] = isset($rslt['ap10'])?$rslt['ap10']:'';
    $series['fol1'] = isset($rslt['fol1'])?$rslt['fol1']:'';
    $series['fol2'] = isset($rslt['fol2'])?$rslt['fol2']:'';
    $series['fol3'] = isset($rslt['fol3'])?$rslt['fol3']:'';
    $series['fol4'] = isset($rslt['fol4'])?$rslt['fol4']:'';
    $series['fol5'] = isset($rslt['fol5'])?$rslt['fol5']:'';
    $series['fol6'] = isset($rslt['fol6'])?$rslt['fol6']:'';
    $series['fol7'] = isset($rslt['fol7'])?$rslt['fol7']:'';
    $series['fol8'] = isset($rslt['fol8'])?$rslt['fol8']:'';
    $series['fol9'] = isset($rslt['fol9'])?$rslt['fol9']:'';
    $series['fol10'] = isset($rslt['fol10'])?$rslt['fol10']:'';
    $series['dc_con_detial'] = isset($rslt['dc_con_detial'])?$rslt['dc_con_detial']:'';
    $series['act1'] = isset($rslt['act1'])?$rslt['act1']:'';
    $series['act2'] = isset($rslt['act2'])?$rslt['act2']:'';
    $series['act3'] = isset($rslt['act3'])?$rslt['act3']:'';
    $series['act4'] = isset($rslt['act4'])?$rslt['act4']:'';
    $series['act5'] = isset($rslt['act5'])?$rslt['act5']:'';
    $series['act6'] = isset($rslt['act6'])?$rslt['act6']:'';
    $series['act7'] = isset($rslt['act7'])?$rslt['act7']:'';
    $series['act8'] = isset($rslt['act8'])?$rslt['act8']:'';
    $series['act9'] = isset($rslt['act9'])?$rslt['act9']:'';
    $series['act10'] = isset($rslt['act10'])?$rslt['act10']:'';
    $series['act11'] = isset($rslt['act11'])?$rslt['act11']:'';
    $series['act12'] = isset($rslt['act12'])?$rslt['act12']:'';
    $series['act13'] = isset($rslt['act13'])?$rslt['act13']:'';
    $series['act14'] = isset($rslt['act14'])?$rslt['act14']:'';
    $series['act15'] = isset($rslt['act15'])?$rslt['act15']:'';
    $series['act16'] = isset($rslt['act16'])?$rslt['act16']:'';
    $series['act17'] = isset($rslt['act17'])?$rslt['act17']:'';
    $series['act18'] = isset($rslt['act18'])?$rslt['act18']:'';
    $series['act19'] = isset($rslt['act19'])?$rslt['act19']:'';
    $series['act20'] = isset($rslt['act20'])?$rslt['act20']:'';
    $series['act21'] = isset($rslt['act21'])?$rslt['act21']:'';
    $series['act22'] = isset($rslt['act22'])?$rslt['act22']:'';
    $series['act23'] = isset($rslt['act23'])?$rslt['act23']:'';
    $series['act24'] = isset($rslt['act24'])?$rslt['act24']:'';
    $series['act25'] = isset($rslt['act25'])?$rslt['act25']:'';
    $series['act26'] = isset($rslt['act26'])?$rslt['act26']:'';
    $series['act27'] = isset($rslt['act27'])?$rslt['act27']:'';
    $series['act28'] = isset($rslt['act28'])?$rslt['act28']:'';
    $series['act29'] = isset($rslt['act29'])?$rslt['act29']:'';
//array_push($result, $series);    
//}
//print_r($result);
print json_encode($series);
$conn_DB->close_PDO();
?>