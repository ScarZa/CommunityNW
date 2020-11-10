var AssLogin = function(content){
    this.content = content;
    this.GetLoginForm = function () {
        $(this.content).empty().append(
            $("<div class='alert alert-success' id='test1'></div>")
            //,$("<div class='alert alert-info' id='block2'></div>")
            //,$("<div class='alert alert-success' id='block4'></div>")
            //,$("<div class='alert alert-warning' id='block3'></div>")
            

            );
        
            $("#test1").empty().append($("<div class='row  form-group'>"
           
            +"<label class='col-12 col-sm-12 col-md-4 col-lg-4'> USERNAME :</label>  "
            + "<div class='col-12 col-sm-12 col-md-8 col-lg-8'> <input type='text' class='form-control' name='username' id='username' placeholder='username'></div>"
            +"<div style='width:100%; '><HR></div>"
            +" <label class='col-sm-12 col-md-4 col-lg-4'> PASSWORD :</label> "
            +"<div  class='col-sm-12 col-md-8 col-lg-8'> <input type='password' class='form-control' name='password' id='password' placeholder='password'></div>"
            )
            );


    }
}
