var m = require("mithril")
var Agency = require("../models/Agency")


function selectAgency(clickEvent) 
{  
    Agency.loadAgency(clickEvent.target.text) 
}


module.exports = {
	oninit: Agency.loadList,
    view: function() {

    	return(
            m("div.page",[
    		m("form.pure-form pure-form-aligned", [
            m(".pure-control-group", [ 
               m("label.orgselect", "Select organization.")]),
               m("h5.missingOrg", "Don't see the organization on here? Select 'New organization' to add them to the list."),
    		   m("[id=agencymenu].pure-menu pure-menu-scrollable custom-restricted",
    		   m("ul.pure-menu-list",
                m("a[href=#][id=newOrg].pure-menu-link", "New organization"),
                Agency.list.map(function(agency) {
                return(
                    m("a[href=#].pure-menu-link", {onclick: selectAgency} , agency.name))
                })
             )


    		),
                m(".pure-control-group", [
                m("label.agency_address", "Edit address."),
				m("input[type=text].agency_address", {value: Agency.selected.physical_address })]),
                m(".pure-control-group",[
                m("label", "Edit phone number."),
                m("input[type=text]", {value: Agency.selected.phone_number})]),
                m("div.pure-controls", 
                m("button[type=submit].pure-button pure-button-primary", {
                    href: "/programlist/" + Agency.selected.id,
                    disabled: Agency.selected.name === undefined,
                    oncreate: m.route.link,


                },"Continue")
                )

    
                        
                    
    
                ])
            ])
    		)
            
    }



}