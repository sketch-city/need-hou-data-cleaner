var m = require("mithril")
var Agency = require("../../models/Agency")
var ProgramReferral= require("../program_components/ProgramReferral")



module.exports = {
view: function() {
	return(m(ProgramReferral, { program: newAgency.selected_program, next_link: "/newagencyprogrameligibility"})


	 	)
	}
}