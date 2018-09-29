var m = require("mithril")
var Agency = require("../models/Agency")

function moveProgress(width, intervalStart, intervalEnd) {
    var elem = document.getElementById("myBar"); 
    var width = width;
    var id = setInterval(frame, intervalStart);
    function frame() {
        if (width >= intervalEnd) {
            clearInterval(id);
        } else {
            width++; 
            elem.style.width = width + '%'; 
        }
    }
}

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
  oninit: function() { moveProgress(30, 30, 50) } ,
	view: function() {
    	return(
        m("div.row",[ 
          m("div.programselect col-md-12",[
             m("form", [
              m("div.form-group[style=width:310px]",
              m("legend[style=font-size:16px]", Agency.selected.name),
              m("label", "Select program to edit"),
               m("select.form-control[id=programselect]", {
                value: Agency.selected_program.name,
                onchange: function() { 
                  selectProgram()
                }
               },
               m("option", ""),
                 Agency.programs.map(function(program){ 
                  return(
                    m("option",
                      program.name)
                    ) 
                  })
               
               )
              )

          ]),
              m("span", "Don't see your program? Click ", 
                        m("a", {href: "/newprogramcontact", oncreate: m.route.link }, "here"), " to add a new program"),
               m("div.buttons",
                  m("button.btn btn-default[type=submit]", {
                        href: "/selectagency", 
                        oncreate: m.route.link

                        },"Previous"),

                  m("button.btn btn-default[type=submit][style=margin-left:10px]", {
                        href: "/editprogramcontact", 
                        oncreate: m.route.link,
                        disabled: Agency.selected_program.name === undefined
                        },"Next")
                    )
        ])

      ])
		  )
	}
}

window.selectProgram = selectProgram