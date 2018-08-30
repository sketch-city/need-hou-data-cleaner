var m = require("mithril")
var Agency = require("../models/Agency")



var state = {
    term: "",
    search: function() {
        // save the state for this route
        // this is equivalent to `history.replaceState({term: state.term}, null, location.href)`
        m.route.set(m.route.get(), null, {replace: true, state: {term: state.term}})

        // navigate away
        location.href = "https://google.com/?q=" + state.term
    }
}



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
					m("input.pure-u-23-24[type=text]",{ value: Agency.selected_program.name,
														oninput: function(e) {
                                                                        Agency.selected_program.name = e.currentTarget.value;
                                                                    } })]),
				m("div.pure-u-1 pure-u-md-1-5",[
					m("label", "Alternative Name"),
					m("input.pure-u-23-24[type=text]",{ value: "" })]),
				//m("div.pure-u-1 pure-u-md-1-2", [
					m("label", "Description"),
					m("textarea.pure-input-3-4 .programdesc",{ value: Agency.selected_program.description,
																			oninput: function(e) {
                                                                        Agency.selected_program.description  = e.currentTarget.value;
                                                                    }
                                                          }),
				m("div.pure-u-1 pure-u-md-1-4",[
					m("label", "Program Website"),
					m("input.pure-u-23-24[type=text]",{ value: "" })]),
				m("div.pure-u-1 pure-u-md-1-4",[
					m("label", "Program Website"),
					m("input.pure-u-23-24[type=text]",{ value: "" })]),

					m("label", "Accepting Clients?"),
					m("select[id= acceptingclients]",
						m("option", "Yes"),
						m("option", "No"))











					])

				])
			])











		)
	}
}