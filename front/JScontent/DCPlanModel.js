function DCPModal(content, id = null) {
  $("#createModal").empty().append("<div class='modal' id='DCPModal' role='dialog' aria-labelledby='exampleModalLabel'>"
    + "<div class='modal-dialog modal-xl' role='document'><div class='modal-content'><div class='modal-header'>"
    + "<h4 class='modal-title' id='DCPModalLabel'></h4>"
    + "<button type='button' class='close' data-dismiss='modal' aria-label='Close'><span aria-hidden='true'>&times;</span></button>"
    + "</div><form action='' name='frmEMR' id='frmEMR' method='post' enctype='multipart/form-data'><div class='modal-body' id='modelregis'><span id='DCP_detail'></span></div>"
    + "<div class='modal-footer'><input type='submit' class='btn btn-success' value='บันทึก'> <button type='button' class='btn btn-danger' data-dismiss='modal'>ปิด</button></div></form></div></div></div>");
  $('#DCPModal').on('show.bs.modal', function (event) {
    var button = $(event.relatedTarget)
    var recipient = button.data('whatever')
    var modal = $(this)
    modal.find('.modal-title').text()
    $("h4#DCPModalLabel").empty().append("Discharge plan");
    $("#frmEMR").append($("<input type='hidden' name='method' value='DCP'>")
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

          var Ar = new AssDCPNW("span#DCP_detail");
          Ar.GetDCPNWForm();

          // var PL = new TabLayout('#Rx-body', 2, 'T');
          // PL.GetTL();
          // $("#Tl0").empty().append("IPD Home Med");
          // $("#Tl1").empty().append("OPD Med");
          // $("#Tc0").empty().append($("<div id='IPDMed'></div>"));
          // $("#Tc1").empty().append($("<div id='OPDMed'></div>"));

      
          //$("#vdate").append($("<div class='row list-group' id='vdate_list'></div>"))
          AddData("detail_DCplanAPI.php", '', recipient);

          $("#frmEMR").on('submit', (function (e) {
          e.preventDefault();
          var dataForm = new FormData(this);
          // console.log(dataForm)
          // for (var value of dataForm.values()) {
          //     console.log(value);
          // }
          var settings = {
              type: "POST",
              url: "../back/process/prcdcplan.php",
              async: true,
              crossDomain: true,
              data: dataForm,
              contentType: false,
              cache: false,
              processData: false
          }
          
            $.ajax(settings).done(function (result) {
              console.log(result);
            var settings2 = {
              type: "POST",
              url: "http://10.0.0.11/API-Hosxp/API/CommuNW/prcdcplan.php",
              async: true,
              crossDomain: true,
              data: { "dcp_id" : result.dcp_id, "hn" : result.hn, "an" : result.an, "vn": result.vn, "assent_tel" : result.assent_tel, "assent_jvl" : result.assent_jvl, "assent_cn" : result.assent_cn, "assent_drug" : result.assent_drug,"recorder": result.recorder},
              contentType: false,
              cache: false,
              processData: false
          }
            console.log(settings2);
          $.ajax(settings2).done(function (result2) {
            alert(result2.messege);
            modal.modal('hide');
            TB_DCPlan('#index_content');
          })
          })
      }));
        });

        
        
      } else {
        alert("เลขบัตรประชาชนไม่ถูกต้องครับ!!!");
      }
    });  
    
  });
}
                                

