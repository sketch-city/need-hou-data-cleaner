var m = require("mithril")
var Agency = require("../models/Agency")
var helper = require("../helper")
var Modal = require('micromodal');

var AgencyDeleteTrigger = require('./AgencyDeleteTrigger')
var AgencyDeleteModal = require('./AgencyDeleteModal')


module.exports = {
	oninit: function(vnode) {
          Agency.loadList().then(function() {
            helper.autocomplete(
              document.getElementById("agencyselect"),
              Agency.list.map(function(agency) { return(agency.name) })
            )
          })
          .then(function(){
            if (vnode.attrs.id && vnode.attrs.id !== Agency.selected.id) {
              Agency.loadAgency(vnode.attrs.id)
                .then(function(agency){
                  Agency.selected = agency[0]
                  return Agency.loadPrograms()
                })
            }
          })
    },

  oncreate: function(){
    MicroModal.init();
  },
    view: function() {
    	return( 
        
            
            m("div.row",[  
              m(AgencyDeleteModal),
              m("div.col-md-12",[                  
    		      m("form[autocomplete=off]", [
                m("div.autocomplete form-group",
                    m("label", "Enter the organization you'd like to edit."),
                    m("input.form-control[id=agencyselect][type=text]", {
                     value: Agency.selected.name,
                    })
                    )
                  ]),
                      m("p", m("a", {href: "/newagency", oncreate: m.route.link }, "Don't see your organization? Click to ADD a new org")),
                      m(AgencyDeleteTrigger),
                    m("div.row"),
                    m("button.btn btn-success[type=submit]", {
                  
                        href: "/editagency", 
                        oncreate: m.route.link,
                        disabled: Agency.selected.name === undefined
                        },"Next")

          
                ])

            ])



    	   ) 
    }
}