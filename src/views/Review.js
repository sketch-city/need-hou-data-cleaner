var m = require("mithril")
var Agency = require("../models/Agency")
var NewAgency = require("./NewAgency.js")

module.exports = {
oninit: function(vnode){
},

view: function() {
		return(

			m("div.reviewpage", [
				m("table[id=agencyreviewtabl].pure-table pure-table-horizontal",[
					m("thead", [
						m("tr", [
							m("td", "Organization Name"),
							m("td", "Physical Address"),
							m("td", "Phone Number")
					
							])
						]),
					m("tbody", [
						m("tr", [
							m("td",m("a[href=#]", Agency.selected.name)),
							m("td", Agency.selected.physical_address),
							m("td", Agency.selected.phone_number)
					
							])

						])
					]),
				m("table[id=programreviewtabl].pure-table pure-table-horizontal",[
					m("thead", [
						m("tr", [
							m("td", "Program Name"),
							m("td", "Description"),
							m("td", "Physical Address"),
							m("td", "Service Type"),
							m("td", "Application Process"),
							m("td", "Fee Structure")
					

							])

						]),
					m("tbody", [
						m("tr", [
							m("td", m("a", { href: "/programform/" + Agency.selected_program.id,
											oncreate: m.route.link  }, Agency.selected_program.name)),
							m("td", Agency.selected_program.description),
							m("td", Agency.selected_program.physical_address),
							m("td", Agency.selected_program.service_type),
							m("td", Agency.selected_program.application_process),
							m("td", Agency.selected_program.fee_structure)

							])

						])


					])

				])


          )
		



	}
}