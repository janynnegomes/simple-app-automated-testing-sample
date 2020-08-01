import { AppPage } from './app.po';
import { browser, logging } from 'protractor';
import * as fs  from 'fs'; 

const mock ={
  sampleTask: {title:"Have a dinner", description:"Prepare all kids"}
}
var __TIME__ = 0

describe('Simple App - Automated UI testing Suit >> ', () => {
  let page: AppPage;  
  __TIME__ = new Date().getTime()
  
  beforeEach(() => {
    page = new AppPage();
    createTestSuiteFolder(__TIME__)
  });

  it('should save a task with title and description.', () => {
    page.navigateTo();

    // fill input values with mock data
    page.getInputTitle().sendKeys(mock.sampleTask.title)
    page.getInputDescription().sendKeys(mock.sampleTask.description)

    // generate evidences
    browser.takeScreenshot().then(function (png) {
      saveScreenShot(png, 'filled-form-title-and-description.png');
    });
    
    // trying to save
    page.getButton('btnSaveTask').click()

    // expected form field with clean values
    expect(page.getInputTitle().getText()).toBe('')
    expect(page.getInputDescription().getText()).toBe('')
    expect(page.getTasksField('title').getText()).toBe(mock.sampleTask.title)
    expect(page.getTasksField('description').getText()).toBe(mock.sampleTask.description)

    // generate evidences
    browser.takeScreenshot().then(function (png) {
      saveScreenShot(png, 'clear-form-inputs.png');
    });
  });

  it('should save a task with title only.', () => {
    page.navigateTo();

    // fill input values with mock data
    page.getInputTitle().sendKeys(mock.sampleTask.title)

    // generate evidences
    browser.takeScreenshot().then(function (png) {
      saveScreenShot(png, 'filled-form-only-title.png');
    });
    
    // trying to save
    page.getButton('btnSaveTask').click()    

    // expected form field with clean values
    expect(page.getInputTitle().getText()).toBe('')
    expect(page.getTasksField('title').getText()).toBe(mock.sampleTask.title)

    // generate evidences
    browser.takeScreenshot().then(function (png) {
      saveScreenShot(png, 'clear-form-inputs-and-added-to-tasks.png');
    });
   
  });

  it('should not save a task without title.', () => {
    page.navigateTo();

    // fill input values with mock data
    page.getInputDescription().sendKeys(mock.sampleTask.description)

    // generate evidences
    browser.takeScreenshot().then(function (png) {
      saveScreenShot(png, 'filled-form-without-title.png');
    });
    
    // trying to save
    page.getButton('btnSaveTask').click()

    // expected fhave 'error' class on form
    expect(page.getFormField('title').getAttribute('class')).toContain('error')

    // generate evidences
    browser.takeScreenshot().then(function (png) {
      saveScreenShot(png, 'error-class-aplied-to-form-field.png');
    });
  });
 
  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});



const saveScreenShot = (data, filename) => {
    var stream = fs.createWriteStream("e2e/screenshots/"+__TIME__+'/'+filename);
    stream.write(new Buffer(data, 'base64'));
    stream.end();
  }
  
const createTestSuiteFolder = (dir) => {
      if (!fs.existsSync('./e2e/screenshots/'+dir)){
        fs.mkdirSync('./e2e/screenshots/'+dir);
    }
  }

export { saveScreenShot, createTestSuiteFolder}
