var AssConfirm = function(content){
    this.content = content;
    this.GetConfForm = function () {
        $(this.content).empty().append(
            $("<div class='alert alert-success' id='test1'></div>")
            ,$("<div class='alert alert-info' id='block2'></div>")
            
            ,$("<div class='alert alert-warning' id='block3'></div>")
            

            );
        
            $("#test1").empty().append($("<div class='form-group'>  <label class='col-form-label'><u><b> ข้อมูลหน่วยงาน </b></u></label></div>")
       
            ,$("<div class='row  form-group'>"
           
            +"<label class='col-12 col-sm-12 col-md-4 col-lg-2 '   > ชื่อหน่วยงาน :</label>  "
            +"<div class='col-12 col-sm-12 col-md-8 col-lg-5  '  style='color : black;'>  <span id='inf_id'> </span> </div>"
            
            
            
            +" <label class=' col-sm-12 col-md-5 col-lg-2 '> โทรศัพท์หน่วยงาน  :</label> "
            +"<div  class=' col-sm-12 col-md-7 col-lg-2 'style='color : black;'>   <span id='agency_tell'> </span> </div>"
    
            +"<div style='width:100%; '><HR></div>"//เส้นใต้
            
            +"<label class='col-12 col-sm-12 col-md-4 col-lg-2 '   > ตำแหน่ง :</label>  "
            +"<div class='col-12 col-sm-12 col-md-8 col-lg-5 'style='color : black;'>  <span id='role'> </span> </div>"
            
            
            
            +" <label class=' col-sm-12 col-md-4 col-lg-2 ' > เวลาลงทะเบียน  :</label> "
            +"<div  class=' col-sm-12 col-md-8 col-lg-2 'style='color : black;'>   <span id='regdate'> </span> </div>"
    
            
            
            )
            );




        $("#block2").empty().append($("<div class='form-group'>  <label class='col-form-label'><u><b> ข้อมูลผู้ลงทะเบียน  </b></u></label></div>")
        
        ,$("<div class='row form-group '>"
        

        +"<label class='col-12 col-sm-3 col-md-4 col-lg-2 col-xl-2'  > ชื่อ - สกุล : </label>  "
        +"<div class='col-12 col-sm-9 col-md-8 col-lg-3 col-xl-4'  style='color : black;'>   <span id='fullname'> </span></div>"
        
        
        +"<label class='col-12 col-sm-3 col-md-4 col-lg-2 col-xl-2'  > เลขบัตรประชาชน :</label>  "
        +"<div class='col-12 col-sm-9 col-md-8 col-lg-2 col-xl-4' style='color : black;'>    <span id='cid'> </span></div>"
     
        +"</div>"

        +"<div style='width:100%; '><HR></div>" //เส้นใต้
        )
        ,$("<div class='row form-group '>" 

        +"<label class='col-12 col-sm-3 col-md-4 col-lg-1 col-xl-1'  >โทรศัพท์ : </label>  "
        +"<div class='col-12 col-sm-9 col-md-8 col-lg-2 col-xl-2' style='color : black;'>   <span id='tell'> </span> </div>"

         +"<label class='col-12 col-sm-3 col-md-4 col-lg-1 '  >         E-mail : </label>  "
         +"<div class='col-12 col-sm-9 col-md-8 col-lg-3' style='color : black;'>   <span id='email'> </span></div>  "
        
         +"<label class='col-12 col-sm-3 col-md-4 col-lg-1' >      Line ID :</label>  "
         +"<div class='col-12 col-sm-9 col-md-8 col-lg-3'style='color : black;'>   <span id='line'> </span></div>"

        +"</div>"
        )
        
        

        );


        $("#block3").empty().append($("<div class='form-group'><label class='col-form-label'><u><b> พิจารณา   </b></u></label></div>")
        
        ,$("<div class='row  form-group '>"

        +"<div class='col-sm-3 col-lg-2'>  </div>   <input   ' type='radio' id='blankCheckbox' name='confirm' value='1' aria-label='...'>            <label class='col-12 col-sm-3 col-md-3 col-lg-2 justify-content-md-center' justify-content-md-center >      ยืนยัน</label>  "
        +"<input   type='radio' id='blankCheckbox' name='confirm' value='0' aria-label='...' checked>     <label class='col-12 col-sm-3 col-md-3 col-lg-2' >  ไม่ยืนยัน </label>"


        +"</div>"
        )
        
       );
            
           

            
    }
}
