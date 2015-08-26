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
    expect(ctrl.tasklist).toEqual([
      {
        'name': 'Adding task number 1',
        'status': false
      }, 
      {
        'name': 'Adding task number 2',
        'status': false
      }
    ]);
  });

  describe('Task status', function() {

    beforeEach(function() {
      ctrl.newTask = 'Adding a task'
      ctrl.addTask();
    });

    it('initializes a new added task as not completed yet (false)', function(){
      expect(ctrl.tasklist[0]['status']).toEqual(false);
    });

    it('can switch a task to completed (true)', function(){
      ctrl.doTask('Adding a task');
      expect(ctrl.tasklist[0]['status']).toEqual(true);    
    });
  });

  describe('with a full list of tasks already entered', function() {

    beforeEach(function(){
      ctrl.tasklist = [
        {
          'name': 'task_1',
          'status': false
        }, 
        {
          'name': 'task_2',
          'status': false
        },
        {
          'name': 'task_3',
          'status': true
        },
        {
          'name': 'task_4',
          'status': false
        },
        {
          'name': 'task_5',
          'status': true
        },
        {
          'name': 'task_6',
          'status': false
        }
      ];
    });

    it('knows the exact full list of tasks to display', function() {
      for (var n = 0; n < ctrl.tasklist.length; n++) {
        expect(ctrl.tasklist[n]['name']).toContain('task_');
      };
    });

    it('knows how many tasks there are in the list', function() {
      expect(ctrl.tasklist.length).toEqual(6);
    });

    it('knows the tasks that have been completed', function(){
      expect(ctrl.completedTasks()).toEqual(['task_3', 'task_5']);
    });

    it('knows the tasks that have yet to be completed', function(){
      expect(ctrl.activeTasks()).toEqual(['task_1', 'task_2', 'task_4', 'task_6']);
    });

    it('can clear and delete all the tasks from the list', function() {
      ctrl.clearAll();
      expect(ctrl.tasklist).toEqual([]);
    });

    it('can clear completed tasks from the list', function() {
      ctrl.clearCompleted();
      expect(ctrl.tasklist).toEqual([
        {
          'name': 'task_1',
          'status': false
        }, 
        {
          'name': 'task_2',
          'status': false
        },
        {
          'name': 'task_4',
          'status': false
        },
        {
          'name': 'task_6',
          'status': false
        }
      ]);
    });
  });
});
