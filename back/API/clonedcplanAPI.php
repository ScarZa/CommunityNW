<?php

include 'headAPI.php';

$read = "http://10.0.0.3/API-Hosxp/connection/conn_DB.txt";
$conn_DB->para_read($read);
$conn_DB->Read_Text();
$conn_DB->conn_PDO();
$result0 = array();
$result1 = array();
$result2 = array();
$result3 = array();
$series = array();
$series2 = array();
$series3 = array();
$series4 = array();

    $sql = "SELECT dcp.hn,dcp.vn,dcp.an,dcp.recorder,dcp.recdate FROM dcplan dcp 
    LEFT JOIN data_forward df on dcp.an = df.an
    WHERE ISNULL(df.an)";
    $connDB->imp_sql($sql);
    $selAN = $connDB->select();
    //print_r($selAN);
    for($ii=0;$ii<count($selAN);$ii++){

    
    //if($dcplan != false){
        
        //if($assent_cn == '1' || $assent_drug == '1'){
            $sql="select (SELECT count(a.an) from an_stat a WHERE a.hn = '".$selAN[$ii]['hn']."')admit
            ,(SELECT count(smi.hn) from jvl_smiv smi WHERE smi.hn = '".$selAN[$ii]['hn']."' and smi.confirm = 3)smiv
            ,(SELECT oap.nextdate from oapp oap WHERE oap.vn=:vn)nextdate
            ,v1.vn,v1.hn,v1.pttype_expire,re.expire_date,v1.age_y,v1.age_m,o1.vstdate,SUBSTR(o1.vsttime,1,5)vsttime,hos.Dhospital
                ,ifr.typep,ifr.typep_1,ifr.typep_3,ifr.lawpsych_chk,ifr.bw,ifr.height,ifr.bmi,s.temperature,s.pulse,s.rr,s.bps,s.bpd
                ,p.pname,p.fname,p.lname
                ,CASE
                    WHEN p.sex = 1 THEN 'ชาย'
                ELSE 'หญิง' END as sex
                ,CASE
                    WHEN a.lastvisit = '999' THEN 'ไม่เคย admit'
                ELSE a.lastvisit END as lastvisit
                ,a.admdate
                ,ipt.dchdate,SUBSTR(ipt.dchtime,1,5)dchtime
                ,p.cid,p.birthday,p.bloodgrp,p.drugallergy,ill.cc_persist_disease disease
                ,n.name nation_name,r.name religion_name,e.name edu_name,occ.name occ_name
                ,p.addrpart,p.moopart,t3.name tambon,t2.name ampher,t1.name changwat
                ,SUBSTR(v1.pdx,1,3)mpdx,SUBSTR(v1.pdx,4,1)spdx
                ,concat(v1.pdx,' ',ic1.name)as dxname1,concat(v1.dx0,' ',ic2.name) as dxname2,concat(v1.dx1,' ',ic3.name) as dxname3
                ,concat(v1.dx2,' ',ic4.name) as dxname4 ,h.name as refername,ovs.name as ovstistname,d.name as docName,pt1.name ptname1,pt2.name ptname2,cgi.cgis_score,ds.depression_score,ds.suicide_score
                ,(SELECT concat(di.name,' ',di.strength) FROM opitemrece op inner join patient p on op.hn = p.hn inner join ovst o1 on p.hn = o1.hn inner join vn_stat vt on vt.vn = o1.vn inner join drugitems di on di.icode = op.icode WHERE op.icode = '1480070' and ((o1.vn = :vn 
            and op.income in(03,19))) GROUP BY op.vstdate ORDER BY op.vstdate desc limit 1)Clozapine100
            ,(SELECT op.vstdate FROM opitemrece op inner join patient p on op.hn = p.hn inner join ovst o1 on p.hn = o1.hn inner join vn_stat vt on vt.vn = o1.vn inner join drugitems di on di.icode = op.icode WHERE op.icode = '1480070' and ((o1.vn = :vn 
            and op.income in(03,19))) GROUP BY op.vstdate ORDER BY op.vstdate desc limit 1)Clozapine100Date
            ,(SELECT concat(di.name,' ',di.strength) FROM opitemrece op inner join patient p on op.hn = p.hn inner join ovst o1 on p.hn = o1.hn inner join vn_stat vt on vt.vn = o1.vn inner join drugitems di on di.icode = op.icode WHERE op.icode = '1480069' and ((o1.vn = :vn 
            and op.income in(03,19))) GROUP BY op.vstdate ORDER BY op.vstdate desc limit 1)Clozapine25
            ,(SELECT op.vstdate FROM opitemrece op inner join patient p on op.hn = p.hn inner join ovst o1 on p.hn = o1.hn inner join vn_stat vt on vt.vn = o1.vn inner join drugitems di on di.icode = op.icode WHERE op.icode = '1480069' and ((o1.vn = :vn 
            and op.income in(03,19))) GROUP BY op.vstdate ORDER BY op.vstdate desc limit 1)Clozapine25Date
            ,(SELECT concat(di.name,' ',di.strength) FROM opitemrece op inner join patient p on op.hn = p.hn inner join ovst o1 on p.hn = o1.hn inner join vn_stat vt on vt.vn = o1.vn inner join drugitems di on di.icode = op.icode WHERE op.icode = '1000059' and ((o1.vn = :vn 
            and op.income in(03,19))) GROUP BY op.vstdate ORDER BY op.vstdate desc limit 1)Carbamazepine200
            ,(SELECT op.vstdate FROM opitemrece op inner join patient p on op.hn = p.hn inner join ovst o1 on p.hn = o1.hn inner join vn_stat vt on vt.vn = o1.vn inner join drugitems di on di.icode = op.icode WHERE op.icode = '1000059' and ((o1.vn = :vn 
            and op.income in(03,19))) GROUP BY op.vstdate ORDER BY op.vstdate desc limit 1)Carbamazepine200Date
            ,(SELECT concat(di.name,' ',di.strength) FROM opitemrece op inner join patient p on op.hn = p.hn inner join ovst o1 on p.hn = o1.hn inner join vn_stat vt on vt.vn = o1.vn inner join drugitems di on di.icode = op.icode WHERE op.icode = '1480107' and ((o1.vn = :vn 
            and op.income in(03,19))) GROUP BY op.vstdate ORDER BY op.vstdate desc limit 1)LithiumCarbonate300
            ,(SELECT op.vstdate FROM opitemrece op inner join patient p on op.hn = p.hn inner join ovst o1 on p.hn = o1.hn inner join vn_stat vt on vt.vn = o1.vn inner join drugitems di on di.icode = op.icode WHERE op.icode = '1480107' and ((o1.vn = :vn 
            and op.income in(03,19))) GROUP BY op.vstdate ORDER BY op.vstdate desc limit 1)LithiumCarbonate300Date
            ,(SELECT concat(di.name,' ',di.strength) FROM opitemrece op inner join patient p on op.hn = p.hn inner join ovst o1 on p.hn = o1.hn inner join vn_stat vt on vt.vn = o1.vn inner join drugitems di on di.icode = op.icode WHERE op.icode = '1460332' and ((o1.vn = :vn 
            and op.income in(03,19))) GROUP BY op.vstdate ORDER BY op.vstdate desc limit 1)SodiumValproate200
            ,(SELECT op.vstdate FROM opitemrece op inner join patient p on op.hn = p.hn inner join ovst o1 on p.hn = o1.hn inner join vn_stat vt on vt.vn = o1.vn inner join drugitems di on di.icode = op.icode WHERE op.icode = '1460332' and ((o1.vn = :vn 
            and op.income in(03,19))) GROUP BY op.vstdate ORDER BY op.vstdate desc limit 1)SodiumValproate200Date
            ,(SELECT concat(di.name,' ',di.strength) FROM opitemrece op inner join patient p on op.hn = p.hn inner join ovst o1 on p.hn = o1.hn inner join vn_stat vt on vt.vn = o1.vn inner join drugitems di on di.icode = op.icode WHERE op.icode = '1570044' and ((op.vn = :vn 
            and op.income in(03,19))) GROUP BY op.vstdate ORDER BY op.vstdate desc limit 1)SodiumValproate200CHRONO
            ,(SELECT op.vstdate FROM opitemrece op inner join patient p on op.hn = p.hn inner join ovst o1 on p.hn = o1.hn inner join vn_stat vt on vt.vn = o1.vn inner join drugitems di on di.icode = op.icode WHERE op.icode = '1570044' and ((o1.vn = :vn 
            and op.income in(03,19))) GROUP BY op.vstdate ORDER BY op.vstdate desc limit 1)SodiumValproate200CHRONODate
            ,(SELECT concat(di.name,' ',di.strength) FROM opitemrece op inner join patient p on op.hn = p.hn inner join ovst o1 on p.hn = o1.hn inner join vn_stat vt on vt.vn = o1.vn inner join drugitems di on di.icode = op.icode WHERE op.icode = '1540021' and ((o1.vn = :vn 
            and op.income in(03,19))) GROUP BY op.vstdate ORDER BY op.vstdate desc limit 1)SodiumValproate500
            ,(SELECT op.vstdate FROM opitemrece op inner join patient p on op.hn = p.hn inner join ovst o1 on p.hn = o1.hn inner join vn_stat vt on vt.vn = o1.vn inner join drugitems di on di.icode = op.icode WHERE op.icode = '1540021' and ((o1.vn = :vn 
            and op.income in(03,19))) GROUP BY op.vstdate ORDER BY op.vstdate desc limit 1)SodiumValproate500Date
                from vn_stat v1 
                left outer join an_stat a on a.vn=v1.vn
                left outer join ipt on ipt.an = a.an
                left outer join ovst o1 on o1.vn=v1.vn
                left outer join ovstist ovs on ovs.ovstist = o1.ovstist
                left outer join opdscreen s on s.vn = v1.vn
                inner join jvl_ipd_first_rec ifr on ifr.vn = v1.vn
                left outer join oapp oap on oap.vn=v1.vn
                left outer join referin re on re.vn=v1.vn
                left outer join hospcode h on h.hospcode = re.hospcode
                left outer join patient p on p.hn=v1.hn
                left outer join nationality n on n.nationality = p.nationality
                left outer join religion r on r.religion = p.religion
                left outer join education e on e.education = p.educate
                left outer join occupation occ on occ.occupation = p.occupation
                left outer join icd101 ic1 on ic1.code=v1.pdx
                left outer join icd101 ic2 on ic2.code=v1.dx0
                left outer join icd101 ic3 on ic3.code=v1.dx1
                left outer join icd101 ic4 on ic4.code=v1.dx2
                left outer join clinicmember cl on cl.hn = v1.hn
                left outer join clinic c on c.clinic = cl.clinic
                left outer join doctor d on d.code = v1.dx_doctor
                left outer join pttype pt1 on p.pttype=pt1.pttype
                left outer join pttype pt2 on o1.pttype=pt2.pttype
                left outer join cgi on cgi.vn = v1.vn
                left outer join depression_screen ds on ds.vn=v1.vn
                left outer join dbhospital hos on hos.idhospital = v1.hospmain
                left outer join thaiaddress t1 on t1.chwpart=p.chwpart and
                     t1.amppart='00' and t1.tmbpart='00'
                left outer join thaiaddress t2 on t2.chwpart=p.chwpart and
                     t2.amppart=p.amppart and t2.tmbpart='00'
                left outer join thaiaddress t3 on t3.chwpart=p.chwpart and
                     t3.amppart=p.amppart and t3.tmbpart=p.tmbpart
                left outer JOIN thaiaddress t4 ON t4.chwpart=p.chwpart
                left outer join opd_ill_history ill on ill.hn = p.hn
                where v1.vn= :vn GROUP BY v1.vn";
            $conn_DB->imp_sql($sql);
            $execute=array(':vn'=>$selAN[$ii]['vn']);
            $rslt=$conn_DB->select_a($execute);
            //print_r($rslt);
            $hn = $rslt['hn'];
            $vn = $rslt['vn'];
            $an = $selAN[$ii]['an'];
            $admit = $rslt['admit'];
            $smiv = $rslt['smiv'];
            $lastvisit = $rslt['lastvisit'];
            $admdate = $rslt['admdate'];
            $nextdate = isset($rslt['nextdate'])?$rslt['nextdate']:'';
            $pttype_expire = isset($rslt['pttype_expire'])?$rslt['pttype_expire']:'';
            $expire_date = isset($rslt['expire_date'])?$rslt['expire_date']:'';
            $vstdate = $rslt['vstdate'];
            $vsttime = $rslt['vsttime'];
            $dchdate = isset($rslt['dchdate'])?$rslt['dchdate']:'';
            $dchtime = isset($rslt['dchtime'])?$rslt['dchtime']:'';
            $Dhospital = $conv->tis620_to_utf8( $rslt['Dhospital']);
            $pname=$conv->tis620_to_utf8( $rslt['pname']);
            $fname=$conv->tis620_to_utf8( $rslt['fname']);
            $lname=$conv->tis620_to_utf8( $rslt['lname']);
            $fullname = $pname.$fname.' '.$lname;
            $sex = $rslt['sex'];
            $address = $rslt['addrpart'].' ม.'.$rslt['moopart'].' ต.'. $conv->tis620_to_utf8( $rslt['tambon']).' อ.'. $conv->tis620_to_utf8( $rslt['ampher']).' จ.'. $conv->tis620_to_utf8( $rslt['changwat']);
            $cid = $rslt['cid'];
            $birthday = $rslt['birthday'];
            $bloodgrp = $conv->tis620_to_utf8(trim($rslt['bloodgrp']));
            $drugallergy = $conv->tis620_to_utf8( $rslt['drugallergy']);
            $disease = $conv->tis620_to_utf8( $rslt['disease']);
            $age = $conv->tis620_to_utf8($rslt['age_y']).' ปี '.$conv->tis620_to_utf8($rslt['age_m']).' เดือน';
            $nation_name = $conv->tis620_to_utf8( $rslt['nation_name']);
            $religion_name = $conv->tis620_to_utf8( $rslt['religion_name']);
            $edu_name = $conv->tis620_to_utf8( $rslt['edu_name']);
            $occ_name = $conv->tis620_to_utf8( $rslt['occ_name']);
            $mpdx = $conv->tis620_to_utf8( $rslt['mpdx']);
            $spdx = $conv->tis620_to_utf8( $rslt['spdx']);
            $dxname1 = $conv->tis620_to_utf8( $rslt['dxname1']);
            $dxname2 = $conv->tis620_to_utf8( $rslt['dxname2']);
            $dxname3 = $conv->tis620_to_utf8( $rslt['dxname3']);
            $dxname4 = $conv->tis620_to_utf8( $rslt['dxname4']);
            $ptname1 = $conv->tis620_to_utf8( $rslt['ptname1']);
            $ptname2 = $conv->tis620_to_utf8( $rslt['ptname2']);
            $refername = $conv->tis620_to_utf8( $rslt['refername']);
            $ovstistname = $conv->tis620_to_utf8( $rslt['ovstistname']);
            $docName = $conv->tis620_to_utf8( $rslt['docName']);
            $typep = $rslt['typep'];
            $typep_1 = $rslt['typep_1'];
            $typep_3 = $rslt['typep_3'];
            $lawpsych_chk = $rslt['lawpsych_chk'];
            $bw = round($rslt['bw'],2);
            $height = $rslt['height'];
            $bmi = round($rslt['bmi'],2);
            $temp = round($rslt['temperature'],1);
            $pr = round($rslt['pulse']);
            $rr = round($rslt['rr']);
            $bps = round($rslt['bps']);
            $bpd = round($rslt['bpd']);
            $Q9 = isset($rslt['depression_score'])?$rslt['depression_score']:'-';
            $Q8 = isset($rslt['suicide_score'])?$rslt['suicide_score']:'-';
            $cgi = isset($rslt['cgis_score'])?$rslt['cgis_score']:'-';
            $Clozapine100 = $rslt['Clozapine100'];
            $Clozapine100Date = isset($rslt['Clozapine100Date'])?$rslt['Clozapine100Date']:'';
            $Clozapine25 = $rslt['Clozapine25'];
            $Clozapine25Date = isset($rslt['Clozapine25Date'])?$rslt['Clozapine25Date']:'';
            $Carbamazepine200 = $rslt['Carbamazepine200'];
            $Carbamazepine200Date = isset($rslt['Carbamazepine200Date'])?$rslt['Carbamazepine200Date']:'';
            $LithiumCarbonate300 = $rslt['LithiumCarbonate300'];
            $LithiumCarbonate300Date = isset($rslt['LithiumCarbonate300Date'])?$rslt['LithiumCarbonate300Date']:'';
            $SodiumValproate200 = $rslt['SodiumValproate200'];
            $SodiumValproate200Date = isset($rslt['SodiumValproate200Date'])?$rslt['SodiumValproate200Date']:'';
            $SodiumValproate200CHRONO = $rslt['SodiumValproate200CHRONO'];
            $SodiumValproate200CHRONODate = isset($rslt['SodiumValproate200CHRONODate'])?$rslt['SodiumValproate200CHRONODate']:'';
            $SodiumValproate500 = $rslt['SodiumValproate500'];
            $SodiumValproate500Date = isset($rslt['SodiumValproate500Date'])?$rslt['SodiumValproate500Date']:'';
            $recorder = $selAN[$ii]['recorder'];
            $regdate = $selAN[$ii]['recdate'];
            
            $data = array($hn,$vn,$an,$admit,$smiv,$lastvisit,$admdate,$nextdate,$pttype_expire,$expire_date,$vstdate,$vsttime,$dchdate,$dchtime
            ,$Dhospital,$fullname,$sex,$address,$cid,$birthday,$bloodgrp,$disease,$age,$nation_name,$religion_name,$edu_name,$occ_name,$mpdx,$spdx,$dxname1
            ,$dxname2,$dxname3,$dxname4,$ptname1,$ptname2,$refername,$ovstistname,$docName,$typep,$typep_1
            ,$typep_3,$lawpsych_chk,$bw,$height,$bmi,$temp,$pr,$rr,$bps,$bpd,$Q9
            ,$Q8,$cgi,$Clozapine100,$Clozapine100Date,$Clozapine25,$Clozapine25Date,$Carbamazepine200,$Carbamazepine200Date,$LithiumCarbonate300,$LithiumCarbonate300Date,$SodiumValproate200
            ,$SodiumValproate200Date,$SodiumValproate200CHRONO,$SodiumValproate200CHRONODate,$SodiumValproate500,$SodiumValproate500Date,$recorder,$regdate);
            //$field = array('id','hcode','vdate','vn','hn','sex','dob','pdx','dx0','dx1','dx2','dx3','cgis_score','clinic','user','dupdate');
            $table = "data_forward";
            $dcplan = $connDB->insert($table, $data);
        
            $sql2 = "SELECT concat(oa.agent,' : ',oa.symptom)drugallergy FROM opd_allergy oa
            inner join allergy_result ar on ar.allergy_result_id = oa.allergy_result_id
            inner join allergy_relation are on are.allergy_relation_id = oa.allergy_relation_id
            WHERE oa.hn='".$selAN[$ii]['hn']."'";
            
            $conn_DB->imp_sql($sql2);
            $allergy = $conn_DB->select();
            //for($i=0;$i<count($allergy);$i++){
              // $Drugallergy = isset($allergy['drugallergy'])?$allergy['drugallergy']:'';
              //   if($Drugallergy !=''){
                  foreach ($allergy as $key => $value) { 
                      $drugallergy = $conv->tis620_to_utf8($value['drugallergy']);
                     
                      $data = array($dcplan,$drugallergy);
                      $table = "data_dgallergy";
                      $dglg = $connDB->insert($table, $data);
                  }
              // }   
            //}

            $sql3 = "SELECT concat(di.name,' ',di.strength)drugName,du.shortlist ,concat(op.qty,' ',di.units)qty,op.sum_price
            FROM opitemrece op 
            inner join ovst o1 on op.hn = o1.hn 
            inner join an_stat a on a.vn = o1.vn and a.an = op.an
            inner join drugitems di on di.icode = op.icode 
            inner join drugusage du on du.drugusage = op.drugusage
            WHERE o1.vn = '".$selAN[$ii]['vn']."' and op.income = 19 GROUP BY drugName";
            
            $conn_DB->imp_sql($sql3);
            $num_risk = $conn_DB->select();
            //print_r($num_risk);
            //for($i=0;$i<count($num_risk);$i++){
              // $drugname = isset($num_risk['drugallergy'])?$num_risk['drugallergy']:'';
              // if($drugname !=''){
                foreach ($num_risk as $key => $value) { //print_r($value);
                  $drugName = $conv->tis620_to_utf8($value['drugName']);
                  $shortlist=$conv->tis620_to_utf8($value['shortlist']);
                  $qty=$conv->tis620_to_utf8($value['qty']);
                 
                  $data = array($dcplan,$drugName,$shortlist,$qty);
                  $table = "data_ipddrug";
                  $ipdd = $connDB->insert($table, $data);
              }

            // $sql2 = "SELECT concat(di.name,' ',di.strength)drugName,du.shortlist ,concat(op.qty,' ',di.units)qty,op.sum_price
            // FROM opitemrece op 
            // inner join ovst o1 on op.hn = o1.hn 
            // inner join an_stat a on a.vn = o1.vn and a.an = op.an
            // inner join drugitems di on di.icode = op.icode 
            // inner join drugusage du on du.drugusage = op.drugusage
            // WHERE op.vn = '".$selAN[$ii]['vn']."' and op.income = 03 GROUP BY drugName";

            // $conn_DB->imp_sql($sql2);
            // $num_risk = $conn_DB->select();
            // for($i=0;$i<count($num_risk);$i++){
            //     $series3['drugName'] = $conv->tis620_to_utf8($num_risk[$i]['drugName']);
            //     $series3['shortlist'] = $conv->tis620_to_utf8($num_risk[$i]['shortlist']);
            //     $series3['qty'] = $conv->tis620_to_utf8($num_risk[$i]['qty']);
            //     array_push($result2, $series3);
            // }

                
            // }
            echo "Compete ".$ii;
          }
      
        // }else{
        //     $res = array("messege"=>'บันทึก Discharge plan สำเร็จ!!!!');
        // }
  // }else{
  //     $res = array("messege"=>'บันทึก Discharge plan ไม่สำเร็จ!!!!!!!!');
  // }
   // print json_encode($res);
$conn_DB->close_PDO();
?>