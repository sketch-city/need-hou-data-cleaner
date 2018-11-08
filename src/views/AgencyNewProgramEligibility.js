var m = require("mithril")
var Agency = require("../models/Agency")
var ProgramEligibility = require("./ProgramEligibility")
var helper = require("../helper")


module.exports = {
oninit: function(){
        newAgency.selected_program.agency_id = newAgency.id
},
view: function() {
	return(m(ProgramEligibility, { program: newAgency.selected_program, previous_link: "/newagencyprogramreferral", next_link: "/newagencyprogramcontact"})
	 	)
	}
}