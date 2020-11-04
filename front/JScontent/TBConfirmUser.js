function TB_ConfirmUser(content, id = null) {
    var RL = new ReportLayout(content);
    RL.GetRL();
    var title = " ยืนยันผู้ลงทะเบียน ";
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
            + "<div class='card-header'><b>รายชื่อผู้ขอลงทะเบียน</b></div>"
            + "<div id='P-data' class='card-body'></div></div><p>"
            + "</div>"
            //+ "<div class='col-lg-6'><div class='row col-lg-12' id='sub-contentTB'></div><div class='row col-lg-12' id='sub-contentGr'></div></div>"
            +"</div></form>"));
            
                var column1 = ["ลำดับ", "ตำแหน่ง","หน่วยงาน","ชื่อ - นามสกุล","วันที่ลงทะเบียน","ยืนยัน"];
                var CTb = new createTableAjax();
                CTb.GetNewTableAjax('P-data', '../back/API/DT_Confirm.php?', '../back/API/tempSendDataAPI.php', column1
                ,null,null,null,null,false,false,null,true,'ConfirmModel',false,null,null,null,null,null,'dbtb');

            }
