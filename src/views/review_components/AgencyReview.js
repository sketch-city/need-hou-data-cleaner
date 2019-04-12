var m = require("mithril")
var Agency = require("../../models/Agency")
var helper = require("../../helper") 
var A2S_Verified_Checkbox = require("./A2S_Verified_Checkbox")

module.exports = {
oninit: function() { 



} ,
oncreate: function() { 
	helper.difftext(Agency.original_selected.name, Agency.selected.name, "name") 
	helper.difftext(Agency.original_selected.physical_address, Agency.selected.physical_address, "address") 
	helper.difftext(Agency.original_selected.phone_number, Agency.selected.phone_number, "phone") 
	helper.difftext(Agency.original_selected.website, Agency.selected.website, "website") 
},

view: function() {
		return(

			m("div", [
				m("form", {
								onsubmit: function(e) {
								 	e.preventDefault()
									Agency.addQueueItem({
											status: "new",
											submission_type: "existing_agency", 
											submission: { 
											agency_data: Agency.selected,
											program_data: {},
											source: localStorage.username || Agency.source
											}
										})

								document.getElementById("submitfinal").disabled = true;
								document.getElementById("submitmessage").hidden = false;
								document.getElementById("editfinal").hidden = false
			                }
			            }, [
					m("div", [
						m("h2", "Organization Details. ",
							m("button[style=font-size:10px; margin-left:50px;].btn btn-default", 
									{
								 	 href: "/editagency", 
								 	 oncreate: m.route.link 
								 	}, "Edit")),
						m("p", m("strong", "Name: " ), m("pre[id=name]")),
						m("p", m("strong", "Website: "), m("pre[id=website]")),
						m("p", m("strong", "Full Physical Address: "), m("pre[id=address]")),
						m("p", m("strong", "Phone Number: "), m("pre[id=phone]")),
						m("label", "If not logged in, please enter your name and email"),



					    m("input[id=check_source].form-control[type=text]",{ value: Agency.source, required: localStorage.username === undefined,
	                      oninput: function(e) {
	                            Agency.source  = e.currentTarget.value;
	                          }
	                        }),
						
						]),
				
					m("div.reviewbuttons",
						m("button.btn btn-outline-success", 
											{
										 	 href: "/selectprogram", 
										 	 oncreate: m.route.link 
										 	}, "Previous"),
						m("button[type=submit][id=submitfinal].btn btn-success", {

						},
							"Submit"),
						m("button[id=editfinal].btn btn-success" , { 
							href: "/queue", 
							oncreate: m.route.link,
							hidden: true

						}, "View Queue")

					),
				m("p[id=submitmessage][style=color:green;]",{ hidden: true  } , "Your form was succesfully submitted!")


				])

			])
		)
	}
}