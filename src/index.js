var m = require("mithril")

var AgencyForm= require("./views/AgencyForm")
var ProgramList = require("./views/ProgramList")
var ProgramForm = require("./views/ProgramForm")


m.route(document.body, "/agencyform", {
    "/agencyform" : AgencyForm,
    "/programlist/:id" : ProgramList,
    "/programform/:id" : ProgramForm
})