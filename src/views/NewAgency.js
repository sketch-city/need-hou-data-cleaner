
var m = require("mithril")
var Agency = require("../models/Agency")

function guid() {
  function s4() {
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
  }
  return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
}

var newAgency = {
	id: guid(),
    name: "",
    physical_address: "",
    description: "",
    phone_number: "",
    mailing_address: "",
    disability: "",
    hours: ""
}


module.exports = {
// oninit: function(vnode) { 
	
// 	},
view: function() {
    	return( 
    		m("form.pure-form pure-form-aligned", [
				m(".pure-control-group", [
			                    m("label.agency_name", "Add organization name."),
							    m("input[type=text].agency_name", {value: newAgency.name ,
			                                                            oninput: function(e) {
			                                                                        newAgency.name = e.currentTarget.value;
			                                                          }

			                                                         })]),
			   m(".pure-control-group", [
			                    m("label.", "Add organizationaddress."),
							    m("input[type=text]", {value: newAgency.physical_address ,
			                                                            oninput: function(e) {
			                                                                        newAgency.physical_address = e.currentTarget.value;
			                                                          }

			                                                         })]),
			   		m("button[type=submit].pure-button pure-button-primary", 
								{
								//onclick: state.save,
							 	 href: "/review", 
							 	 oncreate: m.route.link 
							 	 //onclick: Agency.list.push(newAgency)

							 	}, "Add Organization")



			   ])
			  
                )
    }

}



window.newAgency = newAgency