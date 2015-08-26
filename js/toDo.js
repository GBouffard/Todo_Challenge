guillaumeTasksManager.controller('guillaumeToDo', ['$resource', function($resource) {
  var self = this;
  self.tasklist = {};

  self.addTask = function() {
    self.tasklist[self.newTask] = false;
  };

  self.doTask = function(task) {
    self.tasklist[task] = true;
  };

  self.numberOfTasks = function() {
    return (Object.keys(self.tasklist).length);
  };  
}]);