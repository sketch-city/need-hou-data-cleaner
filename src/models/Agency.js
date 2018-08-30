var m = require('mithril')
var isEqual = function (value, other) {

	// Get the value type
	var type = Object.prototype.toString.call(value);

	// If the two objects are not the same type, return false
	if (type !== Object.prototype.toString.call(other)) return false;

	// If items are not an object or array, return false
	if (['[object Array]', '[object Object]'].indexOf(type) < 0) return false;

	// Compare the length of the length of the two items
	var valueLen = type === '[object Array]' ? value.length : Object.keys(value).length;
	var otherLen = type === '[object Array]' ? other.length : Object.keys(other).length;
	if (valueLen !== otherLen) return false;

	// Compare two items
	var compare = function (item1, item2) {

		// Get the object type
		var itemType = Object.prototype.toString.call(item1);

		// If an object or array, compare recursively
		if (['[object Array]', '[object Object]'].indexOf(itemType) >= 0) {
			if (!isEqual(item1, item2)) return false;
		}

		// Otherwise, do a simple comparison
		else {

			// If the two items are not the same type, return false
			if (itemType !== Object.prototype.toString.call(item2)) return false;

			// Else if it's a function, convert to a string and compare
			// Otherwise, just compare
			if (itemType === '[object Function]') {
				if (item1.toString() !== item2.toString()) return false;
			} else {
				if (item1 !== item2) return false;
			}

		}
	};

	// Compare properties
	if (type === '[object Array]') {
		for (var i = 0; i < valueLen; i++) {
			if (compare(value[i], other[i]) === false) return false;
		}
	} else {
		for (var key in value) {
			if (value.hasOwnProperty(key)) {
				if (compare(value[key], other[key]) === false) return false;
			}
		}
	}

	// If nothing failed, return true
	return true;

};


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

			console.log('select agency fires')
			Agency.selected = result[0]
			// if(document.getElementsByClassName('agency_address')[1].value === "" || (Agency.selected.name !== result.name)){
			// 	console.log('init/or reinit selected agency')
			// 	Agency.selected = result[0] 
			// } else{
			// 	console.log('word')
			// }
			
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