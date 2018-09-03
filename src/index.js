var m = require("mithril")

var AgencyForm= require("./views/AgencyForm")
var ProgramForm = require("./views/ProgramForm")
var Layout = require("./views/Layout")
var Review = require("./views/Review")
var NewAgency = require("./views/NewAgency")
var NewReview = require("./views/NewReview")


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

    "/newprogramform": {
        render: function(vnode){
            return m(Layout, m(ProgramForm, vnode.attrs))
        }

    },

    "/newagency": {
        render: function(vnode){
            return m(Layout, m(NewAgency, vnode.attrs))
        }

    },

    "/review":{
        render: function(vnode){
            return m(Layout, m(Review, vnode.attrs))
        }
    },

       "/newagencyreview":{
        render: function(vnode){
            return m(Layout, m(NewReview, vnode.attrs))
        }
    }



})
