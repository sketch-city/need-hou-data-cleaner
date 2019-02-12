var m = require("mithril")
var LogoutButton = require('./LogoutButton')
var QueueButton = require('./QueueButton')

module.exports = {
    view: function(vnode) {
        return (
    	   m("ul[id=navbar][class=navbar fixed-top navbar-expand-lg navbar-light bg-light]",
                m("a[class=navbar-brand]", {href: "/selectagency", oncreate: m.route.link}, "Resource Editing Tool"),
                m("ul.navbar-nav",
                    m("li.nav-item[id=needhou]",
                        m("a.nav-link", {href: "http://needhou.org/"}, "Resource Finder")),
                    m(LogoutButton),
    			    m(QueueButton)
                    )

                )
           )
    }
}
