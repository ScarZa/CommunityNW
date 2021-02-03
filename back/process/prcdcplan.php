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
include '../function/string_to_ascii.php';
set_time_limit(0);
$connDB = new EnDeCode();
$read = "../connection/conn_DB.txt";
$connDB->para_read($read);
$connDB->Read_Text();
$connDB->conn_PDO();

function insert_date($take_date_conv) {
    $take_date = explode("-", $take_date_conv);
    $take_date_year = @$take_date[2] - 543;
    $take_date = "$take_date_year-" . @$take_date[1] . "-" . @$take_date[0] . "";
    return $take_date;
}
$conv=new convers_encode();
$method = isset($_POST['method']) ? $_POST['method'] : $_GET['method'];
if ($method == 'DCP') {
    $hn = $_POST['hn'];
    $vn = $_POST['vn'];
    $an = $_POST['an'];
    $dc_type = $_POST['dc_type'];
    $patient_type01 = isset($_POST['patient_type1'])?$_POST['patient_type1']:0;
    $patient_type02 = isset($_POST['patient_type2'])?$_POST['patient_type2']:0;
    $patient_type03 = isset($_POST['patient_type3'])?$_POST['patient_type3']:0;
    $patient_type04 = isset($_POST['patient_type4'])?$_POST['patient_type4']:0;
    $patient_type05 = isset($_POST['patient_type5'])?$_POST['patient_type5']:0;
    $patient_type06 = isset($_POST['patient_type6'])?$_POST['patient_type6']:0;
    $patient_type07 = isset($_POST['patient_type7'])?$_POST['patient_type7']:0;
    $patient_type08 = isset($_POST['patient_type8'])?$_POST['patient_type8']:0;
    $patient_type09 = isset($_POST['patient_type9'])?$_POST['patient_type9']:0;
    $patient_type10 = isset($_POST['patient_type10'])?$_POST['patient_type10']:0;
    $biographer = isset($_POST['biographer'])?$_POST['biographer']:'';
    $relative = isset($_POST['relative'])?$_POST['relative']:'';
    $patient_add = isset($_POST['patient_add'])?$_POST['patient_add']:'';
    $tel0 = isset($_POST['tel0'])?$_POST['tel0']:'';
    $relative0 = isset($_POST['relative0'])?$_POST['relative0']:'';
    $tel1 = isset($_POST['tel1'])?$_POST['tel1']:'';
    $relative1 = isset($_POST['relative1'])?$_POST['relative1']:'';
    $tel2 = isset($_POST['tel2'])?$_POST['tel2']:'';
    $relative2 = isset($_POST['relative2'])?$_POST['relative2']:'';
    $cc = isset($_POST['cc'])?$_POST['cc']:'';
    $hpi = isset($_POST['hpi'])?$_POST['hpi']:'';
    $assent_tel = $_POST['assent_tel'];
    $assent_jvl = $_POST['assent_jvl'];
    $assent_cn = $_POST['assent_cn'];
    $assent_drug = $_POST['assent_drug'];
    $hos_nearby = $_POST['hos_nearby'];
    $hos_forward = $_POST['hos_forward'];
    $problem_prof01 = isset($_POST['problem_prof1'])?$_POST['problem_prof1']:'';
    $problem_prof02 = isset($_POST['problem_prof2'])?$_POST['problem_prof2']:'';
    $problem_prof03 = isset($_POST['problem_prof3'])?$_POST['problem_prof3']:'';
    $problem_prof04 = isset($_POST['problem_prof4'])?$_POST['problem_prof4']:'';
    $problem_prof05 = isset($_POST['problem_prof5'])?$_POST['problem_prof5']:'';
    $problem_prof06 = isset($_POST['problem_prof6'])?$_POST['problem_prof6']:'';
    $problem_prof07 = isset($_POST['problem_prof7'])?$_POST['problem_prof7']:'';
    $problem_prof08 = isset($_POST['problem_prof8'])?$_POST['problem_prof8']:'';
    $problem_prof09 = isset($_POST['problem_prof9'])?$_POST['problem_prof9']:'';
    $problem_prof10 = isset($_POST['problem_prof10'])?$_POST['problem_prof10']:'';
    $dc_conclude01 = isset($_POST['dc_conclude1'])?$_POST['dc_conclude1']:'';
    $dc_conclude02 = isset($_POST['dc_conclude2'])?$_POST['dc_conclude2']:'';
    $dc_conclude03 = isset($_POST['dc_conclude3'])?$_POST['dc_conclude3']:'';
    $dc_conclude04 = isset($_POST['dc_conclude4'])?$_POST['dc_conclude4']:'';
    $dc_conclude05 = isset($_POST['dc_conclude5'])?$_POST['dc_conclude5']:'';
    $dc_conclude06 = isset($_POST['dc_conclude6'])?$_POST['dc_conclude6']:'';
    $dc_conclude07 = isset($_POST['dc_conclude7'])?$_POST['dc_conclude7']:'';
    $dc_conclude08 = isset($_POST['dc_conclude8'])?$_POST['dc_conclude8']:'';
    $dc_conclude09 = isset($_POST['dc_conclude9'])?$_POST['dc_conclude9']:'';
    $dc_conclude10 = isset($_POST['dc_conclude10'])?$_POST['dc_conclude10']:'';
    $dc_con_detial = isset($_POST['dc_con_detial'])?$_POST['dc_con_detial']:'';
    $recorder = $_POST['mem_id'];
    $regdate = date('Y-m-d H:i:s');

    $data = array($hn,$vn,$an,$dc_type,$patient_type01,$patient_type02,$patient_type03,$patient_type04,$patient_type05,$patient_type06,$patient_type07,$patient_type08,$patient_type09,$patient_type10
    ,$biographer,$relative,$patient_add,$tel0,$relative0,$tel1,$relative1,$tel2,$relative2,$cc,$hpi,$assent_tel,$assent_jvl,$assent_cn,$assent_drug,$hos_nearby,$hos_forward
    ,$problem_prof01,$problem_prof02,$problem_prof03,$problem_prof04,$problem_prof05,$problem_prof06,$problem_prof07,$problem_prof08,$problem_prof09,$problem_prof10
    ,$dc_conclude01,$dc_conclude02,$dc_conclude03,$dc_conclude04,$dc_conclude05,$dc_conclude06,$dc_conclude07,$dc_conclude08,$dc_conclude09,$dc_conclude10,$dc_con_detial,$recorder,$regdate);
    //$field = array('id','hcode','vdate','vn','hn','sex','dob','pdx','dx0','dx1','dx2','dx3','cgis_score','clinic','user','dupdate');
    $table = "dcplan";
    $dcplan = $connDB->insert($table, $data);
    if($dcplan != false){
      
    $res = array("messege"=>'บันทึก Discharge plan สำเร็จ!!!!',"dcp_id"=>$dcplan,"hn"=>$hn,"an"=>$an,"vn"=>$vn,"assent_tel"=>$assent_tel,"assent_jvl"=>$assent_jvl,"assent_cn"=>$assent_cn,"assent_drug"=>$assent_drug,"recorder"=>$recorder);

}else{
  $res = array("messege"=>'บันทึก Discharge plan ไม่สำเร็จ!!!!');
}
    print json_encode($res);
    $connDB->close_PDO();
}elseif ($method == 'add_Confirm') {
    $reg_id = $_POST['reg_id'];
    $confirm = $_POST['confirm'];
    $token_key = $_POST['token_key'];
    $confdate = date('Y-m-d H:i:s');
    $mem_status = $_POST['mem_status'];

    $data = array($confirm,$confdate);
    $field = array("reg_status","confdate");
    $table = "registration";
    $where="reg_id=:reg_id";
    $execute=array(':reg_id' => $reg_id);
    $conf = $connDB->update($table, $data, $where, $field, $execute);

    if($conf and $confirm==1){
        $data2 = array($mem_status,$token_key);
        $field = array("mem_status","token_key");
        $table2 = "user_member";
        $where="reg_id=:reg_id";
        $execute2=array(':reg_id' => $reg_id);
        $user_token=$connDB->update($table2, $data2, $where, $field, $execute2); 
if($user_token){
    $res = array("messege"=>'พิจารณาเรียบร้อยครับ');
}else{
    $res = array("messege"=>'ไม่สามารถพิจารณาได้ครับ!!!! '.$user_token->errorInfo());
}
    }else{
        $res = array("messege"=>'ไม่อนุมัติครับ!!!! ');
    }
    print json_encode($res);
    $connDB->close_PDO();
}