describe('guillaumeToDo', function() {
  beforeEach(module('TasksManager'));

  var ctrl;
  beforeEach(inject(function($controller) {
    ctrl = $controller('guillaumeToDo');
  }));

  it('initialises with an empty entry to add new task', function() {
    expect(ctrl.newTask).toBeUndefined();
  });

  it('can add tasks to the list', function() {
    ctrl.newTask = 'Adding task number 1'
    ctrl.addTask();
    ctrl.newTask = 'Adding task number 2'
    ctrl.addTask();
    expect(ctrl.tasklist).toEqual({'Adding task number 1': false, 'Adding task number 2': false});
  });

  describe('Task status', function() {

    beforeEach(function() {
      ctrl.newTask = 'Adding a task'
      ctrl.addTask();
    });

    it('initializes a new added task as not completed yet (false)', function(){
      expect(ctrl.tasklist).toEqual({'Adding a task': false});
    });

    it('can switch a task to completed (true)', function(){
      ctrl.doTask('Adding a task');
      expect(ctrl.tasklist).toEqual({'Adding a task': true});    
    });
  });

  xit('knows the exact full list of tasks to display', function() {
  });

  xit('knows how many tasks there are in the list', function() {
  });

  xit('knows how many tasks have been completed', function(){
  });

  xit('knows how many tasks have yet to be completed', function(){
  });

  xit('can clear and delete tasks from the list', function() {
  });
});
