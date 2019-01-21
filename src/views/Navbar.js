var m = require("mithril")
var LogoutButton = require('./LogoutButton')
var QueueButton = require('./QueueButton')

module.exports = {
    view: function(vnode) {
        return (
    	   m("ul[id=navbar]",
                m("li[id=title]",
                    m("a", {href: "/selectagency", oncreate: m.route.link}, "NeedHOU: Resource Editing Tool")
                ),
                m(LogoutButton),
    			m(QueueButton),
                m("li[id=needhou]",
                    m("a", {href: "https://needhouwebsite.herokuapp.com/"}, "NeedHOU: Houston Social Services Database"))

                )
           )
    }
}
