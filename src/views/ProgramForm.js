var m = require("mithril")
var Agency = require("../models/Agency")

var state = {
    description: "",
    save: function() {
        // save the state for this route
        // this is equivalent to `history.replaceState({term: state.term}, null, location.href)`
        m.route.set(m.route.get(), null, {replace: true, state: {description: state.description}})
    }
}

module.exports = {
oninit: function(vnode) { 
	Agency.loadProgram(vnode.attrs.id)

}
,
view: function() {
	return(
		m("form.pure-form pure-form-stacked", [
			m("fieldset", [
				m("legend[style=margin-left:15px]",  Agency.selected.name + " Program Form"),
				m("div.programform", [
					m("div.programcontactinfo", [
						m("div.pure-u-1 pure-u-md-1-3" ,[
							m("label", "Program Name"),
							m("input.pure-u-23-24[type=text]",{ value: Agency.selected_program.name,
																oninput: function(e) {
		                                                                        Agency.selected_program.name = e.currentTarget.value;
		                                                                    } })]),
						m("div.pure-u-1 pure-u-md-1-5",[
							m("label", "Alternative Name"),
							m("input.pure-u-23-24[type=text]",{ value: "" })]),
						//m("div.pure-u-1 pure-u-md-1-2", [
							m("label", "Description"),
							m("textarea.pure-input-3-4 programdesc",{ 
								value: Agency.selected_program.description, 
								//oninput: m.withAttr("value", function(v) {state.term = v}), value: state.term}
								//value: state.description,
								oninput: function(e) { state.description = e.currentTarget.value 
													 Agency.selected_program.description  = e.currentTarget.value;
													}
																}),
						m("div.pure-u-1 pure-u-md-1-4",[
							m("label", "Address"),
							m("input.pure-u-23-24[type=text]",{ value: Agency.selected_program.physical_address,
																					oninput: function(e) {
		                                                                        Agency.selected_program.physical_address = e.currentTarget.value;
		                                                                    }
		                                                          })]),

						m("div.pure-u-1 pure-u-md-1-4",[
							m("label", "Program Website"),
							m("input.pure-u-23-24[type=text]",{ value: "" })]),


							]),

						
						m("div.pure-u-1 pure-u-md-1-4",[
							m("label", "Program Need Domain"),
							m("input.pure-u-23-24[type=text]",{ value: Agency.selected_program.service_type,
																					oninput: function(e) {
		                                                                        Agency.selected_program.service_type = e.currentTarget.value;
		                                                                    }
		                                                          })]),

						//m("div.pure-u-1 pure-u-md-1-2",[
							m("label", "How to refer"),
							m("textarea.pure-input-1-3 application_process",{ value: Agency.selected_program.application_process,
																					oninput: function(e) {
		                                                                        Agency.selected_program.application_process  = e.currentTarget.value;
		                                                                    }
		                                                                    }),
							//]),
							m("label", "Payment Options"),
							m("textarea.pure-input-1-3 payment options",{ value: Agency.selected_program.fee_structure,
																					oninput: function(e) {
		                                                                        Agency.selected_program.fee_structure  = e.currentTarget.value;
		                                                                    }
		                                                                    }),

							m("label", "Accepting Clients?"),
							m("select[id= acceptingclients]", [
								m("option", ""),
								m("option", "Yes"),
								m("option", "No")
								] ),
								m("label", "Appointment Required?"),
							m("select[id= appointmentreq]", [
								m("option", ""),
								m("option", "Yes"),
								m("option", "No")
								] ),

						
							]),
					m("button[id=submitprogram].pure-button pure-button-primary", 
								{
							 	 href: "/review", 
							 	 oncreate: m.route.link 
							 	}, "Continue")

						])
					])

		)
	}
}