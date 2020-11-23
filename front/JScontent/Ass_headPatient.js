function AssHeadPatient(content, id = null,url = '../back/API/') {
  
  $.getJSON("../back/API/Hos_detail.php", { data: $.cookie('inf_id') }, function (data) {
      if(data.hos_name != undefined){
        $(content).empty().append($("<div><h3>"+data.hos_name+"</h3></div>"))
  $.getJSON(url+"panel_Dashboard.php", { data: data.province, data2: data.amphur }, function (data2) { 
                //$.cookie("hn", data[0].hn);
                
    $(content).append($("<div class='card border-warning'><div id='' class='card-body head-color'>"
      +"<div class='row'>"
      //+"<div class='row col-lg-12 col-md-12 col-sm-12'>"
      + "<span  class='row col-lg-12 col-md-12 col-sm-12' id=''>"
      + "<div class='col-lg-4 col-md-4 col-sm-12'><a href='#' class='btn btn-success btn-lg btn-block'>ผู้ป่วยในพื้นที่ทั้งหมด : <b>"+data2.total+"</b> คน</a></div>"
      + "<div class='col-lg-4 col-md-4 col-sm-12'><a href='#' class='btn btn-danger btn-lg btn-block'>ผู้ป่วยในพื้นที่ ที่กำลัง Admit : <b>"+data2.admit+"</b> คน</a></div>"
      + "<div class='col-lg-4 col-md-4 col-sm-12'><a href='#' id='followup' class='btn btn-warning btn-lg btn-block'>ผู้ป่วยติดตามดูแลต่อเนื่องในพื้นที่ : <b>"+data2.follow_up+"</b> คน</a></div>"
        + "</span></div>"
      //+"</div > "
      +"</div></div> "));
    $("#followup").click(function () { 
        TB_FollowUP("#index_content",data.province, data.amphur);
      });
  });
}
  });
  
}
