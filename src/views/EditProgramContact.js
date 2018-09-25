var m = require("mithril")
var Agency = require("../models/Agency")
var ProgramContactInfo = require("./ProgramContactInfo")


module.exports = {

view: function() {
	return m(ProgramContactInfo, { agency: Agency.selected, program: Agency.selected_program, previous_link: "/selectprogram",  next_link:"/editprogramreferral"})
	}	
}