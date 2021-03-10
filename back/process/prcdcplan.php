<?php
include 'headprocessAPI.php';

function insert_date($take_date_conv) {
    $take_date = explode("-", $take_date_conv);
    $take_date_year = @$take_date[2] - 543;
    $take_date = "$take_date_year-" . @$take_date[1] . "-" . @$take_date[0] . "";
    return $take_date;
}

$method = isset($_POST['method']) ? $_POST['method'] : $_GET['method'];
if ($method == 'DCP') {
    $an = $_POST['an'];
    $sql = "SELECT * FROM dcplan WHERE an = :an";
    $connDB->imp_sql($sql);
    $execute=array(':an'=>$an);
    $an_chk=$connDB->select($execute);
    if(count($an_chk)>0){
        $res = array("messege"=>'AN : '.$an.' มีการบันทึก Discharge plan แล้วครับ!!!!','an_chk'=>'Y');
    }else{
    $hn = $_POST['hn'];
    $vn = $_POST['vn'];
    
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
    $icode0 = isset($_POST['icode0'])?$_POST['icode0']:'';
    $iname0 = isset($_POST['iname0'])?$_POST['iname0']:'';
    $inject0 = isset($_POST['inject0'])?$_POST['inject0']:'';
    $icode1 = isset($_POST['icode1'])?$_POST['icode1']:'';
    $iname1 = isset($_POST['iname1'])?$_POST['iname1']:'';
    $inject1 = isset($_POST['inject1'])?$_POST['inject1']:'';
    $act1 = isset($_POST['act1'])?$_POST['act1']:'';
    $act2 = isset($_POST['act2'])?$_POST['act2']:'';
    $act3 = isset($_POST['act3'])?$_POST['act3']:'';
    $act4 = isset($_POST['act4'])?$_POST['act4']:'';
    $act5 = isset($_POST['act5'])?$_POST['act5']:'';
    $act6 = isset($_POST['act6'])?$_POST['act6']:'';
    $act7 = isset($_POST['act7'])?$_POST['act7']:'';
    $act8 = isset($_POST['act8'])?$_POST['act8']:'';
    $act9 = isset($_POST['act9'])?$_POST['act9']:'';
    $act10 = isset($_POST['act10'])?$_POST['act10']:'';
    $act11 = isset($_POST['act11'])?$_POST['act11']:'';
    $act12 = isset($_POST['act12'])?$_POST['act12']:'';
    $act13 = isset($_POST['act13'])?$_POST['act13']:'';
    $act14 = isset($_POST['act14'])?$_POST['act14']:'';
    $act15 = isset($_POST['act15'])?$_POST['act15']:'';
    $act16 = isset($_POST['act16'])?$_POST['act16']:'';
    $act17 = isset($_POST['act17'])?$_POST['act17']:'';
    $act18 = isset($_POST['act18'])?$_POST['act18']:'';
    $act19 = isset($_POST['act19'])?$_POST['act19']:'';
    $act20 = isset($_POST['act20'])?$_POST['act20']:'';
    $act21 = isset($_POST['act21'])?$_POST['act21']:'';
    $act22 = isset($_POST['act22'])?$_POST['act22']:'';
    $act23 = isset($_POST['act23'])?$_POST['act23']:'';
    $act24 = isset($_POST['act24'])?$_POST['act24']:'';
    $act25 = isset($_POST['act25'])?$_POST['act25']:'';
    $act26 = isset($_POST['act26'])?$_POST['act26']:'';
    $act27 = isset($_POST['act27'])?$_POST['act27']:'';
    $act28 = isset($_POST['act28'])?$_POST['act28']:'';
    $act29 = isset($_POST['act29'])?$_POST['act29']:'';
    $recorder = $_POST['mem_id'];
    $regdate = date('Y-m-d H:i:s');

    $data = array($hn,$vn,$an,$dc_type,$patient_type01,$patient_type02,$patient_type03,$patient_type04,$patient_type05,$patient_type06,$patient_type07,$patient_type08,$patient_type09,$patient_type10
    ,$biographer,$relative,$patient_add,$tel0,$relative0,$tel1,$relative1,$tel2,$relative2,$cc,$hpi,$assent_tel,$assent_jvl,$assent_cn,$assent_drug,$hos_nearby,$hos_forward
    ,$problem_prof01,$problem_prof02,$problem_prof03,$problem_prof04,$problem_prof05,$problem_prof06,$problem_prof07,$problem_prof08,$problem_prof09,$problem_prof10
    ,$dc_conclude01,$dc_conclude02,$dc_conclude03,$dc_conclude04,$dc_conclude05,$dc_conclude06,$dc_conclude07,$dc_conclude08,$dc_conclude09,$dc_conclude10,$dc_con_detial
    ,$icode0,$iname0,$inject0,$icode1,$iname1,$inject1,$act1,$act2,$act3,$act4,$act5,$act6,$act7,$act8,$act9,$act10,$act11,$act12,$act13,$act14,$act15,$act16,$act17,$act18,$act19,$act20
    ,$act21,$act22,$act23,$act24,$act25,$act26,$act27,$act28,$act29,$recorder,$regdate);
    //$field = array('id','hcode','vdate','vn','hn','sex','dob','pdx','dx0','dx1','dx2','dx3','cgis_score','clinic','user','dupdate');
    $table = "dcplan";
    $dcplan = $connDB->insert($table, $data);
    if($dcplan != false){
      
    $res = array("messege"=>'บันทึก Discharge plan สำเร็จ!!!!',"dcp_id"=>$dcplan,"hn"=>$hn,"an"=>$an,"vn"=>$vn,"assent_tel"=>$assent_tel,"assent_jvl"=>$assent_jvl,"assent_cn"=>$assent_cn,"assent_drug"=>$assent_drug,"recorder"=>$recorder,'an_chk'=>'N');

}else{
  $res = array("messege"=>'บันทึก Discharge plan ไม่สำเร็จ!!!!');
}
}
    print json_encode($res);
    $connDB->close_PDO();
}elseif ($method == 'DCPE') {
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
    $icode0 = isset($_POST['icode0'])?$_POST['icode0']:'';
    $iname0 = isset($_POST['iname0'])?$_POST['iname0']:'';
    $inject0 = isset($_POST['inject0'])?$_POST['inject0']:'';
    $icode1 = isset($_POST['icode1'])?$_POST['icode1']:'';
    $iname1 = isset($_POST['iname1'])?$_POST['iname1']:'';
    $inject1 = isset($_POST['inject1'])?$_POST['inject1']:'';
    $act1 = isset($_POST['act1'])?$_POST['act1']:'';
    $act2 = isset($_POST['act2'])?$_POST['act2']:'';
    $act3 = isset($_POST['act3'])?$_POST['act3']:'';
    $act4 = isset($_POST['act4'])?$_POST['act4']:'';
    $act5 = isset($_POST['act5'])?$_POST['act5']:'';
    $act6 = isset($_POST['act6'])?$_POST['act6']:'';
    $act7 = isset($_POST['act7'])?$_POST['act7']:'';
    $act8 = isset($_POST['act8'])?$_POST['act8']:'';
    $act9 = isset($_POST['act9'])?$_POST['act9']:'';
    $act10 = isset($_POST['act10'])?$_POST['act10']:'';
    $act11 = isset($_POST['act11'])?$_POST['act11']:'';
    $act12 = isset($_POST['act12'])?$_POST['act12']:'';
    $act13 = isset($_POST['act13'])?$_POST['act13']:'';
    $act14 = isset($_POST['act14'])?$_POST['act14']:'';
    $act15 = isset($_POST['act15'])?$_POST['act15']:'';
    $act16 = isset($_POST['act16'])?$_POST['act16']:'';
    $act17 = isset($_POST['act17'])?$_POST['act17']:'';
    $act18 = isset($_POST['act18'])?$_POST['act18']:'';
    $act19 = isset($_POST['act19'])?$_POST['act19']:'';
    $act20 = isset($_POST['act20'])?$_POST['act20']:'';
    $act21 = isset($_POST['act21'])?$_POST['act21']:'';
    $act22 = isset($_POST['act22'])?$_POST['act22']:'';
    $act23 = isset($_POST['act23'])?$_POST['act23']:'';
    $act24 = isset($_POST['act24'])?$_POST['act24']:'';
    $act25 = isset($_POST['act25'])?$_POST['act25']:'';
    $act26 = isset($_POST['act26'])?$_POST['act26']:'';
    $act27 = isset($_POST['act27'])?$_POST['act27']:'';
    $act28 = isset($_POST['act28'])?$_POST['act28']:'';
    $act29 = isset($_POST['act29'])?$_POST['act29']:'';
    $recorder = $_POST['mem_id'];
    $regdate = date('Y-m-d H:i:s');

    $data = array($hn,$vn,$dc_type,$patient_type01,$patient_type02,$patient_type03,$patient_type04,$patient_type05,$patient_type06,$patient_type07,$patient_type08,$patient_type09,$patient_type10
    ,$biographer,$relative,$patient_add,$tel0,$relative0,$tel1,$relative1,$tel2,$relative2,$cc,$hpi,$assent_tel,$assent_jvl,$assent_cn,$assent_drug,$hos_nearby,$hos_forward
    ,$problem_prof01,$problem_prof02,$problem_prof03,$problem_prof04,$problem_prof05,$problem_prof06,$problem_prof07,$problem_prof08,$problem_prof09,$problem_prof10
    ,$dc_conclude01,$dc_conclude02,$dc_conclude03,$dc_conclude04,$dc_conclude05,$dc_conclude06,$dc_conclude07,$dc_conclude08,$dc_conclude09,$dc_conclude10,$dc_con_detial
    ,$inject0,$inject1,$act1,$act2,$act3,$act4,$act5,$act6,$act7,$act8,$act9,$act10,$act11,$act12,$act13,$act14,$act15,$act16,$act17,$act18,$act19,$act20
    ,$act21,$act22,$act23,$act24,$act25,$act26,$act27,$act28,$act29,$recorder,$regdate);
    $field = array('hn','vn','dc_type','patient_type01','patient_type02','patient_type03','patient_type04','patient_type05','patient_type06','patient_type07','patient_type08','patient_type09','patient_type10'
    ,'biographer','relative','patient_add','tel0','relative0','tel1','relative1','tel2','relative2','cc','hpi','assent_tel','assent_jvl','assent_cn','assent_drug','hos_nearby','hos_forward'
    ,'problem_prof01','problem_prof02','problem_prof03','problem_prof04','problem_prof05','problem_prof06','problem_prof07','problem_prof08','problem_prof09','problem_prof10'
    ,'dc_conclude01','dc_conclude02','dc_conclude03','dc_conclude04','dc_conclude05','dc_conclude06','dc_conclude07','dc_conclude08','dc_conclude09','dc_conclude10','dc_con_detial'
    ,'inject0','inject1','act1','act2','act3','act4','act5','act6','act7','act8','act9','act10','act11','act12','act13','act14','act15','act16','act17','act18','act19','act20'
    ,'act21','act22','act23','act24','act25','act26','act27','act28','act29','recorder','recdate');
    $table = "dcplan";
    $where="an=:an";
    $execute=array(':an' => $an);
    $dcplan = $connDB->update($table, $data, $where, $field, $execute);
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
}elseif ($method == 'DCP_data') {
    $hn = $_POST['hn'];
    $vn = $_POST['vn'];
    $an = $_POST['an'];
    $admit = $_POST['admit'];
    $smiv = $_POST['smiv'];
    $lastvisit = isset($_POST['lastvisit'])?$_POST['lastvisit']:'';
    $admdate = isset($_POST['admdate'])?$_POST['admdate']:'';
    $nextdate = isset($_POST['nextdate'])?$_POST['nextdate']:'';
    $pttype_expire = isset($_POST['pttype_expire'])?$_POST['pttype_expire']:'';
    $expire_date = isset($_POST['expire_date'])?$_POST['expire_date']:'';
    $vstdate = $_POST['vstdate'];
    $vsttime = $_POST['vsttime'];
    $dchdate = isset($_POST['dchdate'])?$_POST['dchdate']:'';
    $dchtime = isset($_POST['dchtime'])?$_POST['dchtime']:'';
    $Dhospital = isset($_POST['Dhospital'])?$_POST['Dhospital']:'';
    $fullname = $_POST['fullname'];
    $sex = $_POST['sex'];
    $address = $_POST['address'];
    $cid = $_POST['cid'];
    $birthday = $_POST['birthday'];
    $bloodgrp = isset($_POST['bloodgrp'])?$_POST['bloodgrp']:'';
    //$drugallergy = isset($_POST['drugallergy'])?$_POST['drugallergy']:'';
    $disease = isset($_POST['disease'])?$_POST['disease']:'';
    $age = $_POST['age'];
    $nation_name = isset($_POST['nation_name'])?$_POST['nation_name']:'';
    $religion_name = isset($_POST['religion_name'])?$_POST['religion_name']:'';
    $edu_name = isset($_POST['edu_name'])?$_POST['edu_name']:'';
    $occ_name = isset($_POST['occ_name'])?$_POST['occ_name']:'';
    $mpdx = isset($_POST['mpdx'])?$_POST['mpdx']:'';
    $spdx = isset($_POST['spdx'])?$_POST['spdx']:'';
    $dxname1 = isset($_POST['dxname1'])?$_POST['dxname1']:'';
    $dxname2 = isset($_POST['dxname2'])?$_POST['dxname2']:'';
    $dxname3 = isset($_POST['dxname3'])?$_POST['dxname3']:'';
    $dxname4 = isset($_POST['dxname4'])?$_POST['dxname4']:'';
    $ptname1 = isset($_POST['ptname1'])?$_POST['ptname1']:'';
    $ptname2 = isset($_POST['ptname2'])?$_POST['ptname2']:'';
    $refername = isset($_POST['refername'])?$_POST['refername']:'';
    $ovstistname = isset($_POST['ovstistname'])?$_POST['ovstistname']:'';
    $docName = $_POST['docName'];
    $typep = isset($_POST['typep'])?$_POST['typep']:'';
    $typep_1 = isset($_POST['typep_1'])?$_POST['typep_1']:'';
    $typep_3 = isset($_POST['typep_3'])?$_POST['typep_3']:'';
    $lawpsych_chk = isset($_POST['lawpsych_chk'])?$_POST['lawpsych_chk']:'';
    $bw = isset($_POST['bw'])?$_POST['bw']:'';
    $height = isset($_POST['height'])?$_POST['height']:'';
    $bmi = isset($_POST['bmi'])?$_POST['bmi']:'';
    $temp = isset($_POST['temp'])?$_POST['temp']:'';
    $pr = isset($_POST['pr'])?$_POST['pr']:'';
    $rr = isset($_POST['rr'])?$_POST['rr']:'';
    $bps = isset($_POST['bps'])?$_POST['bps']:'';
    $bpd = isset($_POST['bpd'])?$_POST['bpd']:'';
    $Q9 = isset($_POST['Q9'])?$_POST['Q9']:'';
    $Q8 = isset($_POST['Q8'])?$_POST['Q8']:'';
    $cgi = isset($_POST['cgi'])?$_POST['cgi']:'';
    $Clozapine100 = isset($_POST['Clozapine100'])?(($_POST['Clozapine100']=='null')?'':$_POST['Clozapine100']):'';
    $Clozapine100Date = isset($_POST['Clozapine100Date'])?$_POST['Clozapine100Date']:'';
    $Clozapine25 = isset($_POST['Clozapine25'])?(($_POST['Clozapine25']=='null')?'':$_POST['Clozapine25']):'';
    $Clozapine25Date = isset($_POST['Clozapine25Date'])?$_POST['Clozapine25Date']:'';
    $Carbamazepine200 = isset($_POST['Carbamazepine200'])?(($_POST['Carbamazepine200']=='null')?'':$_POST['Carbamazepine200']):'';
    $Carbamazepine200Date = isset($_POST['Carbamazepine200Date'])?$_POST['Carbamazepine200Date']:'';
    $LithiumCarbonate300 = isset($_POST['LithiumCarbonate300'])?(($_POST['LithiumCarbonate300']=='null')?'':$_POST['LithiumCarbonate300']):'';
    $LithiumCarbonate300Date = isset($_POST['LithiumCarbonate300Date'])?$_POST['LithiumCarbonate300Date']:'';
    $SodiumValproate200 = isset($_POST['SodiumValproate200'])?(($_POST['SodiumValproate200']=='null')?'':$_POST['SodiumValproate200']):'';
    $SodiumValproate200Date = isset($_POST['SodiumValproate200Date'])?$_POST['SodiumValproate200Date']:'';
    $SodiumValproate200CHRONO = isset($_POST['SodiumValproate200CHRONO'])?(($_POST['SodiumValproate200CHRONO']=='null')?'':$_POST['SodiumValproate200CHRONO']):'';
    $SodiumValproate200CHRONODate = isset($_POST['SodiumValproate200CHRONODate'])?$_POST['SodiumValproate200CHRONODate']:'';
    $SodiumValproate500 = isset($_POST['aSodiumValproate500ct1'])?(($_POST['aSodiumValproate500ct1']=='null')?'':$_POST['aSodiumValproate500ct1']):'';
    $SodiumValproate500Date = isset($_POST['SodiumValproate500Date'])?$_POST['SodiumValproate500Date']:'';
    $recorder = $_POST['recorder'];
    $regdate = date('Y-m-d H:i:s');

    $data = array($hn,$vn,$an,$admit,$smiv,$lastvisit,$admdate,$nextdate,$pttype_expire,$expire_date,$vstdate,$vsttime,$dchdate,$dchtime
    ,$Dhospital,$fullname,$sex,$address,$cid,$birthday,$bloodgrp,$disease,$age,$nation_name,$religion_name,$edu_name,$occ_name,$mpdx,$spdx,$dxname1
    ,$dxname2,$dxname3,$dxname4,$ptname1,$ptname2,$refername,$ovstistname,$docName,$typep,$typep_1
    ,$typep_3,$lawpsych_chk,$bw,$height,$bmi,$temp,$pr,$rr,$bps,$bpd,$Q9
    ,$Q8,$cgi,$Clozapine100,$Clozapine100Date,$Clozapine25,$Clozapine25Date,$Carbamazepine200,$Carbamazepine200Date,$LithiumCarbonate300,$LithiumCarbonate300Date,$SodiumValproate200
    ,$SodiumValproate200Date,$SodiumValproate200CHRONO,$SodiumValproate200CHRONODate,$SodiumValproate500,$SodiumValproate500Date,$recorder,$regdate);
    //$field = array('id','hcode','vdate','vn','hn','sex','dob','pdx','dx0','dx1','dx2','dx3','cgis_score','clinic','user','dupdate');
    $table = "data_forward";
    $dcplan = $connDB->insert($table, $data);
    if($dcplan != false){
      
        $drugname = isset($_POST['drugName'])?$_POST['drugName']:'';   
        if($drugname !=''){
            foreach ($drugname as $key => $value) {
                $drugName = $value;
                $shortlist=$_POST['shortlist'][$key];
                $qty=$_POST['qty'][$key];
               
                $data = array($dcplan,$drugName,$shortlist,$qty);
                $table = "data_ipddrug";
                $ipdd = $connDB->insert($table, $data);
            }
        }

        $Drugallergy = isset($_POST['drugallergy'])?$_POST['drugallergy']:'';   
        if($Drugallergy !=''){
            foreach ($Drugallergy as $key => $value) {
                $drugallergy = $value;
               
                $data = array($dcplan,$drugallergy);
                $table = "data_dgallergy";
                $dglg = $connDB->insert($table, $data);
            }
        }
    $res = array("messege"=>'บันทึก Discharge plan สำเร็จ!!!!');

}else{
  $res = array("messege"=>'บันทึก Discharge plan ไม่สำเร็จ!!!!');
}
    print json_encode($res);
    $connDB->close_PDO();
}