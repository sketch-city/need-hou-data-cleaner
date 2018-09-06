var m = require("mithril")
var Agency = require("../models/Agency")
var ReviewBase = require("./ReviewBase")
var NewAgency = require("./NewAgency")


module.exports = {

view: function() {
		return( m(ReviewBase, { agency: Agency.selected, program: newAgency.selected_program})
          )
	}

}