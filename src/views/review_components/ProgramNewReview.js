var m = require("mithril")
var Agency = require("../../models/Agency")
var ReviewBase = require("./ReviewBase")






module.exports = {

view: function() {
		return( m(ReviewBase, { agency: Agency.selected, program: newProgram,  
				agencyFunction: "new_program", 
				org_route: "/agencyform",  
				program_route: "/newprogramcontact", 
				original_agency:  Agency.original_selected, 
				original_program: newProgram,
				previous_link: "/newprogramcontact"})
          )
	}

}