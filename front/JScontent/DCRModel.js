function DCRModal(content, id = null) {
  $("#createModal").empty().append("<div class='modal' id='DCRModal' role='dialog' aria-labelledby='exampleModalLabel'>"
    + "<div class='modal-dialog modal-xl' role='document'><div class='modal-content'><div class='modal-header'>"
    + "<h4 class='modal-title' id='DCRModalLabel'></h4>"
    + "<button type='button' class='close' data-dismiss='modal' aria-label='Close'><span aria-hidden='true'>&times;</span></button>"
    + "</div><form action='' name='frmEMR' id='frmEMR' method='post' enctype='multipart/form-data'><div class='modal-body' id='modelregis'><span id='DCR_detail'></span></div>"
    + "<div class='modal-footer'><button type='button' class='btn btn-danger' data-dismiss='modal'>ปิด</button></div></form></div></div></div>");
  $('#DCRModal').on('show.bs.modal', function (event) {
    var button = $(event.relatedTarget)
    var recipient = button.data('whatever')
    var modal = $(this)
    modal.find('.modal-title').text()
    $("h4#DCRModalLabel").empty().append("บันทึก Discharge plan");
    $("#frmEMR").append($("<input type='hidden' name='method' value='DCR'>")
                      , $("<input type='hidden' name='an' value='" + recipient + "'>")
      , $("<input type='hidden' name='mem_id' value='" + $.cookie('reg_id') + "'>"));
    ////// ในอนาคตต้องให้ยืนยัน cid
    
    $.getJSON('../back/API/detail_registor.php', { data1: $.cookie('reg_id') }, function (data) { 
      // var cid = prompt("กรุณายืนยันเลขบัตรประชาชนด้วยครับ");
      // var token_keyConf = TokenEncode($.cookie('cid'),data[0].fullname,data[0].timestamp);
      var token_key = TokenEncode(data[0].cid,data[0].fullname,data[0].timestamp);
      
      if (token_key == $.cookie('token_key')) {
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

          var Ar = new AssDCRNW("span#DCR_detail");
          Ar.GetDCRNWForm();

          // var PL = new TabLayout('#Rx-body', 2, 'T');
          // PL.GetTL();
          // $("#Tl0").empty().append("IPD Home Med");
          // $("#Tl1").empty().append("OPD Med");
          // $("#Tc0").empty().append($("<div id='IPDMed'></div>"));
          // $("#Tc1").empty().append($("<div id='OPDMed'></div>"));

      
          //$("#vdate").append($("<div class='row list-group' id='vdate_list'></div>"))
          AddDataDCR("detail_DCplanAPI.php", '', recipient);

          
        });

        
        
      } else {
        alert("เลขบัตรประชาชนไม่ถูกต้องครับ!!!");
      }
    });  
    
  });
}
                                

