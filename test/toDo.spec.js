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
    expect(ctrl.tasklist).toEqual['Adding task number 1', 'Adding task number 2'];
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

  xit('initializes a task as not completed (false)', function(){
  });

  xit('can switch a task to completed (true)', function(){
  });
});
