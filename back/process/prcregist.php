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
if ($method == 'add_regist') {
    $role = $_POST['role'];
    $pname = $_POST['pname'];
    $fname = $_POST['fname'];
    $lname = $_POST['lname'];
    $cid = $_POST['cid'];
    $email = $_POST['email'];
    $tel = $_POST['tel'];
    $line = $_POST['line'];
    $agency = $_POST['agency'];
    $agency_tel = $_POST['agency_tel'];
    $username = md5(trim(filter_input(INPUT_POST, 'username',FILTER_SANITIZE_STRING)));
    $password = md5(trim(filter_input(INPUT_POST, 'password',FILTER_SANITIZE_STRING)));
    $regdate = date('Y-m-d H:i:s');

    $data = array($role,$pname,$fname,$lname,$cid,$email,$tel,$line,$agency,$agency_tel,$regdate,0);
    //$field = array('id','hcode','vdate','vn','hn','sex','dob','pdx','dx0','dx1','dx2','dx3','cgis_score','clinic','user','dupdate');
    $table = "registration";
    $regist = $connDB->insert($table, $data);
    if($regist){
      $data2 = array($regist,$username,$password);
    //$field = array('id','hcode','vdate','vn','hn','sex','dob','pdx','dx0','dx1','dx2','dx3','cgis_score','clinic','user','dupdate');
    $table2 = "user_member";
    $member = $connDB->insert($table2, $data2);
if($member===false){
    $res = array("messege"=>'ไม่สามารถบันทึกลงทะเบียนได้!!!!');
}else{
    $res = array("messege"=>'บันทึกลงทะเบียนสำเร็จ!!!!  กรุณารอการยืนยันจากเจ้าหน้าที่ครับ',"id"=>$regist);
}
}else{
  $res = array("messege"=>'บันทึก ลงทะเบียนไม่สำเร็จ!!!!');
}
    print json_encode($res);
    $connDB->close_PDO();
}elseif ($method == 'add_Confirm') {
    $reg_id = $_POST['reg_id'];
    $confirm = $_POST['confirm'];
    $token_key = $_POST['token_key'];
    $confdate = date('Y-m-d H:i:s');

    $data = array($confirm,$confdate);
    $field = array("reg_status","confdate");
    $table = "registration";
    $where="reg_id=:reg_id";
    $execute=array(':reg_id' => $reg_id);
    $conf = $connDB->update($table, $data, $where, $field, $execute);

    if($conf and $confirm==1){
        $data2 = array($token_key);
        $field = array("token_key");
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