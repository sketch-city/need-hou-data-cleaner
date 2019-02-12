var m = require("mithril")
var Agency = require("../../models/Agency")
var ProgramReferral= require("./ProgramReferral")




module.exports = {
view: function() {
	return(m(ProgramReferral, { program: newProgram, next_link: "/newprogrameligibility", previous_link: "/selectprogram" })
	 	)
	}
}
