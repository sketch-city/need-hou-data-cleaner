var m = require("mithril")
var Agency = require("../models/Agency")
var Queue = require("../models/Queue")

module.exports = {
    view: function(vnode) {
        return (

            m("section", 
            	m("ul",
        			m("li",
        				m("a", "Logout"))), vnode.children,
            m("div[id=myProgress]",
                m("div[id=myBar]"))
            ))
        
    }
}




