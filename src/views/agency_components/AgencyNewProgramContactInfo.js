var m = require("mithril")
var Agency = require("../../models/Agency")
var ProgramContactInfo = require("../program_components/ProgramContactInfo")
var helper = require("../../helper")


module.exports = {
oninit: function(){
        newAgency.selected_program.agency_id = newAgency.id
},
view: function() {
	return(m(ProgramContactInfo, { program: newAgency.selected_program, previous_link: "/newagency", next_link: "/newagencyreview"})
	 	)
	}
}