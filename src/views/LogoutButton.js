var m = require("mithril")
var User = require("../models/User")

module.exports = {
    view: function() {
        if (User.getIsLoggedIn()) {
            return (
                m("li.nav-item[id=logout]", {
                    onclick: function(e) {
                        e.preventDefault()
                        User.logout()
                            .then(function(){
                                m.route.set('/')
                            })
                        }
                    },
                    m("a.nav-link", {href: "/"}, "Logout")
                )
            )
        } else {
            return (
                m("li.nav-item[id=login]",
                    m("a.nav-link", {href: "/login", oncreate: m.route.link}, "Login")
                )
            )
        }
    }
}