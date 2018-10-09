var m = require("mithril")
var Queue = require("../models/Queue")
var helper = require("../helper")


module.exports = {
oninit: Queue.getQueue,
view: function() { 

		return(
		  m("section", 
			m("ul",
        			m("li",
        				m("a", "Logout"))),
			m("div.queue_list",
				m("table.table table-striped",
				  m("thead",
					m("tr",
						m("th[scope=col]", "#"),
						m("th[scope=col]", "ID"),
						m("th[scope=col", "Type"),
						m("th[scope=col]", "Date"))),
				  m("tbody",
				Queue.queue_list.map(function(item, index) {
					return(
							
							m("tr",
								m("th[scope=row]", index + 1),
								m("td[id=queueid]", m("a", { href: "/queue/" + item.id, oncreate: m.route.link}, item.id )),
								m("td", item.submission_type),
								m("td", helper.parse_date(item.posted_date)))

									)
								
							})
						)
					)
				)
			)
		)		
	}	
}