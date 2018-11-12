var m = require("mithril")
var Agency = require("../models/Agency")
var ReviewBase = require("./ReviewBase")



module.exports = {

view: function() {
		return( m(ReviewBase, { agency: Agency.selected, original_agency: Agency.original_selected, original_program: Agency.original_selected_program,  program: Agency.selected_program,  org_route: "/editagency",  program_route: "/editprogramcontact",
								 previous_link: "/editprogramcontact", agencyFunction: "existing_program"})
          )
	}

}