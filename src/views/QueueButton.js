var m = require("mithril")
var User = require("../models/User")

module.exports = {
    view: function() {
        if (User.getIsLoggedIn()) {
            return (
                m("li[id=queue]",
                    m("a", {href: "/queue", oncreate: m.route.link}, "Queue")
                )
            )
        }
    }
}