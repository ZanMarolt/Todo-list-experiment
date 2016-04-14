angular.module('app').controller('TodosCtrl',function($scope, todoService){

    $scope.todoModel = todoService.model;

    $scope.todo = {};

    $scope.addTodoClick(){

    };

});
