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
 frontline_languages
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
                           vnode.attrs.program.immigration_status  = getSelectedOptions(document.getElementById('immigration_status'))
                         }},
                        m("option",{ selected: vnode.attrs.program.immigration_status.includes('U.S. Citizen')}, "U.S. Citizen"),
                        m("option",{ selected: vnode.attrs.program.immigration_status.includes('Legal Permanent Resident')}, "Legal Permanent Resident"),
                        m("option",{ selected: vnode.attrs.program.immigration_status.includes('Temporary Work permit')}, "Temporary Work permit"),
                        m("option",{ selected: vnode.attrs.program.immigration_status.includes('Non-immigrant Visa')}, "Non-immigrant Visa"),
                        m("option",{ selected: vnode.attrs.program.immigration_status.includes('Immigrant Visa')}, "Immigrant Visa"),
                        m("option",{ selected: vnode.attrs.program.immigration_status.includes('Status in process')}, "Status in process"),
                        m("option",{ selected: vnode.attrs.program.immigration_status.includes('Undocumented ')}, "Undocumented"),

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
                    m("option",{ selected: vnode.attrs.program.frontline_languages.includes('French')}, "French")),


        

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


