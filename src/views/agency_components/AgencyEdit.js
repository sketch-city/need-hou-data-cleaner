
var m = require("mithril")
var Agency = require("../../models/Agency")
var AgencyForm = require("./AgencyForm")
var helper = require("../../helper")

module.exports = {
    oninit: function(vnode) {
        
        //helper.moveProgress(10, 10, 30)
        if (vnode.attrs.id && vnode.attrs.id !== Agency.selected.id) {
          Agency.loadAgency(vnode.attrs.id)
            .then(function(agency){
              Agency.selected = agency[0]
              return Agency.loadPrograms()
            })
        }
    } ,
    view: function() {
    	return( 
    		m("div.row",[  
                m("div.col-md-12",[  
                    m(AgencyForm, {agency: Agency.selected} ),

                  m("div.buttons",
                  m("button.btn btn-outline-success[type=submit]", {
                        href: "/selectagency", 
                        oncreate: m.route.link

                        },"Previous"),

                  m("button.btn btn-success[type=submit][style=margin-left:10px]", {
                        href: "/selectprogram", 
                        oncreate: m.route.link
                        },"Next")
                    )
    		      ])
            ])

    	)
            
    }
}