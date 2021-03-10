function EMRModal(content, id = null) {
  $("#createModal").empty().append("<div class='modal' id='EMRModal' role='dialog' aria-labelledby='exampleModalLabel'>"
    + "<div class='modal-dialog modal-xl' role='document'><div class='modal-content'><div class='modal-header'>"
    + "<h4 class='modal-title' id='EMRModalLabel'></h4>"
    + "<button type='button' class='close' data-dismiss='modal' aria-label='Close'><span aria-hidden='true'>&times;</span></button>"
    + "</div><form action='' name='frmEMR' id='frmEMR' method='post' enctype='multipart/form-data'><div class='modal-body' id='modelregis'><span id='EMR_detail'></span></div>"
    + "<div class='modal-footer'><button type='button' class='btn btn-danger' data-dismiss='modal'>ปิด</button></div></form></div></div></div>");
  $('#EMRModal').on('show.bs.modal', function (event) {
    var button = $(event.relatedTarget)
    var recipient = button.data('whatever')
    var modal = $(this)
    modal.find('.modal-title').text()
    $("h4#EMRModalLabel").empty().append("patient EMR");
    $("#frmEMR").append($("<input type='hidden' name='method' value='EMR'>")
                      , $("<input type='hidden' name='an' value='" + recipient + "'>")
      , $("<input type='hidden' name='mem_id' value='" + $.cookie('reg_id') + "'>"));
    ////// ในอนาคตต้องให้ยืนยัน cid
    
    $.getJSON('../back/API/detail_registor.php', { data1: $.cookie('reg_id') }, function (data) { 
      var cid = prompt("กรุณายืนยันเลขบัตรประชาชนด้วยครับ");
      var token_keyConf = TokenEncode(cid,data[0].fullname,data[0].timestamp);
      var token_key = TokenEncode(data[0].cid,data[0].fullname,data[0].timestamp);
      
      if (token_key == token_keyConf) {
        let myForm = document.getElementById('frmEMR');
        var dataForm = new FormData(myForm);
        var settings = {
          type: "POST",
          url: "../back/process/addLog.php",
          async: true,
          crossDomain: true,
          data: dataForm,
          contentType: false,
          cache: false,
          processData: false
        }
        //console.log(settings)
        $.ajax(settings).done(function (result) {
          alert(result.messege);

          var Ar = new AssEMRNW("span#EMR_detail");
          Ar.GetEMRNWForm();

          var PL = new TabLayout('#Rx-tab', 2, 'T');
          PL.GetTL();
          $("#Tl0").empty().append("IPD Home Med");
          $("#Tl1").empty().append("OPD Med");
          $("#Tc0").empty().append($("<div id='IPDMed'></div>"));
          $("#Tc1").empty().append($("<div id='OPDMed'></div>"));

          // var LL = new TabLayout('#Lab-body',2,'L');
          // LL.GetTL();
          // $("#Ll0").empty().append("IPD Lab");
          // $("#Ll1").empty().append("OPD Lab");
          // $("#Lc0").empty().append($("<div id='IPDLab'></div>"));
          // $("#Lc1").empty().append($("<div id='OPDLab'></div>"));
          
          // $("#vdate").append($("<div class='row list-group' id='vdate_list'></div>"))
          
          AddDataEMR("detail_EMRpatientAPI.php", '', recipient);
        });
      } else {
        alert("เลขบัตรประชาชนไม่ถูกต้องครับ!!!");
      }
    });  
    
  });
}
                                

