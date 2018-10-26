var m = require("mithril")
var Queue = require("../models/Queue")
var Agency = require("../models/Agency")
var helper = require("../helper")
var ReviewFields = require("./ReviewFields")

module.exports = {

oncreate: function(vnode) { 
		console.log('first')
	   return(Queue.getQueueItem(vnode.attrs.id))

	.then(function() {
		console.log('second')
		return(Agency.loadAgency(Queue.queueAgency.name))
	})
	.then(function(){ 
		console.log('third')
		return(Agency.loadProgram(Queue.queueProgram.id))
	}).then(function(){
		console.log(Agency.selected_program)
	program_fields = document.querySelectorAll('pre.program')
	program = Agency.selected_program
	console.log(program.name)
	helper.difftext(Agency.selected.name, Queue.queueAgency.name, "agency_name") 
	helper.difftext(Agency.selected.physical_address, Queue.queueAgency.physical_address, "agency_physical_address") 
	helper.difftext(Agency.selected.phone_number, Queue.queueAgency.phone_number, "agency_phone_number") 

	for(i = 0; i < program_fields.length; i++){
		if(typeof(program[program_fields[i].id]) != "string" && program[program_fields[i].id] != undefined) {
			helper.difftext(program[program_fields[i].id].join(', ') || "", Queue.queueProgram[program_fields[i].id].join(', ') || "", program_fields[i].id) 			
		} else{
			helper.difftext(program[program_fields[i].id] || "" , Queue.queueProgram[program_fields[i].id] || "", program_fields[i].id) 
		}
	}

	})

},

view: function(vnode) {
		return(
			m("section", 
			m("ul",
        			m("li",
        				m("a", "Logout"))),
			//m("div.queuepage[id=wrap_all]",
				m(ReviewFields),
				// m("div.orgqueue", [
				// 	m("h2", "Organization Details. "),
				// 	//m("p.", m("strong", "Name: " ), Queue.queueAgency.name),
				// 	m("p", m("strong", "Full Physical 	Address: "), Queue.queueAgency.physical_address),
				// 	m("p", m("strong", "Phone Number: "), Queue.queueAgency.phone_number),
					
				// ]),

				// m("div.programqueue", [
				// 	m("h2", "Program Details. "),
				// 	m("p", m("strong", "Name: "), Queue.queueProgram.name),
				// 	m("p", m("strong", "Description: "), Queue.queueProgram.description),
				// 	m("p", m("strong", "Full Physical Address: "), Queue.queueProgram.physical_address),
				// 	m("p", m("strong", "Website: "), Queue.queueProgram.website),
				// 	m("p", m("strong", "Schedule: "), Queue.queueProgram.hours),
				// 	m("p", m("strong", "Holiday Schedule: "), Queue.queueProgram.holiday_schedule),
				// 	m("p", m("strong", "Transportation: "), Queue.queueProgram.transportation),
				// 	m("p", m("strong", "Contact First Name: "), Queue.queueProgram.contact_firstname),
				// 	m("p", m("strong", "Contact Last Name: "), Queue.queueProgram.contact_lastname),
				// 	m("p", m("strong", "Contact Title: "), Queue.queueProgram.contact_title),
				// 	m("p", m("strong", "Contact Email: "), Queue.queueProgram.contact_email),
				// 	m("p", m("strong", "Contact Phone: "), Queue.queueProgram.contact_phonenumber),
				// 	m("p", m("strong", "Need Domain: "), (Queue.queueProgram.service_type || []).join(', ')),
				// 	m("p", m("strong", "Languages: "), Queue.queueProgram.language_arr),
				// 	m("p", m("strong", "How to Refer: "), Queue.queueProgram.application_process),
				// 	m("p", m("strong", "Required Document Links: "), Queue.queueProgram.documents_required),
				// 	m("p", m("strong", "Payment Options: "), Queue.queueProgram.fee_structure),
				// 	m("p", m("strong", "Accepting Clients?: "), Queue.queueProgram.accepting_clients),				
				// 	m("p", m("strong", "Appointment Required?: "),Queue.queueProgram.appointment_required),
				// 	m("p", m("strong", "Eligibility: "), Queue.queueProgram.eligibility),
				

				// 	]),
				
				
			m("div.reviewbuttons",
				m("button[type=submit][id=queuesubmit][style=color:green;].btn btn-default", {
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
								.then(Queue.deleteQueueItem(vnode.attrs.id))							
							}

							else if(Queue.type_submission === "existing_program"){
								Agency.updateAgency(Queue.queueAgency)
								.then(Agency.updateProgram(Queue.queueProgram))
								.then(Agency.updateLanguage(Queue.queueLanguage))
								.then(Queue.deleteQueueItem(vnode.attrs.id))	
							}

							else if(Queue.type_submission === "existing_agency") {
								Agency.updateAgency(Queue.queueAgency)
								.then(Queue.deleteQueueItem(vnode.attrs.id))
							}


							document.getElementById("queuesubmit").disabled = true;
							document.getElementById("queuereject").disabled = true;

				}},
					"Accept"),
				m("button[type=submit][id=queuereject][style=color:red;].btn btn-default", {
					onclick: function(e) {
						Queue.deleteQueueItem(vnode.attrs.id)
						document.getElementById("queuesubmit").disabled = true;
						document.getElementById("queuereject").disabled = true;
					}
				}, "Reject")





					)


				)
			)

	 // )
	}
}
