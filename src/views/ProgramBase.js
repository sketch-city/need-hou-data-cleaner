var m = require("mithril")
var Agency = require("../models/Agency")


module.exports = {
view: function(vnode) {
	return(
		m("form.pure-form pure-form-stacked", [
			m("fieldset", [
				m("legend[style=margin-left:15px]",  vnode.attrs.agency.name + " Program Form"),
				m("div.programform", [
					m("div.programcontactinfo", [
						m("div.pure-u-1 pure-u-md-1-3" ,[
							m("label", "Program Name"),
							m("input.pure-u-23-24[type=text]",{ value: vnode.attrs.program.name,
																oninput: function(e) {
		                                                                       vnode.attrs.program.name = e.currentTarget.value;
		                                                                    } })]),
						m("div.pure-u-1 pure-u-md-1-5",[
							m("label", "Alternative Name"),
							m("input.pure-u-23-24[type=text]",{ value: "" })]),
						//m("div.pure-u-1 pure-u-md-1-2", [
							m("label", "Description"),
							m("textarea.pure-input-3-4 programdesc",{ 
								value: vnode.attrs.program.description, 
								//oninput: m.withAttr("value", function(v) {state.term = v}), value: state.term}
								//value: state.description,
								oninput: function(e) {
													vnode.attrs.program.description  = e.currentTarget.value;
													}
																}),
						m("div.pure-u-1 pure-u-md-1-4",[
							m("label", "Address"),
							m("input.pure-u-23-24[type=text]",{ value: vnode.attrs.program.physical_address,
																					oninput: function(e) {
		                                                                        vnode.attrs.program.physical_address = e.currentTarget.value;
		                                                                    }
		                                                          })]),

						m("div.pure-u-1 pure-u-md-1-4",[
							m("label", "Program Website"),
							m("input.pure-u-23-24[type=text]",{ value: "" })]),


							]),

						
						m("div.pure-u-1 pure-u-md-1-4",[
							m("label", "Program Need Domain"),
							m("input.pure-u-23-24[type=text]",{ value: vnode.attrs.program.service_type,
																					oninput: function(e) {
		                                                                        vnode.attrs.program.service_type = e.currentTarget.value;
		                                                                    }
		                                                          })]),

						//m("div.pure-u-1 pure-u-md-1-2",[
							m("label", "How to refer"),
							m("textarea.pure-input-1-3 application_process",{ value: vnode.attrs.program.application_process,
																					oninput: function(e) {
		                                                                        vnode.attrs.program.application_process  = e.currentTarget.value;
		                                                                    }
		                                                                    }),
							//]),
							m("label", "Payment Options"),
							m("textarea.pure-input-1-3 payment options",{ value: vnode.attrs.program.fee_structure,
																					oninput: function(e) {
		                                                                       vnode.attrs.program.fee_structure  = e.currentTarget.value;
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

							m("button[type=submit].pure-button pure-button-primary", 
								{
								//onclick: state.save,
							 	 href: "/review", 
							 	 oncreate: m.route.link 
							 	}, "Continue")
							])

						])
					])

		)
	}
}