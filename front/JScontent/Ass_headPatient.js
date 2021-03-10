function AssHeadPatient(content, id = null,url = '../back/API/') {
  if ($.cookie('mem_status') == 'ADMIN') {
    $(content).empty().append($("<div class='col-lg-4 offset-lg-8 col-md-4 offset-md-8 col-sm-12 col-xs-12' style='text-align: right;'><select class='form-control select2 form-control-sm' id='search-hos'></select></div>")
                            , $("<div class='col-lg-12 col-xl-12' id='head-subdetial'>"));
    selectJSON("#search-hos", "infirmary.json", "inf_id", "hos_name", " เลือกสถานพยาบาล");
    $("select#search-hos").change(function () {
      $("#index_content").empty();
      AddHeadPT("#head-subdetial",$("select#search-hos").val(),url);
    });
  } else {
    AddHeadPT(content,$.cookie('inf_id'),url);
  }
  
  
}

function AddHeadPT(contenthead, inf=$.cookie('inf_id'),url = '../back/API/') {
  $.getJSON("../back/API/Hos_detail.php", { data: inf }, function (data) {
    if(data.hos_name != undefined){
      $(contenthead).empty().append($("<div><h3>"+data.hos_name+"</h3></div>"))
$.getJSON(url+"panel_Dashboard.php", { data: data.province, data2: data.amphur }, function (data2) { 
              //$.cookie("hn", data[0].hn);
  $(contenthead).append($("<div class='card border-warning'><div id='' class='card-body head-color'>"
    +"<div class='row'>"
    //+"<div class='row col-lg-12 col-md-12 col-sm-12'>"
    //+ "<span  class='col-lg-12 col-md-12 col-sm-12' id=''>"
    + "<div class='col-lg-3 col-md-3 col-sm-12'><a href='#' class='btn btn-success btn-lg btn-block'>ผู้ป่วยในพื้นที่ทั้งหมด : <span class='badge badge-warning'><b>"+data2.total+"</b> คน</span></a></div>"
    + "<div class='col-lg-3 col-md-3 col-sm-12'><a href='#' class='btn btn-danger btn-lg btn-block'>ผู้ป่วยในพื้นที่ ที่กำลัง Admit : <span class='badge badge-warning'><b>"+data2.admit+"</b> คน</span></a></div>"
    + "<div class='col-lg-3 col-md-3 col-sm-12'><a href='#' id='' class='btn btn-info btn-lg btn-block'>ผู้ป่วยติดตามดูแลต่อเนื่องในพื้นที่ (มีภูมิลำเนาในพื้นที่) : <span class='badge badge-warning'><b>" + data2.follow_up + "</b> คน</span></a></div>"
    + "<div class='col-lg-3 col-md-3 col-sm-12'><a href='#' id='followup' class='btn btn-warning btn-lg btn-block'>ผู้ป่วยยินยอมติดตามที่อาศัยอยู่ในพื้นที่ : <span class='badge badge-danger'><b>"+data.hos+"</b> คน</span></a></div>"
    //+ "</span>"
      +"</div > "
    //+"</div > "
    +"</div></div> "));
  $("#followup").click(function () { 
      TB_FollowUP("#index_content",data.province, data.amphur, inf);
    });
});
}
});
}
