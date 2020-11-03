var AssRegis = function(content){
    this.content = content;
    this.GetRegisForm = function () {
        $(this.content).empty().append(
            $("<div class='alert alert-success' id='test1'></div>")
            ,$("<div class='alert alert-info' id='block2'></div>")
            ,$("<div class='alert alert-warning' id='block3'></div>")
            );
        
        $("#block2").empty().append($("<div class='form-group'><label class='col-form-label'><u><b> ข้อมูลผู้ลงทะเบียน  </b></u></label></div>")
        
        
        
        ,$("<div class='row form-group '>"
         +"<div style='width: 3%;'> </div>" //หน้าว่าง
        +" <label class='row col-sm-1' >คำนำหน้า </label>  "
        +"<div style='width: 3%;'> </div>" //หน้าว่าง
        +"<div class=''></div>   <select class='col-sm-2 form-control select2 form-control-sm' id='pname' name='pname' placeholder='คำนำหน้า' required> </select>"
        
        // +"<div style='width: %;'> </div>" //หน้าว่าง
        +"<div clss='col-sm-3'><label class='col-sm-2' ;' >ชื่อ </label> </div> "
        +"<div style='width: 20%;'>   <input type='text' name='fname' id='fname' class='form-control form-control-sm '  placeholder='ชื่อ' required></div>"
     
        +"<div style='width: 5%;'> </div>" //หน้าว่าง
        +"<label style='width: 8% ;'>นามสกุล</label>  "
        +"<div style='width: 2%;'> </div>" //หน้าว่าง
        +"<div style='width: 30%;'>   <input type='text' name='lname' id='lname' class='form-control form-control-sm'  placeholder='นามสกุล' required></div></div>"
        )
        
        ,$("<div class='row form-group'>"
        +"<div style='width: 3%;'> </div>" //หน้าว่าง
        +"<label style='width: 20%;' >เลยบัตรประชาชน  </label>  "
        +"<div style='width: 30%;'>   <input type='text' name='cid' id='cid' class='form-control form-control-sm '  placeholder='เลขบัตรประชาชน' required></div>"
        +"<label style='width: 15% ;text-align : center;'>E-mail</label>  "
        +"<div style='width: 30%;'>   <input type='text' name='email' id='email' class='form-control form-control-sm'  placeholder='E-mail'></div>"
        )

        ,$("<div class='row form-group'>"
        +"<div style='width: 3%;'> </div>" //หน้าว่าง
        +"<label style='width: 20% ;text-align : left;'>โทรศัพท์ </label>  "
            + "<div style='width: 30%;'>   <input type='text' name='tel' id='tel' class='form-control form-control-sm'  placeholder='เบอร์โทรศัพท์' required></div>"
            +"<label style='width: 15% ;text-align : center;'>Line ID</label>  "
        +"<div style='width: 30%;'>   <input type='text' name='line' id='line' class='form-control form-control-sm'  placeholder='Line ID'></div>"
        )
        ,$("<div style='width:100%; '><HR></div>")//เส้นใต้

        ,$("<div class='form-group'>"
        +"<div style='width: 10%;'> </div>" //หน้าว่าง
        +"<label class='col-form-label'style='width: 20%;'><b><u> ตำแหน่ง/หน้าที่ของผู้ลงทะเบียน  </b></u></label>"
        +"</div>"
        )
        ,$("<div class='form-group col-lg-4'><select class='form-control select2 form-control-sm' id='role' name='role' required></select></div>")
        );
            
       
        $("#test1").empty().append($("<div class='form-group'><label class='col-form-label'><u><b> ข้อมูลหน่วยงาน </b></u></label></div>")
       
        ,$("<div class='row  form-group'>"
        +"<div style='width: 3%;'> </div>" //หน้าว่าง
        +"<label style='width: 15% ; text-align : left;'> ชื่อหน่วยงาน </label>  "
        +"<div style='width: 30%;'>   <select name='agency' id='agency' class='form-control select2 form-control-sm' required></select></div>"
       
        +"<label class='col-form-label'style='width: 20%;text-align : center;'> โทรศัพท์หน่วยงาน  </label> "
        +"<div style='width: 30%;'>   <input type='text' name='agency_tel' id='agency_tel' class='form-control form-control-sm'  placeholder='' required></div>"

        )
        // ,$("<div style='width:100%; '><HR></div>")//เส้นใต้

        // ,$("<div class='  form-group'>"
        // +"<div style='width: 2%;'> </div>" //หน้าว่าง
        // +"<label class='col-form-label'style='width: 15%;'><b><u> ที่อยุ่หน่วยงาน  </b></u></label>"
        
        // )

        // ,$("<div class='row  form-group'>"
        
        // +"<div style='width: 3%;'> </div>" //หน้าว่าง
        // +"<label class='col-form-label'style='width: 5%;'> เลขที่ </label> "
        // +"<div style='width: 10%;'>   <input type='village' name='village' id='village' class='form-control form-control-sm'  placeholder='เลขที่'></div>"
        
        // +"<label class='col-form-label'style='width: 10%; text-align : center;'> จังหวัด </label> "
        // +"<select class='form-control select2 form-control-sm' type='chwpart' id='chwpart' name='chwpart' placeholder='' style='width: 15%;'> </select>"

        // +"<label class='col-form-label'style='width: 10%; text-align : center;'> อำเภอ </label> "
        // +"<select class='form-control select2 form-control-sm' type='amppart' id='amppart' name='amppart' placeholder='' style='width: 15%;'> </select>"
        
        // +"<label class='col-form-label'style='width: 10%; text-align : center;'> ตำบล </label> "
        // +"<select class='form-control select2 form-control-sm' type='tmbpart' id='tmbpart' name='tmbpart' placeholder='' style='width: 15%;'> </select>"

        // )
        );

        $("#block3").empty().append($("<div class='form-group'><label class='col-form-label'><u><b> ข้อมูลการใช้งาน   </b></u></label></div>")
        
        ,$("<div class='row form-group '>"
        +"<div style='width: 10%;'> </div>" //หน้าว่าง
        +"<label style='width: 10%;' >Username  </label>  "
        +"<div style='width: 25%;'>   <input type='text' name='username' id='username' class='form-control form-control-sm '  placeholder='username' required></div>"
        
        +"</div>"
        )
        ,$("<div class='row form-group '>"
        +"<div style='width: 10%;'> </div>" //หน้าว่าง
        +"<label style='width: 10%;' >Password  </label>  "
        +"<div style='width: 25%;'>   <input type='password' name='password' id='password' class='form-control form-control-sm '  placeholder='password' required></div>"
        
        +"<div style='width: 8%;'> </div>" //หน้าว่าง
        +"<label style='width: 15% ;'>Confirm Password</label>  "
        + "<div style='width: 25%;'>   <input type='password' name='conpassword' id='conpassword' class='form-control form-control-sm '  placeholder='confirm password' required></div>"
        +"</div>"
        )
       );
            
           

            
    }
}
