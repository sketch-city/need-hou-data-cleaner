var m = require("mithril")
var Agency = require("../models/Agency")
var helper = require("../helper") 

module.exports = {
oninit: function() { helper.moveProgress(70, 70, 90) } ,
oncreate: function() { 
	helper.difftext(Agency.original_selected.physical_address, Agency.selected.physical_address, "address") 
	helper.difftext(Agency.original_selected.phone_number, Agency.selected.phone_number, "phone") 
	helper.difftext(Agency.original_selected.website, Agency.selected.website, "website") 
},

view: function() {
		return(

			m("div.reviewpage[id=wrap_all]", [
				m("div.orgreview", [
					m("h2", "Organization Details. ",
						m("button[type=submit][style=font-size:10px; margin-left:50px;].btn btn-default", 
								{
							 	 href: "/editagency", 
							 	 oncreate: m.route.link 
							 	}, "Edit")),
					m("p", m("strong", "Name: " ), Agency.selected.name),
					m("p", m("strong", "Website: "), m("pre[id=website]")),
					m("p", m("strong", "Full Physical Address: "), m("pre[id=address]")),
					m("p", m("strong", "Phone Number: "), m("pre[id=phone]"))
					
					
					]),
				
			m("div.reviewbuttons",
			m("button[type=submit][id=submitfinal].btn btn-default", {
				onclick: function(e) {
						Agency.addQueueItem({
								submission_type: "existing_agency", 
								submission: { 
								agency_data: Agency.selected,
								program_data: {}
					
								}

							})

					document.getElementById("submitfinal").disabled = true;
					document.getElementById("submitmessage").hidden = false;
					document.getElementById("editfinal").classList.remove("hidden")
                },

			},
				"Submit"),
			m("button[type=submit][id=editfinal].btn btn-default hidden" , { 
				href: "/selectagency", 
				oncreate: m.route.link 

			}, "Edit Additional Program")

			),
			m("p[id=submitmessage][style=color:green;]",{ hidden: true  } , "Your form was succesfully submitted!")
			])

			)

	}
}