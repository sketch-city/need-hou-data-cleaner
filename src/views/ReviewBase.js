var m = require("mithril")
var Agency = require("../models/Agency")


module.exports = {
view: function(vnode) {
		return(

			m("div.reviewpage[id=wrap_all]", [
				m("div.orgreview", [
					m("h2", "Organization Details. ",
						m("button[type=submit][style=font-size:10px; margin-left:50px;].pure-button pure-button-primary", 
								{
							 	 href: vnode.attrs.org_route, 
							 	 oncreate: m.route.link 
							 	}, "Edit")),
					m("p", m("strong", "Name: " ), vnode.attrs.agency.name),
					m("p", m("strong", "Address: "), vnode.attrs.agency.physical_address),
					m("p", m("strong", "Phone Number: "), vnode.attrs.agency.phone_number),
					
					]),

				m("div.programreview", [
					m("h2", "Program Details. ",
						m("button[type=submit][style=font-size:10px;margin-left:50px;].pure-button pure-button-primary", 
								{
							 	 href: vnode.attrs.program_route, 
							 	 oncreate: m.route.link 
							 	}, "Edit")),
					m("p", m("strong", "Name: "), vnode.attrs.program.name),
					m("p", m("strong", "Alternative Name: "), vnode.attrs.program.alternative_name),
					m("p", m("strong", "Description: "), vnode.attrs.program.description),
					m("p", m("strong", "Address: "), vnode.attrs.program.physical_address),
					m("p", m("strong", "Website: "), vnode.attrs.program.website),
					m("p", m("strong", "Schedule: "), vnode.attrs.program.hours),
					m("p", m("strong", "Holiday Schedule: "), vnode.attrs.program.holiday_schedule),
					m("p", m("strong", "Transportation: "), vnode.attrs.program.transportation),
					m("p", m("strong", "Contact First Name: "), vnode.attrs.program.contact_firstname),
					m("p", m("strong", "Contact Last Name: "), vnode.attrs.program.contact_lastname),
					m("p", m("strong", "Contact Title: "), vnode.attrs.program.contact_title),
					m("p", m("strong", "Contact Department: "), vnode.attrs.program.contact_department),
					m("p", m("strong", "Contact Email: "), vnode.attrs.program.contact_email),
					m("p", m("strong", "Contact Phone: "), vnode.attrs.program.contact_phonenumber),
					m("p", m("strong", "Need Domain: "), vnode.attrs.program.service_type),
					m("p", m("strong", "Languages: "), vnode.attrs.program.languages),
					m("p", m("strong", "How to Refer: "), vnode.attrs.program.application_process),
					m("p", m("strong", "Documents Required: "), vnode.attrs.program.documents_required),
					m("p", m("strong", "Payment Options: "), vnode.attrs.program.fee_structure),
					m("p", m("strong", "Accepting Clients?: "), vnode.attrs.program.accepting_clients),
					m("p", m("strong", "Appointment Required?: "), vnode.attrs.program.appointment_required),
					m("p", m("strong", "Eligibility: "), vnode.attrs.program.eligibility),
				

					]),

				
				
			m("button[type=submit][id=submitfinal].pure-button pure-button-primary", {
				onclick: function(e) {
						if(vnode.attrs.agencyFunction === "new_agency"){
							Agency.addNewAgency(vnode.attrs.agency)
							.then(Agency.addNewProgram(vnode.attrs.program))
							.then(Agency.addNewLanguage({program_id: vnode.attrs.program.id, languages: vnode.attrs.program.languages}))
							
						}

						else if(vnode.attrs.agencyFunction === "new_program"){
							Agency.addNewProgram(vnode.attrs.program)
							.then(Agency.addNewLanguage({ program_id: vnode.attrs.program.id, languages: vnode.attrs.program.languages}))
							
						}

					document.getElementById("submitfinal").disabled = true;
				

                },

			},
				"Submit")
			])

			)

	}
}