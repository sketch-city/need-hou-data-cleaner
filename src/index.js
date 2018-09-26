var m = require("mithril")

var AgencySelect = require('./views/AgencySelect')
var AgencyEdit = require('./views/AgencyEdit')
var ProgramSelect = require('./views/ProgramSelect')
var EditProgramContact = require('./views/EditProgramContact')
var EditProgramReferral = require('./views/EditProgramReferral')
var Layout = require("./views/Layout")
var Review = require("./views/Review")
//var NewAgency = require("./views/NewAgency")
// var NewAgencyReview = require("./views/NewAgencyReview")
// var NewProgramReview = require("./views/NewProgramReview")
// var NewProgram = require("./views/NewProgram")
// var Login = require("./views/Login")


m.route(document.body, "/selectagency", {
    "/selectagency" : {
        render:function(){
            return m(Layout, m(AgencySelect))
        }
    },


    "/editagency": {
        render: function(){
            return m(Layout, m(AgencyEdit))
        }

    },

    "/selectprogram": {
        render: function(){
           return m(Layout,  m(ProgramSelect))
            
        }
    },


    "/editprogramcontact":{
        render: function(vnode){
            return m(Layout, m(EditProgramContact, vnode.attrs))
        }
    },

    "/editprogramreferral":{
        render: function(vnode){
            return m(Layout, m(EditProgramReferral, vnode.attrs))
        }
    },

    "/review":{
        render: function(vnode){
            return m(Layout, m(Review, vnode.attrs))
        }
    }


    //add new agency form
        //
    //add new program form
    //add new agency review view
    // add new program review view



    })

