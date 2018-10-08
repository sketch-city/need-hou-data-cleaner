
var m = require("mithril")
var Agency = require("../models/Agency")
var AgencyForm = require("./AgencyForm")
var helper = require("../helper")

var agency_id = helper.guid();
var newAgency = {
	id: agency_id,
    name: "",
    physical_address: "",
    description: "",
    phone_number: "",
    mailing_address: "",
    disability: "",
    hours: "",
    selected_program:{
        agency_id: agency_id,
        error: "",
        id: helper.guid(),
    	name: "",
        alternative_name: "",
    	description: "",
    	physical_address: "",
    	service_type: "",
    	application_process: "",
    	fee_structure: "",
        hours:"",
        eligibility: "",
        application_process: "",
        documents_required: "",
        fee_structure: "",
        service_type: "",
        website: "",
        appointment_required: "",
        accepting_clients: "",
        holiday_schedule:"",
        transportation: "",
        language_arr: "",
        contact_firstname: "",
        contact_lastname: "",
        contact_title: "",
        contact_department: "",
        contact_email: "",
        contact_phonenumber: ""

    }

}
    


module.exports = {
view: function() {
    	return(
            m("div.row",[  
                m("div.agencyedit col-md-12",[                 
                  m(AgencyForm, {agency: newAgency} ),
                  m("div.buttons",
                  m("button.btn btn-default[type=submit]", {
                        href: "/selectagency", 
                        oncreate: m.route.link
                        },"Previous"),

                  m("button.btn btn-default[type=submit][id=nextbutton][style=margin-left:10px]", {
                        disabled: true,
                        href: "/newagencyprogramcontact", 
                        oncreate: m.route.link
                        },"Next")
                    )
			     ])
                ])
    		)
    }

}


window.newAgency = newAgency
