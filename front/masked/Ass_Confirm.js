var AssConfirm = function(content){
    this.content = content;
    this.GetConfForm = function () {
        $(this.content).empty().append(
            $("<div class='alert alert-success' id='test1'></div>")
            ,$("<div class='alert alert-info' id='block2'></div>")
            //,$("<div class='alert alert-success' id='block4'></div>")
            ,$("<div class='alert alert-warning' id='block3'></div>")
            

            );
        
            $("#test1").empty().append($("<div class='form-group'>  <label class='col-form-label'><u><b> ข้อมูลหน่วยงาน </b></u></label></div>")
       
            ,$("<div class='row  form-group'>"
           
            +"<label class='col-12 col-sm-12 col-md-4 col-lg-2 '   > ชื่อหน่วยงาน :</label>  "
            +"<div class='col-12 col-sm-12 col-md-8 col-lg-4  '>  <span id='inf_id'> </span> </div>"
            
            
            
            +" <label class=' col-sm-12 col-md-4 col-lg-3 '> โทรศัพท์หน่วยงาน  :</label> "
            +"<div  class=' col-sm-12 col-md-8 col-lg-3 '>   <span id='agency_tell'> </span> </div>"
    
            
            +"<label class='col-12 col-sm-12 col-md-4 col-lg-2 '   > ตำแหน่ง :</label>  "
            +"<div class='col-12 col-sm-12 col-md-8 col-lg-4 '>  <span id='role'> </span> </div>"
            
            
            
            +" <label class=' col-sm-12 col-md-4 col-lg-3 ' > เวลาลงทะเบียน  :</label> "
            +"<div  class=' col-sm-12 col-md-8 col-lg-3 '>   <span id='regdate'> </span> </div>"
    
            
            
            )
            );




        $("#block2").empty().append($("<div class='form-group'>  <label class='col-form-label'><u><b> ข้อมูลผู้ลงทะเบียน  </b></u></label></div>")
        
        ,$("<div class='row form-group '>"
        //  +"<div style='width: 3%;'> </div>" //หน้าว่าง

        +"<label class='col-12 col-sm-3 col-md-4 col-lg-2'  > ชื่อ - สกุล : </label>  "
        +"<div class='col-12 col-sm-9 col-md-8 col-lg-3 '>   <span id='fullname'> </span></div>"
        
        // +"<div style='width: %;'> </div>" //หน้าว่าง
        +"<label class='col-12 col-sm-3 col-md-4 col-lg-2'  > เลขบัตรประชาชน :</label>  "
        +"<div class='col-12 col-sm-9 col-md-8 col-lg-2 '>    <span id='cid'> </span></div>"
     
        +"<label class='col-12 col-sm-3 col-md-4 col-lg-1'  >โทรศัพท์ : </label>  "
        +"<div class='col-12 col-sm-9 col-md-8 col-lg-2'>   <span id='tell'> </span> </div>"
        +"</div>"
        )
        ,$("<div class='row form-group '>"
        
         +"<label class='col-12 col-sm-3 col-md-4 col-lg-2 '  >         E-mail </label>  "
         +"<div class='col-12 col-sm-9 col-md-8 col-lg-3'>   <span id='email'> </span></div>  "
        
         +"<label class='col-12 col-sm-3 col-md-4 col-lg-2' >      Line ID</label>  "
         +"<div class='col-12 col-sm-9 col-md-8 col-lg-3'>   <span id='line'> </span></div>"

        +"</div>"
        )
        
        
        
        
        
        // ,$("<div class='row form-group'>"
        
        // +"<label class='col-12 col-sm-3 col-md-4 col-lg-2' >           เลขบัตรประชาชน  </label>  "
        // +"<div class='col-12 col-sm-9 col-md-8 col-lg-3'>               <input   type='text' name='cid' id='cid' class='form-control form-control-sm '  placeholder='เลขบัตรประชาชน' required></div>"
        
        // +"<div class='col-12  col-lg-1'>   </div>  <label class='col-12 col-sm-3 col-md-4 col-lg-1 '  >         E-mail </label>  "
        // +"<div class='col-12 col-sm-9 col-md-8 col-lg-3'>   <input  type='text' name='email' id='email' class='form-control form-control-sm'  placeholder='E-mail'></div>  "
        // )

        // ,$("<div class='row form-group'>"
        
        // +"<label class='col-12 col-sm-3 col-md-4 col-lg-2'>   โทรศัพท์ </label> "
        // + "<div class='col-12 col-sm-9 col-md-8 col-lg-3'>   <input type='text' name='tel' id='tel' class='form-control form-control-sm'  placeholder='เบอร์โทรศัพท์' required></div>"
        // +"<div class='col-12  col-lg-1'>   </div>     <label class='col-12 col-sm-3 col-md-4 col-lg-1' >      Line ID</label>  "
        // +"<div class='col-12 col-sm-9 col-md-8 col-lg-3'>   <input type='text' name='line' id='line' class='form-control form-control-sm'  placeholder='Line ID'></div>"
        // )
       
       
       
        // ,$("<div style='width:100%; '><HR></div>")//เส้นใต้

        );


        $("#block3").empty().append($("<div class='form-group'><label class='col-form-label'><u><b> พิจารณา   </b></u></label></div>")
        
        ,$("<div class='row container  form-group '>"

        +"<div class='col-lg-2'>  </div>   <input class='' type='radio' name='confirm' value='1' aria-label='...'>            <label class='col-12 col-sm-3 col-md-3 col-lg-3' >      ยืนยัน</label>  "
        +"<input class='' type='radio' name='confirm' value='0' aria-label='...' checked>     <label class='col-12 col-sm-3 col-md-3 col-lg-3' >  ไม่ยืนยัน </label>"
        +"</div>"
        )
       );
    }
}
