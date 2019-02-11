var m = require("mithril")
var User = require("../models/User")

module.exports = {
    view: function() {
        if (User.getIsLoggedIn()) {
            return (
                m("li[id=queue].nav-item",
                    m("a.nav-link", {href: "/queue", oncreate: m.route.link}, "Queue")
                )
            )
        }
    }
}