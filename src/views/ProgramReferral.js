var m = require("mithril")
var Agency = require("../models/Agency")
var helper = require("../helper")
var Choices = require("choices.js")


function validateLanguage(languages){
  language_arr = languages.split(" ")
  if(language_arr.length > 1 &&  !languages.includes(',')) {
    document.getElementById("nextbutton").disabled = true;
    document.getElementById("languages").classList.add("has-error")
    document.getElementById("languageerror").innerHTML = "Please separate multiple languages with a comma."

  } else{
    document.getElementById("nextbutton").disabled = false;
    document.getElementById("languages").classList.remove("has-error")
    document.getElementById("languageerror").innerHTML = ""

  }
}

// function setSelectedIndex(s, v) {
//     document.getElementById('service_type_select').options
//     for ( var i = 0; i < s.length; i++ ) {
//         if ( s[i].textContent.trim() == v ) {
//           var option = document.createElement("option");
//             option.text = v;
//             x.add(option);
          
//         }

//     }

// }


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


module.exports = {
oninit: function(vnode) { 
  helper.moveProgress(50, 50, 70)
},
oncreate: function(vnode){
 choices = new Choices('#service_type_select');
 //setSelectedIndex(document.getElementsByClassName('choices__item choices__item--choice choices__item--selectable'),"legal");
},
view: function(vnode) {	
	return(
		    m("div.row",[  
                m("div.agencyedit col-md-12",[                 
    		    m("form", [
                m("div.form-group[style=width:400px]",
                  m("legend[style=font-size:16px]", Agency.selected.name),
                  m("label", "Program Need Domain(s)"),
                  m("p", "Currently: " + vnode.attrs.program.service_type.join(', ')),
                  m("select[id=service_type_select][multiple=multiple]", {  
                          onchange: function(e) { 
                           vnode.attrs.program.service_type  = getSelectedOptions(document.getElementById('service_type_select'))
                         }},
                    m("option[value=1][id=education]",{ selected: vnode.attrs.program.service_type.includes('education')}, "education"),
                    m("option[value=2]",{ selected: vnode.attrs.program.service_type.includes('legal')},  "legal"),
                    m("option[value=3]",{ selected: vnode.attrs.program.service_type.includes('food')}, "food"),
                    m("option[value=4]",{ selected: vnode.attrs.program.service_type.includes('housing')}, "housing"),
                    m("option[value=5]",{ selected: vnode.attrs.program.service_type.includes('employment')}, "employment"),
                    m("option[value=6]",{ selected: vnode.attrs.program.service_type.includes('family')}, "family"),
                    m("option[value=7]",{ selected: vnode.attrs.program.service_type.includes('health')}, "health")),
                

            m("div.form-group[id=languages]",
              m("label.control-label", "Program Languages Spoken"),
              m("input.form-control[type=text][id=languages]",{ value: vnode.attrs.program.language_arr,
                                          oninput: function(e) { vnode.attrs.program.language_arr = e.currentTarget.value;
                                                                },
                                          onblur: function() { validateLanguage(vnode.attrs.program.language_arr) } 
                                                              }),
              m("span[id=languageerror]")),
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

                  m("button[id = nextbutton].btn btn-default[type=submit][style=margin-left:10px]", {
                        href: vnode.attrs.next_link, 
                        oncreate: m.route.link
                        },"Next")
                    )
    		    ])
          ])
		)
	}	

}


