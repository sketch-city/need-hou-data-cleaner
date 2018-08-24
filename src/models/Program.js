var m = require('mithril')

var Program = {
	list: [],
	loadList: function() {
		return m.request({
			method: "GET",
			url: "http://localhost:8080/api/agencies",
			withCredentials: false
		}).then(function(result){
			Agency.list = result
		})
	},


	selected: {},
	loadAgency: function(name){
		return m.request({
			method: "GET",
			url: "http://localhost:8080/api/agencies?name=" + name,
			withCredentials: false,
		}).then(function(result){
			Agency.selected = result[0]

		})
	},
	
}

module.exports = Program
window.Agency = Program