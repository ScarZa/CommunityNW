$("div#head-nav").empty().append($("<a class='' href='#' id='sidebarCollapse'><img src='images/icon_set2/compose.ico' width='20' class='d-inline-block align-top' alt=''><span style='color: #fff'> Community Network V.1.0</span></a>")
                                ,$("<button class='navbar-toggler' type='button' data-toggle='collapse' data-target='#navbarNavDropdown' aria-controls='navbarNavDropdown' aria-expanded='false' aria-label='Toggle navigation'><span class='navbar-toggler-icon'></span></button>")
                                ,$("<div class='collapse navbar-collapse' id='navbarNavDropdown1'><ul class='navbar-nav' id='fontDropdown'></ul></div>")
                                ,$("<div class='collapse navbar-collapse justify-content-end' id='navbarNavDropdown'><ul class='navbar-nav' id='backDropdown'></ul></div>"));
$("ul.navbar-nav#backDropdown").empty().append($("<li class='nav-item' id='log'></li>"));
$("div#foot-nav").empty().append($("<span style='color: white'>Copyright &copy; 2018 <a class='linkfoot' href='https://www.facebook.com/thapanapong.deeudomchan' target='_blank'>ScarZ</a>.</span> All rights reserved.")
        ,$("<div class='pull-right hidden-xs'><span id='version' style='color: white'></span></div>"));
$("#version").append("<b>Version</b> 1.0");    
                    
$("li#log").append("<a href='#' data-toggle='modal' data-target='#RegisModal' class='btn btn-sm btn-warning' title='ลงทะเบียนเพื่อใช้บริการ' id='register'>ลงทะเบียน</a>")

$("a#register").attr("onclick","RegisModal();");
