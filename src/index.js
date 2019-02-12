var m = require("mithril")
var User = require("./models/User")

var AgencySelect = require('./views/agency_components/AgencySelect')
var AgencyEdit = require('./views/agency_components/AgencyEdit')
var AgencyNew = require("./views/agency_components/AgencyNew")
var AgencyNewProgramContactInfo = require("./views/agency_components/AgencyNewProgramContactInfo")
var AgencyNewProgramReferral = require("./views/agency_components/AgencyNewProgramReferral")
var AgencyNewProgramEligibility = require("./views/agency_components/AgencyNewProgramEligibility")


var ProgramSelect = require('./views/program_components/ProgramSelect')
var ProgramNewContactInfo = require('./views/program_components/ProgramNewContactInfo')
var ProgramNewReferral = require('./views/program_components/ProgramNewReferral')
var ProgramNewEligibility = require('./views/program_components/ProgramNewEligibility')
var EditProgramContact = require('./views/program_components/EditProgramContact')
var EditProgramReferral = require('./views/program_components/EditProgramReferral')
var EditProgramEligibility = require('./views/program_components/EditProgramEligibility')


var Review = require("./views/review_components/Review")
var AgencyNewReview = require("./views/review_components/AgencyNewReview")
var ProgramNewReview = require("./views/review_components/ProgramNewReview")
var AgencyReview = require("./views/review_components/AgencyReview")



var QueueLayout = require("./views/queue_components/QueueLayout")
var QueueList = require("./views/queue_components/QueueList")
var QueueItem = require("./views/queue_components/QueueItem")
var NewAgencyQueue = require("./views/queue_components/NewAgencyQueue")
var ExistingProgramQueue = require("./views/queue_components/ExistingProgramQueue")

var Layout = require("./views/Layout")
var Login = require("./views/Login")


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

