function DCPEModal(content, id = null) {
  $("#createModal").empty().append("<div class='modal' id='DCPEModal' role='dialog' aria-labelledby='exampleModalLabel'>"
    + "<div class='modal-dialog modal-xl' role='document'><div class='modal-content'><div class='modal-header'>"
    + "<h4 class='modal-title' id='DCPEModalLabel'></h4>"
    + "<button type='button' class='close' data-dismiss='modal' aria-label='Close'><span aria-hidden='true'>&times;</span></button>"
    + "</div><form action='' name='frmDCPE' id='frmDCPE' method='post' enctype='multipart/form-data'><div class='modal-body' id='modelregis'><span id='DCP_detail'></span></div>"
    + "<div class='modal-footer'><input type='submit' class='btn btn-warning' value='แก้ไข'> <button type='button' class='btn btn-danger' data-dismiss='modal'>ปิด</button></div></form></div></div></div>");
  $('#DCPEModal').on('show.bs.modal', function (event) {
    var button = $(event.relatedTarget)
    var recipient = button.data('whatever')
    var modal = $(this)
    modal.find('.modal-title').text()
    $("h4#DCPEModalLabel").empty().append("Edit Discharge plan");
    $("#frmDCPE").append($("<input type='hidden' name='method' value='DCPE'>")
                      , $("<input type='hidden' name='an' value='" + recipient + "'>")
      , $("<input type='hidden' name='mem_id' value='" + $.cookie('reg_id') + "'>"));
    ////// ในอนาคตต้องให้ยืนยัน cid
    
    $.getJSON('../back/API/detail_registor.php', { data1: $.cookie('reg_id') }, function (data) { 
      // var cid = prompt("กรุณายืนยันเลขบัตรประชาชนด้วยครับ");
      // var token_keyConf = TokenEncode($.cookie('cid'),data[0].fullname,data[0].timestamp);
      var token_key = TokenEncode(data[0].cid,data[0].fullname,data[0].timestamp);
      
      if (token_key == $.cookie('token_key')) {
        let myForm = document.getElementById('frmDCPE');
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
          AddDataDCPE("detail_EMRpatientAPI.php", '', recipient);

          $("#frmDCPE").on('submit', (function (e) {
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
              
          //     var form = new FormData();
          //     form.append("dcp_id", result.dcp_id);
          //     form.append("hn", result.hn);
          //     form.append("vn", result.vn);
          //     form.append("an", result.an);
          //     form.append("assent_tel", result.assent_tel);
          //     form.append("assent_jvl", result.assent_jvl);
          //     form.append("assent_cn", result.assent_cn);
          //     form.append("assent_drug", result.assent_drug);
          //     form.append("recorder", result.recorder);
              
          //   var settings2 = {
          //     url: "http://1.179.191.130/API-Hosxp/API/CommuNW/prcdcplan.php",
          //     method: "POST",
          //     timeout: 0,
          //     processData: false,
          //     mimeType: "multipart/form-data",
          //     contentType: false,
          //     data: form
          // }
            
          //     $.ajax(settings2).done(function (result2) {
                alert(result.messege);
                  modal.modal('hide');
                  TB_DCR('#index_content');
                 
          // })
          })
      }));
        });

        
        
      } else {
        alert("เลขบัตรประชาชนไม่ถูกต้องครับ!!!");
      }
    });  
    
  });
}
                                

