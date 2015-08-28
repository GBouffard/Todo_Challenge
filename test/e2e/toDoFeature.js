describe('App Page', function() {

  var newTaskBox = element(by.model('tasksCtrl.newTask'));
  var newTaskButton = element(by.id('newTaskButton'));
  var checkBox = element(by.className('taskCheckBox'));
  var tasks = element.all(by.repeater('task in tasksCtrl.tasklist'));

  it('has a title', function() {
    browser.get('http://localhost:8080');
    expect(browser.getTitle()).toEqual('Guillaume Tasks Manager');
  });

  describe('Adding tasks', function() {
  
    beforeEach(function(){
      newTaskBox.sendKeys('Test with Protractor');
      newTaskButton.click();
    });

    it('adds tasks to the list as they are entered', function(){
      expect(element(by.binding('task.name')).getText()).toEqual('Test with Protractor');
    });

    it('has a tickbox for each task which is not checked by default', function(){
      expect(element(by.model('task.status')).isSelected()).toBeFalsy();
    });

    it('each task tickbox can be checked and set the task to done when the task has been done', function(){
      checkBox.click();
      expect(element(by.model('task.status')).isSelected()).toBeTruthy();
    });
  });

  describe('with a list of tasks already added in the list', function() {

    beforeEach(function() {
      for(var n = 1; n < 7; n++) {
        newTaskBox.sendKeys('Task_' + n.toString());
        newTaskButton.click();
      };
    });

    it('by default, shows the list of tasks in the list', function(){
      for(var n = 1; n < 7; n++) {
        expect(tasks.get(n+2).getText()).toEqual('Task_'+ n.toString());
      };
    });

    it('shows the total number of tasks in the list', function(){
      expect(element(by.id('tasksCounter')).getText()).toEqual('Tasks: 15');
    });

    xit('clicking the Active button shows all the active tasks', function(){
    });

    xit('clicking the Completed button shows all the completed tasks', function(){
    });

    xit('clicking the All button shows all the tasks', function(){
    });

    xit('clicking the Clear All button removes all the tasks from the list', function(){
    });

    xit('clicking the Clear Completed button removes all the completed tasks from the list', function(){
    });

    xit('', function(){
    });

    xit('', function(){
    });

    xit('', function(){
    });

    xit('', function(){
    });    
  });
});
