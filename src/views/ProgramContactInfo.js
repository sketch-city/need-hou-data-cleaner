var m = require("mithril")
var Agency = require("../models/Agency")
var helper = require("../helper")
var TimePicker = require("pickerjs")


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
                  m("legend[style=font-size:16px]", Agency.selected.name),
              		m("label", "Program Name"),
							m("input.form-control[type=text][id=programname]",{ value: vnode.attrs.program.name,
																onchange: function(e) { 
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

            m("label", "Program Holiday Schedule"),
              m("textarea.form-control",{ value: vnode.attrs.program.holiday_schedule,
                oninput: function(e) {
                          vnode.attrs.program.holiday_schedule  = e.currentTarget.value;
                          }
                     }),
            m("label", "Program Transportation"),
              m("textarea.form-control",{ value: vnode.attrs.program.transportation  = formatMapQuery(vnode.attrs.program.physical_address)
                     }),
         
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