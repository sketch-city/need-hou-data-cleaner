var m = require("mithril")

var AgencySelect = require('./views/AgencySelect')
var AgencyEdit = require('./views/AgencyEdit')
var ProgramSelect = require('./views/ProgramSelect')
var ProgramNewContactInfo = require('./views/ProgramNewContactInfo')
var ProgramNewReferral = require('./views/ProgramNewReferral')
var EditProgramContact = require('./views/EditProgramContact')
var EditProgramReferral = require('./views/EditProgramReferral')
var Layout = require("./views/Layout")
var Review = require("./views/Review")
var AgencyNew = require("./views/AgencyNew")
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


    "/newagency": {
        render: function(){
               return m(Layout, m(AgencyNew))
        }
    },   

    "/selectprogram": {
        render: function(){
           return m(Layout,  m(ProgramSelect))
            
        }
    },

    "/newprogramcontact": {
        render:function(){
            return m(Layout, m(ProgramNewContactInfo))
        }

    },

    "/newprogramreferral": {
        render: function(){
            return m(Layout, m(ProgramNewReferral))
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

    //add new program form
    //add new agency review view
    // add new program review view



    })

