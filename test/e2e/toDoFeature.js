describe('App Page', function() {

  var newTaskBox = element(by.model('tasksCtrl.newTask'));
  var newTaskButton = element(by.id('newTaskButton'));
  var checkBox = element(by.className('taskCheckBox'));
  var tasks = element.all(by.repeater('task in tasksCtrl.tasklist'));
  var clearAll = element(by.id('clearAllButton'))

  afterEach(function(){
    clearAll.click();
  });

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
      expect(element(by.className('taskCheckBox')).isSelected()).toBeFalsy();
    });

    it('each task tickbox can be checked and set the task to done when the task has been done', function(){
      checkBox.click();
      expect(element(by.className('taskCheckBox')).isSelected()).toBeTruthy();
    });
  });

  describe('with a list of tasks already added in the list', function() {

    beforeEach(function() {
      element(by.id('allButton')).click();
      for(var n = 1; n < 7; n++) {
        newTaskBox.sendKeys('Task_' + n.toString());
        newTaskButton.click();
        if( n === 3 || n ===5  ) { element(by.id('ID'+(n-1).toString())).click() };
      };
    });

    it('by default, shows the list of tasks in the list', function(){
      for(var n = 1; n < 7; n++) {
        expect(tasks.get(n-1).getText()).toEqual('Task_'+ n.toString());
      };
    });

    it('shows the total number of tasks in the list', function(){
      expect(element(by.id('tasksCounter')).getText()).toEqual('Tasks: 6');
    });

    it('clicking the Clear All button removes all the tasks from the list', function(){
      clearAll.click();
      expect(tasks).toEqual([]);
    });

    it('clicking the Active button shows all the active tasks', function(){  
      element(by.id('activeButton')).click();
      expect(element(by.id('activeContainer')).isDisplayed()).toBeTruthy();
    });

    it('clicking the Completed button shows all the completed tasks', function(){
      element(by.id('completedButton')).click();
      expect(element(by.id('completedContainer')).isDisplayed()).toBeTruthy();
    });

    it('clicking the All button shows all the tasks', function(){
      element(by.id('completedButton')).click();
      element(by.id('allButton')).click();
      expect(element(by.id('allContainer')).isDisplayed()).toBeTruthy();
    });

    xit('clicking the Clear Completed button removes all the completed tasks from the list', function(){
    });   
  });
});
