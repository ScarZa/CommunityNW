var AssDCRNW = function(content){
    this.content = content;
    this.GetDCRNWForm = function () {
        $(this.content).empty().append(
          $("<div class='row' id='cgi-post'>"
          + "<div id='EMR-data' class='col-lg-12 roll'></div>"
          // + "<div id='test1' class='col-lg-12 scroll'></div>"
          // + "<div id='test2' class='col-lg-12 scroll'></div>"

          +"</div>")
            );
        
            $("#EMR-data").append($("<div class='row'><div class='' id='ass-EMR'></div></div>"))

            $("#ass-EMR").append($("<div class='card text-white bg-info mb-3'><div class='card-header'><b>ข้อมูลทั่วไป</b></div><div id='' class='card-body'>"
                                    +"<div class='row'>"
                                    +"<div class='col-lg-2 col-md-12 col-sm-12'> <img id='pics-panel' width='150' /></div>"
                                    +"<div class='col-lg-10 col-md-12 col-sm-12'>"
                                    +"<span  class='row' id='DP'>"
                                    +"<div class='col-lg-12 col-md-12 col-sm-12 row'><div class='col-lg-3 col-md-6 col-sm-6' style='text-align:right;'><b>ชื่อ-สกุล : </b></div><div class='row col-lg-3 col-md-6 col-sm-6'> <b id='fullname'></b></div>"
                                    +"<div class='col-lg-1 col-md-6 col-sm-6' style='text-align:right;'><b>HN : </b></div><div class='row col-lg-2 col-md-6 col-sm-6'> <b id='hn'></b></div>"
                                    +"<div class='col-lg-1 col-md-6 col-sm-6' style='text-align:right;'><b>VN : </b></div><div class='row col-lg-3 col-md-6 col-sm-6'> <b id='vn'></b></div></div>"
                                    +"<div class='col-lg-12 col-md-12 col-sm-12 row'><div class='col-lg-3 col-md-6 col-sm-6' style='text-align:right;'><b>บัตรประชาชน : </b></div><div class='row col-lg-2 col-md-6 col-sm-6' id='cid'> </div>"
                                    +"<div class='col-lg-2 col-md-6 col-sm-6' style='text-align:right;'><b>วันเกิด : </b></div><div class='row col-lg-2 col-md-6 col-sm-6' id='birthday'> </div>"
                                    +"<div class='col-lg-2 col-md-6 col-sm-6' style='text-align:right;'><b>อายุ : </b></div><div class='row col-lg-2 col-md-6 col-sm-6' id='age'> </div></div>"
                                    +"<div class='col-lg-12 col-md-12 col-sm-12 row'><div class='col-lg-3 col-md-6 col-sm-6' style='text-align:right;'><b>ที่อยู่ : </b></div><div class='row col-lg-9 col-md-6 col-sm-6' id='address'> </div></div>"
                                    +"<div class='col-lg-12 col-md-12 col-sm-12 row'><div class='col-lg-3 col-md-6 col-sm-6' style='text-align:right;'><b>ที่อยู่ติดต่อได้ : </b></div><div class='row col-lg-9 col-md-6 col-sm-6' id='informaddr'> </div></div>"
                                    +"<div class='col-lg-12 col-md-12 col-sm-12 row'><div class='col-lg-3 col-md-6 col-sm-6' style='text-align:right;'><b>สัญชาติ : </b></div><div class='row col-lg-1 col-md-6 col-sm-6' id='nationality'> </div>"
                                    +"<div class='col-lg-2 col-md-6 col-sm-6' style='text-align:right;'><b>ศาสนา :</b></div><div class='row col-lg-2 col-md-6 col-sm-6' id='religion'> </div>"
                                    +"<div class='col-lg-2 col-md-6 col-sm-6' style='text-align:right;'><b>กรุ๊ปเลือด :</b></div><div class='col-lg-2 col-md-6 col-sm-6' id='blood'></div></div>"
                                    
                                    +"<div class='col-lg-12 col-md-12 col-sm-12 row'><div class='col-lg-3 col-md-6 col-sm-6' style='text-align:right;'><b>สิทธิ์ : </b></div><div class='row col-lg-9 col-md-6 col-sm-6' id='ptname1'> </div></div>"
                                    +"<div class='col-lg-12 col-md-12 col-sm-12'><div class='clearfix'><div class='box' style='background-color:rgb(203, 235, 25)'><span style='color: black'  id='hometel'></span><span style='color: black'  id='informtel'></span></div></div></div></div>"
                                    + "</span></div></div></div></div></div></div><p></p>")
                                ,$("<div class='card text-white bg-danger mb-3'><div class='card-header'><b>ประเภทผู้ป่วย</b></div><div id='' class='card-body'>"
                                    +"<div class='col-lg-12 col-md-12 col-sm-12 row'><div class='col-lg-3 col-md-4 col-sm-4' style='text-align:right;'><b>คลินิคพิเศษ : </b></div><div class='row col-lg-9 col-md-8 col-sm-8' id='clinic'> </div>"
                                    + "<div class='col-lg-3 col-md-4 col-sm-4' style='text-align:right;'><b>High Alert Drug : </b></div><div class='row col-lg-9 col-md-8 col-sm-8' id='Alert_Drug'> </div></div>"
                                    +"<div class='col-lg-12 col-md-12 col-sm-12 row'><div class='col-lg-3 col-md-4 col-sm-4' style='text-align:right;'><b>โรคประจำตัว : </b></div><div class='row col-lg-9 col-md-8 col-sm-8' id='disease'> </div></div>"
                                    +"<div class='col-lg-12 col-md-12 col-sm-12 row'><div class='col-lg-3 col-md-4 col-sm-4' style='text-align:right;'><b>ประวัติแพ้ยา : </b></div><div class='row col-lg-9 col-md-8 col-sm-8' id='allergic'> </div></div>"
                                    +"</div></div><p></p>")
                                ,$("<div class='card border-success'><div class='card-header'><b id='vstdate'></b> <b id='vsttime'></b> <b id='admit'></b> <b id='ovstistname'></b><br><b id='dchdate'></b> <b id='dchtime'></b> <b id='lastvisit'></b> <b id='nextdate' style='color: red'></b></div><div id='' class='card-body'>"
                                    +"<div class='col-lg-12 col-md-12 col-sm-12 row'><div class='col-lg-4 col-md-6 col-sm-6' style='text-align:right;'><b>สิทธิรักษาประจำตัว : </b></div><div class='row col-lg-8 col-md-6 col-sm-6' id='ptname2'> </div></div>" 
                                    +"<div class='col-lg-12 col-md-12 col-sm-12 row'><div class='col-lg-4 col-md-6 col-sm-6' style='text-align:right;'><b>สถานพยาบาลหลัก : </b></div><div class='row col-lg-8 col-md-6 col-sm-6' id='Dhospital'> </div></div>"
                                    +"<div class='col-lg-12 col-md-12 col-sm-12 row'><div class='col-lg-4 col-md-6 col-sm-6' style='text-align:right;'><b>หมดอายุ : </b></div><div class='row col-lg-2 col-md-6 col-sm-6' id='pttype_expire'> </div>"
                                    +"<div class='col-lg-3 col-md-6 col-sm-6' style='text-align:right;'><b>ใบส่งตัวหมดอายุ : </b></div><div class='row col-lg-2 col-md-6 col-sm-6' id='expire_date'> </div></div>"
                                    +"<div class='col-lg-12 col-md-12 col-sm-12 row'><div class='col-lg-4 col-md-6 col-sm-6' style='text-align:right;'><b>แพทย์ผู้รักษา : </b></div><div class='row col-lg-8 col-md-6 col-sm-6' id='docName'> </div></div>"
                                    +"<div class='col-lg-12 col-md-12 col-sm-12 row'><div class='col-lg-4 col-md-6 col-sm-6' style='text-align:right;'><u><b>การวินิจฉัย</b></u></div></div>"
                                    +"<div class='col-lg-12 col-md-12 col-sm-12 row'><div class='col-lg-4 col-md-6 col-sm-6' style='text-align:right;'><b>PDX : </b></div><div class='row col-lg-8 col-md-6 col-sm-6' id='dxname1'> </div></div>"
                                    +"<div class='col-lg-12 col-md-12 col-sm-12 row'><div class='col-lg-4 col-md-6 col-sm-6' style='text-align:right;'><b>Dx.2 : </b></div><div class='row col-lg-8 col-md-6 col-sm-6' id='dxname2'> </div></div>"
                                    +"<div class='col-lg-12 col-md-12 col-sm-12 row'><div class='col-lg-4 col-md-6 col-sm-6' style='text-align:right;'><b>DX.3 : </b></div><div class='row col-lg-8 col-md-6 col-sm-6' id='dxname3'> </div></div>"
                                    +"<div class='col-lg-12 col-md-12 col-sm-12 row'><div class='col-lg-4 col-md-6 col-sm-6' style='text-align:right;'><b>Dx.4 : </b></div><div class='row col-lg-8 col-md-6 col-sm-6' id='dxname4'> </div></div>"
                                    +"<div class='col-lg-12 col-md-12 col-sm-12 row' id='inject'></div>"
                                    + "</div></div><p></p>"
                                    )
////////////////////////////////////////////////////////////

                                ,$("<div class='card border-warning mb-3'><div class='card-header' style='text-align : center;' ><h5>บันทึกการจำหน่ายผู้ป่วยสำหรับการติดตามในชุมชน</h5></div><div id='' class='card-body'>"
                                +"<div class='row  form-group '>"
                   
                                +"<label class='col-12 col-sm-12 col-md-4 col-lg-3 ' style='text-align:left;' > ประเภทการจำหน่ายผู้ป่วย </label>  "
                                +"<div class='col-12 col-sm-12 col-md-8 col-lg-9'>   <span id='dc_type'></span></div>"
                                +"<HR style='width:100%; '>"
                                +"<label class='col-12 col-sm-12 col-md-4 col-lg-3' style='text-align : left;'>ประเภทผู้ป่วย </label> "
                                +"<div class='col-12 col-sm-12 col-md-4 col-lg-9'>   <span id='patient_type'></span></div>"
                                +"<HR style='width:100%;'>"
                                
                                
                                
                               
                 
                                +"<div class='col-12 col-sm-12 col-md-12 col-lg-3 ' style='text-align:left;' > ผู้ให้ข้อมูล (ผู้รับกลับ) </div>"
                                +"<div class='col-12 col-sm-12 col-md-12 col-lg-3 '>   <span id='biographer'></span><br></div>"
                                +"<div class='col-12 col-sm-12 col-md-12 col-lg-2' > เกี่ยวข้องเป็น </div>"
                                +"<div class='col-12 col-sm-12 col-md-12 col-lg-3 '>   <span id='relative'></span><br></div>"

                                +"<div class='col-12 col-sm-12 col-md-12 col-lg-3 ' style='text-align:left;' > ที่อยู่ที่ติดต่อได้ติดตามเยี่ยม </div>"
                                +"<div class='col-12 col-sm-12 col-md-12 col-lg-9 '>   <span id='patient_add'></span><br></div>"

                                +"<div class='col-12 col-sm-12 col-md-12 col-lg-3 ' style='text-align:left;' > เบอร์โทร </div>"
                                +"<div class='col-12 col-sm-12 col-md-12 col-lg-3 '>   <span id='tel0'></span><br></div>"
                                +"<div class='col-12 col-sm-12 col-md-12 col-lg-2' > เกี่ยวข้องเป็น </div>"
                                +"<div class='col-12 col-sm-12 col-md-12 col-lg-3 '>   <span id='relative0'></span><br></div>"

                                +"<div class='col-12 col-sm-12 col-md-12 col-lg-3 ' style='text-align:left;' > เบอร์โทร </div>"
                                +"<div class='col-12 col-sm-12 col-md-12 col-lg-3 '>   <span id='tel1'></span><br></div>"
                                +"<div class='col-12 col-sm-12 col-md-12 col-lg-2' > เกี่ยวข้องเป็น </div>"
                                +"<div class='col-12 col-sm-12 col-md-12 col-lg-3 '>   <span id='relative1'></sapn><br></div>"

                                +"<div class='col-12 col-sm-12 col-md-12 col-lg-3 ' style='text-align:left;' > เบอร์โทร </div>"
                                +"<div class='col-12 col-sm-12 col-md-12 col-lg-3 '>   <sapn id='tel2'></span><br></div>"
                                +"<div class='col-12 col-sm-12 col-md-12 col-lg-2' > เกี่ยวข้องเป็น </div>"
                                +"<div class='col-12 col-sm-12 col-md-12 col-lg-3 '>   <span id='relative2'></span><br></div>"

                            
                               
                                +"<div class='col-sm-12 col-md-12 col-lg-3 '  style='text-align : left;' > ประวัติการเจ็บป่วยสำหรับเครือข่าย </div>  "
                                +"<div class=' col-12 col-sm-12 col-md-12 col-lg-9'  >"
                                +"<span id='cc'></span><br>"
                                +"<span id='hpi'></span><br>"
                                 +"</div>"
                                 +"<HR style='width:100%; '>"
                                 
                                 +" <label class='col-12 col-sm-12 col-md-12 col-lg-6 mb-3 ' style='text-align:left;' > ประสงค์รับยาต่อที่รพ.ใกล้บ้าน</label>  "

                                 +"<div class='custom-control custom-radio col-12 col-sm-12 col-md-12 col-lg-3'>"
                                 +"<span id='assent_drug'></span></div>"
                                    + "<HR style='width:100%;'>"   
                                    
                                 +" <label class='col-12 col-sm-12 col-md-12 col-lg-6 ' style='text-align:left;' > การยินยอมติดตามทางโทรศัพท์</label>  "
                                 
                                 +"<div class='custom-control custom-radio col-12 col-sm-12 col-md-12 col-lg-3'>"
                                 +"<span id='assent_tel'></span></div>"
                                 
                                 +" <label class='col-12 col-sm-12 col-md-12 col-lg-6 ' style='text-align:left;' > การยินยอมติดตามให้ติดตามเยี่ยมหลังจำหน่วย โดยรพจ.เลยฯ </label>  "
                                 
                                 +"<div class='custom-control custom-radio col-12 col-sm-12 col-md-12 col-lg-3'>"
                                 +"<span id='assent_jvl'></span></div>"
                                 
                                 +" <label class='col-12 col-sm-12 col-md-12 col-lg-6 ' style='text-align:left;' > การยินยอมติดตามให้ติดตามเยี่ยมหลังจำหน่วย จากเครือข่ายโดย จนท.สธ.</label>  "
                                 
                                 +"<div class='custom-control custom-radio col-12 col-sm-12 col-md-12 col-lg-3'>"
                                 +"<span id='assent_cn'></span></div>"
                                 +"<HR style='width:100%; '>"
                                
                                +"<label class='col-12 col-sm-12 col-md-4 col-lg-3  mb-3'   >  รพ.ที่ใกล้บ้าน</label> "
                                +"<div class='col-12 col-sm-12 col-md-8 col-lg-9 mb-3 '>   <span id='hos_nearby'></span><br></div>"

                                +"<label class='col-12 col-sm-12 col-md-4 col-lg-3  mb-3'  > รพ.สต.ที่ส่งต่อ (เฉพาะข้อมูล)</label>  "
                                +"<div class='col-12 col-sm-12 col-md-8 col-lg-9 mb-3'>   <span id='hos_forward'></span><br></div>"
                                +"<HR style='width:100%; '>"
                            
                                +"<div class='row col-12 col-sm-12 col-md-12 col-lg-4'><label class='col-12 col-sm-12 col-md-4 col-lg-12 '  > ปัญหาที่พบโดยสหวิชาชีพระหว่างเข้ารับการรักษา</label> </div> "
                                +"<div class='custom-control col-12 col-sm-12 col-md-12 col-lg-8'  ><div id='problem_prof'></div>"

                                
                                +"</div>"
                                +"<HR style='width:100%; color: 'orange; '>"

                                +"<div class='row col-12 col-sm-12 col-md-12 col-lg-4'><label class='col-12 col-sm-12 col-md-12 col-lg-12 ' style='text-align:left;' > สรุปปัญหาผู้ป่วย / วางแผนจำหน่าย</label> </div> "
                                +"<div class='custom-control col-12 col-sm-12 col-md-12 col-lg-8' ><div class='mb-3' id='dc_conclude'></div></div>"

                              
                                
                                // +"<label for='exampleFormControlTextarea1'>Example textarea</label>"
                                
                                +"<div class='row col-12 col-sm-12 col-md-12 col-lg-4'><label class='col-12 col-sm-12 col-md-12 col-lg-12 ' style='text-align:left;' > หมายเหตุ</label> </div> "
                                +"<div class='custom-control col-12 col-sm-12 col-md-12 col-lg-8' ><span id='dc_con_detial'></span></div>"
                                
      )   
                     




                 
                 
                 
                 
                 
                 





                 
                 
                 )
               
                 
                   
       
                  
               
                                 
                                    
                                    



     
            
    }
}
