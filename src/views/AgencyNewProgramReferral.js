var m = require("mithril")
var Agency = require("../models/Agency")
var ProgramReferral= require("./ProgramReferral")

function guid() {
  function s4() {
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
  }
  return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
}


module.exports = {
view: function() {
	return(m(ProgramReferral, { program: newAgency.selected_program, next_link: "/newagencyreview"})


	 	)
	}
}