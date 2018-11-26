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
      return(opt.label)
    }
  }
}

function formatMapQuery(address){
  var queryp1 = "https://www.google.com/maps/dir/?api=1&destination="
  var queryp2 = "&travelmode=transit"
  var formatted = queryp1 + escape(address) + queryp2
  return(formatted)
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
 service_type_choices = new Choices('#service_type_select')
 website_languages_choices = new Choices('#website_languages_select')
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
                  


                    m("label", "★ Are services available the same day as intake?"),
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
                    m("label", "Program Full Physical Address"),
                   m("input.form-control[type=text]",{ value: vnode.attrs.program.physical_address,
                                          oninput: function(e) {
                                                                            vnode.attrs.program.physical_address = e.currentTarget.value;
                                                                        }
                                                              }),
                    m("label", "Program Webpage"),
                    m("input.form-control[type=text]",{ value: vnode.attrs.program.website,
                      oninput: function(e) {
                                vnode.attrs.program.website  = e.currentTarget.value;
                                }
                           }),
                    m("label", "★ Website Languages"),
                    m("select[id=website_languages_select][multiple=multiple]", {  
                          onchange: function(e) { 
                           vnode.attrs.program.website_languages  = getSelectedOptions(document.getElementById('website_languages_select'))
                         }},

                    m("option",{ selected: vnode.attrs.program.website_languages.includes('English')}, "English"),
                    m("option",{ selected: vnode.attrs.program.website_languages.includes('Spanish')},  "Spanish"),
                    m("option",{ selected: vnode.attrs.program.website_languages.includes('Vietnamese')}, "Vietnamese"),
                    m("option",{ selected: vnode.attrs.program.website_languages.includes('Chinese')}, "Chinese"),
                    m("option",{ selected: vnode.attrs.program.website_languages.includes('Arabic')}, "Arabic"),
                    m("option",{ selected: vnode.attrs.program.website_languages.includes('French')}, "French"),
                    m("option",{ selected: vnode.attrs.program.website_languages.includes('Hindi')}, "Hindi"),
                    m("option",{ selected: vnode.attrs.program.website_languages.includes('Urdu')},  "Urdu"),
                    m("option",{ selected: vnode.attrs.program.website_languages.includes('Tagalog')}, "Tagalog"),
                    m("option",{ selected: vnode.attrs.program.website_languages.includes('Persian')}, "Persian"),
                    m("option",{ selected: vnode.attrs.program.website_languages.includes('Korean')}, "Korean"),
                    m("option",{ selected: vnode.attrs.program.website_languages.includes('German')}, "German"),
                    m("option",{ selected: vnode.attrs.program.website_languages.includes('Russian')}, "Russian"),
                    m("option",{ selected: vnode.attrs.program.website_languages.includes('Portuguese')},  "Portuguese"),
                    m("option",{ selected: vnode.attrs.program.website_languages.includes('Gujarati')}, "Gujarati"),
                    m("option",{ selected: vnode.attrs.program.website_languages.includes('Japanese')}, "Japanese"),
                    m("option",{ selected: vnode.attrs.program.website_languages.includes('Serbo-Croatian')}, "Serbo-Croatian"),
                    m("option",{ selected: vnode.attrs.program.website_languages.includes('Italian')}, "Italian"),
                    m("option",{ selected: vnode.attrs.program.website_languages.includes('French Creole')}, "French Creole"),
                    m("option",{ selected: vnode.attrs.program.website_languages.includes('Thai')},  "Thai"),
                    m("option",{ selected: vnode.attrs.program.website_languages.includes('Hebrew')}, "Hebrew"),
                    m("option",{ selected: vnode.attrs.program.website_languages.includes('Greek')}, "Greek"),
                    m("option",{ selected: vnode.attrs.program.website_languages.includes('Polish')}, "Polish"),
                    m("option",{ selected: vnode.attrs.program.website_languages.includes('Cambodian')}, "Cambodian"),
                    m("option",{ selected: vnode.attrs.program.website_languages.includes('Hungarian')}, "Hungarian")
                    ),

                    m("label", "Program Service Cost"),
                    m("textarea.form-control", { value: vnode.attrs.program.service_cost,
                                              oninput: function(e) {
                                                vnode.attrs.program.service_cost = e.currentTarget.value;

                                               } 
                                             }),

                    m("label", "Program Payment Options"),
                    m("textarea.form-control payment options",{ value: vnode.attrs.program.fee_structure,
                                                oninput: function(e) {
                                                                                 vnode.attrs.program.fee_structure  = e.currentTarget.value;
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
                    m("label.control-label", "★ Interpretation Offered"),
                    m("select[id=interpretation_offered_select][multiple=multiple]", {  
                          onchange: function(e) { 
                           vnode.attrs.program.interpretation_offered  = getSelectedOptions(document.getElementById('interpretation_offered_select')) 
                         }},
                    m("option",{ selected: vnode.attrs.program.interpretation_offered.includes('Yes, for frontline staff')}, "Yes, for frontline staff"),
                    m("option",{ selected: vnode.attrs.program.interpretation_offered.includes('Yes, for program staff')},  "Yes, for program staff"),
                    m("option",{ selected: vnode.attrs.program.interpretation_offered.includes('Yes, for billing staff')}, "Yes, for billing staff"),
                    m("option",{ selected: vnode.attrs.program.interpretation_offered.includes('No, not available')}, "No, not available"),
                    m("option",{ selected: vnode.attrs.program.interpretation_offered.includes('No, not required')}, "No, not required")),

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



                    m("label.control-label", "Emergency Crisis-Services Offered"),
                    m("select[id=crisis_services_offered_select][multiple=multiple]", {  
                          onchange: function(e) { 
                           vnode.attrs.program.crisis_services_offered  = getSelectedOptions(document.getElementById('crisis_services_offered_select')) 
                         }},
                    m("option",{ selected: vnode.attrs.program.crisis_services_offered.includes('Yes, during service hours')}, "Yes, during service hours"),
                    m("option",{ selected: vnode.attrs.program.crisis_services_offered.includes('Yes, 24 hour')},  "Yes, 24 hour"),
                    m("option",{ selected: vnode.attrs.program.crisis_services_offered.includes('Yes, disaster response/recovery')}, "Yes, disaster response/recovery"),
                    m("option",{ selected: vnode.attrs.program.crisis_services_offered.includes('No')}, "No")),

                    m("label", "Program Transportation"),
                    m("textarea.form-control",{ value: vnode.attrs.program.transportation  = formatMapQuery(vnode.attrs.program.physical_address)
                     }),


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


