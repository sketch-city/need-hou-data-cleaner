var m = require("mithril")
var Queue = require("../models/Queue")
var helper = require("../helper")


module.exports = {
oninit: Queue.getQueue,
view: function() { 

		return(

			m("div.queue_list",
				m("table.table table-striped",
					m("tr",
						m("th", "Date Submitted")),
				Queue.queue_list.map(function(item) {
					return(
					m("tr",
						m("td", 
							m("a",{ href: "/queue/" + item.id, oncreate: m.route.link }, item.posted_date))

						)
					)
				})
				
				)
			)




		)		
	}	
}