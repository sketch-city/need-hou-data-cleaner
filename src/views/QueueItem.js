var m = require("mithril")
var Queue = require("../models/Queue")
var Agency = require("../models/Agency")
var helper = require("../helper")
var ReviewFields = require("./ReviewFields")


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
        service_cost: ""
   
}

newAgencyDiff = {
	id: "",
    name: "",
    physical_address: "",
    description: "",
    phone_number: "",
    website: "",
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
		program_fields = document.querySelectorAll('pre.program')
		helper.difftext(agency.name, Queue.queueAgency.name, "agency_name") 
		helper.difftext(agency.website, Queue.queueAgency.website, "agency_website") 
		helper.difftext(agency.physical_address, Queue.queueAgency.physical_address, "agency_physical_address") 
		helper.difftext(agency.phone_number, Queue.queueAgency.phone_number, "agency_phone_number") 

		helper.difftext(program.schedule.monday[0] || "", Queue.queueProgram.schedule.monday[0] || "" , "monday_start")
		helper.difftext(program.schedule.monday[1] || "", Queue.queueProgram.schedule.monday[1] || "" , "monday_end")

		helper.difftext(program.schedule.tuesday[0] || "", Queue.queueProgram.schedule.tuesday[0] || "" , "tuesday_start")
		helper.difftext(program.schedule.tuesday[1] || "", Queue.queueProgram.schedule.tuesday[1] || "" , "tuesday_end")

		helper.difftext(program.schedule.wednesday[0] || "", Queue.queueProgram.schedule.wednesday[0] || "" , "wednesday_start")
		helper.difftext(program.schedule.wednesday[1] || "", Queue.queueProgram.schedule.wednesday[1] || "" , "wednesday_end")

		helper.difftext(program.schedule.thursday[0] || "", Queue.queueProgram.schedule.thursday[0] || "" , "thursday_start")
		helper.difftext(program.schedule.thursday[1] || "", Queue.queueProgram.schedule.thursday[1] || "" , "thursday_end")

		helper.difftext(program.schedule.friday[0] || "", Queue.queueProgram.schedule.friday[0] || "" , "friday_start")
		helper.difftext(program.schedule.friday[1] || "", Queue.queueProgram.schedule.friday[1] || "" , "friday_end")

		helper.difftext(program.schedule.saturday[0] || "", Queue.queueProgram.schedule.saturday[0] || "" , "saturday_start")
		helper.difftext(program.schedule.saturday[1] || "", Queue.queueProgram.schedule.saturday[1] || "" , "saturday_end")

		helper.difftext(program.schedule.sunday[0] || "", Queue.queueProgram.schedule.sunday[0] || "" , "sunday_start")
		helper.difftext(program.schedule.sunday[1] || "", Queue.queueProgram.schedule.sunday[1] || "" , "sunday_end")

	for(i = 0; i < program_fields.length; i++){
		if(typeof(program[program_fields[i].id]) != "string" && program[program_fields[i].id] != undefined) {
			helper.difftext(program[program_fields[i].id].join(', ') || "", Queue.queueProgram[program_fields[i].id].join(', ') || "", program_fields[i].id) 			
		} else{
			helper.difftext(program[program_fields[i].id] || "" , Queue.queueProgram[program_fields[i].id] || "", program_fields[i].id) 
		}
	}
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

 	// }).then(function(){
		// return(Agency.loadLanguages(Queue.queueProgram.id))
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

				
			m("div.reviewbuttons",
				m("button[type=submit][style= margin: 20px;].btn btn-default", 
								{
							 	 href: "/queue", 
							 	 oncreate: m.route.link 
							 	}, "Back to Queue"),
				m("button[type=submit][id=queuesubmit][style=color:green; margin: 20px;].btn btn-default", {
					onclick: function() {

							Queue.updateQueueItem({
								id: Queue.queueId,
								status: "accepted" 
							}).then(function(){ 
                                console.log('next thing')
							
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


							document.getElementById("queuesubmit").disabled = true;
							document.getElementById("queuereject").disabled = true;
							document.getElementById("acceptmessage").hidden = false;


                        })

				}},
					"Accept"),
				m("button[type=submit][id=queuereject][style=color:red; margin: 20px;].btn btn-default", {
					onclick: function(e) {
						Queue.updateQueueItem({
								id: Queue.queueId,
								status: "rejected" 
							})
						document.getElementById("queuesubmit").disabled = true;
						document.getElementById("queuereject").disabled = true;
						document.getElementById("rejectmessage").hidden = false;
					}
				}, "Reject"),
				m("p[id=rejectmessage][style=color:green;]",{ hidden: true  } , "Submission Rejected"),
				m("p[id=acceptmessage][style=color:green;]",{ hidden: true  } , "Submission Accepted")
			)
		))
	}
}
