function LoginModel() {
  $("#createModal").empty().append("<div class='modal' id='LoginModel' role='dialog' aria-labelledby='exampleModalLabel'>"
    + "<div class='modal-dialog modal-xs' role='document'><div class='modal-content'><div class='modal-header'>"
    + "<h4 class='modal-title' id='LoginModelLabel'></h4>"
    + "<button type='button' class='close' data-dismiss='modal' aria-label='Close'><span aria-hidden='true'>&times;</span></button>"
    + "</div><form action='' name='frmConfirm' id='frmConfirm' method='post' enctype='multipart/form-data'><div class='modal-body' id='modelConfirm'><span id='regis_detail'></span></div>"
    + "<div class='modal-footer'><input type='submit' class='btn btn-success' value='เข้าสู่ระบบ'> <button type='button' class='btn btn-danger' data-dismiss='modal'>ปิด</button></div></form></div></div></div>");
  $('#LoginModel').on('show.bs.modal', function (event) {
    var button = $(event.relatedTarget)
    var recipient = button.data('whatever')
    var modal = $(this)
    modal.find('.modal-title').text()
    $("h4#LoginModelLabel").empty().append("Login")
    var Ar = new AssLogin("span#regis_detail");
    Ar.GetLoginForm();

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

            var header = {
                    "alg": "HS256",
                    "typ": "JWT"
                  };
                  
                  var stringifiedHeaderen = CryptoJS.enc.Utf8.parse(JSON.stringify(header));
                  var encodedHeader = base64url(stringifiedHeaderen);
            var body_data = {"cid": data[0].cid,
                        "name": data[0].fullname,
                        "reg": data[0].timestamp
                        };
            var secret = "rploei.go.th";
            
                  
                  var stringifiedDataen = CryptoJS.enc.Utf8.parse(JSON.stringify(body_data));
                  var encodedData = base64url(stringifiedDataen);
                  
                  var token = encodedHeader + "." + encodedData;
                  
             var signature = CryptoJS.HmacSHA256(token, secret);
            signature = base64url(signature);
            
            var token_key = token + "." + signature;
    $("span#regis_detail").append($("<input type='hidden' name='token_key' value='"+token_key+"'>")
                                ,$("<input type='hidden' name='reg_id' value='"+data[0].reg_id+"'>"));       
    })
    $("span#regis_detail").append($("<input type='hidden' name='method' value='add_Confirm'>"));
    $("#frmConfirm").on('submit', (function (e) {
      e.preventDefault();

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
          TB_ConfirmUser('#index_content');
        })
    }));
  });


}