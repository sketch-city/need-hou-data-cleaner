var m = require("mithril")
var Agency = require("../models/Agency")
var helper = require("../helper")
var Modal = require('micromodal');


module.exports = {
	oninit: function() {
          Agency.loadList().then(function() { helper.autocomplete(document.getElementById("agencyselect"), Agency.list.map(function(agency) { return(agency.name) }))} )
        
    },

  oncreate: function(){
    MicroModal.init();
  },
    view: function() {
    	return( 
        
            
            m("div.row",[  
              m(".modal.micromodal-slide[aria-hidden='true'][id='modal-1']", 
                m(".modal__overlay[data-micromodal-close=''][tabindex='-1']", 
                  m(".modal__container[aria-labelledby='modal-1-title'][aria-modal='true'][role='dialog']",
                    [
                      m("header.modal__header",
                        [
                          m("h2.modal__title[id='modal-1-title']", 
                            "Deleting an organization."
                          ),
                          m("button.modal__close[aria-label='Close modal'][data-micromodal-close='']")
                        ]
                      ),
                      m("main.modal__content[id='modal-1-content']", 
                        m("p", "Type in name of organization you'd like to delete:"),
                        m("input.form-control[id=agencydelete][type=text]",
                          { oninput: function(e) { Agency.agency_to_delete = e.currentTarget.value } })

                      ),
                      m("footer.modal__footer",
                        [
                          m("button.modal__btn.modal__btn-primary",{
                            onclick: function() {

                              filteredArr = Agency.list.filter(function (item) {
                                if(item.name === Agency.agency_to_delete) return item.id
                            });
                          
                            selectedId = filteredArr[0].id

                              Agency.loadAgency(selectedId).then(function() {
                              Agency.addQueueItem({
                                        status: "new",
                                        submission_type: "delete_agency", 
                                        submission: { 
                                        agency_data: Agency.selected,
                                        program_data: {},
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
              m("div.agencyselect col-md-12",[                  
    		      m("form[autocomplete=off]", [
                m("div.autocomplete form-group[style=width:300px]",
                    m("label", "Enter the organization you'd like to edit."),
                    m("input.form-control[id=agencyselect][type=text]", {
                     value: Agency.selected.name,
          
                    })                    
                        
                    )

                  ]),
                      m("span", m("a", {href: "/newagency", oncreate: m.route.link }, "Don't see your organization? Click to ADD a new org")),
                      m("p", m("a[href=#][data-micromodal-trigger=modal-1]", { onclick: function(){ MicroModal.show('modal-1') } }, "Organization no longer exists? Click to DELETE an organization.")),
                    m("div.row"),
                    m("button.btn btn-default[type=submit][style=margin-top:50px]", {
                  
                        href: "/editagency", 
                        oncreate: m.route.link,
                        disabled: Agency.selected.name === undefined
                        },"Next")

          
                ])

            ])



    	   ) 
    }
}