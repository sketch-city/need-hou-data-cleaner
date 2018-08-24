var m = require("mithril")

var AgencyForm= require("./views/AgencyForm")


m.route(document.body, "/agencyform", {
    "/agencyform" : AgencyForm,
    "/programlist" : programlist
})