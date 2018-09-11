var m = require("mithril")
var Agency = require("../models/Agency")

function parse_date(dt){
var mydate = new Date(dt);
var month = mydate.getUTCMonth() + 1; //months from 1-12
var day = mydate.getUTCDate();
var year = mydate.getUTCFullYear();

newdate = year + "-" + month + "-" + day;

return(newdate)
}




module.exports = {
	view: function() {
    	return(

      m("div.programlist[style=margin-top:40px;]",[ 
        m("span.pure-form-message[id=agencysearch]", {hidden: Agency.selected.name == undefined}, "4. Select a program from below to edit."),
          m("[id=programenu].pure-menu pure-menu-scrollable custom-restricted2", { hidden: Agency.selected.name == undefined },
          m("ul.pure-menu-list", 
            m("li", m("a[id=newProgram].pure-menu-link", 
                    {  
                     href: "/newprogramform" ,
                     oncreate: m.route.link
                    }, "ADD NEW PROGRAM")),
          Agency.programs.map(function(program){
            return(
              m("div.tooltip", [
              m("span.tooltiptext tooltip-left", "Updated: " + parse_date(program.last_updated)),
              m("a.pure-menu-link", { 
                            href: "/programform/" + program.id,
                            oncreate: m.route.link,
                        }, program.name)

                            ])
              )

            })
            )
          )
          ])

		)

	}
}