function AddData(json, id1, id2 ) {
  $.getJSON('http://10.0.0.11/API-Hosxp/API/CommuNW/' + json, { data: id1, data2: id2 }, function (data) { 
    $("#frmEMR").append($("<input type='hidden' name='hn' value='"+data[0].hn+"'>")
                      , $("<input type='hidden' name='vn' value='" + data[0].vn + "'>"));
        $.getJSON('http://10.0.0.11/API-Hosxp/API/CommuNW/check_image.php', { data1: data[0].hn }, function (datai) {
            if (datai.cc == '') { var img = 'images/person.png' } else { var img = 'http://10.0.0.11/API-Hosxp/API/CommuNW/show_image.php?hn=' + data[0].hn }
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
        $("#cc").val(data[0].cc);
        $("#hpi").val(data[0].hpi);
        $("#pmh").empty().append("PMH : " + data[0].pmh);
        $("#biographer").val(data[0].biographer);
        $("#relative").val(data[0].relative);
        $("#patient_add").val(data[0].informaddr);
        $("#tel0").val(data[0].hometel);
        //$("#relative0").val(data[0].relative0);
        $("#tel1").val(data[0].informtel);
        $("#relative1").val(data[0].relative1);
        $("#tel2").val(data[0].tel2);
        $("#relative2").val(data[0].relative2);

        $.getJSON('http://10.0.0.11/API-Hosxp/API/CommuNW/allergy_Data.php', { data: data[0].hn }, function (data) {
          $("#allergic").empty();
          $.each( data, function( key, value ) {
              $("#allergic").append("<div class='col-lg-12' style='color :yellow'>"+value.drugallergy+"</div><br>");
            });
      });
     
    selectJSON("#dc_type", "DC_type.json", "dct_id", "dct_name", " เลือกจำหน่ายผู้ป่วย ");
    selectJSON("#hos_nearby", "infirmary.json", "inf_id", "hos_name", " เลือกสถานพยาบาลที่ใกล้บ้าน ");
    selectJSON("#hos_forward", "infirmary.json", "inf_id", "hos_name", " เลือกสถานพยาบาลที่ส่งต่อ ");

    $.getJSON('../back/API/patient_type_Data.php', function (datapt) {
      $("#patient_type").empty();
      $.each(datapt, function (key, value) {
        $("#patient_type").append($("<div class='col-lg-11'><input  class='custom-control-input' type='checkbox' id='pt"+value.dcs_id+"' name='patient_type" + value.dcs_id + "' value='" + value.dcs_id + "' >"
          +" <label class='custom-control-label' for='pt"+value.dcs_id+"'>  " + value.dcs_name + "</label></div>"))
      });
      
      if (data[0].mpdx == 'F20' && data[0].typep_1 == '1') { $("input[type=checkbox][name=patient_type1]").attr("checked", "checked");}
      if (data[0].mpdx == 'F32') { $("input[type=checkbox][name=patient_type2]").attr("checked", "checked"); }
      if (data[0].mpdx == 'F10' && data[0].typep_1 == '1') { $("input[type=checkbox][name=patient_type3]").attr("checked", "checked"); }
      if ((data[0].mpdx + data[0].spdx) == 'F155' && data[0].typep_1 == '1') { $("input[type=checkbox][name=patient_type4]").attr("checked", "checked"); }
      if (data[0].typep_3 == '3') { $("input[type=checkbox][name=patient_type5]").attr("checked", "checked"); }
      if (data[0].typep == '2') { $("input[type=checkbox][name=patient_type6]").attr("checked", "checked"); }
      if (data[0].smiv != '0') { $("input[type=checkbox][name=patient_type7]").attr("checked", "checked"); }
      if (data[0].lawpsych_chk == 'Y') { $("input[type=checkbox][name=patient_type8]").attr("checked", "checked"); }

    });
    
    $.getJSON('../back/API/problem_prof_Data.php', function (data) {
      $("#problem_prof").empty();
      $.each(data, function (key, value) {
        $("#problem_prof").append($("<div class='col-lg-11'><input class='custom-control-input' type='checkbox' id='ap"+value.ap_id+"' name='problem_prof" + value.ap_id + "' value='" + value.ap_id + "' >"
          +" <label class='custom-control-label' for='ap"+value.ap_id+"'>  " + value.ap_name + "</label></div>"))
      });
    });

    $.getJSON('../back/API/follow10_Data.php', function (data) {
      $("#dc_conclude").empty();
      $.each(data, function (key, value) {
        $("#dc_conclude").append($("<div class='col-lg-11'><input class='custom-control-input' type='checkbox' id='f10"+value.f10_id+"' name='dc_conclude" + value.f10_id + "' value='" + value.f10_id + "' >"
          +" <label class='custom-control-label' for='f10"+value.f10_id+"'>  " + value.f10_name + "</label></div>"))
      });
    });

    });
    

}
