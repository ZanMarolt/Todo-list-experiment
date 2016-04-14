angular.module('app').factory('todoService',function($http) {

	var todoService = {
        model:{
            list[],
            item:null
        },
        add : function(todoData){

            todoService.model.list.push({
                title:todoData.title,
                dateTime: Date.now()
            });

        },
        update : function(id, data){

        },
        delete : function(){

        },
        getAll :function(){

        }
    };

	return todoService;
});
