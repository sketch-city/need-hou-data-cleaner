var m = require("mithril")
var Agency = require("../models/Agency")
var helper = require("../helper") 
var A2S_Verified_Checkbox = require("./A2S_Verified_Checkbox")

module.exports = {
oninit: function() { 
	//helper.moveProgress(70, 70, 90) 
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
				m("div", [
					m("h2", "Organization Details. ",
						m("button[type=submit][style=font-size:10px; margin-left:50px;].btn btn-default", 
								{
							 	 href: "/editagency", 
							 	 oncreate: m.route.link 
							 	}, "Edit")),
					m("p", m("strong", "Name: " ), m("pre[id=name]")),
					m("p", m("strong", "Website: "), m("pre[id=website]")),
					m("p", m("strong", "Full Physical Address: "), m("pre[id=address]")),
					m("p", m("strong", "Phone Number: "), m("pre[id=phone]")),
					m(A2S_Verified_Checkbox, { program: null, agency: Agency.selected } ),

				// 	m("div.form-check",
				// 	m("input[type=checkbox][id=a2scheck_two][class=form-check-input]",
				// 		 	{   checked: Agency.selected.a2s_verified,
				// 		 		onchange: function(e) {
    //                                       Agency.selected.a2s_verified  = document.getElementById("a2scheck").checked? true:false
    //                                  }
    //                              }
				// 		 	),
				// m("label.form-check-label[for=defaultCheck1]", "A2S Verified")),
					
					
					]),
				
			m("div.reviewbuttons",
			m("button[type=submit].btn btn-outline-success", 
								{
							 	 href: "/selectprogram", 
							 	 oncreate: m.route.link 
							 	}, "Previous"),
			m("button[type=submit][id=submitfinal].btn btn-success", {
				onclick: function(e) {
						Agency.addQueueItem({
								status: "new",
								submission_type: "existing_agency", 
								submission: { 
								agency_data: Agency.selected,
								program_data: {},
								source: localStorage.username
								}
							})

					document.getElementById("submitfinal").disabled = true;
					document.getElementById("submitmessage").hidden = false;
					document.getElementById("editfinal").classList.remove("hidden")
                },

			},
				"Submit"),
			m("button[type=submit][id=editfinal].btn btn-success" , { 
				href: "/queue", 
				oncreate: m.route.link 

			}, "View Queue")

			),
			m("p[id=submitmessage][style=color:green;]",{ hidden: true  } , "Your form was succesfully submitted!")
			])

			)

	}
}