var m = require("mithril")
var Agency = require("../models/Agency")
var ProgramEligibility = require("./ProgramEligibility")




module.exports = {
view: function() {
	return(m(ProgramEligibility, { program: newProgram, next_link: "/newprogramcontact"})

	 	)
	}
}