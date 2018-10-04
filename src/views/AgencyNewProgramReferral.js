var m = require("mithril")
var Agency = require("../models/Agency")
var ProgramReferral= require("./ProgramReferral")



module.exports = {
view: function() {
	return(m(ProgramReferral, { program: newAgency.selected_program, next_link: "/newagencyreview"})


	 	)
	}
}