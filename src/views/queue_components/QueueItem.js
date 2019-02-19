var m = require("mithril")
var Queue = require("../../models/Queue")
var Agency = require("../../models/Agency")
var helper = require("../../helper")
var ReviewFields = require("../review_components/ReviewFields")
var A2S_Verified_Checkbox = require("./A2S_Verified_Checkbox")


newProgramDiff = {
	agency_id: "",
        id: "",
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
        source:"",
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
        a2s_verified: false
   
}

newAgencyDiff = {
	id: "",
    name: "",
    physical_address: "",
    description: "",
    phone_number: "",
    website: "",
    a2s_verified: false,
    selected_program: {
        agency_id: "",
        id: "",
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
        source: "",
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
        a2s_verified: false,
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

function diffAgency(agency){
    helper.difftext(agency.name, Queue.queueAgency.name, "agency_name") 
        helper.difftext(agency.website, Queue.queueAgency.website, "agency_website") 
        helper.difftext(agency.physical_address, Queue.queueAgency.physical_address, "agency_physical_address") 
        helper.difftext(agency.phone_number, Queue.queueAgency.phone_number, "agency_phone_number") 
}


function diffFields(agency, program){
        const programSchedule = program.schedule || Object.assign({}, newAgencyDiff.selected_program.schedule)
        const queueProgramSchedule = Queue.queueProgram.schedule || Object.assign({}, newAgencyDiff.selected_program.schedule)
		program_fields = document.querySelectorAll('pre.program')
		helper.difftext(agency.name, Queue.queueAgency.name, "agency_name") 
		helper.difftext(agency.website, Queue.queueAgency.website, "agency_website") 
		helper.difftext(agency.physical_address, Queue.queueAgency.physical_address, "agency_physical_address") 
		helper.difftext(agency.phone_number, Queue.queueAgency.phone_number, "agency_phone_number") 

		helper.difftext(programSchedule.monday[0] || "", queueProgramSchedule.monday[0] || "" , "monday_start")
		helper.difftext(programSchedule.monday[1] || "", queueProgramSchedule.monday[1] || "" , "monday_end")

		helper.difftext(programSchedule.tuesday[0] || "", queueProgramSchedule.tuesday[0] || "" , "tuesday_start")
		helper.difftext(programSchedule.tuesday[1] || "", queueProgramSchedule.tuesday[1] || "" , "tuesday_end")

		helper.difftext(programSchedule.wednesday[0] || "", queueProgramSchedule.wednesday[0] || "" , "wednesday_start")
		helper.difftext(programSchedule.wednesday[1] || "", queueProgramSchedule.wednesday[1] || "" , "wednesday_end")

		helper.difftext(programSchedule.thursday[0] || "", queueProgramSchedule.thursday[0] || "" , "thursday_start")
		helper.difftext(programSchedule.thursday[1] || "", queueProgramSchedule.thursday[1] || "" , "thursday_end")

		helper.difftext(programSchedule.friday[0] || "", queueProgramSchedule.friday[0] || "" , "friday_start")
		helper.difftext(programSchedule.friday[1] || "", queueProgramSchedule.friday[1] || "" , "friday_end")

		helper.difftext(programSchedule.saturday[0] || "", queueProgramSchedule.saturday[0] || "" , "saturday_start")
		helper.difftext(programSchedule.saturday[1] || "", queueProgramSchedule.saturday[1] || "" , "saturday_end")

		helper.difftext(programSchedule.sunday[0] || "", queueProgramSchedule.sunday[0] || "" , "sunday_start")
		helper.difftext(programSchedule.sunday[1] || "", queueProgramSchedule.sunday[1] || "" , "sunday_end")

	for(i = 0; i < program_fields.length; i++){
		if(typeof(program[program_fields[i].id]) != "string" && program[program_fields[i].id] != undefined) {
			helper.difftext(program[program_fields[i].id].join(', ') || "", Queue.queueProgram[program_fields[i].id].join(', ') || "", program_fields[i].id) 			
		} else{
			helper.difftext(program[program_fields[i].id] || "" , Queue.queueProgram[program_fields[i].id] || "", program_fields[i].id) 
		}
	}
}

function returnToQueue(val){ 
    m.route.set('/queue', { submitted: val})
}

function resetModels() {
    Agency.reset()
    Queue.reset()
}

module.exports = {


oninit: function(vnode){
    
},

oncreate: function(vnode) { 
        
	return(Queue.getQueueItem(vnode.attrs.id))

	.then(function() {
		return Agency
                .loadAgency(Queue.queueAgency.id)
                .then(Agency.setSelectedAgency)
                .catch(function(error){
                    console.warn(error)
                })
	})
	.then(function(){ 
		return(Agency.loadProgram(Queue.queueProgram.id))
 	}).then(function(){
        //new agency & new program
 		if(Agency.selected === undefined){
 			diffFields(newAgencyDiff, newProgramDiff)
 		} 

        //existing agency and new program
 		else if(Object.keys(Agency.selected_program).length === 0){
            if(Queue.type_submission === "delete_agency"){
                diffAgency(Agency.selected)

            } else{
 			diffFields(Agency.selected, newProgramDiff)
            }   
 		}

        //existing agency and existing program
 		else{
 		 diffFields(Agency.selected, Agency.selected_program)

 		}
	})

},

view: function(vnode) {
		return (m('section',
			m(ReviewFields),
			m(A2S_Verified_Checkbox,{ agency: Queue.queueAgency, program: Queue.queueProgram}),	
			m("div.reviewbuttons",
				m("button[type=submit][style= margin: 20px;].btn btn-default", 
								{
							 	 href: "/queue", 
							 	 oncreate: m.route.link 
							 	}, "Back to Queue"),
				m("button[type=submit][id=queuesubmit][style=color:green; margin: 20px;].btn btn-default", {
					onclick: function() {
                        document.getElementById("queuesubmit").disabled = true;
							Queue.updateQueueItem({
								id: Queue.queueId,
								status: "accepted" 
							}).then(function(){ 
							
						if(Queue.type_submission === "new_agency"){
								 Agency.addNewAgency(Queue.queueAgency)
								.then(Agency.addNewProgram(Queue.queueProgram))
								.then(Agency.addNewLanguage(Queue.queueLanguage))
						}

							else if(Queue.type_submission === "new_program"){
								Agency.updateAgency(Queue.queueAgency)
								.then(Agency.addNewProgram(Queue.queueProgram))
								.then(Agency.addNewLanguage(Queue.queueLanguage))
														
							}

							else if(Queue.type_submission === "existing_program"){
								Agency.updateAgency(Queue.queueAgency)
								.then(Agency.updateProgram(Queue.queueProgram))
								.then(Agency.updateLanguage(Queue.queueLanguage))
								
							}

							else if(Queue.type_submission === "existing_agency") {
								Agency.updateAgency(Queue.queueAgency)
								
							}

							else if(Queue.type_submission === "delete_program") {
								Agency.deleteProgram(Queue.queueProgram.id)
							}

                            else if(Queue.type_submission === "delete_agency") {
                                Agency.deleteAgency(Queue.queueAgency.id)

                            }

                        })
                        .then(returnToQueue(true))
                        .then(resetModels)
				},

            },"Accept"),
				m("button[type=submit][id=queuereject][style=color:red; margin: 20px;].btn btn-default", {
					onclick: function(e) {
                        document.getElementById("queuesubmit").disabled = true;

						Queue.updateQueueItem({
								id: Queue.queueId,
								status: "rejected" 
							})
                        .then(returnToQueue(false))
                        .then(resetModels)
						
					},
                
				}, "Reject"),
			)
		))
	}
}
