function RegisModal() {
  $("#createModal").empty().append("<div class='modal' id='RegisModal' role='dialog' aria-labelledby='exampleModalLabel'>"
    + "<div class='modal-dialog modal-xl' role='document'><div class='modal-content'><div class='modal-header'>"
    + "<h4 class='modal-title' id='RegisModalLabel'></h4>"
    + "<button type='button' class='close' data-dismiss='modal' aria-label='Close'><span aria-hidden='true'>&times;</span></button>"
    + "</div><form action='' name='frmRegis' id='frmRegis' method='post' enctype='multipart/form-data'><div class='modal-body' id='modelregis'><span id='regis_detail'></span></div>"
    + "<div class='modal-footer'><input type='submit' class='btn btn-success' value='ลงทะเบียน'> <button type='button' class='btn btn-danger' data-dismiss='modal'>ปิด</button></div></form></div></div></div>");
  $('#RegisModal').on('show.bs.modal', function (event) {
    var button = $(event.relatedTarget)
    var recipient = button.data('whatever')
    var modal = $(this)
    modal.find('.modal-title').text()
    $("h4#RegisModalLabel").empty().append("ลงทะเบียนใช้งาน")
    var Ar = new AssRegis("span#regis_detail");
    Ar.GetRegisForm();

    selectJSON("#pname", "pname.json", "provis_code", "name", " เลือกคำนำหน้า ");
    selectJSON("#role", "role.json", "role_id", "role_name", " เลือกหน้าที่ ");
    selectJSON("#agency", "infirmary.json", "inf_id", "hos_name", " เลือกสถานพยาบาล ");
    // selectJSON("#chwpart", "province.json", "PROVINCE_ID", "PROVINCE_NAME", " เลือกจังหวัด ");
    // $("#chwpart").change(function () {
    //   selectJSONwVal("#amppart", "amphur.json", "AMPHUR_ID", "AMPHUR_NAME", " เลือกอำเภอ ","PROVINCE_ID", $("#chwpart").val());
    // });
    // $("#amppart").change(function () {
    //   selectJSONwVal("#tmbpart", "district.json", "DISTRICT_ID", "DISTRICT_NAME", " เลือกตำบล ","AMPHUR_ID", $("#amppart").val());
    // });        
    $("span#regis_detail").append($("<input type='hidden' name='method' value='add_regist'>"));
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
        console.log(settings)
        $.ajax(settings).done(function (result) {
          alert(result.messege);
          modal.modal('hide');
        })
      }
    }));
  });


}
