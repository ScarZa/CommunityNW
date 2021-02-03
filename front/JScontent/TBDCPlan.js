function TB_DCPlan(content, id = null) {
    var RL = new ReportLayout(content);
    RL.GetRL();
    var title = " D/C Plan ";
    $("nav#nav_bc").hide();
    // $("li#page").empty().text(title)
    // $("h2").empty().prepend("<img src='images/icon_set2/compose.ico' width='40'> ").append(title);
    // if($.cookie("an")!=''){
    //     $("#home").attr("onclick", "AssMENUIPD('#index_content');$('div#SW').hide();");
    // }else{$("#home").attr("onclick", "AssMENU('#index_content');$('div#SW').hide();");}
    // //$("li#prev").show();
    // //$("#back").empty().append(" ประเมิน CGI").attr("onclick", "$('#body_text').empty();TBDraw('index_content');");
    // $("#prev").hide();
    $("span.card-title").empty().append(title);
    // $("#add_body").prepend("<span id='body_text'></span>")
    // $.getJSON($.cookie('Readerurl') + 'DT_Draw.php', { data: id }, function (data) {
    //     $("#body_text").empty().append("<b>เบิกครั้งที : " + data[0].ID + " เลขที่เบิก : " + data[0].bill_no + " วันที่ : " + data[0].bill_date + " หน่วยงาน : " + data[0].department_name + "</b><p>");
        //$("#item-input").empty().append();

        $("#contentGr").empty().append($("<form action='' name='frmCC' id='frmCC' method='post' enctype='multipart/form-data'>"
            + "<div class='row'><div class='col-lg-12' id='cgi-post'>"
            + "<div class='card border-success'>"
          + "<div class='card-header'><i  class='fa fa-search' aria-hidden='true'></i><b>  ค้นหาผู้ป่วย</b></div>"
          +"<p><div class='col-lg-10 offset-lg-2 col-md-10 offset-md-2 col-sm-12 col-xs-12' style='text-align: right;'><input type='text' id='search-patient' placeholder='ค้นหา ชื่อ/สกุล/HN/AN'></div>"
            + "<div id='P-data' class='card-body'></div></div><p>"
            + "</div>"
            //+ "<div class='col-lg-6'><div class='row col-lg-12' id='sub-contentTB'></div><div class='row col-lg-12' id='sub-contentGr'></div></div>"
            +"</div></form>"));
            
  var column1 = ["AN", "HN", "วันที่ admit", "หมายเลบัตรประชาชน", "ชื่อ - นามสกุล", "ที่อยู่", "D/C plan"];
  $("input#search-patient").keyup(function () {
                var CTb = new createTableAjax();
                CTb.GetNewTableAjax('P-data', 'http://1.179.191.130/API-Hosxp/API/CommuNW/DT_DCPlan.php?'+$("#search-patient").val(), '../back/API/tempSendDataAPI.php', column1
                  , null, null, null, null, false, false, null, true, 'DCPModal', false, null, null, null, null, null, 'dbtb');
                });
                // CTb.GetNewTableAjax('contentTB','../back/API/DT_AN.php?'+$("#sel-ward").val(),'../back/API/tempSendDataAPI.php',column1
                // , null, null, null, null, false, true, 'InterviewIPD', false, null, false, null, null, null, null, null, 'dynamic-table');

            }
