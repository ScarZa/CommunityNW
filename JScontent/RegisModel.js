function RegisModal () {
$("#createModal").empty().append("<div class='modal' id='RegisModal' role='dialog' aria-labelledby='exampleModalLabel'>"
                                    + "<div class='modal-dialog modal-lg' role='document'><div class='modal-content'><div class='modal-header'>"
                                    +"<h4 class='modal-title' id='RegisModalLabel'></h4>"
                                    +"<button type='button' class='close' data-dismiss='modal' aria-label='Close'><span aria-hidden='true'>&times;</span></button>"
                                    +"</div><div class='modal-body' id='modelregis'><span id='regis_detail'></span></div>"
                                    +"<div class='modal-footer'><button type='button' class='btn btn-danger' data-dismiss='modal'>ปิด</button></div></div></div></div>");
    $('#RegisModal').on('show.bs.modal', function (event) {
  var button = $(event.relatedTarget)
  var recipient = button.data('whatever')
  var modal = $(this)
      modal.find('.modal-title').text()
      $("h4#RegisModalLabel").empty().append("ลงทะเบียนใช้งาน")
      var Ar = new AssRegis("span#regis_detail");
      Ar.GetRegisForm();
    
      selectJSON("#pname", "pname.json", "provis_code", "name", " เลือกคำนำหน้า ");
      selectJSON("#chwpart", "province.json", "PROVINCE_CODE", "PROVINCE_NAME", " เลือกจังหวัด ");
      // selectJSONwVal("#amppart", "amphur.json", "AMPHUR_ID", "AMPHUR_NAME", " เลือกอำเภอ ", "PROVINCE_ID", 30);
      // selectJSONwVal("#tmbpart", "district.json", "DISTRICT_ID", "DISTRICT_NAME", " เลือกตำบล ","AMPHUR_ID", 448);
      $("#chwpart").change(function () {
        selectJSONwVal("#amppart", "amphur.json", "AMPHUR_ID", "AMPHUR_NAME", " เลือกอำเภอ ","PROVINCE_ID", $("#chwpart").val());
      });
      $("#amppart").change(function () {
        selectJSONwVal("#tmbpart", "district.json", "DISTRICT_ID", "DISTRICT_NAME", " เลือกตำบล ","AMPHUR_ID", $("#amppart").val());
      });        
      
});
}
