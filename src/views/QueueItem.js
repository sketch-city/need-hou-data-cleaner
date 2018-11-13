var m = require("mithril")
var Queue = require("../models/Queue")
var Agency = require("../models/Agency")
var helper = require("../helper")
var ReviewFields = require("./ReviewFields")

module.exports = {

oncreate: function(vnode) { 
	   return(Queue.getQueueItem(vnode.attrs.id))

	.then(function() {
		return(Agency.loadAgency(Queue.queueAgency.name))
	})
	.then(function(){ 
		return(Agency.loadProgram(Queue.queueProgram.id))

 	}).then(function(){
		return(Agency.loadLanguages(Queue.queueProgram.id))
 	}).then(function(){
		program_fields = document.querySelectorAll('pre.program')
		program = Agency.selected_program
		helper.difftext(Agency.selected.name, Queue.queueAgency.name, "agency_name") 
		helper.difftext(Agency.selected.website, Queue.queueAgency.website, "agency_website") 
		helper.difftext(Agency.selected.physical_address, Queue.queueAgency.physical_address, "agency_physical_address") 
		helper.difftext(Agency.selected.phone_number, Queue.queueAgency.phone_number, "agency_phone_number") 



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

	})

},

view: function(vnode) {
		return(
			m("section", 
			m("ul",
        			m("li",
        				m("a", "Logout"))),
				m(ReviewFields),

				
			m("div.reviewbuttons",
				m("button[type=submit][id=queuesubmit][style=color:green;].btn btn-default", {
					onclick: function(e) {
							Queue.updateQueueItem({
								id: Queue.queueId,
								status: "accepted" 
							})
							
						if(Queue.type_submission === "new_agency"){
								 Agency.addNewAgency(Queue.queueAgency)
								.then(Agency.addNewProgram(Queue.queueProgram))
								.then(Agency.addNewLanguage(Queue.queueLanguage))
								//.then(Queue.deleteQueueItem(vnode.attrs.id))

						}

							else if(Queue.type_submission === "new_program"){
								Agency.updateAgency(Queue.queueAgency)
								.then(Agency.addNewProgram(Queue.queueProgram))
								.then(Agency.addNewLanguage(Queue.queueLanguage))
								//.then(Queue.deleteQueueItem(vnode.attrs.id))							
							}

							else if(Queue.type_submission === "existing_program"){
								Agency.updateAgency(Queue.queueAgency)
								.then(Agency.updateProgram(Queue.queueProgram))
								.then(Agency.updateLanguage(Queue.queueLanguage))
								//.then(Queue.deleteQueueItem(vnode.attrs.id))	
							}

							else if(Queue.type_submission === "existing_agency") {
								Agency.updateAgency(Queue.queueAgency)
								//.then(Queue.deleteQueueItem(vnode.attrs.id))
							}

							else if(Queue.type_submission === "delete_program") {
								Agency.deleteProgram(Queue.queueProgram.id)
							}


							document.getElementById("queuesubmit").disabled = true;
							document.getElementById("queuereject").disabled = true;

				}},
					"Accept"),
				m("button[type=submit][id=queuereject][style=color:red;].btn btn-default", {
					onclick: function(e) {
						Queue.updateQueueItem({
								id: Queue.queueId,
								status: "rejected" 
							})
						//add logic that when rejected, set status of queue item. only show queue items wihtout a status
						document.getElementById("queuesubmit").disabled = true;
						document.getElementById("queuereject").disabled = true;
					}
				}, "Reject")


				)


			)
		)
	}
}
