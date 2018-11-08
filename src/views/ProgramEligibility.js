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

},
oncreate: function(vnode){
 zipcode_choices = new Choices('#zipcode_select');
 income_choices = new Choices('#income_select');
 age_choices = new Choices('#age_select');
 immigration_choices = new Choices('#immigration_select')
 frontline_languages_choices = new Choices('#frontline_languages_select')
 interpretation_offered_choices = new Choices('#interpretation_offered_select')
 crisis_services_offered_choices = new Choices('#crisis_services_offered_select')

},
view: function(vnode) {	
	return(
		    m("div.row",[  
                m("div.agencyedit col-md-12",[                 
    		    m("form", [
                m("div.form-group[style=width:400px]",
                  m("legend[style=font-size:16px]"),
                  m("label", "Eligible Zipcodes"),
                  m("select[id=zipcode_select][multiple=multiple]", {  
                          onchange: function(e) { 
                           vnode.attrs.program.zipcode_eligibility  = getSelectedOptions(document.getElementById('zipcode_select'))
                         }},
                    //m("option[value=1]",{ selected: vnode.attrs.program.service_type.includes('education')}, "education"),

                    ),
                    m("label", "Eligible Incomes"),
                    m("select[id=income_select][multiple=multiple]", {  
                          onchange: function(e) { 
                           vnode.attrs.program.income_eligibility  = getSelectedOptions(document.getElementById('income_select'))
                         }},
                    //m("option[value=1]",{ selected: vnode.attrs.program.service_type.includes('education')}, "education"),
                    ),
                    m("label", "Eligible Gender"),
                      m("textarea.form-control gender",{ value: vnode.attrs.program.gender_eligibility,
                                          oninput: function(e) {
                                                                    vnode.attrs.program.gender_eligibility  = e.currentTarget.value;
                                                                        }
                        }),
                    m("label", "Eligible age groups"),
                    m("select[id=age_select][multiple=multiple]", {  
                          onchange: function(e) { 
                           vnode.attrs.program.age_eligibility  = getSelectedOptions(document.getElementById('age_select'))
                         }},
                    m("option",{ selected: vnode.attrs.program.service_type.includes('early childhood (approximately 0-4yrs)')}, "early childhood (approximately 0-4yrs)"),
                    m("option",{ selected: vnode.attrs.program.service_type.includes('kids (approximately 5-12yrs)')}, "kids (approximately 5-12yrs)"),
                    m("option",{ selected: vnode.attrs.program.service_type.includes('youth (approximately 13-18yrs)')}, "youth (approximately 13-18yrs)"),
                    m("option",{ selected: vnode.attrs.program.service_type.includes('adult (approximately 19-64yrs)')}, "adult (approximately 19-64yrs)"),
                    m("option",{ selected: vnode.attrs.program.service_type.includes('seniors (approximately 65+yrs)')}, "seniors (approximately 65+yrs)"),
                    ),
                     m("label", "Requires enrollment in: "),
                          m("textarea.form-control",{ value: vnode.attrs.program.other_program_enrollment,
                                          oninput: function(e) {
                                                                    vnode.attrs.program.other_program_enrollment  = e.currentTarget.value;
                                                                        }
                        }),
                      m("label", "Other Eligibility"),
                          m("textarea.form-control",{ value: vnode.attrs.program.other_eligibility,
                                          oninput: function(e) {
                                                                    vnode.attrs.program.other_eligibility  = e.currentTarget.value;
                                                                        }
                        }),
                      m("label", "Immigration Status"),
                      m("select[id=immigration_select][multiple=multiple]", {  
                          onchange: function(e) { 
                           vnode.attrs.program.immigration_status  = getSelectedOptions(document.getElementById('immigration_select'))
                         }},
                        m("option",{ selected: vnode.attrs.program.immigration_status.includes('U.S. Citizen')}, "U.S. Citizen"),
                        m("option",{ selected: vnode.attrs.program.immigration_status.includes('Legal Permanent Resident')}, "Legal Permanent Resident"),
                        m("option",{ selected: vnode.attrs.program.immigration_status.includes('Temporary Work permit')}, "Temporary Work permit"),
                        m("option",{ selected: vnode.attrs.program.immigration_status.includes('Non-immigrant Visa')}, "Non-immigrant Visa"),
                        m("option",{ selected: vnode.attrs.program.immigration_status.includes('Immigrant Visa')}, "Immigrant Visa"),
                        m("option",{ selected: vnode.attrs.program.immigration_status.includes('Status in process')}, "Status in process"),
                        m("option",{ selected: vnode.attrs.program.immigration_status.includes('Undocumented ')}, "Undocumented")

                    ),

                    m("label", "Are services available the same day as intake?"),
                    m("select.form-control[id=service_available_intake]", { 
                      value: vnode.attrs.program.service_available_intake,
                        onchange: function(e) { 
                      vnode.attrs.program.service_available_intake = getSelectedOption(document.getElementById('service_available_intake')) 
                    }}, 
                      
                         m("option", ""), 
                         m("option", "Yes" ),
                         m("option", "No")
               
                      ),
                    m("label", "Intake Notes"),
                    m("textarea.form-control",{ value: vnode.attrs.program.service_available_intake_notes,
                                          oninput: function(e) {
                                                                    vnode.attrs.program.service_available_intake_notes  = e.currentTarget.value;
                                                                        }
                        }),
                    m("label.control-label", "Frontline Staff Languages"),
                    m("select[id=frontline_languages_select][multiple=multiple]", {  
                          onchange: function(e) { 
                           vnode.attrs.program.frontline_languages  = getSelectedOptions(document.getElementById('frontline_languages_select')) 
                         }},
                    m("option",{ selected: vnode.attrs.program.frontline_languages.includes('English')}, "English"),
                    m("option",{ selected: vnode.attrs.program.frontline_languages.includes('Spanish')},  "Spanish"),
                    m("option",{ selected: vnode.attrs.program.frontline_languages.includes('Vietnamese')}, "Vietnamese"),
                    m("option",{ selected: vnode.attrs.program.frontline_languages.includes('Chinese')}, "Chinese"),
                    m("option",{ selected: vnode.attrs.program.frontline_languages.includes('Arabic')}, "Arabic"),
                    m("option",{ selected: vnode.attrs.program.frontline_languages.includes('French')}, "French"),
                    m("option",{ selected: vnode.attrs.program.frontline_languages.includes('Hindi')}, "Hindi"),
                    m("option",{ selected: vnode.attrs.program.frontline_languages.includes('Urdu')},  "Urdu"),
                    m("option",{ selected: vnode.attrs.program.frontline_languages.includes('Tagalog')}, "Tagalog"),
                    m("option",{ selected: vnode.attrs.program.frontline_languages.includes('Persian')}, "Persian"),
                    m("option",{ selected: vnode.attrs.program.frontline_languages.includes('Korean')}, "Korean"),
                    m("option",{ selected: vnode.attrs.program.frontline_languages.includes('German')}, "German"),
                    m("option",{ selected: vnode.attrs.program.frontline_languages.includes('Russian')}, "Russian"),
                    m("option",{ selected: vnode.attrs.program.frontline_languages.includes('Portuguese')},  "Portuguese"),
                    m("option",{ selected: vnode.attrs.program.frontline_languages.includes('Gujarati')}, "Gujarati"),
                    m("option",{ selected: vnode.attrs.program.frontline_languages.includes('Japanese')}, "Japanese"),
                    m("option",{ selected: vnode.attrs.program.frontline_languages.includes('Serbo-Croatian')}, "Serbo-Croatian"),
                    m("option",{ selected: vnode.attrs.program.frontline_languages.includes('Italian')}, "Italian"),
                    m("option",{ selected: vnode.attrs.program.frontline_languages.includes('French Creole')}, "French Creole"),
                    m("option",{ selected: vnode.attrs.program.frontline_languages.includes('Thai')},  "Thai"),
                    m("option",{ selected: vnode.attrs.program.frontline_languages.includes('Hebrew')}, "Hebrew"),
                    m("option",{ selected: vnode.attrs.program.frontline_languages.includes('Greek')}, "Greek"),
                    m("option",{ selected: vnode.attrs.program.frontline_languages.includes('Polish')}, "Polish"),
                    m("option",{ selected: vnode.attrs.program.frontline_languages.includes('Cambodian')}, "Cambodian"),
                    m("option",{ selected: vnode.attrs.program.frontline_languages.includes('Hungarian')}, "Hungarian")


                    ),

                    m("label.control-label", "Interpretation Offered"),
                    m("select[id=interpretation_offered_select][multiple=multiple]", {  
                          onchange: function(e) { 
                           vnode.attrs.program.interpretation_offered  = getSelectedOptions(document.getElementById('interpretation_offered_select')) 
                         }},
                    m("option",{ selected: vnode.attrs.program.interpretation_offered.includes('Yes, for frontline staff')}, "Yes, for frontline staff"),
                    m("option",{ selected: vnode.attrs.program.interpretation_offered.includes('Yes, for program staff')},  "Yes, for program staff"),
                    m("option",{ selected: vnode.attrs.program.interpretation_offered.includes('Yes, for billing staff')}, "Yes, for billing staff"),
                    m("option",{ selected: vnode.attrs.program.interpretation_offered.includes('No, not available')}, "No, not available"),
                    m("option",{ selected: vnode.attrs.program.interpretation_offered.includes('No, not required')}, "No, not required")),

                    m("label.control-label", "Emergency Crisis-Services Offered"),
                    m("select[id=crisis_services_offered_select][multiple=multiple]", {  
                          onchange: function(e) { 
                           vnode.attrs.program.crisis_services_offered  = getSelectedOptions(document.getElementById('crisis_services_offered_select')) 
                         }},
                    m("option",{ selected: vnode.attrs.program.crisis_services_offered.includes('Yes, during service hours')}, "Yes, during service hours"),
                    m("option",{ selected: vnode.attrs.program.crisis_services_offered.includes('Yes, 24 hour')},  "Yes, 24 hour"),
                    m("option",{ selected: vnode.attrs.program.crisis_services_offered.includes('Yes, disaster response/recovery')}, "Yes, disaster response/recovery"),
                    m("option",{ selected: vnode.attrs.program.crisis_services_offered.includes('No')}, "No")),

                    m("label.control-label", "Visual aids offered for low-literacy clients and/or children?"),
                    m("select.form-control[id=visual_aids_offered]", { 
                      value: vnode.attrs.program.visual_aids_offered,
                        onchange: function(e) { 
                      vnode.attrs.program.visual_aids_offered = getSelectedOption(document.getElementById('visual_aids_offered')) 
                    }}, 
                      
                         m("option", ""), 
                         m("option", "Yes" ),
                         m("option", "No")
               
                    ),

                    m("label.control-label", "Does program offer clients an opportunity for consultation before filling out paperwork?"),
                    m("select.form-control[id=consultation_opportunity]", { 
                      value: vnode.attrs.program.consultation_opportunity,
                        onchange: function(e) { 
                      vnode.attrs.program.consultation_opportunity = getSelectedOption(document.getElementById('consultation_opportunity')) 
                    }}, 
                      
                         m("option", ""), 
                         m("option", "Yes" ),
                         m("option", "No")
               
                  ),

                    m("label.control-label", "Does program have a policy to respond to Immigrations and Customs Enforcement requests?"),
                    m("select.form-control[id=enforcement_request_policy]", { 
                      value: vnode.attrs.program.enforcement_request_policy,
                        onchange: function(e) { 
                      vnode.attrs.program.enforcement_request_policy = getSelectedOption(document.getElementById('enforcement_request_policy')) 
                    }}, 
                      
                         m("option", ""), 
                         m("option", "Yes" ),
                         m("option", "No")
               
                  ),
                    m("label.control-label", "Does program offer a cultural competency/effectiveness training?"),
                    m("select.form-control[id=cultural_competency_offered]", { 
                      value: vnode.attrs.program.cultural_competency_offered,
                        onchange: function(e) { 
                      vnode.attrs.program.cultural_competency_offered = getSelectedOption(document.getElementById('cultural_competency_offered')) 
                    }}, 
                      
                         m("option", ""), 
                         m("option", "Yes, required for client-facing staff" ),
                         m("option", "Yes, optional for client-facing staff"),
                         m("option", "No, but we are interested in a cultural competency training" ),
                         m("option", "No, we are not interested in a training" ),
               
                  ),



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

                    )
    		      ])
          ])
	     ])
		)
	}	

}


