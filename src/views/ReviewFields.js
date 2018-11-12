var m = require("mithril")
var Agency = require("../models/Agency")
var helper = require("../helper") 


module.exports = {
view: function(vnode) {
		return(
			m("div.review_content",
				m("div.orgreview", [
					m("h2", "Organization Details. ",
						// m("button[type=submit][id=editorg][style=font-size:10px; margin-left:50px;].btn btn-default", 
						// 		{
						// 	 	 href: vnode.attrs.org_route, 
						// 	 	 oncreate: m.route.link 
						// 	 	}, "Edit")

						),
					m("p", m("strong", "Name: " ), m("pre.agency[id=agency_name]")),
					m("p", m("strong", "Website: "), m("pre.agency[id=agency_website]")),
					m("p", m("strong", "Full Physical Address: "), m("pre.agency[id=agency_physical_address]")),
					m("p", m("strong", "Phone Number: "), m("pre.agency[id=agency_phone_number]"))
					
					
					]),

				m("div.programreview", [
					m("h2", "Program Details. ",
						// m("button[type=submit][id=editprogram][style=font-size:10px;margin-left:50px;].btn btn-default", 
						// 		{
						// 	 	 href: vnode.attrs.program_route, 
						// 	 	 oncreate: m.route.link 
						// 	 	}, "Edit")

						),

					//referral fields
					m("p", m("strong", "Name: "),m("pre.program[id=name]")),
					m("p", m("strong", "Neighborhood/Area"), m("pre.program[id=service_area]")),
					m("p", m("strong", "Description: "), m("pre.program[id=description]")),
					m("p", m("strong", "Accepting clients?: "), m("pre.program[id=accepting_clients]")),
					m("p", m("strong", "Waitlist wait: "), m("pre.program[id=waitlist_wait]")),
					m("p", m("strong", "Client next steps "), m("pre.program[id=next_steps]")),
					m("p", m("strong", "Program languages: "), m("pre.program[id=language_arr]")),
					m("p", m("strong", "Eligible zipcodes: "), m("pre.program[id=zipcode_eligibility]")),
					m("p", m("strong", "Eligible incomes: "), m("pre.program[id=income_eligibility]")),
					m("p", m("strong", "Eligible gender: "), m("pre.program[id=gender_eligibility]")),
					m("p", m("strong", "Eligible age: "), m("pre.program[id=age_eligibility]")),
					m("p", m("strong", "Required enrollment in: "), m("pre.program[id=other_program_enrollment]")),
					m("p", m("strong", "Other eligibility: "), m("pre.program[id=other_eligibility]")),
					m("p", m("strong", "Immigration status: "), m("pre.program[id=immigration_status]")),
					m("p", m("strong", "Current accepted ID's"), m("pre.program[id=id_accepted_current]")),
					m("p", m("strong", "Expired accepted ID's"), m("pre.program[id=id_accepted_expired]")),
					m("p", m("strong", "Proof of address"), m("pre.program[id=proof_address]")),
					m("p", m("strong", "Appointment required?: "), m("pre.program[id=appointment_required]")),
					m("p", m("strong", "Services available on intake?"), m("pre.program[id=service_available_intake]")),
					m("p", m("strong", "Intake notes: "), m("pre.program[id=service_available_intake_notes]")),
					m("p", m("strong", "Full Physical Address: "), m("pre.program[id=physical_address]")),
					m("p", m("strong", "Website: "), m("pre.program[id=website]")),
					m("p", m("strong", "Website languages: "), m("pre.program[id=website_languages]")),
					m("p", m("strong", "Service cost: "), m("pre.program[id=service_cost]")),
					m("p", m("strong", "Payment options: "),m("pre.program[id=fee_structure]")),
					m("p", m("strong", "Frontline staff languages: "), m("pre.program[id=frontline_languages]")),
					m("p", m("strong", "Appointment notes: "), m("pre.program[id=appointment_required_notes]")),
					m("p", m("strong", "Interpretation offered: "), m("pre.program[id=interpretation_offered]")),
					m("p", m("strong", "Key words: "), m("pre.program[id=service_type]")),
					m("p", m("strong", "Crisis-services offered: "), m("pre.program[id=crisis_services_offered]")),
					m("p", m("strong", "Transportation: "), m("pre.program[id=transportation]")),
					//print table values of schedule





					//m("p", m("strong", "Schedule: "), m("pre.program[id=schedule]")),
					m("p", m("strong", "Schedule Notes: "), m("pre.program[id=schedule_notes]")),
					m("p", m("strong", "Holiday Schedule: "), m("pre.program[id=holiday_schedule]")),
					m("p", m("strong", "Required document links: "), m("pre.program[id=documents_required]")),
					m("p", m("strong", "Document languages: "), m("pre.program[id=document_languages]")),
					m("p", m("strong", "Form assistance offered: "), m("pre.program[id=document_assistance]")), 
					m("p", m("strong", "Visual aid offered: "), m("pre.program[id=visual_aids_offered]")),
					m("p", m("strong", "ADA acessible?"), m("pre.program[id=ada]")),
					m("p", m("strong", "Client opportunity for paperwork consultation: "), m("pre.program[id=consultation_opportunity]")),
					m("p", m("strong", "Has policy to respond to Immigration and Customs enforcement requests?: "), m("pre.program[id=enforcement_request_policy]")),
					m("p", m("strong", "Cultural competency training offered: "), m("pre.program[id=cultural_competency_offered]")),

					
			
					])
				)
				
		)
	}
}
