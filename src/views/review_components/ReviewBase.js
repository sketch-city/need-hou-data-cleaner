var m = require("mithril")
var Agency = require("../../models/Agency")
var helper = require("../../helper") 
var ReviewFields = require("./ReviewFields")

module.exports = {
oninit: function(vnode) {
	},
oncreate: function(vnode) { 
	program_fields = document.querySelectorAll('pre.program')
	schedule_fields = document.querySelectorAll('pre.schedule')
	agency = vnode.attrs.original_agency
	program = vnode.attrs.original_program

	helper.difftext(agency["name"], vnode.attrs.agency["name"], "agency_name") 
	helper.difftext(agency["physical_address"], vnode.attrs.agency["physical_address"], "agency_physical_address") 
	helper.difftext(agency["phone_number"], vnode.attrs.agency["phone_number"], "agency_phone_number") 
	helper.difftext(agency["website"], vnode.attrs.agency["website"], "agency_website") 


	helper.difftext(program.schedule.monday[0] || "", vnode.attrs.program.schedule.monday[0] || "" , "monday_start")
	helper.difftext(program.schedule.monday[1] || "", vnode.attrs.program.schedule.monday[1] || "" , "monday_end")

	helper.difftext(program.schedule.tuesday[0] || "", vnode.attrs.program.schedule.tuesday[0] || "" , "tuesday_start")
	helper.difftext(program.schedule.tuesday[1] || "", vnode.attrs.program.schedule.tuesday[1] || "" , "tuesday_end")

	helper.difftext(program.schedule.wednesday[0] || "", vnode.attrs.program.schedule.wednesday[0] || "" , "wednesday_start")
	helper.difftext(program.schedule.wednesday[1] || "", vnode.attrs.program.schedule.wednesday[1] || "" , "wednesday_end")

	helper.difftext(program.schedule.thursday[0] || "", vnode.attrs.program.schedule.thursday[0] || "" , "thursday_start")
	helper.difftext(program.schedule.thursday[1] || "", vnode.attrs.program.schedule.thursday[1] || "" , "thursday_end")

	helper.difftext(program.schedule.friday[0] || "", vnode.attrs.program.schedule.friday[0] || "" , "friday_start")
	helper.difftext(program.schedule.friday[1] || "", vnode.attrs.program.schedule.friday[1] || "" , "friday_end")

	helper.difftext(program.schedule.saturday[0] || "", vnode.attrs.program.schedule.saturday[0] || "" , "saturday_start")
	helper.difftext(program.schedule.saturday[1] || "", vnode.attrs.program.schedule.saturday[1] || "" , "saturday_end")

	helper.difftext(program.schedule.sunday[0] || "", vnode.attrs.program.schedule.sunday[0] || "" , "sunday_start")
	helper.difftext(program.schedule.sunday[1] || "", vnode.attrs.program.schedule.sunday[1] || "" , "sunday_end")

	for(i = 0; i < program_fields.length; i++){
		if(typeof(program[program_fields[i].id]) != "string" && program[program_fields[i].id] != undefined) {
			 
			helper.difftext(program[program_fields[i].id].join(', ') || "", vnode.attrs.program[program_fields[i].id].join(', ') || "", program_fields[i].id) 
				
		} else{
			helper.difftext(program[program_fields[i].id] || "", vnode.attrs.program[program_fields[i].id] || "", program_fields[i].id) 
		}
	}
},	
view: function(vnode) {
		return(
			m("div.reviewpage", [
				m("form", {
						onsubmit: function(e) {
								 	e.preventDefault()
								 						if(vnode.attrs.agencyFunction === "new_agency"){
							Agency.addQueueItem({
								status: "new",
								submission_type: "new_agency", 
								submission: { 
								agency_data: vnode.attrs.agency,
								program_data: vnode.attrs.program,
								language_data: {
									program_id: vnode.attrs.program.id,
									language_arr: vnode.attrs.program.language_arr
									},
								source: localStorage.username || Agency.source
								}

							})
							
						}


						else if(vnode.attrs.agencyFunction === "new_program"){
							Agency.addQueueItem({
								status: "new",
								submission_type: "new_program", 
								submission: { 
								agency_data: vnode.attrs.agency,
								program_data: vnode.attrs.program,
								language_data: {
									program_id: vnode.attrs.program.id,
									language_arr: vnode.attrs.program.language_arr
									},
								source: localStorage.username || Agency.source
								}

							})
							
						}

						else if(vnode.attrs.agencyFunction === "existing_program"){
							Agency.addQueueItem({
								status: "new",
								submission_type: "existing_program", 
								submission: { 
								agency_data: vnode.attrs.agency,
								program_data: vnode.attrs.program,
								language_data: {
									program_id: vnode.attrs.program.id,
									language_arr: vnode.attrs.program.language_arr
									},
								source: localStorage.username || Agency.source
								}

							})
							
						}

					document.getElementById("submitfinal").disabled = true
					document.getElementById("submitmessage").hidden = false
					document.getElementById("editfinal").classList.remove("hidden")
									
			                }
			            }, [

				m(ReviewFields, { org_route: "/editagency",  program_route: "/editprogramcontact"}),
				m("label", "If not logged in, please enter your name and email"),
				m("input[id=check_source].form-control[type=text]",{ value: Agency.source, required: localStorage.username === undefined,
                      oninput: function(e) {
                      	
                                Agency.source  = e.currentTarget.value;
                                }
                           }),
				m("div[style=margin-top:50px;].reviewbuttons",
					m("button.btn btn-outline-success", 
								{
							 	 href: vnode.attrs.previous_link, 
							 	 oncreate: m.route.link 
							 	}, "Previous"),
					m("button[type=submit][id=submitfinal].btn btn-success",
							"Submit"),

					


			m("button[id=editfinal].btn btn-success hidden" , { 
				
				href: "/queue", 
				oncreate: m.route.link 

			}, "View Queue")

			),
			m("p[id=submitmessage][style=color:green;]",{ hidden: true  } , "Your form was succesfully submitted!")
	
			])
		])

		)

	}
}



