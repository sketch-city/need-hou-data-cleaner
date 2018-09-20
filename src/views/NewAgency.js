
var m = require("mithril")
var Agency = require("../models/Agency")
var ProgramBase = require("./ProgramBase")

function guid() {
  function s4() {
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
  }
  return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
}



var agency_id = guid();


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

}

function nameExists(name){
var hasName = false;
for (var i = 0; i < Agency.list.length; i++) {
  if (Agency.list[i].name === name) {
    hasName = true;
    break;
  }
}
return(hasName)

}



function validateName(name) {


    if(name === ""){
       console.log('name missing')
    }

    else if(nameExists(name)){
        //document.getElementById("agencyname").innerHTML = "You shall not pass"
        document.getElementById("programsubmit").disabled = true;
        document.getElementById("reviewlink").classList.add("disabled")
    }
    else{
        document.getElementById("programsubmit").disabled = false;
        document.getElementById("reviewlink").classList.remove("disabled")
        
    }
    newAgency.name = name;                                                                               
}



module.exports = {
view: function() {
    	return(
    	m("form.pure-form pure-form-stacked", [
			m("fieldset", [
			m("legend[style=margin-left:15px]",  "Organization Form"),
    		m("div.newagencyform", [
    			m("form.pure-form pure-form-stacked", [
				m("div.pure-u-1 pure-u-md-1-5", [
			                    m("label.agency_name", "Organization Name"),
							    m("input[type=text][id=agencyname].agency_name pure-u-23-24[type=text]", {value: newAgency.name,
			                                                            onblur: function(e){
                                                                            validateName(e.currentTarget.value)
                                                                        },
                                                

			                                                         }),
                                m("span.pure-form-message", "Required")
                                ]),
			   m("div.pure-u-1 pure-u-md-1-5", [
			                    m("label.", "Organization Full Physical Address"),
							    m("input[type=text].pure-u-23-24[type=text]", {value: newAgency.physical_address ,
			                                                            oninput: function(e) {
			                                                                        newAgency.physical_address = e.currentTarget.value;
			                                                          }

			                                                         })]),
			   		  m("div.pure-u-1 pure-u-md-1-5", [
			                    m("label.", "Organization Phone Number"),
							    m("input[type=text].pure-u-23-24[type=text]", {value: newAgency.phone_number ,
			                                                            oninput: function(e) {
			                                                                        newAgency.phone_number = e.currentTarget.value;
			                                                          }			                                                         })]),


			   				])

			   			]),
            m(ProgramBase, { agency: newAgency, 
                            program: newAgency.selected_program, 
                            next_route: "/newagencyreview"
                            })

			   		])
    			])

            
			  
    		)
    }

}


window.newAgency = newAgency
window.nameExists = nameExists