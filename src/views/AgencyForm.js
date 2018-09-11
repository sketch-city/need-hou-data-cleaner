var m = require("mithril")
var Agency = require("../models/Agency")
var NewAgency = require("./NewAgency")
var ProgramList = require("./ProgramList")


function guid() {
  function s4() {
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
  }
  return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
}

function selectAgency(clickEvent) {  
    Agency.loadAgency(clickEvent.target.text)
    .then(Agency.loadPrograms)
}

function filterAgencies() {
    // Declare variables
    var input, filter, ul, li, a, i;
    input = document.getElementById('agencysearch');
    filter = input.value.toUpperCase();
    ul = document.getElementById("agencylist");
    li = ul.getElementsByTagName('li');

    // Loop through all list items, and hide those who don't match the search query
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];
        if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }}

module.exports = {
	oninit: Agency.loadList,

    view: function() {
    	return( 
            m("div.page",[
                
                   
    		m("form.pure-form pure-form-stacked", [
           m("input.pure-input-1-3[type=text][id=agencysearch][placeholder=Search for organization]", { onkeyup: filterAgencies}),
    		   m("span.pure-form-message[id=agencysearch]", "1. Select existing organization or select 'New Organization' to create one."),


           m("[id=agencymenu].pure-menu pure-menu-scrollable custom-restricted1",
    		   m("ul.pure-menu-list[id=agencylist]",
                    m("li", m("a[id=newOrg].pure-menu-link", 
                    {  
                        href: "/newagency",
                        oncreate: m.route.link
                    }, "ADD NEW ORGANIZATION")),
                    Agency.list.map(function(agency) {
                        return(m("li", m("a.pure-menu-link", {onclick: selectAgency} , agency.name)))
                     })
                    )

    		),


               m("h5[id=agencysearch]", {hidden: Agency.selected.name===undefined}, "Organization selected: " + Agency.selected.name), 
               m("p.span.pure-form-message[id=agencysearch]",{hidden: Agency.selected.name===undefined}, "2. Edit organization details"),


                m(".pure-control-group[id=agencysearch]", {hidden: Agency.selected.name == undefined}, [
                    m("label.agency_address", "Full Physical Address"),
				    m("input[type=text].agency_address pure-input-1-2", {value: Agency.selected.physical_address,
                                                            oninput: function(e) {
                                                                        Agency.selected.physical_address = e.currentTarget.value;
                                                          }

                                                         })]),
                m(".pure-control-group[id=agencysearch]", {hidden: Agency.selected.name == undefined}, [
                    m("label.agency_phone", "Phone Number"),
                    m("input[type=text].agency_phone pure-input-1-2", { value:  Agency.selected.phone_number ,
                                                                        oninput: function(e) {
                                                                        Agency.selected.phone_number = e.currentTarget.value;
                                                                        }
                                                                    }
                                                                      )]),
    
                m("span.pure-form-message[id=agencysearch]", {hidden: Agency.selected.name == undefined}, "3. Click `Review` to review changes."),
                m("div.pure-controls", 
                    m("button[type=submit][id=continue1][style=font-size:13px !important].pure-button pure-button-primary", {
                        href: "/review", 
                        hidden: Agency.selected.name == undefined,
                        disabled: Agency.selected.name === undefined,
                        oncreate: m.route.link,

                        },"Review")
                 ),
                m(ProgramList),
                ])
                
      


            ])
    	)
            
    }
}