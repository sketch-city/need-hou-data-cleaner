var m = require("mithril")
var Agency = require("../models/Agency")
var helper = require("../helper")
var Choices = require("choices.js")

houston_zipcodes = [
                  "77001",         "77002",         "77003",         "77004",
                  "77005",         "77006",         "77007",         "77008",
                  "77009",         "77010",         "77011",         "77012",
                  "77013",         "77014",         "77015",         "77016",
                  "77017",         "77018",         "77019",         "77020",
                  "77021",         "77022",         "77023",         "77024",
                  "77025",         "77026",         "77027",         "77028",
                  "77029",         "77030",         "77031",         "77032",
                  "77033",         "77034",         "77035",         "77036",
                  "77037",         "77038",         "77039",         "77040",
                  "77041",         "77042",         "77043",         "77044",
                  "77045",         "77046",         "77047",         "77048",
                  "77049",         "77050",         "77051",         "77052",
                  "77053",         "77054",         "77055",         "77056",
                  "77057",         "77058",         "77059",         "77060",
                  "77061",         "77062",         "77063",         "77064",
                  "77065",         "77066",         "77067",         "77068",
                  "77069",         "77070",         "77071",         "77072",
                  "77073",         "77074",         "77075",         "77076",
                  "77077",         "77078",         "77079",         "77080",
                  "77081",         "77082",         "77083",         "77084",
                  "77085",         "77086",         "77087",         "77088",
                  "77089",         "77090",         "77091",         "77092",
                  "77093",         "77094",         "77095",         "77096",
                  "77097",         "77098",         "77099",         "77201",
                  "77202",         "77203",         "77204",         "77205",
                  "77206",         "77207",         "77208",         "77209",
                  "77210",         "77212",         "77213",         "77215",
                  "77216",         "77217",         "77218",         "77219",
                  "77220",         "77221",         "77222",         "77223",
                  "77224",         "77225",         "77226",         "77227",
                  "77228",         "77229",         "77230",         "77231",
                  "77233",         "77234",         "77235",         "77236",
                  "77237",         "77238",         "77240",         "77241",
                  "77242",         "77243",         "77244",         "77245",
                  "77246",         "77247",         "77248",         "77249",
                  "77250",         "77251",         "77252",         "77253",
                  "77254",         "77255",         "77256",         "77257",
                  "77258",         "77259",         "77260",         "77261",
                  "77262",         "77263",         "77265",         "77266",
                  "77267",         "77268",         "77269",         "77270",
                  "77271",         "77272",         "77273",         "77274",
                  "77275",         "77276",         "77277",         "77278",
                  "77279",         "77280",         "77282",         "77284",
                  "77285",         "77286",         "77287",         "77288",
                  "77289",         "77290",         "77291",         "77292",
                  "77293",         "77294",         "77296",         "77297",
"77298",         "77299"]


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
 program_language_choices = new Choices('#program_languages_select')
 current_id_choices = new Choices('#current_id_select')
 expired_id_choices = new Choices('#expired_id_select')
 

 zipcode_choices = new Choices('#zipcode_select');
 age_choices = new Choices('#age_select');
 immigration_choices = new Choices('#immigration_select')
},
view: function(vnode) {	
	return(
		    m("div.row",[  
                m("div.agencyedit col-md-12",[                 
    		    m("form", [
                m("div.form-group[style=width:400px]",
                  m("legend[style=font-size:16px]", Agency.selected.name),
                   m("label", "Program Name"),
            m("input.form-control[type=text][id=programname]",{ value: vnode.attrs.program.name,
                                onchange: function(e) { 
                                                        vnode.attrs.program.name = e.currentTarget.value;
                                                                        } }),
          m("label", "Program Neighbhorhood/Area"),
          m("input.form-control[type=text][id=service_area]",{ value: vnode.attrs.program.service_area,
                                onchange: function(e) { 
                                                        vnode.attrs.program.service_area = e.currentTarget.value;
                                                                        } }),

          m("label", "Program Description"),
              m("textarea.form-control",{ 
                value: vnode.attrs.program.description, 
                oninput: function(e) {
                          vnode.attrs.program.description  = e.currentTarget.value;
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
            m("label", "Next steps for client to take:"),
            m("textarea.form-control[id=next_steps]",{ value: vnode.attrs.program.next_steps,
                                onchange: function(e) { 
                                                        vnode.attrs.program.next_steps = e.currentTarget.value;
                                                                        } }),

            m("div.form-group[id=languages]",
              m("label.control-label", "Program Languages Spoken ★"),
               m("select[id=program_languages_select][multiple=multiple]", {  
                          onchange: function(e) { 
                           vnode.attrs.program.language_arr  = getSelectedOptions(document.getElementById('program_languages_select'))
                         }},
                    m("option",{ selected: vnode.attrs.program.language_arr.includes('English')}, "English"),
                    m("option",{ selected: vnode.attrs.program.language_arr.includes('Spanish')},  "Spanish"),
                    m("option",{ selected: vnode.attrs.program.language_arr.includes('Vietnamese')}, "Vietnamese"),
                    m("option",{ selected: vnode.attrs.program.language_arr.includes('Chinese')}, "Chinese"),
                    m("option",{ selected: vnode.attrs.program.language_arr.includes('Arabic')}, "Arabic"),
                    m("option",{ selected: vnode.attrs.program.language_arr.includes('French')}, "French"),
                    m("option",{ selected: vnode.attrs.program.language_arr.includes('Hindi')}, "Hindi"),
                    m("option",{ selected: vnode.attrs.program.language_arr.includes('Urdu')},  "Urdu"),
                    m("option",{ selected: vnode.attrs.program.language_arr.includes('Tagalog')}, "Tagalog"),
                    m("option",{ selected: vnode.attrs.program.language_arr.includes('Persian')}, "Persian"),
                    m("option",{ selected: vnode.attrs.program.language_arr.includes('Korean')}, "Korean"),
                    m("option",{ selected: vnode.attrs.program.language_arr.includes('German')}, "German"),
                    m("option",{ selected: vnode.attrs.program.language_arr.includes('Russian')}, "Russian"),
                    m("option",{ selected: vnode.attrs.program.language_arr.includes('Portuguese')},  "Portuguese"),
                    m("option",{ selected: vnode.attrs.program.language_arr.includes('Gujarati')}, "Gujarati"),
                    m("option",{ selected: vnode.attrs.program.language_arr.includes('Japanese')}, "Japanese"),
                    m("option",{ selected: vnode.attrs.program.language_arr.includes('Serbo-Croatian')}, "Serbo-Croatian"),
                    m("option",{ selected: vnode.attrs.program.language_arr.includes('Italian')}, "Italian"),
                    m("option",{ selected: vnode.attrs.program.language_arr.includes('French Creole')}, "French Creole"),
                    m("option",{ selected: vnode.attrs.program.language_arr.includes('Thai')},  "Thai"),
                    m("option",{ selected: vnode.attrs.program.language_arr.includes('Hebrew')}, "Hebrew"),
                    m("option",{ selected: vnode.attrs.program.language_arr.includes('Greek')}, "Greek"),
                    m("option",{ selected: vnode.attrs.program.language_arr.includes('Polish')}, "Polish"),
                    m("option",{ selected: vnode.attrs.program.language_arr.includes('Cambodian')}, "Cambodian"),
                    m("option",{ selected: vnode.attrs.program.language_arr.includes('Hungarian')}, "Hungarian")

                    ),

              ),


            m("label", "Eligible Zipcodes"),
                  m("select[id=zipcode_select][multiple=multiple]", {  
                          onchange: function(e) { 
                           vnode.attrs.program.zipcode_eligibility  = getSelectedOptions(document.getElementById('zipcode_select'))
                         }},
                         houston_zipcodes.map(function(zipcode){ 
                  return(
                    m("option", { selected: vnode.attrs.program.zipcode_eligibility.includes(zipcode) }, zipcode)
                    ) 
                  })
                    

                    ),
                    m("label", "Eligible Incomes (% of federal poverty level)"),
                    m("select[id=income_select]", {  
                          onchange: function(e) { 
                           vnode.attrs.program.income_eligibility  = getSelectedOption(document.getElementById('income_select'))
                         }},
                    m("option", ""),
                    m("option",{ selected: vnode.attrs.program.service_type.includes('20%')}, "20%"),
                    m("option",{ selected: vnode.attrs.program.service_type.includes('40%')}, "40%"),
                    m("option",{ selected: vnode.attrs.program.service_type.includes('60%')}, "60%"),
                    m("option",{ selected: vnode.attrs.program.service_type.includes('80%')}, "80%"),
                    m("option",{ selected: vnode.attrs.program.service_type.includes('100%')}, "100%"),
                    m("option",{ selected: vnode.attrs.program.service_type.includes('120%')}, "120%"),
                    m("option",{ selected: vnode.attrs.program.service_type.includes('140%')}, "140%"),
                    m("option",{ selected: vnode.attrs.program.service_type.includes('160%')}, "160%"),
                    m("option",{ selected: vnode.attrs.program.service_type.includes('180%')}, "180%"),
                    m("option",{ selected: vnode.attrs.program.service_type.includes('200%')}, "200%"),





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
                      m("label", "Immigration Status ★"),
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

                    m("label.control-label", "Select all current accepted ID's ★"),
                    m("select[id=current_id_select][multiple=multiple]", {  
                          onchange: function(e) { 
                           vnode.attrs.program.id_accepted_current  = getSelectedOptions(document.getElementById('current_id_select'))
                         }},
                    m("option",{ selected: vnode.attrs.program.id_accepted_current.includes('US government-issued ID')}, "US government-issued ID"),
                    m("option",{ selected: vnode.attrs.program.id_accepted_current.includes('Any photo ID')}, "Any photo ID"),
                    m("option",{ selected: vnode.attrs.program.id_accepted_current.includes('Visas')}, "Visas"),
                    m("option",{ selected: vnode.attrs.program.id_accepted_current.includes('Foreign-government issued ID')}, "Foreign-government issued ID"),
                    m("option",{ selected: vnode.attrs.program.id_accepted_current.includes('Any government-issued non-photo document')}, "Any government-issued non-photo document"),
                    m("option",{ selected: vnode.attrs.program.id_accepted_current.includes('Alternative evidence')}, "Alternative evidence")
                    ),
                   m("label.control-label", "Select all expired accepted ID's ★"),
                    m("select[id=expired_id_select][multiple=multiple]", {  
                          onchange: function(e) { 
                           vnode.attrs.program.id_accepted_expired  = getSelectedOptions(document.getElementById('expired_id_select'))
                         }},
                    m("option",{ selected: vnode.attrs.program.id_accepted_expired.includes('US government-issued ID')}, "US government-issued ID"),
                    m("option",{ selected: vnode.attrs.program.id_accepted_expired.includes('Any photo ID')}, "Any photo ID"),
                    m("option",{ selected: vnode.attrs.program.id_accepted_expired.includes('Visas')}, "Visas"),
                    m("option",{ selected: vnode.attrs.program.id_accepted_expired.includes('Foreign-government issued ID')}, "Foreign-government issued ID"),
                    m("option",{ selected: vnode.attrs.program.id_accepted_expired.includes('Any government-issued non-photo document')}, "Any government-issued non-photo document"),
                    m("option",{ selected: vnode.attrs.program.id_accepted_expired.includes('Alternative evidence')}, "Alternative evidence")
                    ),
                

          m("label.control-label", "Does program required proof of address? ★"),
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


