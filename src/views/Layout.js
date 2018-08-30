var m = require("mithril")
var Agency = require("../models/Agency")


module.exports = {
    view: function(vnode) {
        return m("main.layout organization", [
        	m("ul.breadcrumb ", [
        		m("li.organization-breadcrumb",
        			m("a[href='/agencyform']", { oncreate: m.route.link } , "Organization")),
        		m("li", { hidden: Agency.selected_program.id === undefined },
        			m("a", { 
        				 oncreate: m.route.link, 
                         hidden: Agency.selected_program.id === undefined,
        				 href: "/programform/" + Agency.selected_program.id,
                      
        				  }, "Program ")),
                
                m("li",{ hidden: Agency.selected_program.id === undefined },
                    m("a", {
                        oncreate: m.route.link,
                        href: "/review",
                    }, "Review"))
                

        		]),
            m("section", vnode.children)
        ])
    }
}