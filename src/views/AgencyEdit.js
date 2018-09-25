var m = require("mithril")
var Agency = require("../models/Agency")

module.exports = {
    view: function() {
    	return( 
    		m("div.row",[  
                m("div.agencyedit col-md-12",[                 
    		    m("form", [
                m("div.form-group[style=width:300px]",
                    m("label", "Full Physical Address"),
                    m("input.form-control[type=text]", {value: Agency.selected.physical_address,
                                            oninput: function(e) {
                                                    Agency.selected.physical_address = e.currentTarget.value;
                                                }
                                            }
                        ),
                    m("label", "Phone Number"),
                    m("input.form-control[type=text]", { value:  Agency.selected.phone_number ,
                                                oninput: function(e) {
                                                   Agency.selected.phone_number = e.currentTarget.value;
                                                    }
                                            }
                                    )
                    ),

                	]),

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