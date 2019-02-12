var m = require("mithril")
var Agency = require("../../models/Agency")
var helper = require("../../helper")
var Modal = require('micromodal');


module.exports = {
	oninit: function() {
          Agency.loadList().then(function() {
            helper.autocomplete(
              document.getElementById("agencyselectfordelete"),
              Agency.list.map(function(agency) { return(agency.name) }),
              'agency_to_delete'
            )
          })
    },

  oncreate: function(){
    MicroModal.init();
  },
    view: function() {
          return (
              m(".modal.micromodal-slide[aria-hidden='true'][id='agency-delete-modal']", 
                m(".modal__overlay[data-micromodal-close=''][tabindex='-1']", 
                  m(".modal__container[aria-labelledby='agency-delete-modal-title'][aria-modal='true'][role='dialog']",
                    [
                      m("header.modal__header",
                        [
                          m("h2.modal__title[id='agency-delete-modal-title']", 
                            "Deleting an organization."
                          ),
                          m("button.modal__close[aria-label='Close modal'][data-micromodal-close='']")
                        ]
                      ),
                      m("main.modal__content[id='agency-delete-modal-content'][style=min-height: 50px]", 
                        m("form[autocomplete=off]", [
                              m("div.autocomplete form-group",
                        m("p", "Type in name of organization you'd like to delete:"),
                        m("input.form-control[id=agencyselectfordelete][type=text]",
                          {
                            // oninput: function(e) { Agency.agency_to_delete = e.currentTarget.value },
                            value: Agency.agency_to_delete.name
                          }
                        )
                        )
                              ])

                      ),
                      m("footer.modal__footer",
                        [
                          m("button.btn.btn-primary", {
                            onclick: function() {

                              Agency.addQueueItem({
                                status: "new",
                                submission_type: "delete_agency", 
                                submission: { 
                                  agency_data: Agency.agency_to_delete,
                                  program_data: {},
                                  language_data: {},
                                  source: localStorage.username
                                }
                              })
                              .then(function(){
                                Agency.agency_to_delete = {}
                                MicroModal.close('agency-delete-modal')
                              })

                            }
                          }, "Submit"),
                          m("button.btn[aria-label='Close this dialog window'][data-micromodal-close='']", 
                            "Close"
                          )
                        ]
                      )
                    ]
                  )
                )
              )
    	    )
    }
}