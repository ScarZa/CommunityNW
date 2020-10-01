var AssRegis = function(content){
    this.content = content;
    this.GetRegisForm = function () {
        $(this.content).empty().append(
            $("<div class='alert alert-success' id='test1'></div>")
            ,$("<div class='alert alert-info' id='block2'></div>")
            ,$("<div class='alert alert-warning' id='block3'></div>")
            );
        
        $("#test1").empty().append($("<div class='form-group'><label class='col-form-label'><u><b> ข้อมูลผู้ลงทะเบียน  </b></u></label></div>")
        
        ,$("<div class='row form-group'>"
        +"<label style='width: 10%;' >คำนำหน้า </label>  "
        +"<select class='form-control select2 form-control-sm type='pname' id='pname' name='pname' placeholder='คำนำหน้า' style='width: 15%;'> </select>"
        
        +"<label style='width: 10% ;text-align : center;' >ชื่อ </label>  "
        +"<div style='width: 25%;'>   <input type='fname' name='fname' id='fname' class='form-control form-control-sm '  placeholder='ชื่อ'></div>"

        +"<label style='width: 15% ;text-align : center;'>นามสกุล</label>  "
        +"<div style='width: 25%;'>   <input type='lname' name='lname' id='lname' class='form-control form-control-sm'  placeholder='นามสกุล'></div></div>"
        )

        ,$("<div class='row form-group'>"
        +"<label style='width: 20%;' >เลยบัตรประชาชน  </label>  "
        +"<div style='width: 30%;'>   <input type='cid' name='cid' id='cid' class='form-control form-control-sm '  placeholder='เลขบัตร'></div>"
        +"<label style='width: 15% ;text-align : center;'>E-mail</label>  "
        +"<div style='width: 30%;'>   <input type='email' name='email' id='email' class='form-control form-control-sm'  placeholder='E-mail'></div>"
        )

        ,$("<div class='row form-group'>"
        +"<label style='width: 20% ;text-align : left;'>โทรศัพท์ </label>  "
        +"<div style='width: 30%;'>   <input type='tel' name='tel' id='tel' class='form-control form-control-sm'  placeholder='เบอร์โทร'></div>"
        )
        );
            
       
        $("#block2").empty().append($("<div class='form-group'><label class='col-form-label'><u><b> ข้อมูลหน่วยงาน  </b></u></label></div>")
       
        ,$("<div class='row  form-group'>"
        +"<label style='width: 20% ; text-align : left;'> ชื่อหน่วยงาน </label>  "
        +"<div style='width: 50%;'>   <input type='agency' name='agency' id='agency' class='form-control form-control-sm'  placeholder=''></div>"
        )

        ,$("<div class='row  form-group'>"
        
        +"<label class='col-form-label'style='width: 8%;'><b> ที่อยุ่  </b></label>"
        +"<label class='col-form-label'style='width: 8%;'> เลขที่ </label> "
        +"<div style='width: 10%;'>   <input type='village' name='village' id='village' class='form-control form-control-sm'  placeholder='เลยที่'></div>"
        
        +"<label class='col-form-label'style='width: 10%; text-align : center;'> ตำบล </label> "
        +"<select class='form-control select2 form-control-sm type='tmbpart' id='tmbpart' name='tmbpart' placeholder='' style='width: 14%;'> </select>"

        +"<label class='col-form-label'style='width: 10%; text-align : center;'> อำเภอ </label> "
        +"<select class='form-control select2 form-control-sm type='amppart' id='amppart' name='amppart' placeholder='' style='width: 14%;'> </select>"

        +"<label class='col-form-label'style='width: 10%; text-align : center;'> จังหวัด </label> "
        +"<select class='form-control select2 form-control-sm type='chwpart' id='chwpart' name='chwpart' placeholder='' style='width: 14%;'> </select>"
        )
        
        ,$("<div class='row  form-group'>"
        +"<label class='col-form-label'style='width: 20%;text-align : left;'> โทรศัพท์หน่วยงาน  </label> "
        +"<div style='width: 30%;'>   <input type='Agency_tel' name='Agency_tel' id='Agency_tel' class='form-control form-control-sm'  placeholder=''></div>"
        )
        
        

        );

        $("#block3").empty().append($("<div class='form-group'><label class='col-form-label'><u><b> ข้อมูลการใช้งาน   </b></u></label></div>")
            
            
            
        );
            
           

            
    }
}
