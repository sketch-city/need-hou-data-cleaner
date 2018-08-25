var m = require("mithril")
var Agency = require("../models/Agency")



// module.exports = {
// 	oninit: Agency.loadPrograms,
//     view: function() {

//     	  return m(".programlist", Agency.programs.map(function(program) {
//   			return m("a.programitem", program.name)
//         }
//         )
//     	  )
//     }
// }



module.exports = {
	oninit: Agency.loadPrograms,
    view: function() {
    	return(
    	m("div.page", [
    	m("[id=programenu].pure-menu pure-menu-scrollable custom-restricted",
    		m("ul.pure-menu-list",
    			Agency.programs.map(function(program){
    				return(
    					m("a[href=#].pure-menu-link", program.name))

    			})
    			)
    			)
    		])
    	)
    }
}











    