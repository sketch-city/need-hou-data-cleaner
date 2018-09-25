var m = require("mithril")
var Agency = require("../models/Agency")



module.exports = {

view: function(vnode) {	
	return(
		    m("div.row",[  
                m("div.agencyedit col-md-12",[                 
    		    m("form", [
                m("div.form-group[style=width:300px]",
              		m("label", "Program Name"),
							m("input.pure-u-23-24[type=text]",{ value: vnode.attrs.program.name,
																oninput: function(e) { 
		                                                                       vnode.attrs.program.name = e.currentTarget.value;
		                                                                    } }),
					m("label", "Program Description"),
							m("textarea.pure-input-3-4 programdesc",{ 
								value: vnode.attrs.program.description, 
								//oninput: m.withAttr("value", function(v) {state.term = v}), value: state.term}
								//value: state.description,
								oninput: function(e) {
													vnode.attrs.program.description  = e.currentTarget.value;
													}
																}),
         
                    ),

                	]),

                  m("div.buttons",
                  m("button.btn btn-default[type=submit]", {
                        href: "/selectagency", 
                        oncreate: m.route.link

                        },"Previous"),

                  m("button.btn btn-default[type=submit][style=margin-left:10px]", {
                        href: "/selectprogram", 
                        oncreate: m.route.link
                        },"Next")
                    )
    		    ])
            ])











		)
	}	

}