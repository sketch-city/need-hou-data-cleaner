
var m = require("mithril")
var Agency = require("../../models/Agency")


function nameExists(name){
var hasName = false;
for (var i = 0; i < Agency.list.length; i++) {
  if (Agency.list[i].name === name) {
    hasName = true;
    break;
  }
}
return(hasName)

}

function validateName(name) {
   if(nameExists(name)){
        //document.getElementById("nextbutton").disabled = true;
        document.getElementById("orgname").classList.add("has-error")
        document.getElementById("errormessage").innerHTML = "This organization already exists."
    }

    else if(name === ""){
        //document.getElementById("nextbutton").disabled = true;
        document.getElementById("errormessage").innerHTML = "Please enter an organization name."
    }

    else{
        //document.getElementById("nextbutton").disabled = false;
        document.getElementById("orgname").classList.remove("has-error")
        document.getElementById("errormessage").innerHTML = ""
        
    }
    
    return(name)                                                                              
}


module.exports = {
view: function(vnode) {
    	return(                
                m("form", [
                m("div.form-group[style=width:300px]",
                    m("legend[style=font-size:16px]"),
                        m("div.form-group[id=orgname]",
                            m("label.control-label", "Organization Name"),
                            m("input.form-control[type=text][id=agencyname]", {value: vnode.attrs.agency.name,
                                            onchange: function(e) {
                                                    vnode.attrs.agency.name = validateName(e.currentTarget.value);
                                                }

                                            }
                            ),
                            m("span[id=errormessage]")
                
                            ),
                        m("label.control-label", "Website"),
                            m("input.form-control[type=text]", { value:  vnode.attrs.agency.website ,
                                                oninput: function(e) {
                                                   vnode.attrs.agency.website = e.currentTarget.value;
                                                    }
                                            }
                                    ),

                            m("label.control-label", "Full Physical Address"),
                            m("input.form-control[type=text]", {value: vnode.attrs.agency.physical_address,
                                            oninput: function(e) {
                                                    vnode.attrs.agency.physical_address = e.currentTarget.value;
                                                }
                                            }
                        ),
                            m("label.control-label", "Phone Number"),
                            m("input.form-control[type=text]", { value:  vnode.attrs.agency.phone_number ,
                                                oninput: function(e) {
                                                   vnode.attrs.agency.phone_number = e.currentTarget.value;
                                                    }
                                            }
                        )
                    ),

                    ])
                
    		)
    }

}


