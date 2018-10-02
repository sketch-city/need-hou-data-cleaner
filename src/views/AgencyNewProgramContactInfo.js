var m = require("mithril")
var Agency = require("../models/Agency")
var ProgramContactInfo = require("./ProgramContactInfo")

function guid() {
  function s4() {
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
  }
  return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
}


module.exports = {
oninit: function(){
        newAgency.selected_program.agency_id = guid()
},
view: function() {
	return(m(ProgramContactInfo, { program: newAgency.selected_program, previous_link: "/newagency", next_link: "/newagencyprogramreferral"})
	 	)
	}
}