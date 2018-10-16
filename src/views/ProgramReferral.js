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

// function checkBoxes(){
//  list_items = document.getElementsByClassName("checkbox-grid")[0].children

//  for(var i = 0; i < list_items.length; i++){

//     if(list_items[i].children[0].value === "true"){
//       list_items[i].children[0].checked = true
//     } 

//     else if(list_items[i].children[0].value === "false") {
//       list_items[i].children[0].checked = false
//     }
 

//  }
  
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

  return opts.join(', ');
}


module.exports = {
oninit: function(vnode) { 
  helper.moveProgress(50, 50, 70)
},
oncreate: function(){
  multipleDefault = new Choices(document.getElementById('service_type_select'));
},
view: function(vnode) {	
	return(
		    m("div.row",[  
                m("div.agencyedit col-md-12",[                 
    		    m("form", [
                m("div.form-group[style=width:400px]",
                  m("legend[style=font-size:16px]", Agency.selected.name),
                  m("label", "Program Need Domain"),
                  m("select[id=service_type_select][multiple=multiple]",
                    m("option[value=1]", "Education"),
                    m("option[value=2]" , "Legal"),
                    m("option[value=3]", "Food"),
                    m("option[value=4]", "Housing"),
                    m("option[value=5]", "Employment"),
                    m("option[value=6]", "Family"),
                    m("option[value=7]", "Health")),
                  
                  // m("p", "Currently: " + vnode.attrs.program.service_type),
                  // m("p", "Select all that apply:"),
                  // m("ul.checkbox-grid",
                  //   m("li",m("input[type=checkbox]", { value: vnode.attrs.program.service_type.education,  onclick: function(e) { vnode.attrs.program.service_type.education = e.target.checked }}), "Education"),
                  //   m("li",m("input[type=checkbox]", { value: vnode.attrs.program.service_type.legal,
                  //                                      onclick: function(e) { vnode.attrs.program.service_type.legal = e.target.checked } }), "Legal"),
                  //   m("li",m("input[type=checkbox]", { value: vnode.attrs.program.service_type.food,  onclick: function(e) { vnode.attrs.program.service_type.food = e.target.checked }}), "Food"),
                  //   m("li",m("input[type=checkbox]", { value: vnode.attrs.program.service_type.health,  onclick: function(e) { vnode.attrs.program.service_type.health = e.target.checked }}), "Health"),
                  //   m("li",m("input[type=checkbox]", { value: vnode.attrs.program.service_type.housing,  onclick: function(e) { vnode.attrs.program.service_type.housing = e.target.checked }}), "Housing"),
                  //   m("li",m("input[type=checkbox]", { value: vnode.attrs.program.service_type.employment,  onclick: function(e) { vnode.attrs.program.service_type.employment= e.target.checked }}), "Employment"),
                  //   m("li",m("input[type=checkbox]", { value: vnode.attrs.program.service_type.family,  onclick: function(e) { vnode.attrs.program.service_type.family = e.target.checked }}), "Family"),
                  //   m("li",m("input[type=checkbox]", { value: vnode.attrs.program.service_type.money,  onclick: function(e) { vnode.attrs.program.service_type.money = e.target.checked }}), "Money")
                       
                  //   ),
            

              //      m("select.form-control[name=needareaselect][multiple=multiple][id=needareaselect]",
              //         { 
              //           onblur: function(e) { 
              //             vnode.attrs.program.service_type  = getSelectedOptions(document.getElementById('needareaselect'))
              //           }

              //         },
              
              // [
              //   m("option[value=1]", "Education"),
              //   m("option[value=2]" , "Legal"),
              //   m("option[value=3]", "Food"),
              //   m("option[value=4]", "Housing"),
              //   m("option[value=5]", "Employment"),
              //   m("option[value=6]", "Family"),
              //   m("option[value=7]", "Health"),


              //   ]),

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

