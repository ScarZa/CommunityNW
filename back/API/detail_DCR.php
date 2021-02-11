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

    $sql="SELECT dct.dct_name,dcs1.dcs_name dcs1,dcs2.dcs_name dcs2,dcs3.dcs_name dcs3,dcs4.dcs_name dcs4,dcs5.dcs_name dcs5
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
    
//array_push($result, $series);    
//}
//print_r($result);
print json_encode($series);
$conn_DB->close_PDO();
?>