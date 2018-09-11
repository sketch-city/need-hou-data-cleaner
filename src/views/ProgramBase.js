var m = require("mithril")
var Agency = require("../models/Agency")


function formatMapQuery(address){
	var queryp1 = "https://www.google.com/maps/dir/?api=1&destination="
	var queryp2 = "&travelmode=transit"
	var formatted = queryp1 + escape(address) + queryp2
	return(formatted)
}


module.exports = {
view: function(vnode) {
	return(
		m("form.pure-form pure-form-stacked", [
			m("fieldset", [
				m("legend[style=margin-left:15px]",  vnode.attrs.agency.name +  " Program Form"),
				m("div.programform", [
					m("legend", "Program Contact Info"),
					m("div.programcontactinfo", [
						m("div.pure-u-1 pure-u-md-1-3" ,[
							m("label", "Program Name"),
							m("input.pure-u-23-24[type=text]",{ value: vnode.attrs.program.name,
																oninput: function(e) {
		                                                                       vnode.attrs.program.name = e.currentTarget.value;
		                                                                    } })]),
						m("div.pure-u-1 pure-u-md-1-3",[
							m("label", "Program Alternative Name"),
							m("input.pure-u-23-24[type=text]",{ value: vnode.attrs.program.alternative_name,oninput: function(e) {
		                                                                       vnode.attrs.program.alternative_name = e.currentTarget.value;
		                                                                    }                       })]),
						//m("div.pure-u-1 pure-u-md-1-2", [
							m("label", "Program Description"),
							m("textarea.pure-input-3-4 programdesc",{ 
								value: vnode.attrs.program.description, 
								//oninput: m.withAttr("value", function(v) {state.term = v}), value: state.term}
								//value: state.description,
								oninput: function(e) {
													vnode.attrs.program.description  = e.currentTarget.value;
													}
																}),
						m("div.pure-u-1 pure-u-md-1-3",[
							m("label", "Program Full Physical Address"),
							m("input.pure-u-23-24[type=text]",{ value: vnode.attrs.program.physical_address,
																					oninput: function(e) {
		                                                                        vnode.attrs.program.physical_address = e.currentTarget.value;
		                                                                    }
		                                                          })]),

						m("div.pure-u-1 pure-u-md-1-3",[
							m("label", "Program Website"),
							m("input.pure-u-23-24[type=text]",{ value: vnode.attrs.program.website,
								oninput: function(e) {
													vnode.attrs.program.website  = e.currentTarget.value;
													}
										 })]),
						m("div.pure-u-1 pure-u-md-1-4"),
						
							m("label", "Program Schedule"),
							m("textarea.pure-input-3-4",{ value: vnode.attrs.program.hours,
								oninput: function(e) {
													vnode.attrs.program.hours  = e.currentTarget.value;
													}
										 }),
						
							m("label", "Program Holiday Schedule"),
							m("textarea.pure-input-3-4",{ value: vnode.attrs.program.holiday_schedule,
								oninput: function(e) {
													vnode.attrs.program.holiday_schedule  = e.currentTarget.value;
													}
										 }),
						
						//m("div.pure-u-1 pure-u-md-1-3",[
							m("label", "Program Transportation"),
							m("textarea.pure-input-3-4",{ value: vnode.attrs.program.transportation  = formatMapQuery(vnode.attrs.program.physical_address)
								// oninit: function(e) {
								// 					vnode.attrs.program.transportation  = formatMapQuery(vnode.attrs.program.physical_address)
								// 					//e.currentTarget.value;
								// 					}
										 }),
						m("div.pure-u-1 pure-u-md-1-4" ,[
							m("label", "Program Contact First Name"),
							m("input.pure-u-23-24[type=text]",{ value: vnode.attrs.program.contact_firstname,
																oninput: function(e) {
		                                                                       vnode.attrs.program.contact_firstname = e.currentTarget.value;
		                                                                    } })]),
						m("div.pure-u-1 pure-u-md-1-4",[
							m("label", "Program Contact Last Name"),
							m("input.pure-u-23-24[type=text]",{ value: vnode.attrs.program.contact_lastname,oninput: function(e) {
		                                                                       vnode.attrs.program.contact_lastname = e.currentTarget.value;
		                                                                    }                       })]),
						
					
						m("div.pure-u-1 pure-u-md-1-4",[
							m("label", "Program Contact Title"),
							m("input.pure-u-23-24[type=text]",{ value: vnode.attrs.program.contact_title,oninput: function(e) {
		                                                                       vnode.attrs.program.contact_title = e.currentTarget.value;
		                                                                    }                       })]),
						m("div.pure-u-1 pure-u-md-1-4"),

					
						m("div.pure-u-1 pure-u-md-1-4",[
							m("label", "Program Contact Email"),
							m("input.pure-u-23-24[type=text]",{ value: vnode.attrs.program.contact_email,oninput: function(e) {
		                                                                       vnode.attrs.program.contact_email = e.currentTarget.value;
		                                                                    }                       })]),
						m("div.pure-u-1 pure-u-md-1-4",[
							m("label", "Program Contact Phone"),
							m("input.pure-u-23-24[type=text]",{ value: vnode.attrs.program.contact_phone,oninput: function(e) {
		                                                                       vnode.attrs.program.contact_phone = e.currentTarget.value;
		                                                                    }                       })]),






							]),
					m("div.programrefferalinfo", [
						m("legend", "Program Referral Info"),

						
						m("div.pure-u-1 pure-u-md-1-4",[
							m("label", "Program Need Domain"),
							m("input.pure-u-23-24[type=text]",{ value: vnode.attrs.program.service_type,
																					oninput: function(e) {
		                                                                        vnode.attrs.program.service_type = e.currentTarget.value;
		                                                                    }
		                                                          })]),
						m("div.pure-u-1 pure-u-md-1-4",[
							m("label", "Program Languages Spoken"),
							m("input.pure-u-23-24[type=text]",{ value: vnode.attrs.program.languages,
																					oninput: function(e) {
		                                                                        vnode.attrs.program.languages = e.currentTarget.value;
		                                                                    }
		                                                          })]),

						//m("div.pure-u-1 pure-u-md-1-2",[
							m("label", "How to refer"),
							m("textarea.pure-input-3-4 application_process",{ value: vnode.attrs.program.application_process,
																					oninput: function(e) {
		                                                                        vnode.attrs.program.application_process  = e.currentTarget.value;
		                                                                    }
		                                                                    }),
						m("label", "Program Required Document Links"),
							m("textarea.pure-input-3-4 application_process",{ value: vnode.attrs.program.documents_required,
																					oninput: function(e) {
		                                                                        vnode.attrs.program.documents_required  = e.currentTarget.value;
		                                                                    }
		                                                                    }),
							//]),
							m("label", "Program Payment Options"),
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
			
							m("label", "Program Eligibility"),
							m("textarea.pure-input-3-4 eligibility",{ value: vnode.attrs.program.eligibility,
								oninput: function(e) {
													vnode.attrs.program.eligibility  = e.currentTarget.value;
													}
										 }),
							]),


							m("div.pure-u-1 pure-u-md-1"),
							m("button[type=submit].pure-button pure-button-primary", 
								{
							 	 href: vnode.attrs.next_route, 
							 	 oncreate: m.route.link 
							 	}, "Review")
							])

						])
					])

		)
	}
}