function AddDataDCPE(json, id1, id2 ) {
  $.getJSON('../back/API/' + json, { data: id1, data2: id2 }, function (data) { 
    $("#frmDCPE").append($("<input type='hidden' name='hn' value='"+data[0].hn+"'>")
                      , $("<input type='hidden' name='vn' value='" + data[0].vn + "'>"));
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
    $.getJSON('../back/API/DT_DrugIPD.php', { data1: data[0].fw_id }, function (dataD) { 
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
      
  });
  
  $.getJSON('../back/API/detail_dcplanAPI.php', { data2: id2 }, function (datadcp) { 
      selectJSON("#dc_type", "DC_type.json", "dct_id", "dct_name", " เลือกจำหน่ายผู้ป่วย ",datadcp.dc_type);
      selectJSON("#hos_nearby", "infirmary.json", "inf_id", "hos_name", " เลือกสถานพยาบาลที่ใกล้บ้าน ",datadcp.hos_nearby);
      selectJSON("#hos_forward", "infirmary.json", "inf_id", "hos_name", " เลือกสถานพยาบาลที่ส่งต่อ ",datadcp.hos_forward);

    $("#inject").append($("<HR style='width:100%;'>")
      , $("<div class='col-lg-12 col-md-12 col-sm-12 row'><div class='col-lg-4 col-md-6 col-sm-6' style='text-align:right;'><u><b>ยาฉีด</b></u></div></div>")
      , $("<div class='row col-lg-12 col-md-12 col-sm-12 ' id='inject_item'></div>"));
    if (datadcp.iname0 != '' && datadcp.iname0 != null) { $("#inject_item").append("<div class='col-lg-4 col-md-6 col-sm-6' style='text-align:right;'><b>" + datadcp.iname0 + " : </b></div><div class='col-lg-8 col-md-6 col-sm-6'><input type='text' class='form-control' id='inject0' name='inject0' value='" + datadcp.inject0 + "'></div></div><br>") }
    if (datadcp.iname1 != '' && datadcp.iname1 != null) { $("#inject_item").append("<div class='col-lg-4 col-md-6 col-sm-6' style='text-align:right;'><b>" + datadcp.iname1 + " : </b></div><div class='col-lg-8 col-md-6 col-sm-6'><input type='text' class='form-control' id='inject1' name='inject1' value='"+datadcp.inject1+"'></div></div>")}
    $("#cc").val(datadcp.cc);
    $("#hpi").val(datadcp.hpi);
    $("#biographer").val(datadcp.biographer);
    $("#relative").val(datadcp.relative);
    $("#patient_add").val(datadcp.patient_add);
    $("#tel0").val(datadcp.tel0);
    $("#relative0").val(datadcp.relative0);
    $("#tel1").val(datadcp.tel1);
    $("#relative1").val(datadcp.relative1);
    $("#tel2").val(datadcp.tel2);
    $("#relative2").val(datadcp.relative2);
    
    $.getJSON('../back/API/patient_type_Data.php', function (datapt) {
      $("#patient_type").empty();
      $.each(datapt, function (key, value) {
        $("#patient_type").append($("<div class='col-lg-11'><input  class='custom-control-input' type='checkbox' id='pt"+value.dcs_id+"' name='patient_type" + value.dcs_id + "' value='" + value.dcs_id + "' >"
          +" <label class='custom-control-label' for='pt"+value.dcs_id+"'>  " + value.dcs_name + "</label></div>"))
      });
      
      if (datadcp.patient_type01 == '1') { $("input[type=checkbox][name=patient_type1]").prop('checked', true);}
      if (datadcp.patient_type02 == '2') { $("input[type=checkbox][name=patient_type2]").prop('checked', true); }
      if (datadcp.patient_type03 == '3') { $("input[type=checkbox][name=patient_type3]").prop('checked', true); }
      if (datadcp.patient_type04 == '4') { $("input[type=checkbox][name=patient_type4]").prop('checked', true); }
      if (datadcp.patient_type05 == '5') { $("input[type=checkbox][name=patient_type5]").prop('checked', true); }
      if (datadcp.patient_type06 == '6') { $("input[type=checkbox][name=patient_type6]").prop('checked', true); }
      if (datadcp.patient_type07 == '7') { $("input[type=checkbox][name=patient_type7]").prop('checked', true); }
      if (datadcp.patient_type08 == '8') { $("input[type=checkbox][name=patient_type8]").prop('checked', true); }
      if (datadcp.patient_type09 == '9') { $("input[type=checkbox][name=patient_type9]").prop('checked', true); }
      if (datadcp.patient_type10 == '10') { $("input[type=checkbox][name=patient_type10]").prop('checked', true);}

    });
    
    if (datadcp.assent_cn == '1') { $("input[type=radio][name=assent_cn][value='1']").attr("checked", "checked"); } else { $("input[type=radio][name=assent_cn][value='0']").attr("checked", "checked"); }
    if (datadcp.assent_drug == '1') { $("input[type=radio][name=assent_drug][value='1']").attr("checked", "checked"); } else { $("input[type=radio][name=assent_drug][value='0']").attr("checked", "checked"); }
    if (datadcp.assent_jvl == '1') { $("input[type=radio][name=assent_jvl][value='1']").attr("checked", "checked"); } else { $("input[type=radio][name=assent_jvl][value='0']").attr("checked", "checked"); }
    if (datadcp.assent_tel == '1') { $("input[type=radio][name=assent_tel][value='1']").attr("checked", "checked");}else{ $("input[type=radio][name=assent_tel][value='0']").attr("checked", "checked");}

    $.getJSON('../back/API/problem_prof_Data.php', function (data) {
      $("#problem_prof").empty();
      $.each(data, function (key, value) {
        $("#problem_prof").append($("<div class='col-lg-11'><input class='custom-control-input' type='checkbox' id='ap" + value.ap_id + "' name='problem_prof" + value.ap_id + "' value='" + value.ap_id + "' >"
          + " <label class='custom-control-label' for='ap" + value.ap_id + "'>  " + value.ap_name + "</label></div>"));
      });
      if (datadcp.problem_prof01 != '0') { $("input[type=checkbox][name=problem_prof1]").prop('checked', true); }
      if (datadcp.problem_prof02 != '0') { $("input[type=checkbox][name=problem_prof2]").prop('checked', true); }
      if (datadcp.problem_prof03 != '0') { $("input[type=checkbox][name=problem_prof3]").prop('checked', true); }
      if (datadcp.problem_prof04 != '0') { $("input[type=checkbox][name=problem_prof4]").prop('checked', true); }
      if (datadcp.problem_prof05 != '0') { $("input[type=checkbox][name=problem_prof5]").prop('checked', true); }
      if (datadcp.problem_prof06 != '0') { $("input[type=checkbox][name=problem_prof6]").prop('checked', true); }
      if (datadcp.problem_prof07 != '0') { $("input[type=checkbox][name=problem_prof7]").prop('checked', true); }
      if (datadcp.problem_prof08 != '0') { $("input[type=checkbox][name=problem_prof8]").prop('checked', true); }
      if (datadcp.problem_prof09 != '0') { $("input[type=checkbox][name=problem_prof9]").prop('checked', true); }
      if (datadcp.problem_prof10 != '0') { $("input[type=checkbox][name=problem_prof10]").prop('checked', true); }
    
    });
    
    $.getJSON('../back/API/follow10_Data.php', function (data) {
      $("#dc_conclude").empty();
      $.each(data, function (key, value) {
        $("#dc_conclude").append($("<div class='col-lg-11'><input class='custom-control-input' type='checkbox' id='f10" + value.f10_id + "' name='dc_conclude" + value.f10_id + "' value='" + value.f10_id + "' >"
          + " <label class='custom-control-label' for='f10" + value.f10_id + "'>  " + value.f10_name + "</label></div><div class='col-lg-12 offset-lg-1' id='activity" + value.f10_id + "'></div>"));
          $("#activity" + value.f10_id).empty();  
        Addfoll_item(value.f10_id);
        
        $("#activity" + value.f10_id).hide();
        $.getJSON('../back/API/follow10act_Data.php', { data: id2 }, function (dataact) {
          var i = 1;
          $.each(dataact[0], function (key, value) {
            if (value == i) { $("input[type=checkbox][name=act"+i+"]").prop('checked', true);}
            i++;
          });
        });
        $("input[type=checkbox][name=dc_conclude" + value.f10_id+"]").click(function () {
          if ($("input[type=checkbox][name=dc_conclude" + value.f10_id+"]:checked").prop("checked") == true) { $("div#activity" + value.f10_id).show(); } else { $("div#activity" + value.f10_id).hide(); }
      });
      });
        if (datadcp.dc_conclude01 == '1') { $("input[type=checkbox][name=dc_conclude1]").prop('checked', true); $("#activity1").show();}
        if (datadcp.dc_conclude02 == '2') { $("input[type=checkbox][name=dc_conclude2]").prop('checked', true); $("#activity2").show();}
        if (datadcp.dc_conclude03 == '3') { $("input[type=checkbox][name=dc_conclude3]").prop('checked', true); $("#activity3").show();}
        if (datadcp.dc_conclude04 == '4') { $("input[type=checkbox][name=dc_conclude4]").prop('checked', true); $("#activity4").show();}
        if (datadcp.dc_conclude05 == '5') { $("input[type=checkbox][name=dc_conclude5]").prop('checked', true); $("#activity5").show();}
        if (datadcp.dc_conclude06 == '6') { $("input[type=checkbox][name=dc_conclude6]").prop('checked', true); $("#activity6").show();}
        if (datadcp.dc_conclude07 == '7') { $("input[type=checkbox][name=dc_conclude7]").prop('checked', true); $("#activity7").show();}
        if (datadcp.dc_conclude08 == '8') { $("input[type=checkbox][name=dc_conclude8]").prop('checked', true); $("#activity8").show();}
        if (datadcp.dc_conclude09 == '9') { $("input[type=checkbox][name=dc_conclude9]").prop('checked', true); $("#activity9").show();}
        if (datadcp.dc_conclude10 == '10') { $("input[type=checkbox][name=dc_conclude10]").prop('checked', true); $("#activity10").show(); }
        
      
    });
    $("#dc_con_detial").val(datadcp.dc_con_detial);
    });
    

}

function Addfoll_item( id) {
  $.getJSON('../back/API/followActivity_Data.php', { data: id }, function (dataaf) {
    $.each(dataaf, function (key, valueaf) {
      $("#activity" + id).append($("<input class='' type='checkbox' id='act" + valueaf.af_id + "' name='act" + valueaf.af_id + "' value='" + valueaf.af_id + "' > "
        + "  <label class='' for='act" + valueaf.af_id + "'>  " + valueaf.activity + "</label><br>"))
    });
    $("#activity" + id).append("<HR style='width:100%;'></HR>");
  });
}
