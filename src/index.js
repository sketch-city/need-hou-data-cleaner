var m = require("mithril")

var AgencyForm= require("./views/AgencyForm")
var ProgramList = require("./views/ProgramList")
var ProgramForm = require("./views/ProgramForm")
var Layout = require("./views/Layout")


// m.route(document.body, "/agencyform", {
//     "/agencyform" : {
// 		render:function(){
// 			return m(AgencyForm)
// 		}
// 			},
//     "/programform/:id" : {
//     	render: function(){
//     		return m(ProgramForm, vnode.attrs)
//     	}
//     }
// })


m.route(document.body, "/agencyform", {
    "/agencyform": AgencyForm,
    "/programform/:id": ProgramForm,
})