var m = require("mithril")
var Agency = require("../models/Agency")

module.exports = {
	oninit: Agency.loadPrograms,
    view: function() {
    	return(
    	m("div.page", [
        m("p", "Program: " + Agency.selected.name),
    	   m("[id=programenu].pure-menu pure-menu-scrollable custom-restricted2",
    		  m("ul.pure-menu-list",
    			Agency.programs.map(function(program){
    				return(
    					m("a.pure-menu-link", { 
                            href: "/programform/" + program.id,
                            oncreate: m.route.link
                        }, program.name)

                            )

    				})
    				)
    			),
               // m("div.pure-controls", 
                    m("button[type=submit].pure-button pure-button-primary[style=margin-left:auto;!important]", {
                        href: "/review/",
                        oncreate: m.route.link,
                        },"Continue")
                 //)
    		])
    	)
    }
}











    