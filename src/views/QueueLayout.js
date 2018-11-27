var m = require("mithril")
var LogoutButton = require('./LogoutButton')

module.exports = {
    view: function(vnode) {
        return (

            m("section", 
            	m("ul[id=navbar]",
                    m("li[id=title]", "NeedHOU: Organization & Service Update Tool"),
        			m(LogoutButton),
                    m("li[id=needhou]",
                        m("a", {href: "https://needhouwebsite.herokuapp.com/"}, "NeedHOU: Social Services Database")),
                    m("li[id=needhou]",
                        m("a", {href: "/selectagency", oncreate: m.route.link }, "Home"))

                ),
                m('div.container',
                    vnode.children,
                )
            )
        )
    }
}