var m = require("mithril")



var AgencyForm= require("./views/AgencyForm")
var ProgramForm = require("./views/ProgramForm")
var Layout = require("./views/Layout")
var Review = require("./views/Review")
var NewAgency = require("./views/NewAgency")
var ReviewBase = require("./views/ReviewBase")
var NewAgencyReview = require("./views/NewAgencyReview")
var NewProgramReview = require("./views/NewProgramReview")
var NewProgram = require("./views/NewProgram")
var Login = require("./views/Login")

m.route(document.body, "/login", {

    "/login": {
        render:function(){
            return m(Login)
        }

    },

    "/agencyform" : {
		render:function(){
			return m(Layout,m(AgencyForm))
		}
			},
    "/programform/:id" : {
    	render: function(vnode){
    		return m(Layout ,{ program_href: "/programform/" + Agency.selected_program.id}, m(ProgramForm, vnode.attrs))
    	}
    },

    "/newprogramform": {
        render: function(vnode){
            return m(Layout, { program_href: "/newprogramform"} , m(NewProgram, vnode.attrs))
        }

    },

    "/newagency": {
        render: function(vnode){
           return m(Layout, { program_href: "/newagency"},  m(NewAgency, vnode.attrs))
        }

    },

    "/review":{
        render: function(vnode){
            return m(Layout, {review_href: "/review"}, m(Review, vnode.attrs))
        }
    },


    "/newagencyreview":{
        render: function(vnode){
            return m(Layout,{review_href: "/newagencyreview"}, m(NewAgencyReview, vnode.attrs))
        }
    },

    "/newprogramreview":{
        render: function(vnode){
            return m(Layout, {review_href: "/newprogramreview"}, m(NewProgramReview, vnode.attrs))
        }
    }



})
