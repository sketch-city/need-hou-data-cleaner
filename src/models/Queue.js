var m = require('mithril')

var Queue = {

queue_list: [],
    getQueue: function() {
        return m.request({
            method: "GET",
            url: "https://need-hou-api.herokuapp.com/api/queue",
            withCredentials: false
        }).then(function(result){
                Queue.queue_list = result 
        }).catch(function(error){
			
		})
    
    },


	queueAgency: {},
	queueProgram: {},
	queueLanguage: {},
	type_submission: "",
    getQueueItem: function(queue_id) {
        return m.request({
            method: "GET",
            url: "https://need-hou-api.herokuapp.com/api/queue?queue_id=" + queue_id,
            withCredentials: false
        }).then(function(result){
        	  Queue.type_submission = result[0].submission_type
              Queue.queueAgency = result[0].submission.agency_data
              Queue.queueProgram = result[0].submission.program_data

              Queue.queueLanguage = result[0].submission.language_data
        }).catch(function(error){
			console.log(error)
		})
    
    },

   deleteQueueItem: function(queue_id){
        return m.request({
            method: "DELETE",
            url: "https://need-hou-api.herokuapp.com/api/queue?queue_id=" + queue_id,
            withCredentials: false,
        }).then(function(result){

            
        })
    }


}

module.exports = Queue;
window.Queue = Queue; 