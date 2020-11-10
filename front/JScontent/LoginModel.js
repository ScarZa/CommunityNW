function LoginModel() {
  $("#createModal").empty().append("<div class='modal' id='LoginModel' role='dialog' aria-labelledby='exampleModalLabel'>"
    + "<div class='modal-dialog modal-xs' role='document'><div class='modal-content'><div class='modal-header'>"
    + "<h4 class='modal-title' id='LoginModelLabel'></h4>"
    + "<button type='button' class='close' data-dismiss='modal' aria-label='Close'><span aria-hidden='true'>&times;</span></button>"
    + "</div><form action='' name='frmLogin' id='frmLogin' method='post' enctype='multipart/form-data'><div class='modal-body' id='modelLogin'><span id='regis_detail'></span></div>"
    + "<div class='modal-footer'><input type='submit' class='btn btn-success' value='เข้าสู่ระบบ'> <button type='button' class='btn btn-danger' data-dismiss='modal'>ปิด</button></div></form></div></div></div>");
  $('#LoginModel').on('show.bs.modal', function (event) {
    var button = $(event.relatedTarget)
    var recipient = button.data('whatever')
    var modal = $(this)
    modal.find('.modal-title').text()
    $("h4#LoginModelLabel").empty().append("Login")
    var Ar = new AssLogin("span#regis_detail");
    Ar.GetLoginForm();

    $("span#regis_detail").append($("<input type='hidden' name='method' value='login'>"));
    $("#frmLogin").on('submit', (function (e) {
      e.preventDefault();

        var dataForm = new FormData(this);
        // console.log(dataForm)
        // for (var value of dataForm.values()) { /////// check data in form
        //     console.log(value);
        // }
        var settings = {
          type: "POST",
          url: "../back/process/check_login.php",
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
          $.cookie('reg_id', result.reg_id);
          $.cookie('token_key', result.token_key);
          $.cookie('role', result.role);
          $.cookie('inf_id', result.inf_id);
          modal.modal('hide');
          location.reload();
          //TB_ConfirmUser('#index_content');
        })
    }));
  });


}
