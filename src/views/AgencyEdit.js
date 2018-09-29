var m = require("mithril")
var Agency = require("../models/Agency")
var AgencyForm = require("./AgencyForm")

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
                    m(AgencyForm, {agency: Agency.selected} ),

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