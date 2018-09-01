var m = require("mithril")
var Agency = require("../models/Agency")


module.exports = {
	view: function() {
    	return(
    		m("label.selectProgramlabel", {hidden: Agency.selected.name == undefined }, "Select a program to edit."),
            //]),
          m("[id=programenu].pure-menu pure-menu-scrollable custom-restricted2", { hidden: Agency.selected.name == undefined },
          m("ul.pure-menu-list", 
            m("li", m("a[href=#][id=newProgram].pure-menu-link", 
                    {  
                     href: "/programform/" ,
                     oncreate: m.route.link


                    }, "New Program")),
          Agency.programs.map(function(program){
            return(
              m("a.pure-menu-link", { 
                            href: "/programform/" + program.id,
                            oncreate: m.route.link,
                        }, program.name)

                            )

            })
            )
          )













		)

	}
}