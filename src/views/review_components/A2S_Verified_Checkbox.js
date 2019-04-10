var m = require("mithril")
var User = require("../../models/User")


module.exports = {
    view: function(vnode) {
    	if(User.getIsLoggedIn()){
				return(
					m("div[style=margin-left:50px;].form-check",
									m("input[type=checkbox][id=a2scheck][class=form-check-input]",
										 	{   
										 		onchange: function(e) {
										 				if(vnode.attrs.program){
										 				  vnode.attrs.program.a2s_verified  = document.getElementById("a2scheck").checked ? true:false
										 				} if(vnode.attrs.agency){
				                                          vnode.attrs.agency.a2s_verified  = document.getElementById("a2scheck").checked? true:false
										 				}
				                                     }
				                                 }
										 	),
								m("label.form-check-label[for=defaultCheck1]", "HILSC Verified"))
				)
			} else {
				return
			}
		
		}
	}