var m = require("mithril")
var Agency = require("../models/Agency")
var ReviewBase = require("./ReviewBase")



module.exports = {

view: function() {
		return( m(ReviewBase, { agency: Agency.selected, program: Agency.selected_program, service_types : [],  org_route: "/editagency",  program_route: "/editprogramcontact",
								 agencyFunction: "existing_program"})
          )
	}

}