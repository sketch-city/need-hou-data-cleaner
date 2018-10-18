var m = require("mithril")
var Agency = require("../models/Agency")
var ProgramContactInfo = require("./ProgramContactInfo")
var helper = require("../helper")

var newProgram = {
    id: helper.guid(),
	name: "",
    alternative_name: "",
	description: "",
	physical_address: "",
	application_process: "",
	fee_structure: "",
    hours:"",
    eligibility: "",
    application_process: "",
    documents_required: "",
    fee_structure: "",
    service_type: [],
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



module.exports = {
oninit: function(){
        newProgram.agency_id = Agency.selected.id
        
},
view: function() {
	return(m(ProgramContactInfo, { program: newProgram, previous_link: "/selectprogram", next_link: "/newprogramreferral"})
	 	)
	}
}


window.newProgram = newProgram