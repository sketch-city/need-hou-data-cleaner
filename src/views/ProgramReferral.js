var m = require("mithril")
var Agency = require("../models/Agency")

function getSelectedOptions(sel) {

  var opts = [],
    opt;
  var len = sel.options.length;
  for (var i = 0; i < len; i++) {
    opt = sel.options[i];

    if (opt.selected) {
      opts.push(opt.label);
    }
  }

  return opts;
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
oninit: function() { moveProgress(50, 50, 70) } ,
view: function(vnode) {	
	return(
		    m("div.row",[  
                m("div.agencyedit col-md-12",[                 
    		    m("form", [
                m("div.form-group[style=width:400px]",
                  m("legend[style=font-size:16px]", Agency.selected.name),
                  m("label", "Program Need Domain"),
                   m("select.form-control[name=needareaselect][multiple=multiple][id=needareaselect]",
                      { value: vnode.attrs.program.service_type ,
                        onblur: function(e) { 
                          vnode.attrs.program.service_type  = getSelectedOptions(document.getElementById('needareaselect'))
                        }

                      },
              
              [
                m("option[value=1]", "Education"),
                m("option[value=2]", "Legal"),
                m("option[value=3]", "Food"),
                m("option[value=4]", "Housing"),
                m("option[value=5]", "Employment"),
                m("option[value=6]", "Family"),
                m("option[value=7]", "Health"),


                ]),
              m("label", "Program Languages Spoken"),
              m("input.form-control[type=text][id=languages]",{ value: vnode.attrs.program.languages,
                                          oninput: function(e) { vnode.attrs.program.languages = e.currentTarget.value;
                                                                }
                                                              }),
              m("label", "How to refer"),
              m("textarea.form-control application_process",{ value: vnode.attrs.program.application_process,
                                          oninput: function(e) {
                                                                            vnode.attrs.program.application_process  = e.currentTarget.value;
                                                                        }
                                                                        }),
            m("label", "Program Required Document Links"),
              m("textarea.form-control application_process",{ value: vnode.attrs.program.documents_required,
                                          oninput: function(e) {
                                                                            vnode.attrs.program.documents_required  = e.currentTarget.value;
                                                                        }
                                                                        }),
              //]),
              m("label", "Program Payment Options"),
              m("textarea.form-control payment options",{ value: vnode.attrs.program.fee_structure,
                                          oninput: function(e) {
                                                                           vnode.attrs.program.fee_structure  = e.currentTarget.value;
                                                                        }
                                                                        }),
              m("label", "Accepting Clients?"),
              m("input.form-control[type=text]",{ value: vnode.attrs.program.accepting_clients,
                                          oninput: function(e) {
                                                                            vnode.attrs.program.accepting_clients = e.currentTarget.value;
                                                                        }
                                                              }),
            m("label", "Appointment Required?"),
            m("input.form-control[type=text]",{ value: vnode.attrs.program.appointment_required,
                                          oninput: function(e) {
                                                                            vnode.attrs.program.appointment_required = e.currentTarget.value;
                                                                        }
                                                              }),

              m("label", "Program Eligibility"),
              m("textarea.form-control eligibility",{ value: vnode.attrs.program.eligibility,
                oninput: function(e) {
                          vnode.attrs.program.eligibility  = e.currentTarget.value;
                          }
                     })
              		

                    ),

                	]),

                  m("div.buttons",
                  m("button.btn btn-default[type=submit]", {
                        href: vnode.attrs.previous_link, 
                        oncreate: m.route.link

                        },"Previous"),

                  m("button.btn btn-default[type=submit][style=margin-left:10px]", {
                        href: "/review", 
                        oncreate: m.route.link
                        },"Next")
                    )
    		    ])
            ])











		)
	}	

}