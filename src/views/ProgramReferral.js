var m = require("mithril")
var Agency = require("../models/Agency")
var helper = require("../helper")
var Choices = require("choices.js")


function getSelectedOption(sel) {
  var opts = [],
      opt;
  var len = sel.options.length;
  for (var i = 0; i < len; i++) {
    opt = sel.options[i];
    if (opt.selected) {
      console.log(opt.label)
      return(opt.label)
    }
  }
}



function getSelectedOptions(sel) {
  var opts = [],
    opt;
  var len = sel.options.length;
  for (var i = 0; i < len; i++) {
    opt = sel.options[i];
    if (opt.selected) {
      opts.push(opt.label);
    }
  }

  return opts;
}


module.exports = {
oninit: function(vnode) { 
  helper.moveProgress(50, 50, 70)
},
oncreate: function(vnode){
 service_type_choices = new Choices('#service_type_select')
 program_language_choices = new Choices('#program_languages_select')
 current_id_choices = new Choices('#current_id_select')
 expired_id_choices = new Choices('#expired_id_select')
},
view: function(vnode) {	
	return(
		    m("div.row",[  
                m("div.agencyedit col-md-12",[                 
    		    m("form", [
                m("div.form-group[style=width:400px]",
                  m("legend[style=font-size:16px]", Agency.selected.name),
                    m("label.control-label", "Select all current accepted ID's"),
                    m("select[id=current_id_select][multiple=multiple]", {  
                          onchange: function(e) { 
                           vnode.attrs.program.id_accepted_current  = getSelectedOptions(document.getElementById('current_id_select'))
                         }},
                    m("option",{ selected: vnode.attrs.program.id_accepted_current.includes('US government-issued ID')}, "US government-issued ID"),
                    m("option",{ selected: vnode.attrs.program.id_accepted_current.includes('Any photo ID')}, "Any photo ID"),
                    m("option",{ selected: vnode.attrs.program.id_accepted_current.includes('Visas')}, "Visas"),
                    m("option",{ selected: vnode.attrs.program.id_accepted_current.includes('Foreign-government issued ID')}, "Foreign-government issued ID"),
                    m("option",{ selected: vnode.attrs.program.id_accepted_current.includes('Any government-issued, non-photo documents')}, "Any government-issued, non-photo documents"),
                    m("option",{ selected: vnode.attrs.program.id_accepted_current.includes('Alternative evidence')}, "Alternative evidence")
                    ),
                   m("label.control-label", "Select all expired accepted ID's"),
                    m("select[id=current_id_select][multiple=multiple]", {  
                          onchange: function(e) { 
                           vnode.attrs.program.id_accepted_expired  = getSelectedOptions(document.getElementById('expired_id_select'))
                         }},
                    m("option",{ selected: vnode.attrs.program.id_accepted_expired.includes('US government-issued ID')}, "US government-issued ID"),
                    m("option",{ selected: vnode.attrs.program.id_accepted_expired.includes('Any photo ID')}, "Any photo ID"),
                    m("option",{ selected: vnode.attrs.program.id_accepted_expired.includes('Visas')}, "Visas"),
                    m("option",{ selected: vnode.attrs.program.id_accepted_expired.includes('Foreign-government issued ID')}, "Foreign-government issued ID"),
                    m("option",{ selected: vnode.attrs.program.id_accepted_expired.includes('Any government-issued, non-photo documents')}, "Any government-issued, non-photo documents"),
                    m("option",{ selected: vnode.attrs.program.id_accepted_expired.includes('Alternative evidence')}, "Alternative evidence")
                    ),
                  m("label", "Keyword(s)"),
                  m("select[id=service_type_select][multiple=multiple]", {  
                          onchange: function(e) { 
                           vnode.attrs.program.service_type  = getSelectedOptions(document.getElementById('service_type_select'))
                         }},
                    m("option[value=1]",{ selected: vnode.attrs.program.service_type.includes('education')}, "education"),
                    m("option[value=2]",{ selected: vnode.attrs.program.service_type.includes('legal')},  "legal"),
                    m("option[value=3]",{ selected: vnode.attrs.program.service_type.includes('food')}, "food"),
                    m("option[value=4]",{ selected: vnode.attrs.program.service_type.includes('housing')}, "housing"),
                    m("option[value=5]",{ selected: vnode.attrs.program.service_type.includes('employment')}, "employment"),
                    m("option[value=6]",{ selected: vnode.attrs.program.service_type.includes('family')}, "family"),
                    m("option[value=7]",{ selected: vnode.attrs.program.service_type.includes('health')}, "health")),
                

            m("div.form-group[id=languages]",
              m("label.control-label", "Program Languages Spoken"),
               m("select[id=program_languages_select][multiple=multiple]", {  
                          onchange: function(e) { 
                           vnode.attrs.program.language_arr  = getSelectedOptions(document.getElementById('program_languages_select'))
                         }},
                    m("option[value=1]",{ selected: vnode.attrs.program.language_arr.includes('English')}, "English"),
                    m("option[value=2]",{ selected: vnode.attrs.program.language_arr.includes('Spanish')},  "Spanish"),
                    m("option[value=3]",{ selected: vnode.attrs.program.language_arr.includes('Vietnamese')}, "Vietnamese"),
                    m("option[value=4]",{ selected: vnode.attrs.program.language_arr.includes('Chinese')}, "Chinese"),
                    m("option[value=5]",{ selected: vnode.attrs.program.language_arr.includes('Arabic')}, "Arabic"),
                    m("option[value=6]",{ selected: vnode.attrs.program.language_arr.includes('French')}, "French")),

              ),
          m("label.control-label", "Does program required proof of address?"),
          m("select.form-control[id=proof_address]", { 
                      value: vnode.attrs.program.proof_address,
                        onchange: function(e) { 
                      vnode.attrs.program.proof_address = getSelectedOption(document.getElementById('proof_address')) 
                    }}, 
                      
                         m("option", ""), 
                         m("option", "No, not required"),
                         m("option", "Yes, such as lease, bill, bank statement, or other documents displaying name and address"),
                         m("option", "Yes, verification letter from referring agency"),
                         m("option", "Yes, verfication letter from person providing housing")
               
              ), 
    
            m("label", "Program Required Document Links"),
              m("textarea.form-control application_process",{ value: vnode.attrs.program.documents_required,
                                          oninput: function(e) {
                                                                            vnode.attrs.program.documents_required  = e.currentTarget.value;
                                                                        }
                                                                        }),
              m("label", "Program Payment Options"),
              m("textarea.form-control payment options",{ value: vnode.attrs.program.fee_structure,
                                          oninput: function(e) {
                                                                           vnode.attrs.program.fee_structure  = e.currentTarget.value;
                                                                        }
                                                                        }),
              m("label", "Accepting Clients?"),
              m("select.form-control[id=accepting_clients]", { 
                      value: vnode.attrs.program.accepting_clients,
                        onchange: function(e) { 
                      vnode.attrs.program.accepting_clients = getSelectedOption(document.getElementById('accepting_clients')) 
                    }}, 
                      
                         m("option", ""), 
                         m("option", "Yes" ),
                         m("option", "No"),
                         m("option", "Waitlist")
               
              ), 

            m("label", "If you selected 'waitlist', how many days till service?"),
            m("input.form-control", { value: vnode.attrs.program.waitlist_wait, 
                                       oninput: function(e){
                                        vnode.attrs.program.waitlist_wait = e.currentTarget.value
                                      }
                                       }),  
                                                     
            m("label", "Appointment Required?"),
                       m("select.form-control[id=appointment_required]", { 
                      value: vnode.attrs.program.appointment_required,
                        onchange: function(e) { 
                      vnode.attrs.program.appointment_required = getSelectedOption(document.getElementById('appointment_required')) 
                    }}, 
                      
                         m("option", ""), 
                         m("option", "Yes" ),
                         m("option", "No")
               
              ),
              m("label", "Appointment Notes"),
               m("textarea.form-control",{ value: vnode.attrs.program.appointment_required_notes,
                                          oninput: function(e) {
                                                                           vnode.attrs.program.appointment_required_notes  = e.currentTarget.value;
                                                                        }
                                                                        })

                    ),
                	]),

                  m("div.buttons",
                  m("button.btn btn-default[type=submit]", {
                        href: vnode.attrs.previous_link, 
                        oncreate: m.route.link

                        },"Previous"),

                  m("button[id = nextbutton].btn btn-default[type=submit][style=margin-left:10px]", {
                        href: vnode.attrs.next_link, 
                        oncreate: m.route.link
                        },"Next")
                    )
    		    ])
          ])
		)
	}	

}


