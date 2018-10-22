var m = require("mithril")
var Agency = require("../models/Agency")
var helper = require("../helper") 


module.exports = {
view: function(vnode) {
		return(
			m("div.review_content",
				m("div.orgreview", [
					m("h2", "Organization Details. ",
						m("button[type=submit][style=font-size:10px; margin-left:50px;].btn btn-default", 
								{
							 	 href: vnode.attrs.org_route, 
							 	 oncreate: m.route.link 
							 	}, "Edit")),
					m("p", m("strong", "Name: " ), m("pre.agency[id=agency_name]")),
					m("p", m("strong", "Full Physical Address: "), m("pre.agency[id=agency_physical_address]")),
					m("p", m("strong", "Phone Number: "), m("pre.agency[id=agency_phone_number]")),
					
					]),

				m("div.programreview", [
					m("h2", "Program Details. ",
						m("button[type=submit][style=font-size:10px;margin-left:50px;].btn btn-default", 
								{
							 	 href: vnode.attrs.program_route, 
							 	 oncreate: m.route.link 
							 	}, "Edit")),
					m("p", m("strong", "Name: "),m("pre.program[id=name]")),
					m("p", m("strong", "Description: "), m("pre.program[id=description]")),
					m("p", m("strong", "Full Physical Address: "), m("pre.program[id=physical_address]")),
					m("p", m("strong", "Website: "), m("pre.program[id=website]")),
					m("p", m("strong", "Schedule: "), m("pre.program[id=hours]")),
					m("p", m("strong", "Holiday Schedule: "), m("pre.program[id=holiday_schedule]")),
					m("p", m("strong", "Transportation: "), m("pre.program[id=transportation]")),
					m("p", m("strong", "Contact First Name: "),m("pre.program[id=contact_firstname]")),
					m("p", m("strong", "Contact Last Name: "), m("pre.program[id=contact_lastname]")),
					m("p", m("strong", "Contact Title: "), m("pre.program[id=contact_title]")),
					m("p", m("strong", "Contact Email: "), m("pre.program[id=contact_email]")),
					m("p", m("strong", "Contact Phone: "), m("pre.program[id=phone_number]")),
					m("p", m("strong", "Need Domain: "), m("pre.program[id=service_type]")),
					m("p", m("strong", "Languages: "), m("pre.program[id=language_arr]")),
					m("p", m("strong", "How to Refer: "), m("pre.program[id=application_process]")),
					m("p", m("strong", "Required Document Links: "), m("pre.program[id=documents_required]")),
					m("p", m("strong", "Payment Options: "),m("pre.program[id=fee_structure]")),
					m("p", m("strong", "Accepting Clients?: "), m("pre.program[id=accepting_clients]")),				
					m("p", m("strong", "Appointment Required?: "), m("pre.program[id=appointment_required]")),
					m("p", m("strong", "Eligibility: "), m("pre.program[id=eligibility]")),
				

					])
				)
				
			)
	}
}
