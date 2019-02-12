const { BASE_API_URL } = require('../constants')
const { withToken } = require('../helper')
var m = require('mithril')
var User = require("./User")


function handleUserTimedout(error){
	console.log(error)
	if (error.status === 403) {
		User.logout()
			.then(function(){
				m.route.set('/login')
			})
	} else {
		throw error
	}
}

var Agency = {

	list: [],
	loadList: function() {
		return m.request({
			method: "GET",
			url: BASE_API_URL + "/agencies",
			withCredentials: false
		}).then(function(result){
			 //if(Agency.list === undefined || Agency.list.length == 0 ){
			   Agency.list = result 
			//}

		})
	},

	setSelectedAgency: function(result) {
		Agency.selected = result[0]
        Agency.original_selected = JSON.parse(JSON.stringify(result[0]));

        return result
	},


	selected: {},
    original_selected: {},
	loadAgency: function(id){
		return m.request({
			method: "GET",
			url: BASE_API_URL + "/agencies?agency_id=" + id,
			withCredentials: false,
		}).catch(function(error){

			console.warn(error)
		})
	},

	programs: [],
	loadPrograms: function(){
		return m.request({
			method: "GET",
			url: BASE_API_URL + "/programs?agency_id=" + Agency.selected.id,
			withCredentials: false,
		}).then(function(result){
			Agency.programs = result


		}).catch(function(error){
			Agency.programs = []

		})
	},

	selected_program: {},
	original_selected_program: {},
	loadProgram: function(id){
		return m.request({ 
			method: "GET",
			url: BASE_API_URL + "/programs?id=" + id,
			withCredentials: false,
		}).then(function(result){
			//if(result[0].id !== Agency.selected_program.id && result[0].id !== undefined){
                result[0].latitude = parseFloat(result[0].latitude)
                result[0].longitude = parseFloat(result[0].longitude)
				Agency.selected_program = result[0]	
                Agency.original_selected_program = JSON.parse(JSON.stringify(result[0]));
			//}
			return result
		}).catch(function(error) {
			//Agency.selected_program = {}

		})
	},

	language_arr: [],
	loadLanguages: function(program_id){
		return m.request({
			method: "GET",
			url: BASE_API_URL + "/languages?program_id=" + program_id,
			withCredentials: false,
		}).then(function(result){
			Agency.selected_program.language_arr = result.language_arr
            Agency.original_selected_program.language_arr = result.language_arr
			}).catch(function(error){
				console.log(error)
			})
	},

	addNewAgency: function(new_data) {
        return m.request(withToken({
            method: "POST",
            mode :'cors',
            url: BASE_API_URL + "/agencies",
            data: new_data,
            withCredentials: false,
        })).catch(handleUserTimedout)
    },

	updateAgency: function(new_data) {
        return m.request(withToken({
            method: "PUT",
            mode :'cors',
            url: BASE_API_URL + "/agencies",
            data: new_data,
            withCredentials: false,
        })).catch(handleUserTimedout)
    },


    updateProgram: function(new_data) {
    	//delete new_data['longitude']
    	//delete new_data['latitude']

        return m.request(withToken({
            method: "PUT",
            mode :'cors',
            url: BASE_API_URL + "/programs",
            data: new_data,
            withCredentials: false,
        })).catch(handleUserTimedout)
    },

     updateLanguage: function(new_data) {
        return m.request(withToken({
            method: "PUT",
            mode :'cors',
            url: BASE_API_URL + "/languages",
            data: new_data,
            withCredentials: false,
        })).catch(handleUserTimedout)
    },


    addNewProgram: function(new_data) {
        return m.request(withToken({
            method: "POST",
            mode :'cors',
            url: BASE_API_URL + "/programs",
            data: new_data,
            withCredentials: false,
        })).catch(handleUserTimedout)
    },


    addNewLanguage: function(new_data) {
    	return m.request(withToken({
    		method: "POST",
    		mode: 'cors',
    		url: BASE_API_URL + "/languages",
    		data: new_data,
    		withCredentials: false,
    	})).catch(handleUserTimedout)
    },


    addQueueItem: function(queue_data) {
        return m.request({
            method: "POST",
            mode: "cors",
            url: BASE_API_URL + "/queue",
            data: queue_data,
            withCredentials: false,
        }).catch(function(error){
            console.log(error)
        })
    },

    program_to_delete: {},
    deleteProgram: function(program_id){
        return m.request(withToken({
            method: "DELETE",
        	mode: "cors",
            url: BASE_API_URL + "/programs?program_id=" + program_id,
            withCredentials: false,
        }))
        .then(function(){
        	Agency.program_to_delete = {}
        	Agency.loadPrograms()
        })
        .catch(handleUserTimedout)
    },

    agency_to_delete: {},
    deleteAgency: function(agency_id){
        return m.request(withToken({
            method: "DELETE",
    		mode: "cors",
            url: BASE_API_URL + "/agencies?agency_id=" + agency_id,
            withCredentials: false,
        }))
        .then(function(){
        	Agency.agency_to_delete = {}
        	Agency.setSelectedAgency([{}])
        })
        .catch(handleUserTimedout)
    }







}

module.exports = Agency;
window.Agency = Agency;


