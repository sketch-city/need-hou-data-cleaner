var m = require("mithril")
var ProgramBase = require("./ProgramBase")
var Agency = require("../models/Agency")
var NewAgency = require("./NewAgency")


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
	return(m(ProgramBase, {agency: Agency.selected , program:  newAgency.selected_program , next_route: "/newprogramreview"})


	 	)
	}
}