function AddDataDCR(json, id1, id2 ) {
  $.getJSON('http://1.179.191.130/API-Hosxp/API/CommuNW/' + json, { data: id1, data2: id2 }, function (data) { 
    $("#frmEMR").append($("<input type='hidden' name='hn' value='"+data[0].hn+"'>")
                      , $("<input type='hidden' name='vn' value='" + data[0].vn + "'>"));
        $.getJSON('http://1.179.191.130/API-Hosxp/API/CommuNW/check_image.php', { data1: data[0].hn }, function (datai) {
            if (datai.cc == '') { var img = 'images/person.png' } else { var img = 'http://1.179.191.130/API-Hosxp/API/CommuNW/show_image.php?hn=' + data[0].hn }
            $("#pics-panel").attr("src", img)
        });
        $("#fullname").empty().append(data[0].fullname);
        $("#hn").empty().append(data[0].hn);
        $("#vn").empty().append(data[0].vn);
        $("#cid").empty().append(data[0].cid);
        $("#birthday").empty().append(data[0].birthday);
        $("#age").empty().append(data[0].age);
        $("#mrname").empty().append(data[0].mrname);
        $("#ptname1").empty().append(data[0].ptname1+' ('+data[0].Dhospital+')');
        $("#address").empty().append(data[0].address);
        $("#informaddr").empty().append(data[0].informaddr);
        $("#hometel").empty().append("&nbsp; <i class='fa fa-phone-square'></i> เบอร์โทร : "+data[0].hometel);
        $("#informtel").empty().append("&nbsp;&nbsp; <i class='fa fa-phone-square'></i> เบอร์โทร : "+data[0].informtel);
        $("#nationality").empty().append(data[0].nation_name);
        $("#religion").empty().append(data[0].religion_name);
        $("#blood").empty().append(data[0].bloodgrp);
        $("#disease").empty().append(data[0].disease);
        //$("#allergic").empty().append(data[0].drugallergy);
        $("#vstdate").empty().append('วันที่รับบริการ : '+data[0].vstdate);
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
        if(data[0].Clozapine100 != null){
            $("#Alert_Drug").append("<div class='col-lg-12'><b style='color: yellow'>"+data[0].Clozapine100+" ( สั่งล่าสุด "+data[0].Clozapine100Date+")</b></div><br>");
        }
        if(data[0].Clozapine25 != null){
            $("#Alert_Drug").append("<div class='col-lg-12'><b style='color: yellow'>"+data[0].Clozapine25+" ( สั่งล่าสุด "+data[0].Clozapine25Date+")</b></div><br>");
        }
        if(data[0].Carbamazepine200 != null){
            $("#Alert_Drug").append("<div class='col-lg-12'><b style='color: yellow'>"+data[0].Carbamazepine200+" ( สั่งล่าสุด "+data[0].Carbamazepine200Date+")</b></div><br>");
        }
        if(data[0].LithiumCarbonate300 != null){
            $("#Alert_Drug").append("<div class='col-lg-12'><b style='color: yellow'>"+data[0].LithiumCarbonate300+" ( สั่งล่าสุด "+data[0].LithiumCarbonate300Date+")</b></div><br>");
        }
        if(data[0].SodiumValproate200 != null){
            $("#Alert_Drug").append("<div class='col-lg-12'><b style='color: yellow'>"+data[0].SodiumValproate200+" ( สั่งล่าสุด "+data[0].SodiumValproate200Date+")</b></div><br>");
        }
        if(data[0].SodiumValproate200CHRONO != null){
            $("#Alert_Drug").append("<div class='col-lg-12'><b style='color: yellow'>"+data[0].SodiumValproate200CHRONO+" ( สั่งล่าสุด "+data[0].SodiumValproate200CHRONODate+")</b></div><br>");
        }
        if(data[0].SodiumValproate500 != null){
            $("#Alert_Drug").append("<div class='col-lg-12'><b style='color: yellow'>"+data[0].SodiumValproate500+" ( สั่งล่าสุด "+data[0].SodiumValproate500Date+")</b></div>");
        }
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
    
        $.getJSON('http://1.179.191.130/API-Hosxp/API/CommuNW/allergy_Data.php', { data: data[0].hn }, function (data) {
          $("#allergic").empty();
          $.each( data, function( key, value ) {
              $("#allergic").append("<div class='col-lg-12' style='color :yellow'>"+value.drugallergy+"</div><br>");
            });
        });


    });
    
    $.getJSON('../back/API/detail_DCR.php', { data2: id2 }, function (data) {
      $("#cc").empty().append(data.cc+'<br>');
      $("#hpi").empty().append(data.hpi);
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
      
      $("#assent_drug").empty().append(data.assent_drug);
      $("#assent_tel").empty().append(data.assent_tel);
      $("#assent_jvl").empty().append(data.assent_jvl);
      $("#assent_cn").empty().append(data.assent_cn);
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
      if (data.fol1 != '') { $("#dc_conclude").append(data.fol1 + '<br>'); }
      if (data.fol2 != '') { $("#dc_conclude").append(data.fol2 + '<br>'); }
      if (data.fol3 != '') { $("#dc_conclude").append(data.fol3 + '<br>'); }
      if (data.fol4 != '') { $("#dc_conclude").append(data.fol4 + '<br>'); }
      if (data.fol5 != '') { $("#dc_conclude").append(data.fol5 + '<br>'); }
      if (data.fol6 != '') { $("#dc_conclude").append(data.fol6 + '<br>'); }
      if (data.fol7 != '') { $("#dc_conclude").append(data.fol7 + '<br>'); }
      if (data.fol8 != '') { $("#dc_conclude").append(data.fol8 + '<br>'); }
      if (data.fol9 != '') { $("#dc_conclude").append(data.fol9 + '<br>'); }
      if (data.fol10 != '') { $("#dc_conclude").append(data.fol10 + '<br>'); }
      $("#dc_con_detial").empty().append(data.dc_con_detial);

    });

}
