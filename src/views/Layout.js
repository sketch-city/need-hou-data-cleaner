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
                    m("p", "Click", m("a[href='mailto:gunjen@houstonimmgration.org']", " here "), " to learn more about the Immigrant Accessibility Profile."),
                    m("p", "Have a feature request? Found a bug? Contact us", m("a[href=https://www.januaryadvisors.com/submit-feedback-or-report-a-bug][target=_blank]", " here "))
                )
            )
        )
    }
}
