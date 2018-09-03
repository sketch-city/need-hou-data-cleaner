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
							m("td", newAgency.name),
							m("td", newAgency.physical_address),
							m("td", newAgency.phone_number)
					
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
							m("td", newAgency.selected_program.name),
							m("td", newAgency.selected_program.description),
							m("td", newAgency.selected_program.physical_address),
							m("td", newAgency.selected_program.service_type),
							m("td", newAgency.selected_program.application_process),
							m("td", newAgency.selected_program.fee_structure)

							])

						])


					])

				])


          )
		



	}
}