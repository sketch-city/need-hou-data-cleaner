var m = require("mithril")
var Agency = require("../models/Agency")

module.exports = {
    view: function(vnode) {
        return (
            m("section", vnode.children,
            m("div[id=myProgress]",
                m("div[id=myBar]"))
            ))
        
    }
}




