var m = require("mithril")
var Agency = require("../models/Agency")


function selectAgency(clickEvent) 
{  
    Agency.loadAgency(clickEvent.target.text)
    .then(Agency.loadPrograms)
  }


function loadAutocomplete(){
    autocomplete(document.getElementById("myInput"), Agency.list.map(function(agency){ return(agency.name)}))
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
            //     m(".pure-control-group", [
            //        m("form.pure-form pure-form-aligned[autocomplete=off][action=/action_page.php]",[
            //                 m("div.autocomplete[style=width:300px]",[
            //                 m("input[id=myInput][type=text]", { onclick: loadAutocomplete ,
            //                                                     onselect: function(vnode) { Agency.loadAgency
            //                                                         (vnode.attrs.name)}})
            //                     ])
            //                 ])
            //          ]),

            //  m(".pure-control-group", [
            //         m("label.agency_address", "Edit address."),
            //         m("input[type=text].agency_address", {value: Agency.selected.physical_address })]),
            // m(".pure-control-group",[
            //         m("label.agency_phone", "Edit phone number."),
            //         m("input[type=text].agency_phone pure-input-1-3", {value: Agency.selected.phone_number})]),
            //  m("div.pure-controls", 
            //         m("button[type=submit].pure-button pure-button-primary", {
            //             href: "/programlist/" + Agency.selected.id,
            //             disabled: Agency.selected.name === undefined,
            //             oncreate: m.route.link,
            //             },"Continue")
            //      )
            //    ])
            // )
                   
    		m("form.pure-form pure-form-aligned", [
            m(".pure-control-group", [ 
               m("label.orgselect")]),
               m("input.pure-input-1-3[type=text][id=agencysearch]", { onkeyup: filterAgencies}),
    		   m("[id=agencymenu].pure-menu pure-menu-scrollable custom-restricted1",
    		   m("ul.pure-menu-list[id=agencylist]",
                    m("li", m("a[href=#][id=newOrg].pure-menu-link", "New organization")),
                    Agency.list.map(function(agency) {
                        return(m("li", m("a[href=#].pure-menu-link", {onclick: selectAgency} , agency.name)))
                     })
                    )

    		),

                m(".pure-control-group", [
                    m("label.agency_address", "Edit address."),
				    m("input[type=text].agency_address", {value: Agency.selected.physical_address })]),
                m(".pure-control-group",[
                    m("label.agency_phone", "Edit phone number."),
                    m("input[type=text].agency_phone pure-input-1-3", {value: Agency.selected.phone_number})]),
     


               ]),
          //m(".pure-control-group", [
            m("label.selectProgramlabel", {hidden: Agency.selected.name == undefined }, "Select a program to edit."),
            //]),
          m("[id=programenu].pure-menu pure-menu-scrollable custom-restricted2", { hidden: Agency.selected.name == undefined },
          m("ul.pure-menu-list",
          Agency.programs.map(function(program){
            return(
              m("a.pure-menu-link", { 
                            href: "/programform/" + program.id,
                            oncreate: m.route.link,
                        }, program.name)

                            )

            })
            )
          ),
                     m("div.pure-controls", 
                    m("button[type=submit][id=continue1].pure-button pure-button-primary", {
                        href: "/program/" + Agency.selected.id,
                        disabled: Agency.selected.name === undefined,
                        oncreate: m.route.link,
                        },"Continue")
                 )


            ])
    	)
            
    }
}