function AddDataEMR(json, id1, id2 ) { 
  $.getJSON('../back/API/' + json, { data: id1, data2: id2 }, function (data) { console.log(data)

    // $.getJSON('http://1.179.191.130/API-Hosxp/API/CommuNW/vsdate_Data.php', { data: data[0].hn }, function (data) {
    //   $("div#vdate_list").empty();
    //   $.each(data, function (i, item) {
    //     $("div#vdate_list").append($("<a href='#' id='li_vdate" + i + "' class='list-group-item list-group-item-action list-group-item-secondary'><b>" + data[i].vstdate + "</b> <b style='font-size:13px'>" + data[i].vsttime + " น.</b></a>")
    //     )
    //     if (item.an) { $("#li_vdate" + i).attr("style", "color: red"); }
    //     $("#li_vdate" + i).click(function () {
    //       AddDataEMR("detail_EMRpatientAPI.php", item.vn);
    //     })
    //   });
    // });

        $.getJSON('http://1.179.191.130/API-Hosxp/API/CommuNW/check_image.php', { data1: data[0].hn }, function (datai) {
            if (datai.cc == '') { var img = 'images/person.png' } else { var img = 'http://1.179.191.130/API-Hosxp/API/CommuNW/show_image.php?hn=' + data[0].hn }
            $("#pics-panel").attr("src", img)
        });
        $("h4#EMRModalLabel").append("<b style='color:red'> AN : "+data[0].an+"</b>")
        $("#fullname").empty().append(data[0].fullname);
        $("#hn").empty().append(data[0].hn);
        $("#vn").empty().append(data[0].vn);
        $("#cid").empty().append(data[0].cid);
        $("#birthday").empty().append(data[0].birthday);
        $("#age").empty().append(data[0].age);
        $("#mrname").empty().append(data[0].mrname);
        $("#ptname1").empty().append(data[0].ptname1+' ('+data[0].Dhospital+')');
        $("#address").empty().append(data[0].address);
        $("#nationality").empty().append(data[0].nation_name);
        $("#religion").empty().append(data[0].religion_name);
        $("#blood").empty().append(data[0].bloodgrp);
        $("#disease").empty().append(data[0].disease);
        //$("#allergic").empty().append(data[0].drugallergy);
        $("#vstdate").empty().append('วันที่รับ Admit : '+data[0].vstdate);
        $("#vsttime").empty().append('เวลา : ' + data[0].vsttime + ' น.');
        $("#admit").empty().append('รับรักษาครั้งที่ : '+data[0].admit);
        $("#ovstistname").empty().append('ประเภท : ' + data[0].ovstistname);
        $("#dchdate").empty().append('วันที่จำหน่าย : '+data[0].dchdate);
        $("#dchtime").empty().append('เวลาจำหน่าย : ' + data[0].dchtime + ' น.');
        $("#lastvisit").empty().append('จำนวนวันที่ Admit : '+data[0].admdate+' วัน');
        $("#nextdate").empty().append('นัดครั้งต่อไป : '+data[0].nextdate);
        $("#ptname2").empty().append(data[0].ptname2);
        $("#Dhospital").empty().append(data[0].Dhospital);
        $("#pttype_expire").empty().append(data[0].pttype_expire);
        $("#expire_date").empty().append(data[0].expire_date);
        $("#docName").empty().append(data[0].docName);
        $("#clinic").empty().append(data[0].clinic);
    $("#Alert_Drug").empty();
    $.getJSON('../back/API/DT_DrugIPD.php', { data1: data[0].fw_id }, function (dataD) { console.log(dataD)
      $.each(dataD, function (key, value) {
        if (data[0].Clozapine100 == value.drugName) {
          $("#Alert_Drug").append("<div class='col-lg-12'><b style='color: yellow'>" + data[0].Clozapine100 + " ( สั่งล่าสุด " + data[0].Clozapine100Date + ")</b></div><br>");
        }
        if (data[0].Clozapine25 == value.drugName) {
          $("#Alert_Drug").append("<div class='col-lg-12'><b style='color: yellow'>" + data[0].Clozapine25 + " ( สั่งล่าสุด " + data[0].Clozapine25Date + ")</b></div><br>");
        }
        if (data[0].Carbamazepine200 == value.drugName) {
          $("#Alert_Drug").append("<div class='col-lg-12'><b style='color: yellow'>" + data[0].Carbamazepine200 + " ( สั่งล่าสุด " + data[0].Carbamazepine200Date + ")</b></div><br>");
        }
        if (data[0].LithiumCarbonate300 == value.drugName) {
          $("#Alert_Drug").append("<div class='col-lg-12'><b style='color: yellow'>" + data[0].LithiumCarbonate300 + " ( สั่งล่าสุด " + data[0].LithiumCarbonate300Date + ")</b></div><br>");
        }
        if (data[0].SodiumValproate200 == value.drugName) {
          $("#Alert_Drug").append("<div class='col-lg-12'><b style='color: yellow'>" + data[0].SodiumValproate200 + " ( สั่งล่าสุด " + data[0].SodiumValproate200Date + ")</b></div><br>");
        }
        if (data[0].SodiumValproate200CHRONO == value.drugName) {
          $("#Alert_Drug").append("<div class='col-lg-12'><b style='color: yellow'>" + data[0].SodiumValproate200CHRONO + " ( สั่งล่าสุด " + data[0].SodiumValproate200CHRONODate + ")</b></div><br>");
        }
        if (data[0].SodiumValproate500 == value.drugName) {
          $("#Alert_Drug").append("<div class='col-lg-12'><b style='color: yellow'>" + data[0].SodiumValproate500 + " ( สั่งล่าสุด " + data[0].SodiumValproate500Date + ")</b></div>");
        }
      });
    });
        $("#dxname1").empty().append(data[0].dxname1);
        $("#dxname2").empty().append(data[0].dxname2);
        $("#dxname3").empty().append(data[0].dxname3);
        $("#dxname4").empty().append(data[0].dxname4);
        $("#bw").empty().append(data[0].bw+" ก.ก.");
        $("#height").empty().append(data[0].height+" ซ.ม.");
        $("#bmi").empty().append(data[0].bmi);
        $("#temp").empty().append(data[0].temp+"  ํc");
        $("#pr").empty().append(data[0].pr+" /min.");
        $("#rr").empty().append(data[0].rr+" /min.");
        $("#bps").empty().append(data[0].bps+"/"+data[0].bpd+" mmHg.");
        $("#cgi").empty().append(data[0].cgi);
        $("#Q9").empty().append(data[0].Q9);
        $("#Q8").empty().append(data[0].Q8);
        // $("#cc").empty().append("CC : "+data[0].cc);
        // $("#hpi").empty().append("HPI : "+data[0].hpi);
        // $("#pmh").empty().append("PMH : "+data[0].pmh);

        $.getJSON('../back/API/Data_allergy.php', { data: data[0].fw_id }, function (data) {
          $("#allergic").empty();
          $.each( data, function( key, value ) {
              $("#allergic").append("<div class='col-lg-12' style='color :yellow'>"+value.drugallergy+"</div><br>");
            });
      });
      $("#OPDMed").empty();
      $("#IPDMed").empty();
      var column1 = ["รายการ", "วิธีใช้","จำนวน"];
      var CTbOPD = new createTableAjax();
      CTbOPD.GetNewTableAjax('OPDMed', 'http://1.179.191.130/API-Hosxp/API/CommuNW/DT_DrugOPD.php?'+data[0].vn, 'http"//10.0.0.11/API-Hosxp/API/tempSendDataAPI.php', column1
          , null, null, null, null, false, false, null, false, null, false, null, null, null, null, null, null);
  
      var CTbIPD = new createTableAjax();
      CTbIPD.GetNewTableAjax('IPDMed', '../back/API/DT_DrugIPD.php?'+data[0].fw_id, 'http"//10.0.0.11/API-Hosxp/API/tempSendDataAPI.php', column1
        , null, null, null, null, false, false, null, false, null, false, null, null, null, null, null, null);
    
        // $("#OPDLab").empty();
        // $("#IPDLab").empty();
        // var column1 = ["วันที่รายงาน","Profile", "ชื่อรายการ","ผล","หน่วย","ค่าปกติ"];
        // var CTbOPD = new createTableAjax();
        // CTbOPD.GetNewTableAjax('OPDLab', 'http://1.179.191.130/API-Hosxp/API/CommuNW/DT_LabOPD.php?'+data[0].vn, 'http"//10.0.0.11/API-Hosxp/API/tempSendDataAPI.php', column1
        //     , null, null, null, null, false, false, null, false, null, false, null, null, null, null, null, null);
    
        // var CTbIPD = new createTableAjax();
        // CTbIPD.GetNewTableAjax('IPDLab', 'http://1.179.191.130/API-Hosxp/API/CommuNW/DT_LabIPD.php?'+data[0].vn, 'http"//10.0.0.11/API-Hosxp/API/tempSendDataAPI.php', column1
        //   , null, null, null, null, false, false, null, false, null, false, null, null, null, null, null, null);
    
    });
  $.getJSON('../back/API/detail_DCR.php', { data2: id2 }, function (data) { 
      $("#informaddr").empty().append(data.patient_add);
      $("#hometel").empty().append("&nbsp; <i class='fa fa-phone-square'></i> เบอร์โทร : "+data.tel0);
      $("#informtel").empty().append("&nbsp;&nbsp; <i class='fa fa-phone-square'></i> เบอร์โทร : "+data.tel1);
      $("#inject").append($("<div class='col-lg-12 col-md-12 col-sm-12 row'><div class='col-lg-4 col-md-6 col-sm-6' style='text-align:right;'><u><b>ยาฉีด</b></u></div></div>")
        , $("<div class='row col-lg-12 col-md-12 col-sm-12 ' id='inject_item'></div>"));
      if (data.iname0 != '') { $("#inject_item").append("<div class='col-lg-4 col-md-6 col-sm-6' style='text-align:right;'><b>" + data.iname0 + " : </b></div><div class='col-lg-8 col-md-6 col-sm-6'><b style='color:red'>" + data.inject0 + "</b></div></div><br>") }
      if (data.iname1 != ''){ $("#inject_item").append("<div class='col-lg-4 col-md-6 col-sm-6' style='text-align:right;'><b>" + data.iname1 + " : </b></div><div class='col-lg-8 col-md-6 col-sm-6'><b style='color:red'>"+data.inject1+"</b></div></div>")}
        $("#cc").empty().append("CC : "+data.cc);
        $("#hpi").empty().append("HPI : "+data.hpi);;
        $("#biographer").empty().append(data.biographer);
        $("#relative").empty().append(data.relative);
        $("#patient_add").empty().append(data.patient_add);
        $("#tel0").empty().append(data.tel0);
        $("#relative0").empty().append(data.relative0);
        $("#tel1").empty().append(data.tel1);
        $("#relative1").empty().append(data.relative1);
        $("#tel2").empty().append(data.tel2);
        $("#relative2").empty().append(data.relative2);
        $("#dc_type").empty().append(data.dct_name);
  
        $("#patient_type").empty();
        if (data.dcs1 != '') { $("#patient_type").append(data.dcs1 + '<br>'); }
        if (data.dcs2 != '') { $("#patient_type").append(data.dcs2 + '<br>'); }
        if (data.dcs3 != '') { $("#patient_type").append(data.dcs3 + '<br>'); }
        if (data.dcs4 != '') { $("#patient_type").append(data.dcs4 + '<br>'); }
        if (data.dcs5 != '') { $("#patient_type").append(data.dcs5 + '<br>'); }
        if (data.dcs6 != '') { $("#patient_type").append(data.dcs6 + '<br>'); }
        if (data.dcs7 != '') { $("#patient_type").append(data.dcs7 + '<br>'); }
        if (data.dcs8 != '') { $("#patient_type").append(data.dcs8 + '<br>'); }
        if (data.dcs9 != '') { $("#patient_type").append(data.dcs9 + '<br>'); }
        if (data.dcs10 != '') { $("#patient_type").append(data.dcs10 + '<br>'); }
        
        // $("#assent_drug").empty().append(data.assent_drug);
        // $("#assent_tel").empty().append(data.assent_tel);
        // $("#assent_jvl").empty().append(data.assent_jvl);
        // $("#assent_cn").empty().append(data.assent_cn);
        $("#hos_nearby").empty().append(data.hos_nearby);
        $("#hos_forward").empty().append(data.hos_forward);
  
        $("#problem_prof").empty();
        if (data.ap1 != '') { $("#problem_prof").append(data.ap1 + '<br>'); }
        if (data.ap2 != '') { $("#problem_prof").append(data.ap2 + '<br>'); }
        if (data.ap3 != '') { $("#problem_prof").append(data.ap3 + '<br>'); }
        if (data.ap4 != '') { $("#problem_prof").append(data.ap4 + '<br>'); }
        if (data.ap5 != '') { $("#problem_prof").append(data.ap5 + '<br>'); }
        if (data.ap6 != '') { $("#problem_prof").append(data.ap6 + '<br>'); }
        if (data.ap7 != '') { $("#problem_prof").append(data.ap7 + '<br>'); }
        if (data.ap8 != '') { $("#problem_prof").append(data.ap8 + '<br>'); }
        if (data.ap9 != '') { $("#problem_prof").append(data.ap9 + '<br>'); }
        if (data.ap10 != '') { $("#problem_prof").append(data.ap10 + '<br>'); }
  
        $("#dc_conclude").empty();
        if (data.fol1 != '') {
          $("#dc_conclude").append('<b>'+data.fol1 + "</b><br> <div class='row'><u class='col-lg-3 col-md-3'>แผนการช่วยเหลือ</u>  <span class='row col-lg-9 col-md-9' id='fol1'></span></div><HR style='width:100%; '>");
          if (data.act1 != '') { $("#fol1").append(' - ' + data.act1 + '<br>') }
          if (data.act2 != '') { $("#fol1").append(' - ' + data.act2 + '<br>') }
          if (data.act3 != '') { $("#fol1").append(' - ' + data.act3 + '<br>') }
            }
        if (data.fol2 != '') {
          $("#dc_conclude").append('<b>'+data.fol2 + "</b><br> <div class='row'><u class='col-lg-3 col-md-3'>แผนการช่วยเหลือ</u>  <span class='row col-lg-9 col-md-9' id='fol2'></span></div><HR style='width:100%; '>");
          if (data.act4 != '') { $("#fol2").append(' - ' + data.act4 + '<br>') }
          if (data.act5 != '') { $("#fol2").append(' - ' + data.act5 + '<br>') }
          if (data.act6 != '') { $("#fol2").append(' - ' + data.act6 + '<br>') }
        }
        if (data.fol3 != '') {
          $("#dc_conclude").append('<b>' + data.fol3 + "</b><br> <div class='row'><u class='col-lg-3 col-md-3'>แผนการช่วยเหลือ</u>  <span class='row col-lg-9 col-md-9' id='fol3'></span></div><HR style='width:100%; '>");
          if (data.act7 != '') { $("#fol3").append(' - ' + data.act7 + '<br>') }
          if (data.act8 != '') { $("#fol3").append(' - ' + data.act8 + '<br>') }
          if (data.act9 != '') { $("#fol3").append(' - ' + data.act9 + '<br>') }
          if (data.act10 != '') { $("#fol3").append(' - ' + data.act10 + '<br>') }
        }
        if (data.fol4 != '') {
          $("#dc_conclude").append('<b>' + data.fol4 + "</b><br> <div class='row'><u class='col-lg-3 col-md-3'>แผนการช่วยเหลือ</u>  <span class='row col-lg-9 col-md-9' id='fol4'></span></div><HR style='width:100%; '>");
          if (data.act11 != '') { $("#fol4").append(' - ' + data.act11 + '<br>') }
          if (data.act12 != '') { $("#fol4").append(' - ' + data.act12 + '<br>') }
        }
        if (data.fol5 != '') {
          $("#dc_conclude").append('<b>' + data.fol5 + "</b><br> <div class='row'><u class='col-lg-3 col-md-3'>แผนการช่วยเหลือ</u>  <span class='row col-lg-9 col-md-9' id='fol5'></span></div><HR style='width:100%; '>");
          if (data.act13 != '') { $("#fol5").append(' - ' + data.act13 + '<br>') }
          if (data.act14 != '') { $("#fol5").append(' - ' + data.act14 + '<br>') }
        }
        if (data.fol6 != '') {
          $("#dc_conclude").append('<b>' + data.fol6 + "</b><br> <div class='row'><u class='col-lg-3 col-md-3'>แผนการช่วยเหลือ</u>  <span class='row col-lg-9 col-md-9' id='fol6'></span></div><HR style='width:100%; '>");
          if (data.act15 != '') { $("#fol6").append(' - ' + data.act15 + '<br>') }
          if (data.act16 != '') { $("#fol6").append(' - ' + data.act16 + '<br>') }
          if (data.act17 != '') { $("#fol6").append(' - ' + data.act17 + '<br>') }
          if (data.act18 != '') { $("#fol6").append(' - ' + data.act18 + '<br>') }
        }
        if (data.fol7 != '') {
          $("#dc_conclude").append('<b>' + data.fol7 + "</b><br> <div class='row'><u class='col-lg-3 col-md-3'>แผนการช่วยเหลือ</u>  <span class='row col-lg-9 col-md-9' id='fol7'></span></div><HR style='width:100%; '>");
          if (data.act19 != '') { $("#fol7").append(' - ' + data.act19 + '<br>') }
          if (data.act20 != '') { $("#fol7").append(' - ' + data.act20 + '<br>') }
        }
        if (data.fol8 != '') {
          $("#dc_conclude").append('<b>' + data.fol8 + "</b><br> <div class='row'><u class='col-lg-3 col-md-3'>แผนการช่วยเหลือ</u>  <span class='row col-lg-9 col-md-9' id='fol8'></span></div><HR style='width:100%; '>");
          if (data.act21 != '') { $("#fol8").append(' - ' + data.act21 + '<br>') }
          if (data.act22 != '') { $("#fol8").append(' - ' + data.act22 + '<br>') }
          if (data.act23 != '') { $("#fol8").append(' - ' + data.act23 + '<br>') }
        }
        if (data.fol9 != '') {
          $("#dc_conclude").append('<b>' + data.fol9 + "</b><br> <div class='row'><u class='col-lg-3 col-md-3'>แผนการช่วยเหลือ</u>  <span class='row col-lg-9 col-md-9' id='fol9'></span></div><HR style='width:100%; '>");
          if (data.act24 != '') { $("#fol9").append(' - ' + data.act24 + '<br>') }
          if (data.act25 != '') { $("#fol9").append(' - ' + data.act25 + '<br>') }
          if (data.act26 != '') { $("#fol9").append(' - ' + data.act26 + '<br>') }
        }
        if (data.fol10 != '') {
          $("#dc_conclude").append('<b>' + data.fol10 + "</b><br> <div class='row'><u class='col-lg-3 col-md-3'>แผนการช่วยเหลือ</u>  <span class='row col-lg-9 col-md-9' id='fol10'></span></div><HR style='width:100%; '>");
          if (data.act27 != '') { $("#fol10").append(' - ' + data.act27 + '<br>') }
          if (data.act28 != '') { $("#fol10").append(' - ' + data.act28 + '<br>') }
          if (data.act29 != '') { $("#fol10").append(' - ' + data.act29 + '<br>') }
        }
        $("#dc_con_detial").empty().append(data.dc_con_detial);
  
      });
    

}
