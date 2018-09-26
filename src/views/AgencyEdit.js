var m = require("mithril")
var Agency = require("../models/Agency")

function moveProgress(width, intervalStart, intervalEnd) {
    var elem = document.getElementById("myBar"); 
    var width = width;
    var id = setInterval(frame, intervalStart);
    function frame() {
        if (width >= intervalEnd) {
            clearInterval(id);
        } else {
            width++; 
            elem.style.width = width + '%'; 
        }
    }
}
module.exports = {
    oninit: function() { moveProgress(10, 10, 30) } ,
    view: function() {
    	return( 
    		m("div.row",[  
                m("div.agencyedit col-md-12",[                 
    		    m("form", [
                m("div.form-group[style=width:300px]",
                    m("legend[style=font-size:16px]", Agency.selected.name),
                    m("label", "Full Physical Address"),
                    m("input.form-control[type=text]", {value: Agency.selected.physical_address,
                                            oninput: function(e) {
                                                    Agency.selected.physical_address = e.currentTarget.value;
                                                }
                                            }
                        ),
                    m("label", "Phone Number"),
                    m("input.form-control[type=text]", { value:  Agency.selected.phone_number ,
                                                oninput: function(e) {
                                                   Agency.selected.phone_number = e.currentTarget.value;
                                                    }
                                            }
                                    )
                    ),

                	]),

                  m("div.buttons",
                  m("button.btn btn-default[type=submit]", {
                        href: "/selectagency", 
                        oncreate: m.route.link

                        },"Previous"),

                  m("button.btn btn-default[type=submit][style=margin-left:10px]", {
                        href: "/selectprogram", 
                        oncreate: m.route.link
                        },"Next")
                    )
    		    ])
            ])

    	)
            
    }
}