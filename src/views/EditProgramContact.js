var m = require("mithril")
var Agency = require("../models/Agency")
var ProgramContactInfo = require("./ProgramContactInfo")


module.exports = {
oninit: function(vnode) { 
	Agency.loadProgram(vnode.attrs.id).then(Agency.loadLanguages(vnode.attrs.id))
}
,
view: function() {
	return m(ProgramContactInfo, { agency: Agency.selected, program: Agency.selected_program})
	}	
}