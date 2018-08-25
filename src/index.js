var m = require("mithril")

var AgencyForm= require("./views/AgencyForm")
var ProgramList = require("./views/ProgramList")


m.route(document.body, "/agencyform", {
    "/agencyform" : AgencyForm,
    "/programlist/:id" : ProgramList
})