var m = require("mithril")
var Agency = require("../models/Agency")




module.exports = {

view: function() {
		return( 
		 m("div.login", 
			m("form.pure-form pure-form-stacked ", 
				m("fieldset",
					m("label", "Email"),
					m("input[placholder=Email]"),
					m("label", "Password"),
					m("input[placholder=Password]"),
					m("button.pure-button pure-button-primary", {href: "/agencyform",
                            oncreate: m.route.link}, 'Sign In')
					),
				),
			)

			)
	}

}