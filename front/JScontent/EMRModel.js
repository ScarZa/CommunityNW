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

          var Ar = new AssEMRNW("span#EMR_detail");
          Ar.GetEMRNWForm();

          var PL = new TabLayout('#Rx-body', 2, 'T');
          PL.GetTL();
          $("#Tl0").empty().append("IPD Home Med");
          $("#Tl1").empty().append("OPD Med");
          $("#Tc0").empty().append($("<div id='IPDMed'></div>"));
          $("#Tc1").empty().append($("<div id='OPDMed'></div>"));

      
          $("#vdate").append($("<div class='row list-group' id='vdate_list'></div>"))
          AddData("detail_EMRpatientAPI.php", '', recipient);
        });
      } else {
        alert("Token key ไม่ถูกต้องครับ!!!");
      }
    });  
    
  });
}
                                

function AddData(json, id1, id2 ) {
  $.getJSON('http://10.0.0.11/API-Hosxp/API/CommuNW/' + json, { data: id1, data2: id2 }, function (data) {

    $.getJSON('http://10.0.0.11/API-Hosxp/API/CommuNW/vsdate_Data.php', { data: data[0].hn }, function (data) {
      $("div#vdate_list").empty();
      $.each(data, function (i, item) {
        $("div#vdate_list").append($("<a href='#' id='li_vdate" + i + "' class='list-group-item list-group-item-action list-group-item-secondary'><b>" + data[i].vstdate + "</b> <b style='font-size:13px'>" + data[i].vsttime + " น.</b></a>")
        )
        if (item.an) { $("#li_vdate" + i).attr("style", "color: red"); }
        $("#li_vdate" + i).click(function () {
          AddData("detail_EMRpatientAPI.php", item.vn);
        })
      });
    });

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
        $("#vsttime").empty().append('เวลา : '+data[0].vsttime+' น.');
        $("#ovstistname").empty().append('ประเภท : '+data[0].ovstistname);
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
        $("#cc").empty().append("CC : "+data[0].cc);
        $("#hpi").empty().append("HPI : "+data[0].hpi);
        $("#pmh").empty().append("PMH : "+data[0].pmh);

        $.getJSON('http://10.0.0.11/API-Hosxp/API/CommuNW/allergy_Data.php', { data: data[0].hn }, function (data) {
          $("#allergic").empty();
          $.each( data, function( key, value ) {
              $("#allergic").append("<div class='col-lg-12' style='color :yellow'>"+value.drugallergy+"</div><br>");
            });
      });
      $("#OPDMed").empty();
      $("#IPDMed").empty();
      var column1 = ["รายการ", "วิธีใช้","จำนวน","ราคา"];
      var CTbOPD = new createTableAjax();
      CTbOPD.GetNewTableAjax('OPDMed', 'http://10.0.0.11/API-Hosxp/API/CommuNW/DT_DrugOPD.php?'+data[0].vn, 'http"//10.0.0.11/API-Hosxp/API/tempSendDataAPI.php', column1
          , null, null, null, null, false, false, null, false, null, false, null, null, null, null, null, null);
  
      var CTbIPD = new createTableAjax();
      CTbIPD.GetNewTableAjax('IPDMed', 'http://10.0.0.11/API-Hosxp/API/CommuNW/DT_DrugIPD.php?'+data[0].vn, 'http"//10.0.0.11/API-Hosxp/API/tempSendDataAPI.php', column1
          , null, null, null, null, false, false, null, false, null, false, null, null, null, null, null, null);
    });
    

}
