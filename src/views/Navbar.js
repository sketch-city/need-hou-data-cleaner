var m = require("mithril")
var LogoutButton = require('./LogoutButton')
var QueueButton = require('./QueueButton')

module.exports = {
    view: function(vnode) {
        return (
    	   m("ul[id=navbar]",
                m("li[id=title]",
                    m("a", {href: "/", oncreate: m.route.link}, "Organization & Service Update Tool")
                ),
                m(LogoutButton),
    			m(QueueButton),
                m("li[id=needhou]",
                    m("a", {href: "https://needhouwebsite.herokuapp.com/"}, "NeedHOU: Houston Social Services Database"))

                )
           )
    }
}




