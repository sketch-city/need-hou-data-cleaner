var m = require("mithril")
var Agency = require("../models/Agency")
var helper = require("../helper")
var TimePicker = require("pickerjs")
var Choices = require("choices.js")

function formatMapQuery(address){
  var queryp1 = "https://www.google.com/maps/dir/?api=1&destination="
  var queryp2 = "&travelmode=transit"
  var formatted = queryp1 + escape(address) + queryp2
  return(formatted)
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
    console.log(name)
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
oninit: function() { helper.moveProgress(40, 40, 50) } ,
oncreate: function(vnode){
  service_type_choices = new Choices('#service_type_select')
  website_languages_choices = new Choices('#website_languages_select')
  schedule_fields = document.querySelectorAll('input.schedule')
  for(i = 0; i < schedule_fields.length; i++){
    picker = new Picker(document.getElementById(schedule_fields[i].id), {format: 'HH:mm'})
  }

},
view: function(vnode) {	
	return(
		    m("div.row",[  
                m("div.agencyedit col-md-12",[                 
    		    m("form", [
                m("div.form-group[style=width:400px]",
                  m("legend[style=font-size:16px]"),
           
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

            m("label", "Keyword(s)"),
                  m("select[id=service_type_select][multiple=multiple]", {  
                          onchange: function(e) { 
                           vnode.attrs.program.service_type  = getSelectedOptions(document.getElementById('service_type_select'))
                         }},
                    m("option[value=1]",{ selected: vnode.attrs.program.service_type.includes('education')}, "education"),
                    m("option[value=2]",{ selected: vnode.attrs.program.service_type.includes('legal')},  "legal"),
                    m("option[value=3]",{ selected: vnode.attrs.program.service_type.includes('food')}, "food"),
                    m("option[value=4]",{ selected: vnode.attrs.program.service_type.includes('housing')}, "housing"),
                    m("option[value=5]",{ selected: vnode.attrs.program.service_type.includes('employment')}, "employment"),
                    m("option[value=6]",{ selected: vnode.attrs.program.service_type.includes('family')}, "family"),
                    m("option[value=7]",{ selected: vnode.attrs.program.service_type.includes('health')}, "health")),
            m("label", "Program Schedule"),
            m("table.table",
              m("thead",
                m("tr",
                  m("th", "Day"),
                  m("th", "Start Time"),
                  m("th", "End Time"))),
                m("tbody",
                  m("tr", 
                    m("td", "Monday"),
                    m("td", m("input.form-control schedule[id=monday_start][style=width:50%]", { value: vnode.attrs.program.schedule.monday[0],
                                          onchange: function(e) { vnode.attrs.program.schedule.monday[0] = e.currentTarget.value;
                                                                        }
                                                              })),
                    m("td", m("input.form-control schedule[id=monday_end][style=width:50%]", { value: vnode.attrs.program.schedule.monday[1],
                                          onchange: function(e) { vnode.attrs.program.schedule.monday[1] = e.currentTarget.value;
                                                                        }
                                                              }))
                    ),
                  m("tr", 
                    m("td", "Tuesday"),
                    m("td", m("input.form-control schedule[id=tuesday_start][style=width:50%]", { value: vnode.attrs.program.schedule.tuesday[0],
                                          onchange: function(e) { vnode.attrs.program.schedule.tuesday[0] = e.currentTarget.value;
                                                                        }
                                                              })),
                    m("td", m("input.form-control schedule [id=tuesday_end][style=width:50%]", { value: vnode.attrs.program.schedule.tuesday[1],
                                          onchange: function(e) { vnode.attrs.program.schedule.tuesday[1] = e.currentTarget.value;
                                                                        }
                                                              }))
                    ),
                  m("tr", 
                    m("td", "Wednesday"),
                    m("td", m("input.form-control schedule[id=wednesday_start][style=width:50%]", { value: vnode.attrs.program.schedule.wednesday[0],
                                          onchange: function(e) { vnode.attrs.program.schedule.wednesday[0] = e.currentTarget.value;
                                                                        }
                                                              })),
                    m("td", m("input.form-control schedule[id=wednesday_end][style=width:50%]", { value: vnode.attrs.program.schedule.wednesday[1],
                                          onchange: function(e) { vnode.attrs.program.schedule.wednesday[1] = e.currentTarget.value;
                                                                        }
                                                              }))
                    ),
                  m("tr", 
                    m("td", "Thursday"),
                    m("td", m("input.form-control schedule[id=thursday_start][style=width:50%]", 
                                      { value: vnode.attrs.program.schedule.thursday[0],
                                          onchange: function(e) { vnode.attrs.program.schedule.thursday[0] = e.currentTarget.value;
                                                                        }
                                                              })),
                    m("td", m("input.form-control schedule[id=thursday_end][style=width:50%]", 
                                          { value: vnode.attrs.program.schedule.thursday[1],
                                          onchange: function(e) { vnode.attrs.program.schedule.thursday[1] = e.currentTarget.value;
                                                                        }
                                                              }))
                    ),
                  m("tr", 
                    m("td", "Friday"),
                    m("td", m("input.form-control schedule[id=friday_start][style=width:50%]",
                      { value: vnode.attrs.program.schedule.friday[0],
                                          onchange: function(e) { vnode.attrs.program.schedule.friday[0] = e.currentTarget.value;
                                                                        }
                                                              })),
                    m("td", m("input.form-control schedule[id=friday_end][style=width:50%]", 
                      { value: vnode.attrs.program.schedule.friday[1],
                                          onchange: function(e) { vnode.attrs.program.schedule.friday[1] = e.currentTarget.value;
                                                                        }
                                                              }))
                    ),
                  m("tr", 
                    m("td", "Saturday"),
                    m("td", m("input.form-control schedule[id=saturday_start][style=width:50%]",
                      { value: vnode.attrs.program.schedule.saturday[0],
                                          onchange: function(e) { vnode.attrs.program.schedule.saturday[0] = e.currentTarget.value;
                                                                        }
                                                              })),
                    m("td", m("input.form-control schedule[id=saturday_end][style=width:50%]",
                      { value: vnode.attrs.program.schedule.saturday[1],
                                          onchange: function(e) { vnode.attrs.program.schedule.saturday[1] = e.currentTarget.value;
                                                                        }
                                                              }))
                    ),
                  m("tr", 
                    m("td", "Sunday"),
                    m("td", m("input.form-control schedule[id=sunday_start][style=width:50%]",
                      { value: vnode.attrs.program.schedule.sunday[0],
                                          onchange: function(e) { vnode.attrs.program.schedule.sunday[0] = e.currentTarget.value;
                                                                        }
                                                              })),
                    m("td", m("input.form-control schedule[id=sunday_end][style=width:50%]",{ value: vnode.attrs.program.schedule.sunday[1],
                                          onchange: function(e) { vnode.attrs.program.schedule.sunday[1] = e.currentTarget.value;
                                                                        }
                                                              }))
                    )




                  )),
           m("label", "Schedule Notes"),
              m("input.form-control[type=text]",{ value: vnode.attrs.program.schedule_notes,
                oninput: function(e) {
                          vnode.attrs.program.schedule_notes  = e.currentTarget.value;
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

            m("label", "Website Languages"),
            m("select[id=website_languages_select][multiple=multiple]", {  
                          onchange: function(e) { 
                           vnode.attrs.program.website_languages  = getSelectedOptions(document.getElementById('website_languages_select'))
                         }},
                    m("option",{ selected: vnode.attrs.program.website_languages.includes('English')}, "English"),
                    m("option",{ selected: vnode.attrs.program.website_languages.includes('Spanish')},  "Spanish"),
                    m("option",{ selected: vnode.attrs.program.website_languages.includes('Vietnamese')}, "Vietnamese"),
                    m("option",{ selected: vnode.attrs.program.website_languages.includes('Chinese')}, "Chinese"),
                    m("option",{ selected: vnode.attrs.program.website_languages.includes('Arabic')}, "Arabic"),
                    m("option",{ selected: vnode.attrs.program.website_languages.includes('French')}, "French"))


         
                    ),

                	]),

                  m("div.buttons",
                  m("button.btn btn-default[type=submit]", {
                        href: vnode.attrs.previous_link, 
                        oncreate: m.route.link

                        },"Previous"),

                  m("button.btn btn-default[type=submit][style=margin-left:10px][id=nextbutton]", {
                        href: vnode.attrs.next_link,
                        oncreate: m.route.link
                        },"Next")
                    )
    		    ])
            ])











		)
	}	

}