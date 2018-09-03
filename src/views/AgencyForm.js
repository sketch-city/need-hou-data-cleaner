var m = require("mithril")
var Agency = require("../models/Agency")
var NewAgency = require("./NewAgency")
var ProgramList = require("./ProgramList")


var state = {
    term: "",
    search: function() {
        // save the state for this route
        // this is equivalent to `history.replaceState({term: state.term}, null, location.href)`
        m.route.set(m.route.get(), null, {replace: true, state: {term: state.term}})

        // navigate away
        location.href = "https://google.com/?q=" + state.term
    }
}

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
                
                   
    		m("form.pure-form pure-form-aligned", [
            m(".pure-control-group", [ 
               m("label.orgselect", "Search Organizations.")]),
               m("input.pure-input-1-3[type=text][id=agencysearch]", { onkeyup: filterAgencies}),


    		   m("[id=agencymenu].pure-menu pure-menu-scrollable custom-restricted1",
    		   m("ul.pure-menu-list[id=agencylist]",
                    m("li", m("a[id=newOrg].pure-menu-link", 
                    {  
                        href: "/newagency",
                        oncreate: m.route.link
                    }, "New organization")),
                    Agency.list.map(function(agency) {
                        return(m("li", m("a[href=#].pure-menu-link", {onclick: selectAgency} , agency.name)))
                     })
                    )

    		),
               m("p", {hidden: Agency.selected.name===undefined}, "Organization selected: " + Agency.selected.name),

                m(".pure-control-group", {hidden: Agency.selected.name == undefined}, [
                    m("label.agency_address", "Edit address."),
				    m("input[type=text].agency_address", {value: Agency.selected.physical_address,
                                                            oninput: function(e) {
                                                                        Agency.selected.physical_address = e.currentTarget.value;
                                                          }

                                                         })]),
                m(".pure-control-group", {hidden: Agency.selected.name == undefined}, [
                    m("label.agency_phone", "Edit phone number."),
                    m("input[type=text].agency_phone pure-input-1-3", { value:  Agency.selected.phone_number ,
                                                                        oninput: function(e) {
                                                                        Agency.selected.phone_number = e.currentTarget.value;
                                                                        }
                                                                    }
                                                                      )]),
    
               ]),
                m(ProgramList),
                     m("div.pure-controls", 
                    m("button[type=submit][id=continue1].pure-button pure-button-primary", {
                        href: "/review", 
                        hidden: Agency.selected.name == undefined,
                        disabled: Agency.selected_program.name === undefined,
                        oncreate: m.route.link,

                        },"Submit")
                 )


            ])
    	)
            
    }
}