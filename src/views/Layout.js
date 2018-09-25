var m = require("mithril")
var Agency = require("../models/Agency")






function getPageClass(path) {
    if (path === '/agencyform') {
        return 'select-organization-page';
    } else if (['/newprogramform', '/newagency'].indexOf(path) > -1 || path.search('/programform') === 0) {
        return 'edit-content-page';
    } else if (['/review', '/newagencyreview', '/newprogramreview'].indexOf(path) > -1) {
        return 'review-changes-page';
    }
}


module.exports = {
    view: function(vnode) {
        return (
            m("section", vnode.children,
            m("div[id=myProgress]",
                m("div[id=myBar]"))
            ))
        
    }
}




