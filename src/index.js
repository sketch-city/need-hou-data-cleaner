var m = require("mithril")

var AgencyForm= require("./views/AgencyForm")
var ProgramForm = require("./views/ProgramForm")
var Layout = require("./views/Layout")
var Review = require("./views/Review")
var NewAgency = require("./views/NewAgency")


m.route(document.body, "/agencyform", {
    "/agencyform" : {
		render:function(){
			return m(Layout,m(AgencyForm))
		}
			},
    "/programform/:id" : {
    	render: function(vnode){
    		return m(Layout, m(ProgramForm, vnode.attrs))
    	}
    },

    // "/newprogramform/:id": {
    //     render: function(vnode){
    //         return m(Layout, m(NewProgramForm, vnode.attrs))
    //     }

    // },


    "/newagency": {
        render: function(vnode){
            return m(Layout, m(NewAgency, vnode.attrs))
        }

    },
    "/review":{
        render: function(vnode){
            return m(Layout, m(Review, vnode.attrs))
        }
    }
})


// m.route(document.body, "/agencyform", {
//     "/agencyform": AgencyForm,
//     "/programform/:id": ProgramForm,
// })