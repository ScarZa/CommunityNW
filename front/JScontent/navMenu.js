$("div#head-nav").empty().append($("<a class='' href='#' id='sidebarCollapse'><img src='images/icon_set2/compose.ico' width='20' class='d-inline-block align-top' alt=''><span style='color: #fff'> Community Network V.1.0</span></a>")
                                ,$("<button class='navbar-toggler' type='button' data-toggle='collapse' data-target='#navbarNavDropdown' aria-controls='navbarNavDropdown' aria-expanded='false' aria-label='Toggle navigation'><span class='navbar-toggler-icon'></span></button>")
                                ,$("<div class='collapse navbar-collapse' id='navbarNavDropdown1'><ul class='navbar-nav' id='fontDropdown'></ul></div>")
                                ,$("<div class='collapse navbar-collapse justify-content-end' id='navbarNavDropdown'><ul class='navbar-nav' id='backDropdown'></ul></div>"));
$("ul.navbar-nav#backDropdown").empty().append($("<li class='nav-item dropdown' id='list01'></li> &nbsp; <li class='' id='log'></li>"));
$("div#foot-nav").empty().append($("<span style='color: white'>Copyright &copy; 2018 <a class='linkfoot' href='https://www.facebook.com/thapanapong.deeudomchan' target='_blank'>ScarZ</a>.</span> All rights reserved.")
        ,$("<div class='pull-right hidden-xs'><span id='version' style='color: white'></span></div>"));
$("#version").append("<b>Version</b> 1.0");    
                    
$("li#log").append($("<a href='#' data-toggle='modal' data-target='#RegisModal' class='btn btn-sm btn-warning' title='ลงทะเบียนเพื่อใช้บริการ' id='register'>ลงทะเบียน</a> &nbsp;")
        , $(" <a href='#' data-toggle='modal' data-target='#LoginModel' class='btn btn-sm btn-info' title='' id='login'>เข้าสู่ระบบ</a>")
);
$("li#list01").append($("<a class='dropdown-toggle btn btn-sm btn-success' href='#' id='navbarDropdown ' role='button' data-toggle='dropdown' aria-haspopup='true' aria-expanded='false'>"
        + " เอกสาร &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</a><div class='dropdown-menu dropdown-menu-right' aria-labelledby='navbarDropdown'>"
        + "<a class='dropdown-item' href='#' id='secret'>หนังสือข้อตกลงรักษาความลับข้อมูลส่วนตัว</a></div> "));
//$("li#list01").append($("<a href='#' data-toggle='dropdown' class='dropdown-toggle btn btn-sm btn-success' title='เอกาสรต่างๆ' id='register'>เอกสาร</a>"))
// $("a#register").attr("onclick","RegisModal();");
// $("a#login").attr("onclick", "LoginModel();");
//console.log($.cookie('reg_id'))
if ($.cookie('reg_id') != undefined && $.cookie('reg_id') != 'undefined') {
        if($.cookie('mem_status')=='ADMIN'){$("head").append("<link rel='stylesheet' href='plugins/slidebar/style2.css'>")}else{$("nav#sidebar").hide();}
        
        //$("div.wrapper#main").prepend("<nav id='sidebar' class='scroll></nav>")
        $("li#list01").hide();
        $("#register").hide();
        $("#login").hide();
        $("#logout").show();
        $("li#log").append($("<a href='#' class='btn btn-sm btn-danger' title='' id='logout'>ออกจากระบบ</a>")
        );
        $("a#logout").attr("onclick","Logout();");
} else {
        $("nav#sidebar").hide();
        $("#register").show();
        $("#login").show();
        $("#logout").hide();
        $("a#register").attr("onclick","RegisModal();");
        $("a#login").attr("onclick", "LoginModel();");
        $("a#secret").attr("onclick", "window.open('Docs/หนังสือข้อตกลงรักษาความลับข้อมูลส่วนตัว.docx', '', 'width=600,height=800'); return false;");
}

function Logout() {
        $.removeCookie("reg_id");
        $.removeCookie("token_key");
        $.removeCookie("role");
        $.removeCookie("inf_id");
        $.removeCookie("mem_status");
        alert('logout เรียบร้อยครับ');
        window.location.reload();
}
