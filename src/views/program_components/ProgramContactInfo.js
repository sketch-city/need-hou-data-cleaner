var m = require("mithril")
var Agency = require("../../models/Agency")
var helper = require("../../helper")
//var TimePicker = require("pickerjs")
var Choices = require("choices.js")



function getSelectedOption(sel) {
  var opts = [],
      opt;
  var len = sel.options.length;
  for (var i = 0; i < len; i++) {
    opt = sel.options[i];
    if (opt.selected) {
      return(opt.label)
    }
  }
}



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





function nameExists(name){
var hasName = false;
for (var i = 0; i < Agency.programs.length; i++) {
  if (Agency.programs[i].name === name) {
    hasName = true;
    break;
  }
}
return(hasName)

}

function validateName(name) {

   if(nameExists(name)){
        document.getElementById("nextbutton").disabled = true;
        document.getElementById("programname").classList.add("has-error")
        document.getElementById("errormessage").innerHTML = "This program already exists."
    }

    else if(name === ""){
        document.getElementById("nextbutton").disabled = true;
        document.getElementById("errormessage").innerHTML = "Please enter a program name."
    }

    else{
        document.getElementById("nextbutton").disabled = false;
        document.getElementById("programname").classList.remove("has-error")
        document.getElementById("errormessage").innerHTML = ""
        
    }
    
    return(name)                                                                              
}




