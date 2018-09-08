var m = require("mithril")
var Agency = require("../models/Agency")
var ReviewBase = require("./ReviewBase")
var NewProgram = require("./NewProgram")


module.exports = {

view: function() {
		return( m(ReviewBase, { agency: Agency.selected, program: newProgram , agencyFunction: "new_program"})
          )
	}

}