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
        window.ROUTE = m.route;
        const pageClass = getPageClass(m.route.get());
        return m("main.layout", {
            class: pageClass,
        }, [
        	m("ul.breadcrumb sticky[id=header]", [
                m("li",
                    m("a[href=#]", "NEEDHOU")),
        		m("li[id=home]",
        			m("a[href='/agencyform']", { oncreate: m.route.link } , "Select Organization")),
        		m("li[id=editorg]", {
                      },
        			m("a", { 
        				 oncreate: m.route.link,
        				 href: vnode.attrs.program_href,
                      
        				  }, "Edit Content")),
                
                m("li[id=review]",{ },
                    m("a[id=reviewlink][class=disabled]", {
                        oncreate: m.route.link,
                        href: vnode.attrs.review_href,
                    }, "Review Changes"))

        		]),
            m("section", vnode.children)
        ])
    }
}




