function AssADL(content, id = null) {
    var RL = new ReportLayout(content);
    RL.GetRL();
    var title = " แบบประเมินความสามารถในการประกอบกิจวัตรประจำวัน (ADL)";
    $("nav#nav_bc").hide();
    // $("li#page").empty().text(title)
    // //$("h2").empty().prepend("<img src='images/icon_set2/compose.ico' width='40'> ").append(title);
    
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

        $("#contentGr").empty().append($("<form action='' name='frmDoc01' id='frmDoc01' method='post' enctype='multipart/form-data'>"
            + "<div class='row'><div class='col-lg-12' id='cgi-post'>"
            //+ "<div class='card border-dark'>"
            //+ "<div class='card-header'><b>ข้อมูลคนไข้</b></div>"
            //+ "<div id='P-data' class='card-body'></div></div><p>"
            + "<div id='P-data'></div><p>"
            + "<center><input type='submit' name='submit' class='btn btn-success' value='บันทึก'></center></div>"
            //+ "<div class='col-lg-6'><div class='row col-lg-12' id='sub-contentTB'></div><div class='row col-lg-12' id='sub-contentGr'></div></div>"
            +"</div></form>"));
            $.getJSON('../back/API/detail_DoctorpatientAPI.php',{data : $.cookie("vn"),data2 : $.cookie("an")},function (data) {
            $("#P-data").append($("<div class='row col-lg-4 col-md-4 col-sm-12'><label><b>ผู้ประเมิน : </b></lable><select name='recorder' class='form-control select2' id='recorder' required></select></div> &nbsp;")
                                ,$("<div class='row'><div class='col-lg-9' id='ass-ADL'></div><div class='col-lg-3' id='resultTB'></div></div>"))
            $("#ass-ADL").append($("<div class='card border-success'><div class='card-header'><b>1. รับประธานอาหารเมื่อเตรียมสำรับไว้ให้เรียบร้อยต่อหน้า </b></div>"
                                    +"<div class='form-group row' id='SC_group'><div class='col-lg-12 row'><div class='col-lg-1'>&nbsp;</div><div class='col-lg-11'><input class='ace' type='radio' name='Q1' value='0' required><span class='lbl'> ไม่สามารถตักอาหารเข้าปากได้</span></div></div><br>"
                                    +"<div class='col-lg-12 row'><div class='col-lg-1'>&nbsp;</div><div class='col-lg-11'><input class='ace' type='radio' name='Q1' value='1' required><span class='lbl'> ตักอาหารเองได้ แต่ต้องมีคนช่วย เช่น ช่วยใช้ช้อนตักเตรียมไว้ให้ หรือตัดเป็นชิ้นเล็กๆไว้ล่วงหน้า</span></div></div><br>"
                                    +"<div class='col-lg-12 row'><div class='col-lg-1'>&nbsp;</div><div class='col-lg-11'><input class='ace' type='radio' name='Q1' value='2' required><span class='lbl'> ตักอาหารและช่วยตัวเองได้ปกติ</span></div></div><br>"
                                    +"</div></div><p></p>")
                                ,$("<div class='card border-success'><div class='card-header'><b>2. การล้างหน้า หวีผม แปรงฟัน โกนหนวดในระยะเวลา24-48ชั่วโมงที่ผ่านมา </b></div>"
                                    +"<div class='form-group row' id='SC_group'><div class='col-lg-12 row'><div class='col-lg-1'>&nbsp;</div><div class='col-lg-11'><input class='ace' type='radio' name='Q2' value='0' required><span class='lbl'> ต้องการความช่วยเหลือ</span></div></div><br>"
                                    +"<div class='col-lg-12 row'><div class='col-lg-1'>&nbsp;</div><div class='col-lg-11'><input class='ace' type='radio' name='Q2' value='1' required><span class='lbl'> ทำได้เอง(รวมทั้งที่ทำได้เองถ้าเตรียมอุปกรณ์ไว้ให้)</span></div></div><br>"
                                    +"</div></div><p></p>")
                                ,$("<div class='card border-success'><div class='card-header'><b>3. ลุกจากที่นอน หรือเตียงไปยังเก้าอี้ </b></div>"
                                    +"<div class='form-group row' id='SC_group'><div class='col-lg-12 row'><div class='col-lg-1'>&nbsp;</div><div class='col-lg-11'><input class='ace' type='radio' name='Q3' value='0' required><span class='lbl'> ไม่สามารถนั่งได้(นั่งแล้วจะล้มเสมอ) หรือต้องใช้คน2คนช่วยกันยกขึ้น</span></div></div><br>"
                                    +"<div class='col-lg-12 row'><div class='col-lg-1'>&nbsp;</div><div class='col-lg-11'><input class='ace' type='radio' name='Q3' value='1' required><span class='lbl'> ต้องการความช่วยเหลืออย่างมากจึงจะนั่งได้ เช่น ต้องใช้คนที่แข็งแรงหรือมีทักษะ1คน หรือใช้คนทั่วไป2คนพยุง หรือดันขึ้นมาจึงจะนั่งอยู่ได้</span></div></div><br>"
                                    +"<div class='col-lg-12 row'><div class='col-lg-1'>&nbsp;</div><div class='col-lg-11'><input class='ace' type='radio' name='Q3' value='2' required><span class='lbl'> ต้องการความช่วยเหลือบ้าง เช่น บอกให้ทำตามหรือช่วยพยุงเล็กน้อย หรือต้องมีคนดูแล เพื่อความปลอดภัย</span></div></div><br>"
                                    +"<div class='col-lg-12 row'><div class='col-lg-1'>&nbsp;</div><div class='col-lg-11'><input class='ace' type='radio' name='Q3' value='3' required><span class='lbl'> ทำได้เอง</span></div></div><br>"
                                    +"</div></div><p></p>")
                                ,$("<div class='card border-success'><div class='card-header'><b>4. การใช้ห้องน้ำ </b></div>"
                                    +"<div class='form-group row' id='SC_group'><div class='col-lg-12 row'><div class='col-lg-1'>&nbsp;</div><div class='col-lg-11'><input class='ace' type='radio' name='Q4' value='0' required><span class='lbl'> ช่วยตัวเองไม่ได้</span></div></div><br>"
                                    +"<div class='col-lg-12 row'><div class='col-lg-1'>&nbsp;</div><div class='col-lg-11'><input class='ace' type='radio' name='Q4' value='1' required><span class='lbl'> ทำได้บ้าง(อย่างน้อยทำความสะอาดตัวเองได้หลังจากเสร็จธุระ)แต่ต้องการความช่วยเหลือในบางสิ่ง</span></div></div><br>"
                                    +"<div class='col-lg-12 row'><div class='col-lg-1'>&nbsp;</div><div class='col-lg-11'><input class='ace' type='radio' name='Q4' value='2' required><span class='lbl'> ช่วยเหลือตัวเองได้ดี(ขึ้นนั่งและลงจากโถส้วมเองได้ ทำความสะอาดได้เรียบร้อยหลังจากเสร็จธุระ ถอดใส่เสื้อผ้าได้เรียบร้อย)</span></div></div><br>"
                                    +"</div></div><p></p>")
                                ,$("<div class='card border-success'><div class='card-header'><b>5. การเคลื่อนที่ภายในห้องหรือบ้าน </b></div>"
                                    +"<div class='form-group row' id='SC_group'><div class='col-lg-12 row'><div class='col-lg-1'>&nbsp;</div><div class='col-lg-11'><input class='ace' type='radio' name='Q5' value='0' required><span class='lbl'> เคลื่อนที่ไปไหนไม่ได้</span></div></div><br>"
                                    +"<div class='col-lg-12 row'><div class='col-lg-1'>&nbsp;</div><div class='col-lg-11'><input class='ace' type='radio' name='Q5' value='1' required><span class='lbl'> ต้องใช้รถเข็นช่วยตัวเองให้เคลื่อนที่ได้เอง(ไม่ต้องมีคนเข็นให้)และจะต้องเข้าออกมุมห้องหรือประตูได้</span></div></div><br>"
                                    +"<div class='col-lg-12 row'><div class='col-lg-1'>&nbsp;</div><div class='col-lg-11'><input class='ace' type='radio' name='Q5' value='2' required><span class='lbl'> เดินหรือเคลื่อนที่โดยมีคนช่วย เช่น พยุง หรือบอกให้ทำตาม หรือต้องให้ความสนใจดูแล เพื่อความปลอดภัย</span></div></div><br>"
                                    +"<div class='col-lg-12 row'><div class='col-lg-1'>&nbsp;</div><div class='col-lg-11'><input class='ace' type='radio' name='Q5' value='3' required><span class='lbl'> เดินหรือเคลือนที่ได้เอง</span></div></div><br>"
                                    +"</div></div><p></p>")
                                ,$("<div class='card border-success'><div class='card-header'><b>6. การสวมใส่เสื้อผ้า </b></div>"
                                    +"<div class='form-group row' id='SC_group'><div class='col-lg-12 row'><div class='col-lg-1'>&nbsp;</div><div class='col-lg-11'><input class='ace' type='radio' name='Q6' value='0' required><span class='lbl'> ต้องมีคนสวมใส่ให้ ช่วยตัวเองแทบไม่ได้หรือได้น้อย</span></div></div><br>"
                                    +"<div class='col-lg-12 row'><div class='col-lg-1'>&nbsp;</div><div class='col-lg-11'><input class='ace' type='radio' name='Q6' value='1' required><span class='lbl'> ช่วยตัวเองได้ประมาณร้อยละ50 ที่เหลือต้องมีคนช่วย</span></div></div><br>"
                                    +"<div class='col-lg-12 row'><div class='col-lg-1'>&nbsp;</div><div class='col-lg-11'><input class='ace' type='radio' name='Q6' value='2' required><span class='lbl'> ช่วยตัวเองได้ดี(รวมทั้งการติดกระดุม รูดซิป หรือใส่เสื้อผ้าที่ดัดแปลงให้เหมาะสมได้)</span></div></div><br>"
                                    +"</div></div><p></p>")
                                ,$("<div class='card border-success'><div class='card-header'><b>7. การขึ้นลงบันได1ชั้น </b></div>"
                                    +"<div class='form-group row' id='SC_group'><div class='col-lg-12 row'><div class='col-lg-1'>&nbsp;</div><div class='col-lg-11'><input class='ace' type='radio' name='Q7' value='0' required><span class='lbl'> ไม่สามารถทำได้</span></div></div><br>"
                                    +"<div class='col-lg-12 row'><div class='col-lg-1'>&nbsp;</div><div class='col-lg-11'><input class='ace' type='radio' name='Q7' value='1' required><span class='lbl'> ต้องการคนช่วย</span></div></div><br>"
                                    +"<div class='col-lg-12 row'><div class='col-lg-1'>&nbsp;</div><div class='col-lg-11'><input class='ace' type='radio' name='Q7' value='2' required><span class='lbl'> ขึ้นลงเองได้(ถ้าต้องใช้เครื่องช่วยเดิน เช่น Walker จะต้องขึ้นลงเองได้ด้วย)</span></div></div><br>"
                                    +"</div></div><p></p>")
                                ,$("<div class='card border-success'><div class='card-header'><b>8. การอาบน้ำ </b></div>"
                                    +"<div class='form-group row' id='SC_group'><div class='col-lg-12 row'><div class='col-lg-1'>&nbsp;</div><div class='col-lg-11'><input class='ace' type='radio' name='Q8' value='0' required><span class='lbl'> ต้องมีคนช่วยหรือทำให้</span></div></div><br>"
                                    +"<div class='col-lg-12 row'><div class='col-lg-1'>&nbsp;</div><div class='col-lg-11'><input class='ace' type='radio' name='Q8' value='1' required><span class='lbl'> อาบน้ำเองได้</span></div></div><br>"
                                    +"</div></div><p></p>")
                                ,$("<div class='card border-success'><div class='card-header'><b>9. การกลั้นการถ่ายอุจจาระ ใน 1 สัปดาห์ที่ผ่านมา </b></div>"
                                    +"<div class='form-group row' id='SC_group'><div class='col-lg-12 row'><div class='col-lg-1'>&nbsp;</div><div class='col-lg-11'><input class='ace' type='radio' name='Q9' value='0' required><span class='lbl'> กลั้นไม่ได้ หรือต้องการการสวนอุจจาระเสมอ</span></div></div><br>"
                                    +"<div class='col-lg-12 row'><div class='col-lg-1'>&nbsp;</div><div class='col-lg-11'><input class='ace' type='radio' name='Q9' value='1' required><span class='lbl'> กลั้นไม่ได้บางครั้ง(ไม่เกินวันละ1ครั้ง)</span></div></div><br>"
                                    +"<div class='col-lg-12 row'><div class='col-lg-1'>&nbsp;</div><div class='col-lg-11'><input class='ace' type='radio' name='Q9' value='2' required><span class='lbl'> กลั้นได้ปกติ</span></div></div><br>"
                                    +"</div></div><p></p>")
                                ,$("<div class='card border-success'><div class='card-header'><b>10. การกลั้นการปัสสาวะ ใน 1 สัปดาห์ที่ผ่านมา </b></div>"
                                    +"<div class='form-group row' id='SC_group'><div class='col-lg-12 row'><div class='col-lg-1'>&nbsp;</div><div class='col-lg-11'><input class='ace' type='radio' name='Q10' value='0' required><span class='lbl'> กลั้นไม่ได้ หรือใส่สายสวนปัสสาวะ แต่ไม่สามารถดูแลเองได้</span></div></div><br>"
                                    +"<div class='col-lg-12 row'><div class='col-lg-1'>&nbsp;</div><div class='col-lg-11'><input class='ace' type='radio' name='Q10' value='1' required><span class='lbl'> กลั้นไม่ได้บางครั้ง(ไม่เกินวันละ1ครั้ง)</span></div></div><br>"
                                    +"<div class='col-lg-12 row'><div class='col-lg-1'>&nbsp;</div><div class='col-lg-11'><input class='ace' type='radio' name='Q10' value='2' required><span class='lbl'> กลั้นได้ปกติ</span></div></div><br>"
                                    +"</div></div><p></p>")
                                ,$("<div align='right'><b id='resQ'></b> <a class='btn btn-warning' id='processQ'>ประมวลผล</a></div>")                   

                                );
                                selectMash('#recorder', 'user_Data.php', 'เลือกผู้ประเมิน',$.cookie("user"));
                                $("input[type=submit]").hide();
                                $("a#processQ").click(function(){
                                    var total=0;
                                    for(var i=1;i<=10;i++){
                    
                                        if(isNaN($("input[type=radio][name=Q"+i+"]:checked").val())){
                                            alert("กรุณาเลือกคำตอบที่"+i+"ด้วยครับ!!!");
                                        $("input[type=radio][name=Q"+i+"]").focus();
                                        }else{
                                            total += parseInt($("input[type=radio][name=Q"+i+"]:checked").val());
                                        }
                                    }
                                     
                                        $("#cgi-post").append($("<input type='hidden' name='total' value='"+total+"'>"));

                                    
                                        if(total <= 4){
                                            $("b#resQ").empty().append("ได้ "+total+" คะแนน / ผลที่ได้ : ภาวะพึ่งพาโดยสมบูรณ์ : very low initial score, total dependence");
                                            $("input[type=submit]").show();
                                        }else if(total >= 5 && total <=8){
                                            $("b#resQ").empty().append("ได้ "+total+" คะแนน / ผลที่ได้ : ภาวะพึ่งพารุนแรง : low initial score, severe dependence");
                                            $("input[type=submit]").show();
                                        }else if(total >= 9 && total <=11){
                                            $("b#resQ").empty().append("ได้ "+total+" คะแนน / ผลที่ได้ : ภาวะพึ่งพาปานกลาง : intermediate initial score, moderately severs dependence");
                                            $("input[type=submit]").show();
                                        }else{
                                            $("b#resQ").empty().append("ได้ "+total+" คะแนน / ผลที่ได้ : ไม่เป็นการพึ่งพา : intermediate high, mildly severs dependence, consideration of discharging home");
                                            $("input[type=submit]").show();
                                        }
                                    
                                    }); 

            $("#cgi-post").append($("<input type='hidden' name='hn' value='"+$.cookie("hn")+"'>")
                                ,$("<input type='hidden' name='vn' value='"+$.cookie("vn")+"'>")
                                //,$("<input type='hidden' name='vstdate' value='"+$.cookie("vstdate")+"'>")
                                ,$("<input type='hidden' name='user' value='"+$.cookie("user")+"'>")
                                ,$("<input type='hidden' name='method' value='add_ADL'>"));

                                var column1 = ["วันที่รับบริการ", "คะแนน ADL"];
                                var CTb = new createTableAjax();
                                CTb.GetNewTableAjax('resultTB', '../back/API/DT_ADLscore.php?'+$.cookie('hn'), '../back/API/tempSendDataAPI.php', column1
                                    , null, null, null, null, false, false, null, false, null, false, null, null, null, null, null, null);                        

            //$("#nav-general-tab").on('onclick', (function (e) { e.preventDefault();  
                //AssDocGeneral("#nav-general");
                
            //}))
                               
        $("#frmDoc01").on('submit', (function (e) {
            e.preventDefault();
            // if($("#dep_send").val() == $("#dep_res").val()){
            //     alert("หน่วยงานที่ส่งและหน่วยงานที่รับซ้ำกันครับ กรุณาตรวจสอบด้วย !!!!");
            // }else{
            var dataForm = new FormData(this);
            // console.log(dataForm)
            // for (var value of dataForm.values()) {
            //     console.log(value);
            // }
            var settings = {
                type: "POST",
                url: "../back/API/prcADLAPI.php",
                async: true,
                crossDomain: true,
                data: dataForm,
                contentType: false,
                cache: false,
                processData: false
            }
            $('#index_content').empty().append("<center><img src='images/waiting.gif'></center>");
            $.ajax(settings).done(function (result) {
                alert(result.messege);
                $('#index_content').empty();
                //AssMENU('#index_content');$('div#SW').hide();
            });
        //}
        }));
    });

//         $("input[type=submit][name=submit]").click(function (e) { console.log('1234');
// $.ajax({
// type: "POST",
// url: "../back/API/prcSocialAPI.php",
//                    data: $("#frmsocial").serialize(),
// success: function(result) {
//     alert(result.messege);
//     $("#body_text").empty();
//     AssSocial('#index_content',$.cookie('hn'));
// }
// });e.preventDefault();
             
// });

}
