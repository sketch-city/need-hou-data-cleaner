var m = require("mithril")
var Navbar = require('./Navbar')

module.exports = {
    view: function(vnode) {
        return (
            m("section.container",
                m(Navbar),
                vnode.children,
                // m("div",
                // m("div[id=myBar]")),
                m("footer",
                    m("p", "Click", m("a[href='mailto:gunjen@houstonimmgration.org']", " here "), " to learn more about the Immigrant Accessibility Profile.")
                )
            )
        )
    }
}
