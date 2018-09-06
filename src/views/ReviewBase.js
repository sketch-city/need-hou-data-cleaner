var m = require("mithril")
var Agency = require("../models/Agency")


module.exports = {
view: function(vnode) {
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
							m("td",m("a[href=#]", vnode.attrs.agency.name)),
							m("td", vnode.attrs.agency.physical_address),
							m("td", vnode.attrs.agency.phone_number)
					
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
							m("td", m("a", { href: "/programform/" + vnode.attrs.program.id,
											oncreate: m.route.link  },vnode.attrs.program.name)),
							m("td", vnode.attrs.program.description),
							m("td", vnode.attrs.program.physical_address),
							m("td", vnode.attrs.program.service_type),
							m("td", vnode.attrs.program.application_process),
							m("td", vnode.attrs.program.fee_structure)

							])

						])


					])

				])


          )
		



	}
}