var m = require("mithril")
var User = require("./models/User")

var AgencySelect = require('./views/AgencySelect')
var AgencyEdit = require('./views/AgencyEdit')
var ProgramSelect = require('./views/ProgramSelect')
var ProgramNewContactInfo = require('./views/ProgramNewContactInfo')
var ProgramNewReferral = require('./views/ProgramNewReferral')
var ProgramNewEligibility = require('./views/ProgramNewEligibility')
var EditProgramContact = require('./views/EditProgramContact')
var EditProgramReferral = require('./views/EditProgramReferral')
var EditProgramEligibility = require('./views/EditProgramEligibility')
var Layout = require("./views/Layout")
var Review = require("./views/Review")
var AgencyNew = require("./views/AgencyNew")
var AgencyNewProgramContactInfo = require("./views/AgencyNewProgramContactInfo")
var AgencyNewProgramReferral = require("./views/AgencyNewProgramReferral")
var AgencyNewProgramEligibility = require("./views/AgencyNewProgramEligibility")
var AgencyNewReview = require("./views/AgencyNewReview")
var ProgramNewReview = require("./views/ProgramNewReview")
var AgencyReview = require("./views/AgencyReview")
var QueueLayout = require("./views/QueueLayout")
var QueueList = require("./views/QueueList")
var QueueItem = require("./views/QueueItem")
var Login = require("./views/Login")
var NewAgencyQueue = require("./views/NewAgencyQueue")
var ExistingProgramQueue = require("./views/ExistingProgramQueue")

m.route(document.body, "/selectagency", {
    "/selectagency" : {
        render:function(vnode){
            return m(Layout, m(AgencySelect, vnode.attrs))
        }
    },

    "/selectagency/:id" : {
        render:function(vnode){
            return m(Layout, m(AgencySelect, vnode.attrs))
        }
    },


    "/editagency": {
        render: function(vnode){
            return m(Layout, m(AgencyEdit, vnode.attrs))
        }

    },


    "/editagency/:id": {
        render: function(vnode){
            return m(Layout, m(AgencyEdit, vnode.attrs))
        }

    },



    "/newagency": {
        render: function(){
               return m(Layout, m(AgencyNew))
        }
    },  

    "/newagencyprogramcontact": {
        render: function(vnode){
            return m(Layout, m(AgencyNewProgramContactInfo, vnode.attrs))

        }

    },

    "/newagencyprogramreferral": {
        render: function(vnode){
            return m(Layout, m(AgencyNewProgramReferral, vnode.attrs))

        }

    },

    "/newagencyprogrameligibility": {
        render: function(vnode){
            return m(Layout, m(AgencyNewProgramEligibility, vnode.attrs))

        }

    },





    "/selectprogram": {
        render: function(vnode){
           return m(Layout,  m(ProgramSelect, vnode.attrs))
            
        }
    },


    "/selectprogram/:id": {
        render: function(vnode){
           return m(Layout,  m(ProgramSelect, vnode.attrs))
            
        }
    },

    "/newprogramcontact": {
        render:function(vnode){
            return m(Layout, m(ProgramNewContactInfo, vnode.attrs))
        }

    },

    "/newprogramreferral": {
        render: function(vnode){
            return m(Layout, m(ProgramNewReferral, vnode.attrs))
        }
    },


    "/newprogrameligibility": {
        render: function(vnode){
            return m(Layout, m(ProgramNewEligibility, vnode.attrs))
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

    "/editprogrameligibility":{
        render: function(vnode){
            return m(Layout, m(EditProgramEligibility, vnode.attrs))
        }
    },


    "/agencyreview": {
        render: function(){
            return m(Layout, m(AgencyReview))
        }
    },

    "/review":{
        render: function(vnode){
            return m(Layout, m(Review, vnode.attrs))
        }
    },

    "/newagencyreview":{
        render: function(vnode){
            return m(Layout, m(AgencyNewReview, vnode.attrs))
        }
    },

    "/newprogramreview":{
        render: function(vnode){
            return m(Layout, m(ProgramNewReview, vnode.attrs))
        }
    },
    
    "/login":{
        render: function(vnode){
            return m(QueueLayout, m(Login, vnode.attrs))
        }
    },
    
    "/queue":{
        onmatch: function() {
            if (!User.getIsLoggedIn()) m.route.set("/login")
        },
        render: function(vnode){
            return m(QueueLayout, m(QueueList, vnode.attrs))
        }
    },

    "/queue/:id":{
        onmatch: function() {
            if (!User.getIsLoggedIn()) m.route.set("/login")
        },
        render: function(vnode){
            return m(QueueLayout, m(QueueItem, vnode.attrs))
        }
    },

    "/queue/existingprogram/:id":{
        onmatch: function() {
            if (!User.getIsLoggedIn()) m.route.set("/login")
        },
        render: function(vnode){
            return m(QueueLayout, m(ExistingProgramQueue, vnode.attrs))
        }
    },


    })

