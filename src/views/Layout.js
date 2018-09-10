var m = require("mithril")
var Agency = require("../models/Agency")


module.exports = {
    view: function(vnode) {
        return m("main.layout organization", [
        	m("ul.breadcrumb ", [
        		m("li[id=home]",
        			m("a[href='/agencyform']", { oncreate: m.route.link } , "Organization & Program Menu")),
        		m("li[id=editorg]", {
                      },
        			m("a", { 
        				 oncreate: m.route.link,
        				 href: vnode.attrs.program_href,
                      
        				  }, "Edit Content")),
                
                m("li[id=review]",{ },
                    m("a", {
                        oncreate: m.route.link,
                        href: vnode.attrs.review_href,
                    }, "Review Changes"))

        		]),
            m("section", vnode.children)
        ])
    }
}