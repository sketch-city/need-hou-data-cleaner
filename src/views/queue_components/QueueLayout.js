var m = require("mithril")
var Navbar = require('../Navbar')

module.exports = {
    view: function(vnode) {
        return (
            m("section",
            	m(Navbar),
                m('div.container',
                    vnode.children,
                )
            )
        )
    }
}
