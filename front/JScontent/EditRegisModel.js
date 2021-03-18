function EditRegisModal() {
  $("#createModal").empty().append("<div class='modal' id='EditRegisModal' role='dialog' aria-labelledby='exampleModalLabel'>"
    + "<div class='modal-dialog modal-xl' role='document'><div class='modal-content'><div class='modal-header'>"
    + "<h4 class='modal-title' id='EditRegisModalLabel'></h4>"
    + "<button type='button' class='close' data-dismiss='modal' aria-label='Close'><span aria-hidden='true'>&times;</span></button>"
    + "</div><form action='' name='frmRegis' id='frmRegis' method='post' enctype='multipart/form-data'><div class='modal-body' id='modelregis'><span id='regis_detail'></span></div>"
    + "<div class='modal-footer'><input type='submit' class='btn btn-warning' value='แก้ไข'> <button type='button' class='btn btn-danger' data-dismiss='modal'>ปิด</button></div></form></div></div></div>");
  $('#EditRegisModal').on('show.bs.modal', function (event) {
    var button = $(event.relatedTarget)
    var recipient = button.data('whatever')
    var modal = $(this)
    modal.find('.modal-title').text()
    $("h4#EditRegisModalLabel").empty().append("แก้ไขข้อมูลผู้ใช้งาน")
    var Ar = new AssRegis("span#regis_detail");
    Ar.GetRegisForm();
    $("#titleUP").append("<i style='color:red'> *** หากไม่มีการเปลี่ยน Username หรือ Password ไม่ต้องใส่ ***</i>");
    $('#username').removeAttr("required");
    $('#password').removeAttr("required");
    $('#conpassword').removeAttr("required");

    $("#block3").append($("<div style='width:100%; '><HR></div>")
    ,$("<div class='row form-group '>"
            + "<label class='col-12 col-sm-3 col-md-4 col-lg-2'> เลือกสถานะ : </label><div class='col-12 col-sm-9 col-md-8 col-lg-3'><select name='mem_status' id='mem_status' class='form-control select2 form-control-sm' required></select></div>"
            +"<div style='width:100%; '><HR></div>"
        +"<div class='row col-lg-12'><div class='col-sm-3 col-lg-2'>  </div>   <input   ' type='radio' id='blankCheckbox' name='confirm' value='1' aria-label='...'>            <label class='col-12 col-sm-3 col-md-3 col-lg-2 justify-content-md-center' justify-content-md-center >      ใช้งาน</label>  "
        +"<input type='radio' id='blankCheckbox' name='confirm' value='0' aria-label='...' checked>     <label class='col-12 col-sm-3 col-md-3 col-lg-2' >  ยกเลิกการใช้งาน </label>"
        +"</div>"
        ));
    $.getJSON('../back/API/detail_registor2.php', { data1: recipient }, function (data) { 

      selectJSON("#pname", "pname.json", "provis_code", "name", " เลือกคำนำหน้า ",data.pname);
      selectJSON("#role", "role.json", "role_id", "role_name", " เลือกหน้าที่ ",data.role);
      selectJSON("#agency", "infirmary.json", "inf_id", "hos_name", " เลือกสถานพยาบาล ",data.inf_id);
      
      //$("#inf_id").val(data.inf_id);
      $("#agency_tel").val(data.agency_tell);
      //$("#role").empty().html(data[0].role_name); 
      // var pname = getJsonFile('JsonData/pname', data[0].pname, "provis_code", "name");
      // $.when(pname).done(function (dataPname) {
      //   return $("#fullname").empty().html(dataPname + data[0].fullname);
      // });
      $("#fname").val(data.fname);
      $("#lname").val(data.lname);
      $("#cid").val(data.cid);
      $("#tel").val(data.tell);
      $("#email").val(data.email);
      $("#line").val(data.line);
     
      $("#mem_status").append($("<option value='USER'> ผู้ใช้งาน</option><option value='ADMIN'> ผู้ดูแลระบบ</option>"));
      if (data.mem_status == 'ADMIN') { $("option[value='ADMIN']").attr("selected", "selected"); }else{$("option[value='USER']").attr("selected", "selected");}
      if (data.reg_status == 1) { $("input[type=radio][name=confirm][value='1']").attr("checked", "checked"); } else { $("input[type=radio][name=confirm][value='0']").attr("checked", "checked"); }
      var fullname = data.fname + ' ' + data.lname;
      var token_key = TokenEncode(data.cid,fullname,data[0]);

      $("span#regis_detail").append($("<input type='hidden' name='token_key' value='" + token_key + "'>")
        , $("<input type='hidden' name='reg_id' value='" + data.reg_id + "'>")
        , $("<input type='hidden' name='reformer' value='" + $.cookie('reg_id') + "'>"));
    })
    $("span#regis_detail").append($("<input type='hidden' name='method' value='edit_user'>"));
    $("#frmRegis").on('submit', (function (e) {
      e.preventDefault();
      if ($("#password").val() != $("#conpassword").val()) {
        alert("การยืนยัน password ไม่ตรงกันครับ")
        $("#password").val(""); $("#conpassword").val("");
        $("#password").focus();
      } else {
        var dataForm = new FormData(this);
        // console.log(dataForm)
        // for (var value of dataForm.values()) { /////// check data in form
        //     console.log(value);
        // }
        var settings = {
          type: "POST",
          url: "../back/process/prcregist.php",
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
          modal.modal('hide');
          TB_User('#index_content');
        })
      }
    }));
    
    
  });


}
