var m = require("mithril")

var AgencyForm= require("./views/AgencyForm")
var ProgramList = require("./views/ProgramList")
var ProgramForm = require("./views/ProgramForm")
var Layout = require("./views/Layout")
var Review = require("./views/Review")


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