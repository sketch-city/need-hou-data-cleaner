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
							m("input.pure-u-23-24[type=text]",{ value: vnode.attrs.program.alternative_name,oninput: function(e) {
		                                                                       vnode.attrs.program.alternative_name = e.currentTarget.value;
		                                                                    }                       })]),
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
							m("input.pure-u-23-24[type=text]",{ value: vnode.attrs.program.website,
								oninput: function(e) {
													vnode.attrs.program.website  = e.currentTarget.value;
													}
										 })]),
						m("div.pure-u-1 pure-u-md-1-4"),
						m("div.pure-u-1 pure-u-md-1-3",[
							m("label", "Schedule"),
							m("input.pure-u-23-24[type=text]",{ value: vnode.attrs.program.hours,
								oninput: function(e) {
													vnode.attrs.program.hours  = e.currentTarget.value;
													}
										 })]),
						m("div.pure-u-1 pure-u-md-1-3",[
							m("label", "Holiday Schedule"),
							m("input.pure-u-23-24[type=text]",{ value: vnode.attrs.program.holiday_schedule,
								oninput: function(e) {
													vnode.attrs.program.holiday_schedule  = e.currentTarget.value;
													}
										 })])


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
							m("textarea.pure-input-1-2 application_process",{ value: vnode.attrs.program.application_process,
																					oninput: function(e) {
		                                                                        vnode.attrs.program.application_process  = e.currentTarget.value;
		                                                                    }
		                                                                    }),
							//]),
							m("label", "Payment Options"),
							m("textarea.pure-input-1-2 payment options",{ value: vnode.attrs.program.fee_structure,
																					oninput: function(e) {
		                                                                       vnode.attrs.program.fee_structure  = e.currentTarget.value;
		                                                                    }
		                                                                    }),
					m("div.pure-u-1 pure-u-md-1-4",[
						m("label", "Accepting Clients?"),
							m("input.pure-u-23-24[type=text]",{ value: vnode.attrs.program.accepting_clients,
																					oninput: function(e) {
		                                                                        vnode.attrs.program.accepting_clients = e.currentTarget.value;
		                                                                    }
		                                                          })]),
						// m("select[id= acceptingclients]", [
						// 		m("option", ""),
						// 		m("option", "Yes"),
						// 		m("option", "No")
						// 		] ),
					m("div.pure-u-1 pure-u-md-1-4",[
						m("label", "Appointment Required?"),
						m("input.pure-u-23-24[type=text]",{ value: vnode.attrs.program.appointment_required,
																					oninput: function(e) {
		                                                                        vnode.attrs.program.appointment_required = e.currentTarget.value;
		                                                                    }
		                                                          })]),
						// m("select[id= appointmentreq]", [
						// 		m("option", ""),
						// 		m("option", "Yes"),
						// 		m("option", "No")
						// 		] ),
			
							m("label", "Eligibility"),
							m("textarea.pure-input-1-2 eligibility",{ value: vnode.attrs.program.eligibility,
								oninput: function(e) {
													vnode.attrs.program.eligibility  = e.currentTarget.value;
													}
										 }),


							m("button[type=submit].pure-button pure-button-primary", 
								{
							 	 href: vnode.attrs.next_route, 
							 	 oncreate: m.route.link 
							 	}, "Continue")
							])

						])
					])

		)
	}
}