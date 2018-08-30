var m = require("mithril")
var Agency = require("../models/Agency")


module.exports = {
oninit: function(vnode) { Agency.loadProgram(vnode.attrs.id)},
view: function() {
	return(
		m("form.pure-form pure-form-stacked", [
			m("fieldset", [
				m("legend[style=margin-left:15px]",  Agency.selected.name + " Program Form"),
				m("div.programform", [
				m("div.pure-u-1 pure-u-md-1-3" ,[
					m("label", "Name"),
					m("input.pure-u-23-24[type=text]",{ value: Agency.selected_program.name })]),
				m("div.pure-u-1 pure-u-md-1-5",[
					m("label", "Alternative Name"),
					m("input.pure-u-23-24[type=text]",{ value: "" })]),
				//m("div.pure-u-1 pure-u-md-1-2", [
					m("label", "Description"),
					m("textarea.pure-input-3-4 .programdesc", Agency.selected_program.description)











					])

				])
			])











		)
	}
}