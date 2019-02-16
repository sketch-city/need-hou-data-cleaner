const { BASE_API_URL } = require('../constants')
var m = require('mithril')
const { getModelDefaults } = require('../helper')

var Queue = {

    queue_list: [],
    getQueue: function() {
        return m.request({
            method: "GET",
            url: BASE_API_URL + "/queue",
            withCredentials: false
        }).then(function(result){
                Queue.queue_list = result.filter(function(item){
                    return item.status === "new"
                }) 
               Queue.queue_list.sort ( function (a, b){
                return new Date(b.posted_date) - new Date(a.posted_date);
            });


                //just show queue items that don't have status rejected

        }).catch(function(error){
			
		})
    
    },


	queueAgency: {},
	queueProgram: {},
	queueLanguage: {},
	type_submission: "",
    queueId: "",
    serviceTypes: "",
    status: "",
    source: "",
    getQueueItem: function(queue_id) {
        return m.request({
            method: "GET",
            url: BASE_API_URL + "/queue?queue_id=" + queue_id,
            withCredentials: false
        }).then(function(result){
        	  Queue.type_submission = result[0].submission_type
              Queue.queueAgency = result[0].submission.agency_data
              Queue.queueAgency["source"] = result[0].submission.source
              Queue.queueProgram = result[0].submission.program_data
              Queue.queueProgram["source"] = result[0].submission.source
              Queue.queueId = result[0].id
              Queue.status = result[0].status
              Queue.source = result[0].submission.source

              //Queue.serviceTypes = result[0].submission.program_data.service_type.join(', ')

              Queue.queueLanguage = result[0].submission.language_data
        }).catch(function(error){
			console.log(error)
		})
    
    },

    updateQueueItem: function(queue_data){
        return m.request({
            method: "PUT",
            mode: 'cors',
            url: BASE_API_URL + "/queue",
            data: queue_data,
            withCredentials: false,
        }).catch(function(error) {
            console.log(error)
        })

    },


   deleteQueueItem: function(queue_id){
        return m.request({
            method: "DELETE",
            url: BASE_API_URL + "/queue?queue_id=" + queue_id,
            withCredentials: false,
        }).then(function(result){

            
        })
    }


}

Queue.defaults = getModelDefaults(Queue, 'queue_list')
Queue.reset = function() {
    Object.assign(Queue, Queue.defaults)
}

module.exports = Queue;
window.Queue = Queue; 