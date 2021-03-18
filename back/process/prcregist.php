<?php
include 'headprocessAPI.php';

function insert_date($take_date_conv) {
    $take_date = explode("-", $take_date_conv);
    $take_date_year = @$take_date[2] - 543;
    $take_date = "$take_date_year-" . @$take_date[1] . "-" . @$take_date[0] . "";
    return $take_date;
}

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
    $username = md5(string_to_ascii(trim(filter_input(INPUT_POST, 'username',FILTER_SANITIZE_STRING))));
    $password = md5(string_to_ascii(trim(filter_input(INPUT_POST, 'password',FILTER_SANITIZE_STRING))));
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
    $mem_status = $_POST['mem_status'];
    $confirmer = $_POST['confirmer'];

    $data = array($confirm,$confirmer,$confdate);
    $field = array("reg_status","confirmer","confdate");
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
}elseif ($method == 'edit_user') {
    $reg_id = $_POST['reg_id'];
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
    $reg_status = $_POST['confirm'];
    $reformer = $_POST['reformer'];
    $update = date('Y-m-d H:i:s');

    $token_key = $_POST['token_key'];
    $mem_status = $_POST['mem_status'];

    $data = array($role,$pname,$fname,$lname,$cid,$email,$tel,$line,$agency,$agency_tel,$reg_status,$reformer,$update);
    $field = array('role','pname','fname','lname','cid','email','tell','line','inf_id','agency_tell','reg_status','reformer','dupdate');
    $table = "registration";
    $where="reg_id=:reg_id";
    $execute=array(':reg_id' => $reg_id);
    $edit_user=$connDB->update($table, $data, $where, $field, $execute);
    if($edit_user){
        $table = "user_member";
        $where="reg_id=:reg_id";
        $execute=array(':reg_id' => $reg_id);

        
        if(empty($_POST['username'])){
            $data = array($mem_status,$token_key);
            $field=array("mem_status", "token_key");
            $edit_member=$connDB->update($table, $data, $where, $field, $execute);    
            }else{
                $username = md5(string_to_ascii(trim(filter_input(INPUT_POST, 'username',FILTER_SANITIZE_STRING))));
                $password = md5(string_to_ascii(trim(filter_input(INPUT_POST, 'password',FILTER_SANITIZE_STRING))));
                $data = array($username,$password,$mem_status,$token_key);
                $field=array("username","password","mem_status", "token_key");
                $edit_member=$connDB->update($table, $data, $where, $field, $execute); 
            }
if($edit_member===false){
    $res = array("messege"=>'ไม่สามารถบันทึกลงทะเบียนได้!!!!');
}else{
    $res = array("messege"=>'บันทึกการแก้ไขสำเร็จ!!!!');
}
}else{
  $res = array("messege"=>'บันทึกการแก้ไขไม่สำเร็จ!!!!');
}
    print json_encode($res);
    $connDB->close_PDO();
}