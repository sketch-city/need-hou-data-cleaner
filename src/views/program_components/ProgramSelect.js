var m = require("mithril")
var Agency = require("../../models/Agency")
var helper = require("../../helper")
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

function findProgramsByName(name) {
  return Agency.programs.filter(function (program) {
    return program.name === name      
  })
}

function selectProgram(){
  program_name = document.getElementById('programselect').value;
  datestamp = document.getElementById('datestamp').hidden = false;

  var filteredArr = findProgramsByName(program_name)


  if(program_name === ""){
    return(Agency.selected_program = "")
  }

  else{
  program_id = filteredArr[0].id
  Agency.loadProgram(program_id).then(Agency.loadLanguages(program_id))
  
  }

}



module.exports = {
  oninit: function(vnode) {
    //helper.moveProgress(30, 30, 50)
    if (vnode.attrs.id) {
      let program_id = vnode.attrs.id
      Agency
        .loadProgram(program_id)
        .then(Agency.loadLanguages(program_id))
        .then(function(){
          const { selected_program } = Agency
          return Agency.loadAgency(Agency.selected_program.agency_id)
            .then(function(agency){
              Agency.setSelectedAgency(agency)
              return Agency.loadPrograms()
            })
            .then(function() {
              Agency.selected_program = selected_program
            })
        })

    }
  } ,
  oncreate: function(){
    MicroModal.init();
  },
	view: function() {
    	return(
        m("div.row",[ 
          m(".modal.micromodal-slide[aria-hidden='true'][id='program-delete-modal']", 
                m(".modal__overlay[data-micromodal-close=''][tabindex='-1']", 
                  m(".modal__container[aria-labelledby='program-delete-modal-title'][aria-modal='true'][role='dialog']",
                    [
                      m("header.modal__header",
                        [
                          m("h2.modal__title[id='program-delete-modal-title']", 
                            "Deleting a program."
                          ),
                          m("button.modal__close[aria-label='Close modal'][data-micromodal-close='']")
                        ]
                      ),
                      m("main.modal__content[id='program-delete-modal-content'][style=min-height: 50px]", 
                        m("p", "Select program to delete:"),
                        m("select.form-control[id=programdelete]", {
                          value: Agency.program_to_delete.name,
                          onchange: function(changeEvent) {
                            var programs = findProgramsByName(changeEvent.currentTarget.value)
                            Agency.program_to_delete = programs[0]
                          }
                         },
                         m("option", ""),
                           Agency.programs.map(function(program){ 
                            return(
                              m("option",
                                program.name)
                              ) 
                            })
                         
                        )
                      ),
                      m("footer.modal__footer",
                        [
                          m("button.btn.btn-primary",{
                            onclick: function() {
                          
                              selectedId = Agency.program_to_delete.id
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
                                .then(function(){
                                  Agency.program_to_delete = {}
                                  MicroModal.close('agency-delete-modal')
                                })
                              }
                            }, 

                            "Submit"
                          ),
                          m("button.btn[aria-label='Close this dialog window'][data-micromodal-close='']", 
                            "Close"
                          )
                        ]
                      )
                    ]
                  )
                )
              ),


          m("div.col-md-12",[
             m("form", [
              m("div.form-group[style=width:310px]",
              m("legend[style=font-size:16px]",m("strong", Agency.selected.name)),
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
              m("span", m("a",{href: "/newprogramreferral", oncreate: m.route.link }, "Don't see your program? Click here to add a new program.")),
              
              m("p", m("a[data-micromodal-trigger=program-delete-modal]", { onclick: function(){ MicroModal.show('program-delete-modal') } }, "Program no longer exists? Click to DELETE a program.")),
              m("div.row"),

               m("div.buttons",
                  m("button.btn btn-outline-success[type=submit]", {
                        href: "/selectagency", 
                        oncreate: m.route.link

                        },"Previous"),

                  m("button.btn btn-success[type=submit][style=margin-left:10px]", {
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