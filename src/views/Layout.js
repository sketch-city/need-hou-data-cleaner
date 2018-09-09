var m = require("mithril")
var Agency = require("../models/Agency")


module.exports = {
    view: function(vnode) {
        return m("main.layout organization", [
        	m("ul.breadcrumb ", [
        		m("li.organization-breadcrumb",
        			m("a[href='/agencyform']", { oncreate: m.route.link } , "Organization Menu")),
        		m("li", {
                      },
        			m("a", { 
        				 oncreate: m.route.link,
        				 href: vnode.attrs.program_href,
                      
        				  }, "Edit Program")),
                
                m("li",{ },
                    m("a", {
                        oncreate: m.route.link,
                        href: vnode.attrs.review_href,
                    }, "Review Changes"))

        		]),
            m("section", vnode.children)
        ])
    }
}