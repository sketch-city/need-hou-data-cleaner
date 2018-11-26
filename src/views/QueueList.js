var m = require("mithril")
var Queue = require("../models/Queue")
var helper = require("../helper")



module.exports = {
oninit: Queue.getQueue,
view: function() { 

		return(
			m("div[style=width:600px].queue_list",
				m("table.table table-striped",
				  m("thead",
					m("tr",
						m("th[scope=col]", "#"),
						m("th[scope=col]", "Organization"),
						m("th[scope=col]", "Type"),
						m("th[scope=col]", "User"),
						m("th[scope=col]", "Date"))),
				  m("tbody",
				Queue.queue_list.map(function(item, index) {
					return(
							
							m("tr",
								m("th[scope=row]", index + 1),
								m("td[id=queueid]", m("a", { href: "/queue/" + item.id,
									oncreate: m.route.link}, item.submission.agency_data.name)),
								m("td", item.submission_type),
								m("td", item.submission.source),
								m("td", helper.parse_date(item.posted_date)))

								)
								
							})
						)
					)
				)
		)		
	}	
}