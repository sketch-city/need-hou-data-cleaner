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
        m("div.row",[ 
          m("div.col-md-12",[
             m("form", [
          m("select.form-control",
          m("option", Agency.programs.map(function(program){ return(program.name) })))


          ])
        ])

      ])
		  )
	}
}