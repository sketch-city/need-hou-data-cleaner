var m = require("mithril")
var Navbar = require('./Navbar')

module.exports = {
    view: function(vnode) {
        return (
            m("section",
                m(Navbar),
                vnode.children,
                m("div[id=myProgress]",
                m("div[id=myBar]")),
                m("footer",
                    m("p[id=iap_interest]", "Click", m("a[href='mailto:gunjen@houstonimmgration.org']", " here "), " to learn more about the Immigrant Accessibility Profile.")
                )
            )
        )
    }
}
