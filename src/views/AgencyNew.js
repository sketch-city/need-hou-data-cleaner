
var m = require("mithril")
var Agency = require("../models/Agency")
var AgencyForm = require("./AgencyForm")
var helper = require("../helper")

var agencyID = helper.guid();


var newAgency = {
	id: agencyID ,
    name: "",
    physical_address: "",
    description: "",
    phone_number: "",
    website: "",
    selected_program: {
        agency_id: "",
        id: helper.guid(),
    	name: "",
    	description: "",
    	physical_address: "",
    	application_process: "",
    	fee_structure: "",
        application_process: "",
        documents_required: "",
        service_type: [],
        website: "",
        appointment_required: "",
        accepting_clients: "",
        holiday_schedule:"",
        transportation: "",
        language_arr: [],
        service_area: "",
        next_steps: "",
        waitlist_wait: "",
        other_program_enrollment: "",
        other_eligibility: "",
        id_accepted_notes: "",
        proof_address: "",
        appointment_required_notes: "",
        service_available_intake: "",
        service_available_intake_notes: "",
        schedule_notes: "",
        document_assistance: "",
        visual_aids_offered: "",
        consultation_opportunity: "",
        enforcement_request_policy: "",
        cultural_competency_offered: "",
        zipcode_eligibility: [],
        age_eligibility: [],
        id_accepted_current: [],
        website_languages: [],
        frontline_languages: [],
        interpretation_offered: [],
        crisis_services_offered: [],
        document_languages: [],
        immigration_status: [],
        income_eligibility: "",
        id_accepted_expired: [],
        gender_eligibility: "",
        schedule: {
                                                                monday : [], 
                                                                tuesday : [], 
                                                                wednesday : [], 
                                                                thursday : [], 
                                                                friday : [],
                                                                saturday : [], 
                                                                sunday : []
                                                                },
        service_cost: ""
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
