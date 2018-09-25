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


function selectProgram(){
  program_name = document.getElementById('programselect').value;
  var filteredArr = Agency.programs.filter(function (el) {
  return el.name === program_name      
    });
  program_id = filteredArr[0].id
  Agency.loadProgram(program_id).then(Agency.loadLanguages(program_id))
}



module.exports = {
	view: function() {
    	return(
        m("div.row",[ 
          m("div.programselect col-md-12",[
             m("form", [
              m("div.form-group[style=width:310px]",
              m("label", "Select program to edit"),
               m("select.form-control[id=programselect]", {
                onchange: function() { 
                  selectProgram()
                }
               },
                 Agency.programs.map(function(program){ 
                  return(
                    m("option",
                      program.name)
                    ) 
                  })
               
               )
              )

          ])
        ])

      ])
		  )
	}
}

window.selectProgram = selectProgram