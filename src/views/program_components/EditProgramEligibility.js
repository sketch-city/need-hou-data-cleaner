var m = require("mithril")
var Agency = require("../../models/Agency")
var ProgramEligibility = require("./ProgramEligibility")


module.exports = {

view: function() {
	return m(ProgramEligibility , { agency: Agency.selected, program: Agency.selected_program, previous_link: "/editprogramreferral" , next_link: "/editprogramcontact"})
	}	
}