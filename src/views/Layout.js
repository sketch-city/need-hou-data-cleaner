var m = require("mithril")
var Agency = require("../models/Agency")


module.exports = {
    view: function(vnode) {
        return m("main.layout", [
        	m("ul.breadcrumb", [
        		m("li[id=firstpage]",
        			m("a[href='/agencyform'][id=page1]", { oncreate: m.route.link } , "Organization")),
        		m("li[id=secondpage]", { hidden: Agency.selected_program.id === undefined },
        			m("a", { 
        				 oncreate: m.route.link, 
                         hidden: Agency.selected_program.id === undefined,
        				 href: "/programform/" + Agency.selected_program.id,
                         id: "page2"
        				  }, "Program ")),
                
                m("li[id=thirdpage]",{ hidden: Agency.selected_program.id === undefined },
                    m("a", {
                        oncreate: m.route.link,
                        href: "/review",
                        id: "page3"
                    }, "Review"))
                

        		]),
            m("section", vnode.children)
        ])
    }
}