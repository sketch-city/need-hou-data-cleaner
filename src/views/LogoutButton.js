var m = require("mithril")
var User = require("../models/User")

module.exports = {
    view: function() {
        if (User.getIsLoggedIn()) {
            return (
                m("li[id=logout]", {
                    onclick: function(e) {
                        e.preventDefault()
                        User.logout()
                            .then(function(){
                                m.route.set('/')
                            })
                        }
                    },
                    m("a", {href: "/"}, "Logout")
                )
            )
        } else {
            return (
                m("li[id=login]",
                    m("a", {href: "/login", oncreate: m.route.link}, "Login")
                )
            )
        }
    }
}