var m = require("mithril")
var Agency = require("../models/Agency")
var ReviewBase = require("./ReviewBase")
var NewAgency = require("./NewAgency")


module.exports = {

view: function() {
		return( m(ReviewBase, { agency: newAgency, program: newAgency.selected_program})
          )
	}

}