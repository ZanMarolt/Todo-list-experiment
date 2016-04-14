angular.module('app').directive('todoItem', function() {
	return {
		restrict: 'E',
		replace: true,
		scope: {

		},
		templateUrl: 'directive/todo-item/todo-item.html',
		link: function(scope, element, attrs, fn) {



		}
	};
});
