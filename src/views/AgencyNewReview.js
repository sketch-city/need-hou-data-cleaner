var m = require("mithril")
var Agency = require("../models/Agency")
var ReviewBase = require("./ReviewBase")



module.exports = {

view: function() {
		return( m(ReviewBase, { agency: newAgency, program: newAgency.selected_program, original_agency: newAgency, original_program: newAgency.selected_program,
			agencyFunction: "new_agency", org_route: "/newagency",  program_route: "/newagencyprogramcontact", previous_link:"/newagencyprogramcontact" })
          )
	}

}