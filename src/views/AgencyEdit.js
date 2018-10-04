var m = require("mithril")
var Agency = require("../models/Agency")
var AgencyForm = require("./AgencyForm")
var helper = require("./helper")

module.exports = {
    oninit: function() { helper.moveProgress(10, 10, 30) } ,
    view: function() {
    	return( 
    		m("div.row",[  
                m("div.agencyedit col-md-12",[  
                    m(AgencyForm, {agency: Agency.selected} ),

                  m("div.buttons",
                  m("button.btn btn-default[type=submit]", {
                        href: "/selectagency", 
                        oncreate: m.route.link

                        },"Previous"),

                  m("button.btn btn-default[type=submit][style=margin-left:10px]", {
                        href: "/selectprogram", 
                        oncreate: m.route.link
                        },"Next")
                    )
    		      ])
            ])

    	)
            
    }
}