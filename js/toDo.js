guillaumeTasksManager.controller('guillaumeToDo', ['$resource', function($resource) {
  var self = this;
  self.tasklist = [];
  self.array = []
  self.showActiveList = false;

  self.addTask = function() {
    if(self.newTask === undefined || self.newTask === '') {
      alert('Please enter a task!');
    } else {
      newTaskObject = {};
      newTaskObject['name'] = self.newTask;
      newTaskObject['status'] = false;
      self.tasklist.push(newTaskObject);
      self.newTask = '';
    };
  };

  self.doTask = function(task) {
    for(var n = 0; n < self.tasklist.length; n++) {
      if ( self.tasklist[n]['name'] === task) { self.tasklist[n]['status'] = !self.tasklist[n]['status'] };
    };
  };

  self.tasksCount = function() {
    return self.tasklist.length;
  };

  self.completedTasks = function() {
    array = [];
    for(var n = 0; n < self.tasklist.length; n++) {
      if ( self.tasklist[n]['status'] === true) { array.push(self.tasklist[n]['name']) };
    };
    return array;
  };  

  self.activeTasks = function() {
    self.array = [];
    for(var n = 0; n < self.tasklist.length; n++) {
      if ( self.tasklist[n]['status'] === false) { self.array.push(self.tasklist[n]['name']) };
    };
    self.showActiveList = !self.showActiveList;
    return self.array;
  };

  self.clearAll = function() {
    self.tasklist = [];
  };

  self.clearCompleted = function() {
    // I used delete at first but it leaves 'undefined' instead of a value so Im rewriting
    // the full tasklist json object instead.
    tempArray = self.tasklist;
    self.tasklist = [];
    for(var i = 0; i < tempArray.length; i++) {
      if ( tempArray[i]['status'] === false) { self.tasklist.push(tempArray[i]) };
    };

  };  
}]);
