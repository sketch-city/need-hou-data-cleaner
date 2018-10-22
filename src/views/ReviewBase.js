var m = require("mithril")
var Agency = require("../models/Agency")
var helper = require("../helper") 
var ReviewFields = require("./ReviewFields")


module.exports = {
oninit: function(vnode) {
	 helper.moveProgress(70, 70, 90) 
	},
oncreate: function(vnode) { 
	program_fields = document.querySelectorAll('pre.program')
	agency = Agency.original_selected
	program = Agency.original_selected_program
	helper.difftext(agency["name"], vnode.attrs.agency["name"], "agency_name") 
	helper.difftext(agency["physical_address"], vnode.attrs.agency["physical_address"], "agency_physical_address") 
	helper.difftext(agency["phone_number"], vnode.attrs.agency["phone_number"], "agency_phone_number") 


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
			m("div.reviewpage[id=wrap_all]", [
				m(ReviewFields, { org_route: "/editagency",  program_route: "/editprogramcontact"}),
				m("div.reviewbuttons",
				m("button[type=submit][id=submitfinal].btn btn-default", {
				onclick: function(e) {

						if(vnode.attrs.agencyFunction === "new_agency"){
							Agency.addQueueItem({
								submission_type: "new_agency", 
								submission: { 
								agency_data: vnode.attrs.agency,
								program_data: vnode.attrs.program,
								language_data: {
									program_id: vnode.attrs.program.id,
									language_arr: vnode.attrs.program.language_arr.replace(/ /g,'').split(',')
									}
								}

							})
							
						}


						else if(vnode.attrs.agencyFunction === "new_program"){
							Agency.addQueueItem({
								submission_type: "new_program", 
								submission: { 
								agency_data: vnode.attrs.agency,
								program_data: vnode.attrs.program,
								language_data: {
									program_id: vnode.attrs.program.id,
									language_arr: vnode.attrs.program.language_arr.replace(/ /g,'').split(',')
									}
								}

							})
							
						}

						else if(vnode.attrs.agencyFunction === "existing_program"){
							Agency.addQueueItem({
								submission_type: "existing_program", 
								submission: { 
								agency_data: vnode.attrs.agency,
								program_data: vnode.attrs.program,
								language_data: {
									program_id: vnode.attrs.program.id,
									language_arr: vnode.attrs.program.language_arr.replace(/ /g,'').split(',')
									}
								}

							})
							
						}

					document.getElementById("submitfinal").disabled = true;
					document.getElementById("submitmessage").hidden = false;
					document.getElementById("editfinal").classList.remove("hidden");
					helper.moveProgress(90, 90, 100)

					}

			},
				"Submit"),
			m("button[type=submit][id=editfinal].btn btn-default hidden" , { 
				href: "/queue", 
				oncreate: m.route.link 

			}, "View Queue")

			),
			m("p[id=submitmessage][style=color:green;]",{ hidden: true  } , "Your form was succesfully submitted!")
	
			])

		)

	}
}



