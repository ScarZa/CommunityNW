<?php 

header('Content-type: text/json; charset=utf-8');
function __autoload($class_name) {
    include_once '../class/' . $class_name . '.php';
}

$dbh=new dbPDO_mng();
$read="../connection/conn_DB.txt";
$dbh->para_read($read);
//$dbh->Read_Text();
$dbh->conn_PDO();
//print_r($dbh);
//$conv=new convers_encode();
$user_account = md5(trim(filter_input(INPUT_POST, 'username',FILTER_SANITIZE_STRING)));
$user_pwd = md5(trim(filter_input(INPUT_POST, 'password',FILTER_SANITIZE_STRING)));
$sql = "SELECT um.reg_id,um.token_key,reg.role,reg.inf_id,um.mem_status
FROM user_member um
INNER JOIN registration reg on reg.reg_id = um.reg_id
where um.username= :user_account and um.password= :user_pwd and reg.reg_status=1";
$execute=array(':user_account' => $user_account, ':user_pwd' => $user_pwd);
$dbh->imp_sql($sql);
$result=$dbh->select_a($execute);
//print_r($result);
// $_SESSION['status_user'] = isset($result['status_user'])?$result['status_user']:'';
// $_SESSION['clinic_user'] = isset($result['clinic'])?$result['clinic']:'';

// if (!$result) {
    
// $sql2 ="select doctorcode,name from opduser where   loginname= :user_account and passweb= :user_pwd";
// $execute2=array(':user_account' => $user_account, ':user_pwd' => $user_pwd);
// $dbh->imp_sql($sql2);
// $result=$dbh->select_a($execute2);   

// $_SESSION['status_user']='HOS';

// }
if($result){

    $date_login = date("Y-m-d H:i:s");
    $data = array($date_login);
    $field=array("last_login");
    $table = "user_member";
    $where="username=:username and password=:password";
    $execute=array(':username' => $user_account,':password'=>$user_pwd);
    $last_login=$dbh->update($table, $data, $where, $field, $execute);
    $reg_id = isset($result['reg_id'])?$result['reg_id']:'';
    $res = array("messege"=>'ยินดีต้อนรับสู่ระบบ',"reg_id"=>$reg_id,"token_key"=>$result['token_key'],"role"=>$result['role'],"inf_id"=>$result['inf_id'],"mem_status"=>$result['mem_status']);
}else{
    $res = array("messege"=>'ชื่อหรือรหัสผ่านผิด กรุณาตรวจสอบอีกครั้ง!!!! ');
}
print json_encode($res);

$dbh->close_PDO();
?>
