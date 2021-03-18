function ConfirmDeModel() {
  $("#createModal").empty().append("<div class='modal' id='ConfirmDeModel' role='dialog' aria-labelledby='exampleModalLabel'>"
    + "<div class='modal-dialog modal-xl' role='document'><div class='modal-content'><div class='modal-header'>"
    + "<h4 class='modal-title' id='ConfirmDeModelLabel'></h4>"
    + "<button type='button' class='close' data-dismiss='modal' aria-label='Close'><span aria-hidden='true'>&times;</span></button>"
    + "</div><form action='' name='frmConfirm' id='frmConfirm' method='post' enctype='multipart/form-data'><div class='modal-body' id='modelConfirm'><span id='regis_detail'></span></div>"
    + "<div class='modal-footer'><button type='button' class='btn btn-danger' data-dismiss='modal'>ปิด</button></div></form></div></div></div>");
  $('#ConfirmDeModel').on('show.bs.modal', function (event) {
    var button = $(event.relatedTarget)
    var recipient = button.data('whatever')
    var modal = $(this)
    modal.find('.modal-title').text()
    $("h4#ConfirmDeModelLabel").empty().append("รายละเอียดผู้ใช้งาน")
    var Ar = new AssConfirm("span#regis_detail");
    Ar.GetConfForm();

    $.getJSON('../back/API/detail_registor.php', { data1: recipient }, function (data) {
      $("#inf_id").empty().html(data[0].hos_name);
      $("#agency_tell").empty().html(data[0].agency_tell);
      $("#role").empty().html(data[0].role_name); 
      var pname = getJsonFile('JsonData/pname', data[0].pname, "provis_code", "name");
      $.when(pname).done(function (dataPname) {
        return $("#fullname").empty().html(dataPname + data[0].fullname);
      });
      $("#cid").empty().html(data[0].cid);
      $("#tell").empty().html(data[0].tell);
      $("#email").empty().html(data[0].email);
      $("#line").empty().html(data[0].line);
      $("#regdate").empty().html(data[0].regdate);

      $("#block3").remove();
    })
    
  });


}
