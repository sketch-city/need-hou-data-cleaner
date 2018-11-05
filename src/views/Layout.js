var m = require("mithril")
var Agency = require("../models/Agency")
var Queue = require("../models/Queue")

module.exports = {
    view: function(vnode) {
        return (

            m("section", 
            	m("ul[id=navbar]",
                    m("li[id=title]", "Organization & Service Update Tool"),
        			m("li[id=logout]",
        				m("a", "Logout")),
                    m("li[id=needhou]",
                        m("a", {href: "https://needhouwebsite.herokuapp.com/"}, "Houston Social Services Database"))

                    ), vnode.children,
            m("div[id=myProgress]",
                m("div[id=myBar]"))
            ))
        
    }
}




