var m = require('mithril')

var Agency = {

	list: [],
	loadList: function() {
		return m.request({
			method: "GET",
			url: "https://need-hou-api.herokuapp.com/api/agencies",
			withCredentials: false
		}).then(function(result){
			 if(Agency.list === undefined || Agency.list.length == 0 ){
			   Agency.list = result 
			}

		})
	},


	selected: {},
	loadAgency: function(name){
		return m.request({
			method: "GET",
			url: "https://need-hou-api.herokuapp.com/api/agencies?name=" + name,
			withCredentials: false,
		}).then(function(result){
			Agency.selected = result[0]
			
		})
	},

	programs: [],
	loadPrograms: function(){
		return m.request({
			method: "GET",
			url: "https://need-hou-api.herokuapp.com/api/programs?agency_id=" + Agency.selected.id,
			withCredentials: false,
		}).then(function(result){
			Agency.programs = result


		}).catch(function(error){
			Agency.programs = []

		})
	},

	selected_program: {},
	new_program: {},
	
	loadProgram: function(id){
		return m.request({ 
			method: "GET",
			url: "https://need-hou-api.herokuapp.com/api/programs?id=" + id,
			withCredentials: false,
		}).then(function(result){
			if(result[0].id !== Agency.selected_program.id && result[0].id !== undefined){
				Agency.selected_program = result[0]	
			}
		}).catch(function(error) {
			console.log(error)

		})
	},

	languages:[],
	loadLanguages: function(program_id){
		return m.request({
			method: "GET",
			url: "https://need-hou-api.herokuapp.com/api/languages?program_id=" + program_id,
			withCredentials: false,
		}).then(function(result){
			Agency.selected_program.language_arr = result.language_arr.join(', ')
			}).catch(function(error){
				console.log(error)
			})
	},

	addNewAgency: function(new_data) {
        return m.request({
            method: "POST",
            mode :'cors',
            url: "https://need-hou-api.herokuapp.com/api/agencies",
            data: new_data,
            withCredentials: false,
        }).catch(function(error){
        	console.log(error)
        })
    },

	updateAgency: function(new_data) {
        return m.request({
            method: "PUT",
            mode :'cors',
            url: "https://need-hou-api.herokuapp.com/api/agencies",
            data: new_data,
            withCredentials: false,
        }).catch(function(error){
        	console.log(error)
        })
    },


    updateProgram: function(new_data) {
    	delete new_data['longitude']
    	delete new_data['latitude']

        return m.request({
            method: "PUT",
            mode :'cors',
            url: "https://need-hou-api.herokuapp.com/api/programs",
            data: new_data,
            withCredentials: false,
        }).catch(function(error){
        	console.log(error)
        })
    },

     updateLanguage: function(new_data) {
        return m.request({
            method: "PUT",
            mode :'cors',
            url: "https://need-hou-api.herokuapp.com/api/languages",
            data: new_data,
            withCredentials: false,
        }).catch(function(error){
        	console.log(error)
        })
    },


    addNewProgram: function(new_data) {
        return m.request({
            method: "POST",
            mode :'cors',
            url: "https://need-hou-api.herokuapp.com/api/programs",
            data: new_data,
            withCredentials: false,
        }).catch(function(error){
        	console.log(error)
        })
    },


    addNewLanguage: function(new_data) {
    	return m.request({
    		method: "POST",
    		mode: 'cors',
    		url: "https://need-hou-api.herokuapp.com/api/languages",
    		data: new_data,
    		withCredentials: false,
    	}).catch(function(error){
    		console.log(error)
    	})
    }



}

module.exports = Agency;
window.Agency = Agency; 

