var m = require("mithril")
var Agency = require("../models/Agency")
var helper = require("../helper")
var Modal = require('micromodal');

var AgencyDeleteTrigger = require('./AgencyDeleteTrigger')
var AgencyDeleteModal = require('./AgencyDeleteModal')


module.exports = {
	oninit: function() {
          Agency.loadList().then(function() {
            helper.autocomplete(
              document.getElementById("agencyselect"),
              Agency.list.map(function(agency) { return(agency.name) })
            )
          })
    },

  oncreate: function(){
    MicroModal.init();
  },
    view: function() {
    	return( 
        
            
            m("div.row",[  
              m(AgencyDeleteModal),
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
                      m(AgencyDeleteTrigger),
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