var m = require("mithril")
var Queue = require("../../models/Queue")
var helper = require("../../helper")
var DataTable = {
	oncreate: function(vnode){
		$(vnode.dom).DataTable()
	},

	view: function(vnode) {
		return m('div')
	}
}


module.exports = {

oninit: Queue.getQueue,
onupdate: function(vnode){ 
	$('#queuetable').DataTable();
},

view: function(vnode) { 

		return(
		  m("div",
			m("div[role=alert].alert alert-success", { hidden: vnode.attrs.submitted === null || vnode.attrs.submitted != true},
					m("strong[id=acceptmessage]", "Submission Accepted")),
			m("div[role=alert].alert alert-danger", { hidden: vnode.attrs.submitted === null || vnode.attrs.submitted != false},
					m("strong[id=rejectmessage]", "Submission Rejected")),
				m("table[id=queuetable].table table-striped",
				{
				
				},

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