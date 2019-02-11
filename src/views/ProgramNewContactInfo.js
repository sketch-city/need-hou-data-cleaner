var m = require("mithril")
var Agency = require("../models/Agency")
var ProgramContactInfo = require("./ProgramContactInfo")
var helper = require("../helper")

var newProgram = {
    id: helper.guid(),
        latitude: null,
        longitude: null,
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
        coverage_area: "",
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
        service_cost: "",
        a2s_verified: null
 }



module.exports = {
oninit: function(){
        newProgram.agency_id = Agency.selected.id
        
},
view: function() {
	return(m(ProgramContactInfo, { program: newProgram, previous_link: "/newprogrameligibility", next_link: "/newprogramreview"})
	 	)
	}
}


window.newProgram = newProgram