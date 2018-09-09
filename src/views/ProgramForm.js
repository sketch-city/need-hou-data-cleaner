var m = require("mithril")
var Agency = require("../models/Agency")
var ProgramBase = require("./ProgramBase")


module.exports = {
oninit: function(vnode) { 
	Agency.loadProgram(vnode.attrs.id).then(Agency.loadLanguages(vnode.attrs.id))
}
,
view: function() {
	return m(ProgramBase, { agency: Agency.selected, program: Agency.selected_program, next_route: "/review" })
	}	
}