var m = require("mithril")
var Agency = require("../models/Agency")
var helper = require("../helper")
var Modal = require('micromodal');


function parse_date(dt){
  var mydate = new Date(dt);
  var month = mydate.getUTCMonth() + 1; //months from 1-12
  var day = mydate.getUTCDate();
  var year = mydate.getUTCFullYear();

  newdate = year + "-" + month + "-" + day;

  return(newdate)
}

function setlink() { 
  href = ""
  if(Agency.selected_program.name === undefined){
    href = "/agencyreview"
  } else{
   href = "/editprogramreferral"
  }
  return(href)
}


function selectProgram(){
  program_name = document.getElementById('programselect').value;
  datestamp = document.getElementById('datestamp').hidden = false;

  var filteredArr = Agency.programs.filter(function (el) {
  return el.name === program_name      
    });


  if(program_name === ""){
    return(Agency.selected_program = "")
  }

  else{
  program_id = filteredArr[0].id
  Agency.loadProgram(program_id).then(Agency.loadLanguages(program_id))
  
  }

}



module.exports = {
  oninit: function() { helper.moveProgress(30, 30, 50) } ,
  oncreate: function(){
    MicroModal.init();
  },
	view: function() {
    	return(
        m("div.row",[ 
          m(".modal.micromodal-slide[aria-hidden='true'][id='modal-2']", 
                m(".modal__overlay[data-micromodal-close=''][tabindex='-1']", 
                  m(".modal__container[aria-labelledby='modal-2-title'][aria-modal='true'][role='dialog']",
                    [
                      m("header.modal__header",
                        [
                          m("h2.modal__title[id='modal-2-title']", 
                            "Deleting a program."
                          ),
                          m("button.modal__close[aria-label='Close modal'][data-micromodal-close='']")
                        ]
                      ),
                      m("main.modal__content[id='modal-2-content']", 
                        m("p", "Type in name of program you'd like to delete:"),
                        m("input.form-control[id=programdelete][type=text]",
                          { oninput: function(e) { Agency.program_to_delete = e.currentTarget.value } })

                      ),
                      m("footer.modal__footer",
                        [
                          m("button.modal__btn.modal__btn-primary",{
                            onclick: function() {

                              filteredArr = Agency.programs.filter(function (item) {
                                if(item.name === Agency.program_to_delete) return item.id
                            });
                          
                              selectedId = filteredArr[0].id

                              Agency.loadProgram(selectedId).then(function() {
                              Agency.addQueueItem({
                                        status: "new",
                                        submission_type: "delete_program", 
                                        submission: { 
                                        agency_data: Agency.selected,
                                        program_data: Agency.selected_program,
                                        language_data: {},
                                        source: localStorage.username
                                              }
                                      })
                                    }
                                  )}

                                }, 

                            "Submit"
                          ),
                          m("button.modal__btn[aria-label='Close this dialog window'][data-micromodal-close='']", 
                            "Close"
                          )
                        ]
                      )
                    ]
                  )
                )
              ),


          m("div.programselect col-md-12",[
             m("form", [
              m("div.form-group[style=width:310px]",
              m("legend[style=font-size:16px]", Agency.selected.name),
              m("label", "Select program to edit"),
               m("select.form-control[id=programselect]", {
                value: Agency.selected_program.name,
                onchange: function() { 
                  selectProgram()
                }
               },
               m("option", ""),
                 Agency.programs.map(function(program){ 
                  return(
                    m("option",
                      program.name)
                    ) 
                  })
               
               ),
               m("span[id=datestamp]", {hidden: true}, "Last Updated: " + parse_date(Agency.selected_program.last_updated))
              )

          ]),
              m("span", "Don't see your program? Click ", 
                        m("a", {href: "/newprogramreferral", oncreate: m.route.link }, "here"), " to add a new program."),
              
              m("p", m("a[href=#][data-micromodal-trigger=modal-2]", { onclick: function(){ MicroModal.show('modal-2') } }, "Program no longer exists? Click to DELETE a program.")),


               m("div.buttons",
                  m("button.btn btn-default[type=submit]", {
                        href: "/selectagency", 
                        oncreate: m.route.link

                        },"Previous"),

                  m("button.btn btn-default[type=submit][style=margin-left:10px]", {
                        href: setlink(),
                        oncreate: m.route.link,
                        },"Next")
                    )
        ])

      ])
		  )
	}
}

window.selectProgram = selectProgram