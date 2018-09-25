var m = require("mithril")
var Agency = require("../models/Agency")

function autocomplete(inp, arr) {
  /*the autocomplete function takes two arguments,
  the text field element and an array of possible autocompleted values:*/
  var currentFocus;
  /*execute a function when someone writes in the text field:*/
  inp.addEventListener("input", function(e) {
      var a, b, i, val = this.value;
      /*close any already open lists of autocompleted values*/
      closeAllLists();
      if (!val) { return false;}
      currentFocus = -1;
      /*create a DIV element that will contain the items (values):*/
      a = document.createElement("DIV");
      a.setAttribute("id", this.id + "autocomplete-list");
      a.setAttribute("class", "autocomplete-items");
      /*append the DIV element as a child of the autocomplete container:*/
      this.parentNode.appendChild(a);
      /*for each item in the array...*/
      for (i = 0; i < arr.length; i++) {
        /*check if the item starts with the same letters as the text field value:*/
        if (arr[i].substr(0, val.length).toUpperCase() == val.toUpperCase()) {
          /*create a DIV element for each matching element:*/
          b = document.createElement("DIV");
          /*make the matching letters bold:*/
          b.innerHTML = "<strong>" + arr[i].substr(0, val.length) + "</strong>";
          b.innerHTML += arr[i].substr(val.length);
          /*insert a input field that will hold the current array item's value:*/
          b.innerHTML += "<input type='hidden' value='" + arr[i] + "'>";
          /*execute a function when someone clicks on the item value (DIV element):*/
              b.addEventListener("click", function(e) {
              /*insert the value for the autocomplete text field:*/
              inp.value = this.getElementsByTagName("input")[0].value;
              /*close the list of autocompleted values,
              (or any other open lists of autocompleted values:*/
              closeAllLists();
          });
          a.appendChild(b);
        }
      }
  });
  /*execute a function presses a key on the keyboard:*/
  inp.addEventListener("keydown", function(e) {
      var x = document.getElementById(this.id + "autocomplete-list");
      if (x) x = x.getElementsByTagName("div");
      if (e.keyCode == 40) {
        /*If the arrow DOWN key is pressed,
        increase the currentFocus variable:*/
        currentFocus++;
        /*and and make the current item more visible:*/
        addActive(x);
      } else if (e.keyCode == 38) { //up
        /*If the arrow UP key is pressed,
        decrease the currentFocus variable:*/
        currentFocus--;
        /*and and make the current item more visible:*/
        addActive(x);
      } else if (e.keyCode == 13) {
        /*If the ENTER key is pressed, prevent the form from being submitted,*/
        e.preventDefault();
        if (currentFocus > -1) {
          /*and simulate a click on the "active" item:*/
          if (x) x[currentFocus].click();
        }
      }
  });
  function addActive(x) {
    /*a function to classify an item as "active":*/
    if (!x) return false;
    /*start by removing the "active" class on all items:*/
    removeActive(x);
    if (currentFocus >= x.length) currentFocus = 0;
    if (currentFocus < 0) currentFocus = (x.length - 1);
    /*add class "autocomplete-active":*/
    x[currentFocus].classList.add("autocomplete-active");
  }
  function removeActive(x) {
    /*a function to remove the "active" class from all autocomplete items:*/
    for (var i = 0; i < x.length; i++) {
      x[i].classList.remove("autocomplete-active");
    }
  }
  function closeAllLists(elmnt) {
    /*close all autocomplete lists in the document,
    except the one passed as an argument:*/
    var x = document.getElementsByClassName("autocomplete-items");
    for (var i = 0; i < x.length; i++) {
      if (elmnt != x[i] && elmnt != inp) {
      x[i].parentNode.removeChild(x[i]);
    }
  }
}
/*execute a function when someone clicks in the document:*/
document.addEventListener("click", function (e) {
    closeAllLists(e.target);
});
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
	oninit: Agency.loadList().then(function(){autocomplete(document.getElementById("myInput"), Agency.list.map(function(agency) { return(agency.name) }))}),
    
    view: function() {
    	return( 
            m("div.agencyselect",[                   
    		  m("form[autocomplete=off].pure-form pure-form-stacked", [
                m("span.id=agencysearch]", "Select organization to edit."),
                m("div.autocomplete[style=width:300px]",
                    m("input[id=myInput][type=text]", {
                            value: Agency.selected.name,
                            onkeyup: function(e) {
                                       Agency.selected.name= e.currentTarget.value;
                            }
                        }
                        ),
                    ),
            //m("input.pure-input-1-3[type=text][id=agencysearch][placeholder=Search for organization]", { onkeyup: filterAgencies}),
    	    //m("span.pure-form-message[id=agencysearch]", "Select the organization you want to edit, then click Next."),


      //       m("[id=agencymenu].pure-menu pure-menu-scrollable custom-restricted1",
    		//    m("ul.pure-menu-list[id=agencylist]",
      //               // m("li", m("a[id=newOrg].pure-menu-link", 
      //               // {  
      //               //     href: "/newagency",
      //               //     oncreate: m.route.link
      //               // }, "ADD NEW ORGANIZATION")),
      //               Agency.list.map(function(agency) {
      //                   return(m("li", m("a.pure-menu-link", {onclick: selectAgency} , agency.name)))
      //                })
      //               )

    		// ),


              

        //        m("p.span.pure-form-message[id=agencysearch]",{hidden: Agency.selected.name===undefined}, "2. Edit organization details"),


        //         m(".pure-control-group[id=agencysearch]", {hidden: Agency.selected.name == undefined}, [
        //             m("label.agency_address", "Full Physical Address"),
				    // m("input[type=text].agency_address pure-input-1-2", {value: Agency.selected.physical_address,
        //                                                     oninput: function(e) {
        //                                                                 Agency.selected.physical_address = e.currentTarget.value;
        //                                                   }

        //                                                  })]),
        //         m(".pure-control-group[id=agencysearch]", {hidden: Agency.selected.name == undefined}, [
        //             m("label.agency_phone", "Phone Number"),
        //             m("input[type=text].agency_phone pure-input-1-2", { value:  Agency.selected.phone_number ,
        //                                                                 oninput: function(e) {
        //                                                                 Agency.selected.phone_number = e.currentTarget.value;
        //                                                                 }
        //                                                             }
        //                                                               )]),
    
        		m("div", 
                    m("button[type=submit][id=continue1][style=font-size:13px !important]", {
                        href: "/newagency", 
                        disabled: Agency.selected.name === undefined,
                        oncreate: m.route.link,

                        },"Next")
                    )



                ])
                


            ])
    	)
            
    }
}