var m = require("mithril")
var ProgramBase = require("./ProgramBase")
var Agency = require("../models/Agency")
var NewAgency = require("./NewAgency")
var current_agency_id = Agency.selected.id

var newProgram = {
    //agency_id: current_agency_id,
    id: guid(),
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



function guid() {
  function s4() {
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
  }
  return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
}


module.exports = {


oninit: function(){
	newProgram.agency_id = Agency.selected.id 
},

view: function() {
	return(m(ProgramBase, {agency: Agency.selected , program: newProgram  , next_route: "/newprogramreview"})


	 	)
	}
}


window.newProgram = newProgram