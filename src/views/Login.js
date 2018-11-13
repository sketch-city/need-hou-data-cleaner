var m = require("mithril")
var User = require("../models/User")

module.exports = {
  view: function(vnode) {
        return(
          m("div.row",[
            m("div.col-md-4",[
                  m("h4", "Please log in to process the queue"),
                  m("form", {
                    onsubmit: function (e) {
                      e.preventDefault()
                      User.login()
                        .then(function() {
                          if (User.getIsLoggedIn()) {
                            m.route.set('/queue')
                          }
                        })
                    }
                  }, [
                        m("div.form-group",
                            m("label.control-label[for=username-input]", "Email"),
                            m("input.form-control[type=text][id=username-input][placeholder=Enter email][autocomplete=email]", {
                                oninput: m.withAttr("value", User.setUsername),
                                value: User.username,
                            }),
                        ),
                        m("div.form-group",
                            m("label.control-label[for=password-input]", "Password"),
                            m("input.form-control[type=password][id=password-input][placeholder=Password][autocomplete=current-password]", {
                              oninput: m.withAttr("value", User.setPassword),
                              value: User.password,
                          }),
                        ),
                        m('button.btn.btn-primary[type=submit]', 'Log In')
                  ])
            ])
          ])
                  
        )
      }
  
  }