<?php

include 'headprocessAPI.php';


function insert_date($take_date_conv) {
    $take_date = explode("-", $take_date_conv);
    $take_date_year = @$take_date[2] - 543;
    $take_date = "$take_date_year-" . @$take_date[1] . "-" . @$take_date[0] . "";
    return $take_date;
}

$method = isset($_POST['method']) ? $_POST['method'] : $_GET['method'];
if ($method == 'EMR') {
    $mem_id = $_POST['mem_id'];
    $an = $_POST['an'];
    $regdate = date('Y-m-d H:i:s');

    $data = array($mem_id,$an,1,$regdate);
    //$field = array('id','hcode','vdate','vn','hn','sex','dob','pdx','dx0','dx1','dx2','dx3','cgis_score','clinic','user','dupdate');
    $table = "request_log";
    $request_log = $connDB->insert($table, $data);
    if($request_log){
      $res = array("messege"=>'บันทึก Log สำเร็จ!!!!');
}else{
      $res = array("messege"=>'บันทึก Log ไม่สำเร็จ!!!!');
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
}elseif ($method == 'DCP') {
    $mem_id = $_POST['mem_id'];
    $an = $_POST['an'];
    $regdate = date('Y-m-d H:i:s');

    $data = array($mem_id,$an,2,$regdate);
    //$field = array('id','hcode','vdate','vn','hn','sex','dob','pdx','dx0','dx1','dx2','dx3','cgis_score','clinic','user','dupdate');
    $table = "request_log";
    $request_log = $connDB->insert($table, $data);
    if($request_log){
      $res = array("messege"=>'บันทึก Log สำเร็จ!!!!');
}else{
      $res = array("messege"=>'บันทึก Log ไม่สำเร็จ!!!!');
}
    print json_encode($res);
    $connDB->close_PDO();
}elseif ($method == 'DCPE') {
    $mem_id = $_POST['mem_id'];
    $an = $_POST['an'];
    $regdate = date('Y-m-d H:i:s');

    $data = array($mem_id,$an,4,$regdate);
    //$field = array('id','hcode','vdate','vn','hn','sex','dob','pdx','dx0','dx1','dx2','dx3','cgis_score','clinic','user','dupdate');
    $table = "request_log";
    $request_log = $connDB->insert($table, $data);
    if($request_log){
      $res = array("messege"=>'บันทึก Log สำเร็จ!!!!');
}else{
      $res = array("messege"=>'บันทึก Log ไม่สำเร็จ!!!!');
}
    print json_encode($res);
    $connDB->close_PDO();
}elseif ($method == 'DCR') {
    $mem_id = $_POST['mem_id'];
    $an = $_POST['an'];
    $regdate = date('Y-m-d H:i:s');

    $data = array($mem_id,$an,3,$regdate);
    //$field = array('id','hcode','vdate','vn','hn','sex','dob','pdx','dx0','dx1','dx2','dx3','cgis_score','clinic','user','dupdate');
    $table = "request_log";
    $request_log = $connDB->insert($table, $data);
    if($request_log){
      $res = array("messege"=>'บันทึก Log สำเร็จ!!!!');
}else{
      $res = array("messege"=>'บันทึก Log ไม่สำเร็จ!!!!');
}
    print json_encode($res);
    $connDB->close_PDO();
}