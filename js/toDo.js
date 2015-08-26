guillaumeTasksManager.controller('guillaumeToDo', ['$resource', function($resource) {
  var self = this;
  self.tasklist = {};

  self.addTask = function() {
  	self.tasklist[self.newTask] = false;
  };
}]);