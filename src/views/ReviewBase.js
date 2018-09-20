var m = require("mithril")
var Agency = require("../models/Agency")

function activateReview(){
	document.getElementById("reviewlink").classList.remove("disabled")
}

module.exports = {
oninit: activateReview,
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
					m("p", m("strong", "Full Physical 	Address: "), vnode.attrs.agency.physical_address),
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
					m("p", m("strong", "Full Physical Address: "), vnode.attrs.program.physical_address),
					m("p", m("strong", "Website: "), vnode.attrs.program.website),
					m("p", m("strong", "Schedule: "), vnode.attrs.program.hours),
					m("p", m("strong", "Holiday Schedule: "), vnode.attrs.program.holiday_schedule),
					m("p", m("strong", "Transportation: "), vnode.attrs.program.transportation),
					m("p", m("strong", "Contact First Name: "), vnode.attrs.program.contact_firstname),
					m("p", m("strong", "Contact Last Name: "), vnode.attrs.program.contact_lastname),
					m("p", m("strong", "Contact Title: "), vnode.attrs.program.contact_title),
					m("p", m("strong", "Contact Email: "), vnode.attrs.program.contact_email),
					m("p", m("strong", "Contact Phone: "), vnode.attrs.program.contact_phonenumber),
					m("p", m("strong", "Need Domain: "), vnode.attrs.program.service_type),
					m("p", m("strong", "Languages: "), vnode.attrs.program.languages),
					m("p", m("strong", "How to Refer: "), vnode.attrs.program.application_process),
					m("p", m("strong", "Required Document Links: "), vnode.attrs.program.documents_required),
					m("p", m("strong", "Payment Options: "), vnode.attrs.program.fee_structure),
					m("p", m("strong", "Accepting Clients?: "), vnode.attrs.program.accepting_clients),				
					m("p", m("strong", "Appointment Required?: "), vnode.attrs.program.appointment_required),
					m("p", m("strong", "Eligibility: "), vnode.attrs.program.eligibility),
				

					]),

				
			m("div.reviewbuttons",
			m("button[type=submit][id=submitfinal].pure-button pure-button-primary", {
				onclick: function(e) {
						if(vnode.attrs.agencyFunction === "new_agency"){
							Agency.addNewAgency(vnode.attrs.agency)
							.then(Agency.addNewProgram(vnode.attrs.program))
							//.then(Agency.addNewLanguage({program_id: vnode.attrs.program.id, languages: vnode.attrs.program.languages}))
							
						}

						else if(vnode.attrs.agencyFunction === "new_program"){
							Agency.updateAgency(vnode.attrs.agency)
							.then(Agency.addNewProgram(vnode.attrs.program))
							//.then(Agency.addNewLanguage({ program_id: vnode.attrs.program.id, languages: vnode.attrs.program.languages}))							
						}

						else if(vnode.attrs.agencyFunction === "existing_program"){
							Agency.updateAgency(vnode.attrs.agency)
							.then(Agency.updateProgram(vnode.attrs.program))
							//.then(Agency.updateLanguage({ program_id: vnode.attrs.program.id, languages: vnode.attrs.program.languages}))	
						}

					document.getElementById("submitfinal").disabled = true;
					document.getElementById("submitmessage").hidden = false;
					document.getElementById("editfinal").hidden = false;
                },

			},
				"Submit"),
			m("button[type=submit][id=editfinal].pure-button pure-button-primary", { 
				hidden: true,
				href: "/agencyform", 
				oncreate: m.route.link 

			}, "Edit Additional Program")

			),
			m("p[id=submitmessage][style=color:green;]",{ hidden: true  } , "Your form was succesfully submitted!")
			])

			)

	}
}