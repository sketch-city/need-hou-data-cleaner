var m = require("mithril")
var Agency = require("../models/Agency")


module.exports = {
view: function(vnode) {
		return(

			m("div.reviewpage", [

				m("div.agencyreview", 
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

				 // m("button[type=submit][id=edit1].pure-button pure-button-primary", {
                  
     //                    },"Edit")

				 
				 ),
				m("table[id=programreviewtabl].pure-table pure-table-horizontal",[
					m("thead", [
						m("tr", [
							m("td", "Program Name"),
							m("td", "Alternative Name"),
							m("td", "Description"),
							m("td", "Physical Address"),
							m("td", "Program Need Domain"),
							m("td", "How to Refer"),
							m("td", "Fee Structure")
					

							])

						]),
					m("tbody", [
						m("tr", [
							m("td", m("a", { href: "/programform/" + vnode.attrs.program.id,
											oncreate: m.route.link  },vnode.attrs.program.name)),
							m("td", vnode.attrs.program.alternative_name),
							m("td", vnode.attrs.program.description),
							m("td", vnode.attrs.program.physical_address),
							m("td", vnode.attrs.program.service_type),
							m("td", vnode.attrs.program.application_process),
							m("td", vnode.attrs.program.fee_structure)

							])

						])


					]),
				
			m("button[type=submit][id=submitfinal].pure-button pure-button-primary", {
				onclick: function(e) {
						if(vnode.attrs.agencyFunction === "new_agency"){
							Agency.addNewAgency(vnode.attrs.agency)
							.then(Agency.addNewProgram(vnode.attrs.program))
							.then(Agency.addNewLanguage(vnode.attrs.program))
						}

						else if(vnode.attrs.agencyFunction === "new_program"){
							Agency.addNewProgram(vnode.attrs.program)
							.then(Agency.addNewLanguage(vnode.attrs.program))
						}

                }
			},
				"Submit")

				])

          )

	}
}