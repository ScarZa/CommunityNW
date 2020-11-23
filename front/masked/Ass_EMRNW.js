var AssEMRNW = function(content){
    this.content = content;
    this.GetEMRNWForm = function () {
        $(this.content).empty().append(
          $("<div class='row' id='cgi-post'>"
          + "<div id='EMR-data' class='col-lg-10 scroll'></div><div class='col-lg-2 scroll' id='vdate'></div>"
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
                                ,$("<div class='card border-success'><div class='card-header'><b id='vstdate'></b> <b id='vsttime'></b> <b id='ovstistname'></b> <b id='nextdate' style='color: red'></b></div><div id='' class='card-body'>"
                                    +"<div class='col-lg-12 col-md-12 col-sm-12 row'><div class='col-lg-3 col-md-6 col-sm-6' style='text-align:right;'><b>สิทธิรักษาประจำตัว : </b></div><div class='row col-lg-9 col-md-6 col-sm-6' id='ptname2'> </div></div>" 
                                    +"<div class='col-lg-12 col-md-12 col-sm-12 row'><div class='col-lg-3 col-md-6 col-sm-6' style='text-align:right;'><b>สถานพยาบาลหลัก : </b></div><div class='row col-lg-9 col-md-6 col-sm-6' id='Dhospital'> </div></div>"
                                    +"<div class='col-lg-12 col-md-12 col-sm-12 row'><div class='col-lg-3 col-md-6 col-sm-6' style='text-align:right;'><b>หมดอายุ : </b></div><div class='row col-lg-2 col-md-6 col-sm-6' id='pttype_expire'> </div>"
                                    +"<div class='col-lg-3 col-md-6 col-sm-6' style='text-align:right;'><b>ใบส่งตัวหมดอายุ : </b></div><div class='row col-lg-2 col-md-6 col-sm-6' id='expire_date'> </div></div>"
                                    +"<div class='col-lg-12 col-md-12 col-sm-12 row'><div class='col-lg-3 col-md-6 col-sm-6' style='text-align:right;'><b>แพทย์ผู้รักษา : </b></div><div class='row col-lg-9 col-md-6 col-sm-6' id='docName'> </div></div>"
                                    +"<div class='col-lg-12 col-md-12 col-sm-12 row'><div class='col-lg-3 col-md-6 col-sm-6' style='text-align:right;'><u><b>การวินิจฉัย</b></u></div></div>"
                                    +"<div class='col-lg-12 col-md-12 col-sm-12 row'><div class='col-lg-3 col-md-6 col-sm-6' style='text-align:right;'><b>PDX : </b></div><div class='row col-lg-9 col-md-6 col-sm-6' id='dxname1'> </div></div>"
                                    +"<div class='col-lg-12 col-md-12 col-sm-12 row'><div class='col-lg-3 col-md-6 col-sm-6' style='text-align:right;'><b>Dx.2 : </b></div><div class='row col-lg-9 col-md-6 col-sm-6' id='dxname2'> </div></div>"
                                    +"<div class='col-lg-12 col-md-12 col-sm-12 row'><div class='col-lg-3 col-md-6 col-sm-6' style='text-align:right;'><b>DX.3 : </b></div><div class='row col-lg-9 col-md-6 col-sm-6' id='dxname3'> </div></div>"
                                    +"<div class='col-lg-12 col-md-12 col-sm-12 row'><div class='col-lg-3 col-md-6 col-sm-6' style='text-align:right;'><b>Dx.4 : </b></div><div class='row col-lg-9 col-md-6 col-sm-6' id='dxname4'> </div></div>"
                                    +"</div></div><p></p>")
                                ,$("<div class='card border-success'><div class='card-header'><b>Screening</b></div><div id='' class='card-body'>"
                                +"<div class='col-lg-12 col-md-12 col-sm-12 alert alert-success'><div class='col-lg-12 col-md-12 col-sm-12 row'><div class='col-lg-2 col-md-4 col-sm-4' style='text-align:right;'><b>น้ำหนัก : </b></div><div class='row col-lg-2 col-md-8 col-sm-8' id='bw'></div>"
                                    +"<div class='col-lg-1 col-md-4 col-sm-4' style='text-align:right;'><b>สูง : </b></div><div class='row col-lg-2 col-md-8 col-sm-8' id='height'> </div>"
                                    +"<div class='col-lg-1 col-md-4 col-sm-4' style='text-align:right;'><b>ฺBMI : </b></div><div class='row col-lg-2 col-md-8 col-sm-8' id='bmi'> </div></div>"
                                    +"<div class='col-lg-12 col-md-12 col-sm-12 row'><div class='col-lg-2 col-md-4 col-sm-4' style='text-align:right;'><b>Temp. : </b></div><div class='row col-lg-2 col-md-8 col-sm-8' id='temp'> </div>"
                                    +"<div class='col-lg-1 col-md-4 col-sm-4' style='text-align:right;'><b>PR : </b></div><div class='row col-lg-2 col-md-8 col-sm-8' id='pr'> </div>"
                                    +"<div class='col-lg-1 col-md-4 col-sm-4' style='text-align:right;'><b>RR : </b></div><div class='row col-lg-2 col-md-8 col-sm-8' id='rr'> </div>"
                                    +"<div class='col-lg-1 col-md-4 col-sm-4' style='text-align:right;'><b>BP : </b></div><div class='row col-lg-2 col-md-8 col-sm-8' id='bps'> </div></div>"
                                    // +"<div class='col-lg-12 row'><div class='col-lg-2' style='text-align:right;'><b>CGI-S : </b></div><div class='row col-lg-2' id='cgi'></div>"
                                    // +"<div class='col-lg-1' style='text-align:right;'><b>9Q : </b></div><div class='row col-lg-2' id='Q9'> </div>"
                                    // +"<div class='col-lg-1' style='text-align:right;'><b>8Q : </b></div><div class='row col-lg-2' id='Q8'> </div></div>"
                                    +"</div>"
                                +"<div class='col-lg-12'>"
                                    +"<p class='row alert alert-info' id='cc'><b>CC : </b></p>"
                                    +"<p class='row alert alert-primary' role='alert' id='hpi'><b>HPI : </b></p>"
                                    +"<p class='row alert alert-warning' id='pmh'><b>PMH : </b></p></div>"
                                    +"</div></div><p></p>")
                                ,$("<div class='card border-success'><div class='card-header'><b>Rx Order</b></div><div id='Rx-body' class='card-body'>"
                                    +"</div></div><p></p>")
                                // ,$("<div class='card border-success'><div class='card-header'><b>ผลการประเมิน</b></div><div id='graph-body' class='card-body'>"
                                //     +"</div></div>")
                                );
            
    }
}