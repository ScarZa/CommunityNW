var AssRegis = function(content){
    this.content = content;
    this.GetRegisForm = function () {
        $(this.content).empty().append(
            $("<div class='alert alert-success' id='test1'></div>")
            ,$("<div class='alert alert-info' id='block2'></div>")
            ,$("<div class='alert alert-success' id='block4'></div>")
            ,$("<div class='alert alert-warning' id='block3'></div>")
            

            );
        
            $("#test1").empty().append($("<div class='form-group'>  <label class='col-form-label'><u><b> ข้อมูลหน่วยงาน </b></u></label></div>")
       
            ,$("<div class='row  form-group'>"
            // +"<div style='width: 3%;'> </div>" //หน้าว่าง
            +"<label class='col-12 col-sm-12 col-md-4 col-lg-2 '  style='text-align : center;' > ชื่อหน่วยงาน </label>  "
            +"<div class='col-12 col-sm-12 col-md-8 col-lg-4 '>   <select name='agency' id='agency' class='form-control select2 form-control-sm' required></select></div>"
            
            
            
            +" <label class=' col-sm-12 col-md-4 col-lg-3 ' style='text-align : center;'> โทรศัพท์หน่วยงาน  </label> "
            +"<div  class=' col-sm-12 col-md-8 col-lg-3 '>   <input type='text' name='agency_tel' id='agency_tel' class='form-control form-control-sm'  placeholder='' required></div>"
    
            )
            );



            $("#block4").empty().append($("<div class='form-group'>  <label class='col-form-label'><u><b> ตำแหน่ง/หน้าที่ของผู้ลงทะเบียน </b></u></label></div>")
            ,$("<div class='row  form-group'>"
            +"<div class='col-12  col-lg-2'>   </div> <div class='col-12 col-sm-12 col-md-12 col-lg-3 ' form-group'><select class='form-control select2 form-control-sm' id='role' name='role' required></select></div>"
            )
            );

        $("#block2").empty().append($("<div class='form-group'>  <label class='col-form-label'><u><b> ข้อมูลผู้ลงทะเบียน  </b></u></label></div>")
        
        ,$("<div class='row form-group '>"
        //  +"<div style='width: 3%;'> </div>" //หน้าว่าง

        +"<label class='col-12 col-sm-3 col-md-4 col-lg-2 '  > คำนำหน้า </label>  "
        +"<div class='col-12 col-sm-9 col-md-8 col-lg-2 ' >    <select class='form-control select2 form-control-sm' id='pname' name='pname' placeholder='คำนำหน้า' required> </select></div>"
        
        // +"<div style='width: %;'> </div>" //หน้าว่าง
        +"<label class='col-12 col-sm-3 col-md-4 col-lg-1'  >ชื่อ </label>  "
        +"<div class='col-12 col-sm-9 col-md-8 col-lg-3'>   <input type='text' name='fname' id='fname' class='form-control form-control-sm '  placeholder='ชื่อ' required></div>"
     
        +"<label class='col-12 col-sm-3 col-md-4 col-lg-1'  >นามสกุล</label>  "
        +"<div class='col-12 col-sm-9 col-md-8 col-lg-3'>   <input type='text' name='lname' id='lname' class='form-control form-control-sm'  placeholder='นามสกุล' required></div>"
        +"</div>"
        )
        
        ,$("<div class='row form-group'>"
        
        +"<label class='col-12 col-sm-3 col-md-4 col-lg-2' >           เลยบัตรประชาชน  </label>  "
        +"<div class='col-12 col-sm-9 col-md-8 col-lg-3'>               <input   type='text' name='cid' id='cid' class='form-control form-control-sm '  placeholder='เลขบัตรประชาชน' required></div>"
        
        +"<div class='col-12  col-lg-1'>   </div>  <label class='col-12 col-sm-3 col-md-4 col-lg-1 '  >         E-mail </label>  "
        +"<div class='col-12 col-sm-9 col-md-8 col-lg-3'>   <input  type='text' name='email' id='email' class='form-control form-control-sm'  placeholder='E-mail'></div>  "
        )

        ,$("<div class='row form-group'>"
        
        +"<label class='col-12 col-sm-3 col-md-4 col-lg-2'>   โทรศัพท์ </label> "
        + "<div class='col-12 col-sm-9 col-md-8 col-lg-3'>   <input type='text' name='tel' id='tel' class='form-control form-control-sm'  placeholder='เบอร์โทรศัพท์' required></div>"
        +"<div class='col-12  col-lg-1'>   </div>     <label class='col-12 col-sm-3 col-md-4 col-lg-1' >      Line ID</label>  "
        +"<div class='col-12 col-sm-9 col-md-8 col-lg-3'>   <input type='text' name='line' id='line' class='form-control form-control-sm'  placeholder='Line ID'></div>"
        )
       
       
       
        // ,$("<div style='width:100%; '><HR></div>")//เส้นใต้

        );


        $("#block3").empty().append($("<div class='form-group'><label class='col-form-label'><u><b id='titleUP'> ข้อมูลการใช้งาน   </b></u></label></div>")
        
        ,$("<div class='row form-group '>"
        
        +"<label class='col-12 col-sm-3 col-md-4 col-lg-2' > Username  </label>  "
        +"<div class='col-12 col-sm-9 col-md-8 col-lg-3'>   <input type='text' name='username' id='username' class='form-control form-control-sm '  placeholder='username' required></div>"
        
        +"</div>"
        )
        ,$("<div class='row form-group '>"
        
        +"<label class='col-12 col-sm-3 col-md-4 col-lg-2' >Password  </label>  "
        +"<div class='col-12 col-sm-9 col-md-8 col-lg-3'>   <input type='password' name='password' id='password' class='form-control form-control-sm '  placeholder='password' required></div>"
        
        // +"<div style='width: 8%;'> </div>" //หน้าว่าง
        +"<label class=' col-12 col-sm-3 col-md-4 col-lg-2'>Confirm Password</label>  "
        + "<div class='col-12 col-sm-9 col-md-8 col-lg-3' style='text-align : right;'>   <input type='password' name='conpassword' id='conpassword' class='form-control form-control-sm '  placeholder='confirm password' required></div>"
        +"</div>"
        )
       );
            
           

            
    }
}
