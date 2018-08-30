var m = require('mithril')

var selected_program_ids = []
var selected_agency_ids = []

var Agency = {
	list: [],
	loadList: function() {
		return m.request({
			method: "GET",
			url: "http://localhost:8080/api/agencies",
			withCredentials: false
		}).then(function(result){
			 if(Agency.list === undefined || Agency.list.length == 0 ){
			 	console.log('initializing agency list')
			   Agency.list = result 
			}

		})
	},


	selected: {},
	loadAgency: function(name){
		return m.request({
			method: "GET",
			url: "http://localhost:8080/api/agencies?name=" + name,
			withCredentials: false,
		}).then(function(result){
			selected_agency_ids.push(result[0].id)
			console.log('select agency fires')
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
			selected_program_ids.push(result[0].id)
			if(Agency.selected_program.id === undefined || Agency.selected_program.id !== result[0].id){
				console.log(Agency.selected_program.id)
				console.log(result[0].id)
				console.log('init program')
				Agency.selected_program = result[0]
			}

		})
	
	}
}

module.exports = Agency, selected_program_ids, selected_agency_ids;
window.selected_program_ids = selected_program_ids
window.Agency = Agency
window.selected_agency_ids = selected_agency_ids