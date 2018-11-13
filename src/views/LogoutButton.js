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
                    m("a", "Logout")
                )
            )
        }
    }
}