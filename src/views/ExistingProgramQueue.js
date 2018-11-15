var m = require("mithril")
var QueueItem = require("./QueueItem")

var Queue = require("../models/Queue")
var Agency = require("../models/Agency")

module.exports = {

view: function(vnode) {

	return(m(QueueItem, { selected_agency: Agency.selected, selected_program: Agency.selected_program }))


	}

}