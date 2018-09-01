var m = require("mithril")
var Agency = require("../models/Agency")

module.exports = {
oninit: Agency,
view: function() {
			//selected Agency table
		return(
			m("table[id=agencyreviewtabl].pure-table pure-table-horizontal",[
				m("thead", [
					m("tr", [
						Object.keys(Agency.selected).map(function(key) {
						return(m("td", key)) 
							})
						])
					]),
				m("tbody", [
					m("tr", [
						Object.values(Agency.selected).map(function(val) {
						return(m("td", val)) 
							})
						])

					])


				])

			
			// m("table[id=programreviewtabl].pure-table pure-table-horizontal",[
			// 	m("thead", [
			// 		m("tr", [
			// 			Object.keys(Agency.selected_program).map(function(key) {
			// 			return(m("td", key)) 
			// 				})
			// 			])
			// 		]),
			// 	m("tbody", [
			// 		m("tr", [
			// 			Object.values(Agency.selected_program).map(function(val) {
			// 			return(m("td", val)) 
			// 				})
			// 			])

			// 		])


			// 	])




          )
		



	}
}