var m = require('mithril')
var Agency = {
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

	programs: [],
	loadPrograms: function(){
		return m.request({
			method: "GET",
			url: "http://localhost:8080/api/programs?agency_id=" + Agency.selected.id,
			withCredentials: false,
		}).then(function(result){
			Agency.programs = result

		})
	},

	selected_program: {},
	loadProgram: function(id){
		return m.request({
			method: "GET",
			url: "http://localhost:8080/api/programs?id=" + id,
			withCredentials: false,
		}).then(function(result){
			Agency.selected_program = result[0]

		})
	
	}
}

module.exports = Agency;
window.Agency = Agency