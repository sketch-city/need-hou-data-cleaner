var m = require("mithril")

module.exports = {
    view: function() {
        return (
          m("p", m("a[data-micromodal-trigger=agency-delete-modal]",
            { onclick: function(){ MicroModal.show('agency-delete-modal') } },
            "Organization no longer exists? Click to DELETE an organization."
            )
          )
        )
    }
}