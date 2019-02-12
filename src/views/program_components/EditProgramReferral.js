var m = require("mithril")
var Agency = require("../../models/Agency")
var ProgramReferral = require("./ProgramReferral")


module.exports = {

view: function() {
	return m(ProgramReferral , { agency: Agency.selected, program: Agency.selected_program, previous_link: "/selectprogram" , next_link: "/editprogrameligibility"})
	}	
}