module.exports = {
oninit: function() 
{
  scroll(0,0)
}
 ,
oncreate: function(vnode){   
document_language_choices = new Choices('#document_languages_select')
//   schedule_fields = document.querySelectorAll('input.schedule')
//   for(i = 0; i < schedule_fields.length; i++){
//     picker = new Picker(document.getElementById(schedule_fields[i].id), {format: 'HH:mm'})
//   }

   // picker =  timepicker.load({
   //    interval: 30
   //  })



///});


},
view: function(vnode) {	
	return(
		    m("div.row",[  
                m("div.col-md-12",[                 
    		    m("form", [
                m("div.form-group[style=width:400px]",
                  m("legend[style=font-size:16px]"),


                
            m("label", "★ Program Schedule"),
            m("table.table",
              m("thead",
                m("tr",
                  m("th", "Day"),
                  m("th", "Start Time"),
                  m("th", "End Time"))),
                m("tbody",
                  m("tr", 
                    m("td", "Monday"),
                    
                    m("td", m("input[type=time].form-control schedule[id=monday_start]", { value: vnode.attrs.program.schedule.monday[0],
                                          onchange: function(e) { vnode.attrs.program.schedule.monday[0] = e.currentTarget.value;
                                                                        }
                                                              })),


                    m("td", m("input[type=time].form-control schedule[id=monday_end]", { value: vnode.attrs.program.schedule.monday[1],
                                          onchange: function(e) { vnode.attrs.program.schedule.monday[1] = e.currentTarget.value;
                                                                        }
                                                              }))
                    ),
                  m("tr", 
                    m("td", "Tuesday"),
                    m("td", m("input[type=time].form-control schedule[id=tuesday_start]", { value: vnode.attrs.program.schedule.tuesday[0],
                                          onchange: function(e) { vnode.attrs.program.schedule.tuesday[0] = e.currentTarget.value;
                                                                        }
                                                              })),
                    m("td", m("input[type=time].form-control schedule [id=tuesday_end]", { value: vnode.attrs.program.schedule.tuesday[1],
                                          onchange: function(e) { vnode.attrs.program.schedule.tuesday[1] = e.currentTarget.value;
                                                                        }
                                                              }))
                    ),
                  m("tr", 
                    m("td", "Wednesday"),
                    m("td", m("input[type=time].form-control schedule[id=wednesday_start]", { value: vnode.attrs.program.schedule.wednesday[0],
                                          onchange: function(e) { vnode.attrs.program.schedule.wednesday[0] = e.currentTarget.value;
                                                                        }
                                                              })),
                    m("td", m("input[type=time].form-control schedule[id=wednesday_end]", { value: vnode.attrs.program.schedule.wednesday[1],
                                          onchange: function(e) { vnode.attrs.program.schedule.wednesday[1] = e.currentTarget.value;
                                                                        }
                                                              }))
                    ),
                  m("tr", 
                    m("td", "Thursday"),
                    m("td", m("input[type=time].form-control schedule[id=thursday_start]", 
                                      { value: vnode.attrs.program.schedule.thursday[0],
                                          onchange: function(e) { vnode.attrs.program.schedule.thursday[0] = e.currentTarget.value;
                                                                        }
                                                              })),
                    m("td", m("input[type=time].form-control schedule[id=thursday_end]", 
                                          { value: vnode.attrs.program.schedule.thursday[1],
                                          onchange: function(e) { vnode.attrs.program.schedule.thursday[1] = e.currentTarget.value;
                                                                        }
                                                              }))
                    ),
                  m("tr", 
                    m("td", "Friday"),
                    m("td", m("input[type=time].form-control schedule[id=friday_start]",
                      { value: vnode.attrs.program.schedule.friday[0],
                                          onchange: function(e) { vnode.attrs.program.schedule.friday[0] = e.currentTarget.value;
                                                                        }
                                                              })),
                    m("td", m("input[type=time].form-control schedule[id=friday_end]", 
                      { value: vnode.attrs.program.schedule.friday[1],
                                          onchange: function(e) { vnode.attrs.program.schedule.friday[1] = e.currentTarget.value;
                                                                        }
                                                              }))
                    ),
                  m("tr", 
                    m("td", "Saturday"),
                    m("td", m("input[type=time].form-control schedule[id=saturday_start]",
                      { value: vnode.attrs.program.schedule.saturday[0],
                                          onchange: function(e) { vnode.attrs.program.schedule.saturday[0] = e.currentTarget.value;
                                                                        }
                                                              })),
                    m("td", m("input[type=time].form-control schedule[id=saturday_end]",
                      { value: vnode.attrs.program.schedule.saturday[1],
                                          onchange: function(e) { vnode.attrs.program.schedule.saturday[1] = e.currentTarget.value;
                                                                        }
                                                              }))
                    ),
                  m("tr", 
                    m("td", "Sunday"),
                    m("td", m("input[type=time].form-control schedule[id=sunday_start]",
                      { value: vnode.attrs.program.schedule.sunday[0],
                                          onchange: function(e) { vnode.attrs.program.schedule.sunday[0] = e.currentTarget.value;
                                                                        }
                                                              })),
                    m("td", m("input[type=time].form-control schedule[id=sunday_end]",{ value: vnode.attrs.program.schedule.sunday[1],
                                          onchange: function(e) { vnode.attrs.program.schedule.sunday[1] = e.currentTarget.value;
                                                                        }
                                                              }))
                    )




                  )),
           m("label", "Schedule Notes"),
              m("input.form-control form-horizontal[id=schedule_notes][type=text]",{ value: vnode.attrs.program.schedule_notes,
                oninput: function(e) {
                          vnode.attrs.program.schedule_notes  = e.currentTarget.value;
                          }
                     }),

            m("label", "Program Holiday Schedule"),
              m("textarea.form-control form-horizontal[holiday_schedule]",{ value: vnode.attrs.program.holiday_schedule,
                oninput: function(e) {
                          vnode.attrs.program.holiday_schedule  = e.currentTarget.value;
                          }
                     }),

              m("label", "Program Required Document Links"),
              m("textarea.form-control form-horizontal",{ value: vnode.attrs.program.documents_required,
                                          oninput: function(e) {
                                                                            vnode.attrs.program.documents_required  = e.currentTarget.value;
                                                                        }
                                                                        }),

               m("label", "Document Languages"),
              m("select[id=document_languages_select][multiple=multiple]", {  
                          onchange: function(e) { 
                           vnode.attrs.program.language_arr  = getSelectedOptions(document.getElementById('document_languages_select'))
                         }},
                    m("option",{ selected: vnode.attrs.program.document_languages.includes('English')}, "English"),
                    m("option",{ selected: vnode.attrs.program.document_languages.includes('Spanish')},  "Spanish"),
                    m("option",{ selected: vnode.attrs.program.document_languages.includes('Vietnamese')}, "Vietnamese"),
                    m("option",{ selected: vnode.attrs.program.document_languages.includes('Chinese')}, "Chinese"),
                    m("option",{ selected: vnode.attrs.program.document_languages.includes('Arabic')}, "Arabic"),
                    m("option",{ selected: vnode.attrs.program.document_languages.includes('French')}, "French"),
                    m("option",{ selected: vnode.attrs.program.document_languages.includes('Hindi')}, "Hindi"),
                    m("option",{ selected: vnode.attrs.program.document_languages.includes('Urdu')},  "Urdu"),
                    m("option",{ selected: vnode.attrs.program.document_languages.includes('Tagalog')}, "Tagalog"),
                    m("option",{ selected: vnode.attrs.program.document_languages.includes('Persian')}, "Persian"),
                    m("option",{ selected: vnode.attrs.program.document_languages.includes('Korean')}, "Korean"),
                    m("option",{ selected: vnode.attrs.program.document_languages.includes('German')}, "German"),
                    m("option",{ selected: vnode.attrs.program.document_languages.includes('Russian')}, "Russian"),
                    m("option",{ selected: vnode.attrs.program.document_languages.includes('Portuguese')},  "Portuguese"),
                    m("option",{ selected: vnode.attrs.program.document_languages.includes('Gujarati')}, "Gujarati"),
                    m("option",{ selected: vnode.attrs.program.document_languages.includes('Japanese')}, "Japanese"),
                    m("option",{ selected: vnode.attrs.program.document_languages.includes('Serbo-Croatian')}, "Serbo-Croatian"),
                    m("option",{ selected: vnode.attrs.program.document_languages.includes('Italian')}, "Italian"),
                    m("option",{ selected: vnode.attrs.program.document_languages.includes('French Creole')}, "French Creole"),
                    m("option",{ selected: vnode.attrs.program.document_languages.includes('Thai')},  "Thai"),
                    m("option",{ selected: vnode.attrs.program.document_languages.includes('Hebrew')}, "Hebrew"),
                    m("option",{ selected: vnode.attrs.program.document_languages.includes('Greek')}, "Greek"),
                    m("option",{ selected: vnode.attrs.program.document_languages.includes('Polish')}, "Polish"),
                    m("option",{ selected: vnode.attrs.program.document_languages.includes('Cambodian')}, "Cambodian"),
                    m("option",{ selected: vnode.attrs.program.document_languages.includes('Hungarian')}, "Hungarian")


                    ),

              m("label", "★ Form assistance offered?"),
              m("select.form-control[id=document_assistance]", { 
                      value: vnode.attrs.program.document_assistance,
                        onchange: function(e) { 
                      vnode.attrs.program.document_assistance = getSelectedOption(document.getElementById('document_assistance')) 
                    }}, 
                      
                         m("option", ""), 
                         m("option", "Yes" ),
                         m("option", "No")
               
              ),

              m("label.control-label", "★ Visual aids offered for low-literacy clients?"),
                    m("select.form-control[id=visual_aids_offered]", { 
                      value: vnode.attrs.program.visual_aids_offered,
                        onchange: function(e) { 
                      vnode.attrs.program.visual_aids_offered = getSelectedOption(document.getElementById('visual_aids_offered')) 
                    }}, 
                      
                         m("option", ""), 
                         m("option", "Yes" ),
                         m("option", "No")
               
                    ),

                    m("label", "ADA accessible?"),
            m("select.form-control[id=ada]", { 
                      value: vnode.attrs.program.ada,
                        onchange: function(e) { 
                      vnode.attrs.program.ada = getSelectedOption(document.getElementById('ada')) 
                    }}, 
                      
                         m("option", ""), 
                         m("option", "Yes" ),
                         m("option", "No")
               
              ),

                    m("label.control-label", "★ Does program offer clients an opportunity for consultation before filling out paperwork?"),
                    m("select.form-control[id=consultation_opportunity]", { 
                      value: vnode.attrs.program.consultation_opportunity,
                        onchange: function(e) { 
                      vnode.attrs.program.consultation_opportunity = getSelectedOption(document.getElementById('consultation_opportunity')) 
                    }}, 
                      
                         m("option", ""), 
                         m("option", "Yes" ),
                         m("option", "No")
               
                  ),

                    m("label.control-label", "★ Does program have a policy to respond to Immigrations and Customs Enforcement requests?"),
                    m("select.form-control[id=enforcement_request_policy]", { 
                      value: vnode.attrs.program.enforcement_request_policy,
                        onchange: function(e) { 
                      vnode.attrs.program.enforcement_request_policy = getSelectedOption(document.getElementById('enforcement_request_policy')) 
                    }}, 
                      
                         m("option", ""), 
                         m("option", "Yes" ),
                         m("option", "No")
               
                  ),
                    m("label.control-label", "★ Does program offer a cultural competency/effectiveness training?"),
                    m("select.form-control[id=cultural_competency_offered]", { 
                      value: vnode.attrs.program.cultural_competency_offered,
                        onchange: function(e) { 
                      vnode.attrs.program.cultural_competency_offered = getSelectedOption(document.getElementById('cultural_competency_offered')) 
                    }}, 
                      
                         m("option", ""), 
                         m("option", "Yes, required for client-facing staff" ),
                         m("option", "Yes, optional for client-facing staff"),
                         m("option", "No, but we are interested in a cultural competency training" ),
                         m("option", "No, we are not interested in a training" ),
               
                  ),
          
       
                    ),

                	]),

                  m("div.buttons",
                  m("button.btn btn-outline-success[type=submit]", {
                        href: vnode.attrs.previous_link, 
                        oncreate: m.route.link

                        },"Previous"),

                  m("button.btn btn-success[type=submit][style=margin-left:10px][id=nextbutton]", {
                        href: vnode.attrs.next_link,
                        oncreate: m.route.link
                        },"Next")
                    )
    		    ])
            ])











		)
	}	

}