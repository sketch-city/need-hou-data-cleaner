var m = require("mithril")
var Agency = require("../models/Agency")

function getSelectedOptions(sel) {

  var opts = [],
    opt;
  var len = sel.options.length;
  for (var i = 0; i < len; i++) {
    opt = sel.options[i];

    if (opt.selected) {
      opts.push(opt.label);
    }
  }

  return opts;
}


module.exports = {

view: function(vnode) {	
	return(
		    m("div.row",[  
                m("div.agencyedit col-md-12",[                 
    		    m("form", [
                m("div.form-group[style=width:400px]",
                  m("label", "Program Need Domain"),
                   m("select.form-control[name=needareaselect][multiple=multiple][id=needareaselect]",
                      { value: vnode.attrs.program.service_type ,
                        onblur: function(e) { 
                          vnode.attrs.program.service_type  = getSelectedOptions(document.getElementById('needareaselect'))
                        }

                      },
              
              [
                m("option[value=1]", "Education"),
                m("option[value=2]", "Legal"),
                m("option[value=3]", "Food"),
                m("option[value=4]", "Housing"),
                m("option[value=5]", "Employment"),
                m("option[value=6]", "Family"),
                m("option[value=7]", "Health"),


                ])
              		





         
                    ),

                	]),

                  m("div.buttons",
                  m("button.btn btn-default[type=submit]", {
                        href: vnode.attrs.previous_link, 
                        oncreate: m.route.link

                        },"Previous"),

                  m("button.btn btn-default[type=submit][style=margin-left:10px]", {
                        // href: "/selectprogram", 
                        // oncreate: m.route.link
                        },"Next")
                    )
    		    ])
            ])











		)
	}	

}