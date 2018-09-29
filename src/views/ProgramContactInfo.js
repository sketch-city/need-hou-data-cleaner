var m = require("mithril")
var Agency = require("../models/Agency")

function formatMapQuery(address){
  var queryp1 = "https://www.google.com/maps/dir/?api=1&destination="
  var queryp2 = "&travelmode=transit"
  var formatted = queryp1 + escape(address) + queryp2
  return(formatted)
}

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
oninit: function() { moveProgress(40, 40, 50) } ,
view: function(vnode) {	
	return(
		    m("div.row",[  
                m("div.agencyedit col-md-12",[                 
    		    m("form", [
                m("div.form-group[style=width:400px]",
                  m("legend[style=font-size:16px]"),
              		m("label", "Program Name"),
							m("input.form-control[type=text]",{ value: vnode.attrs.program.name,
																oninput: function(e) { 
		                                                    vnode.attrs.program.name = e.currentTarget.value;
		                                                                    } }),
					m("label", "Program Description"),
							m("textarea.form-control",{ 
								value: vnode.attrs.program.description, 
								//oninput: m.withAttr("value", function(v) {state.term = v}), value: state.term}
								//value: state.description,
								oninput: function(e) {
													vnode.attrs.program.description  = e.currentTarget.value;
													}
																}),
          m("label", "Program Full Physical Address"),
            m("input.form-control[type=text]",{ value: vnode.attrs.program.physical_address,
                                          oninput: function(e) {
                                                                            vnode.attrs.program.physical_address = e.currentTarget.value;
                                                                        }
                                                              }),
            m("label", "Program Webpage"),
              m("input.form-control[type=text]",{ value: vnode.attrs.program.website,
                oninput: function(e) {
                          vnode.attrs.program.website  = e.currentTarget.value;
                          }
                     }),
            m("label", "Program Schedule"),
              m("textarea.form-control",{ value: vnode.attrs.program.hours,
                oninput: function(e) {
                          vnode.attrs.program.hours  = e.currentTarget.value;
                          }
                     }),
            m("label", "Program Holiday Schedule"),
              m("textarea.form-control",{ value: vnode.attrs.program.holiday_schedule,
                oninput: function(e) {
                          vnode.attrs.program.holiday_schedule  = e.currentTarget.value;
                          }
                     }),
            m("label", "Program Transportation"),
              m("textarea.form-control",{ value: vnode.attrs.program.transportation  = formatMapQuery(vnode.attrs.program.physical_address)
                     }),
            m("label", "Program Contact First Name"),
              m("input.form-control[type=text]",{ value: vnode.attrs.program.contact_firstname,
                                oninput: function(e) { vnode.attrs.program.contact_firstname = e.currentTarget.value;
                                                                        } }),
            m("label", "Program Contact Last Name"),
              m("input.form-control[type=text]",{ value: vnode.attrs.program.contact_lastname,oninput: function(e) {
                                                                           vnode.attrs.program.contact_lastname = e.currentTarget.value;
                                                                        }                       }),
            m("label", "Program Contact Title"),
              m("input.form-control[type=text]",{ value: vnode.attrs.program.contact_title,oninput: function(e) {
                                                                           vnode.attrs.program.contact_title = e.currentTarget.value;
                                                                        }                       }),
            m("label", "Program Contact Email"),
              m("input.form-control[type=text]",{ value: vnode.attrs.program.contact_email,oninput: function(e) {
                                                                           vnode.attrs.program.contact_email = e.currentTarget.value;
                                                                        }                       }),
            m("label", "Program Contact Phone"),
              m("input.form-control[type=text]",{ value: vnode.attrs.program.contact_phone,oninput: function(e) {
                                                                           vnode.attrs.program.contact_phone = e.currentTarget.value;
                                                                        }                       })
         
                    ),

                	]),

                  m("div.buttons",
                  m("button.btn btn-default[type=submit]", {
                        href: vnode.attrs.previous_link, 
                        oncreate: m.route.link

                        },"Previous"),

                  m("button.btn btn-default[type=submit][style=margin-left:10px]", {
                        href: vnode.attrs.next_link,
                        oncreate: m.route.link
                        },"Next")
                    )
    		    ])
            ])











		)
	}	

}