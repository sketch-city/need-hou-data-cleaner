var m = require("mithril")
var LogoutButton = require('./LogoutButton')

module.exports = {
    view: function(vnode) {
        return (

            m("section", 
            	m("ul[id=navbar]",
                    m("li[id=title]", "NeedHOU: Resource Editing Tool"),
        			m(LogoutButton),
                    m("li[id=needhou]",
                        m("a", {href: "https://needhouwebsite.herokuapp.com/"}, "NeedHOU: Houston Social Services Database")),
                    m("li[id=needhou]", m("a", {href: "/queue", oncreate: m.route.link}, "Queue"))

                    ), vnode.children,
            m("div[id=myProgress]",
                m("div[id=myBar]")),
            m("footer",
  

            m("p[id=iap_interest]", "Click", m("a[href='mailto:gunjen@houstonimmgration.org']", " here "), " to learn more about the Immigrant Accessibility Profile.")))



            )
        
        
    }
}




