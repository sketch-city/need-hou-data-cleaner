var m = require("mithril")
var Queue = require("../models/Queue")
var Agency = require("../models/Agency")
var helper = require("../helper")

module.exports = {
oninit: function(vnode) { Queue.getQueueItem(vnode.attrs.id)} ,
view: function(vnode) {
		return(
			m("section", 
			m("ul",
        			m("li",
        				m("a", "Logout"))),
			m("div.queuepage[id=wrap_all]",
				m("div.orgqueue", [
					m("p", m("strong", "Name: " ), Queue.queueAgency.name),
					m("p", m("strong", "Full Physical 	Address: "), Queue.queueAgency.physical_address),
					m("p", m("strong", "Phone Number: "), Queue.queueAgency.phone_number),
					
				]),

				m("div.programqueue", [
					m("p", m("strong", "Name: "), Queue.queueProgram.name),
					m("p", m("strong", "Description: "), Queue.queueProgram.description),
					m("p", m("strong", "Full Physical Address: "), Queue.queueProgram.physical_address),
					m("p", m("strong", "Website: "), Queue.queueProgram.website),
					m("p", m("strong", "Schedule: "), Queue.queueProgram.hours),
					m("p", m("strong", "Holiday Schedule: "), Queue.queueProgram.holiday_schedule),
					m("p", m("strong", "Transportation: "), Queue.queueProgram.transportation),
					m("p", m("strong", "Contact First Name: "), Queue.queueProgram.contact_firstname),
					m("p", m("strong", "Contact Last Name: "), Queue.queueProgram.contact_lastname),
					m("p", m("strong", "Contact Title: "), Queue.queueProgram.contact_title),
					m("p", m("strong", "Contact Email: "), Queue.queueProgram.contact_email),
					m("p", m("strong", "Contact Phone: "), Queue.queueProgram.contact_phonenumber),
					m("p", m("strong", "Need Domain: "), Queue.queueProgram.service_type),
					m("p", m("strong", "Languages: "), Queue.queueProgram.language_arr),
					m("p", m("strong", "How to Refer: "), Queue.queueProgram.application_process),
					m("p", m("strong", "Required Document Links: "), Queue.queueProgram.documents_required),
					m("p", m("strong", "Payment Options: "), Queue.queueProgram.fee_structure),
					m("p", m("strong", "Accepting Clients?: "), Queue.queueProgram.accepting_clients),				
					m("p", m("strong", "Appointment Required?: "),Queue.queueProgram.appointment_required),
					m("p", m("strong", "Eligibility: "), Queue.queueProgram.eligibility),
				

					]),
				
				
			m("div.reviewbuttons",
			m("button[type=submit][id=submitfinal][style=color:green;].btn btn-default", {
				onclick: function(e) {
					if(Queue.type_submission === "new_agency"){
							 Agency.addNewAgency(Queue.queueAgency)
							.then(Agency.addNewProgram(Queue.queueProgram))
							.then(Agency.addNewLanguage(Queue.queueLanguage))
							.then(Queue.deleteQueueItem(vnode.attrs.id))

					}

						else if(Queue.type_submission === "new_program"){
							Agency.updateAgency(Queue.queueAgency)
							.then(Agency.addNewProgram(Queue.queueProgram))
							.then(Agency.addNewLanguage(Queue.queueLanguage))							
						}

						// else if(vnode.attrs.agencyFunction === "existing_program"){
						// 	// Agency.updateAgency(vnode.attrs.agency)
						// 	// .then(Agency.updateProgram(vnode.attrs.program))
						// 	// .then(Agency.updateLanguage({ program_id: vnode.attrs.program.id, language_arr: vnode.attrs.program.language_arr.replace(/ /g,'').split(',')}))	
						// }

				
    //             },

			}},
				"Accept")
			)

			// m("button[type=submit][id=editfinal].btn btn-default hidden" , { 
			// 	href: "/queue", 
			// 	oncreate: m.route.link 

			// }, "View Queue")

			// ),
			// m("p[id=submitmessage][style=color:green;]",{ hidden: true  } , "Your form was succesfully submitted!")
			// ])

			)
		)

	  )
	}
}
