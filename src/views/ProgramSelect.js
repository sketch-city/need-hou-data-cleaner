var m = require("mithril")
var Agency = require("../models/Agency")
var helper = require("../helper")

function parse_date(dt){
  var mydate = new Date(dt);
  var month = mydate.getUTCMonth() + 1; //months from 1-12
  var day = mydate.getUTCDate();
  var year = mydate.getUTCFullYear();

  newdate = year + "-" + month + "-" + day;

  return(newdate)
}

function setlink() { 
  href = ""
  if(Agency.selected_program.name === undefined){
    href = "/agencyreview"
  } else{
   href = "/editprogramcontact"
  }
  return(href)
}


function selectProgram(){
  program_name = document.getElementById('programselect').value;
  datestamp = document.getElementById('datestamp').hidden = false;

  var filteredArr = Agency.programs.filter(function (el) {
  return el.name === program_name      
    });

  console.log(program_name)
  if(program_name === ""){
    return(Agency.selected_program = "")
  }

  else{
  program_id = filteredArr[0].id
  Agency.loadProgram(program_id).then(Agency.loadLanguages(program_id))
  
  }

}



module.exports = {
  oninit: function() { helper.moveProgress(30, 30, 50) } ,
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
               
               ),
               m("span[id=datestamp]", {hidden: true}, "Last Updated: " + parse_date(Agency.selected_program.last_updated))
              )

          ]),
              m("span", "Don't see your program? Click ", 
                        m("a", {href: "/newprogramcontact", oncreate: m.route.link }, "here"), " to add a new program."),
              m("p", "Program no longer offered? Click ",
                      m("a", {href: "#", oncreate: m.route.link, 
                        onclick: function(){
                                Agency.addQueueItem({
                                  submission_type: "delete_program", 
                                  submission: { 
                                  agency_data:{},
                                  program_data: Agency.selected_program
                            
                                  }
                                })



                              }}, "here"), " to delete program selected."),
               m("div.buttons",
                  m("button.btn btn-default[type=submit]", {
                        href: "/selectagency", 
                        oncreate: m.route.link

                        },"Previous"),

                  m("button.btn btn-default[type=submit][style=margin-left:10px]", {
                        href: setlink(),
                        oncreate: m.route.link,
                        },"Next")
                    )
        ])

      ])
		  )
	}
}

window.selectProgram = selectProgram