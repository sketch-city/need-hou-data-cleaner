var m = require("mithril")
var Agency = require("../models/Agency")
var helper = require("../helper")

module.exports = {
view: function() {
    	return( 
    		m("div.row",[  
                m("div.agencyedit col-md-12",[                 
    		    m("form", [
                m("div.form-group[style=width:400px]",
                   m("label", "Enter the name of the organization you'd like to delete"),
                   m("input.form-control[id=agencyselect][type=text]", {
                    oninput
                    })
                   )
                	])
                ])
             ])


    	)
    }

}