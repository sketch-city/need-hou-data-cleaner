var m = require("mithril")
var LogoutButton = require('./LogoutButton')

module.exports = {
    view: function(vnode) {
        return (

            m("section", 
            	m("ul[id=navbar]",
                    m("li[id=title]",
                        m("a", {href: "/", oncreate: m.route.link}, "Organization & Service Update Tool")
                    ),
        			m(LogoutButton),
                    m("li[id=needhou]",
                        m("a", {href: "https://needhouwebsite.herokuapp.com/"}, "NeedHOU: Social Services Database"))

                ),
                m('div.container',
                    vnode.children,
                )
            )
        )
    }
}