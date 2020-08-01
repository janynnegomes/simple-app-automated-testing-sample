import { AppPage } from './app.po';
import { browser, logging } from 'protractor';
import * as fs  from 'fs'; 

const mock ={
  sampleTask: {title:"Have a dinner", description:"Prepare all kids"}
}
describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should save a task with title and description.', () => {
    page.navigateTo();

     // expect to input title and description
     page.getInputTitle().sendKeys(mock.sampleTask.title)
     page.getInputDescription().sendKeys(mock.sampleTask.description)
 
     browser.takeScreenshot().then(function (png) {
       saveScreenShot(png, 'filled-form.png');
     });
     
     //expect to click on submit button
     page.getButton('btnSaveTask').click()

    expect(page.getTitleText()).toEqual('');
  });

  it('should save a task with title and no description.', () => {
    page.navigateTo();
    expect(page.getTitleText()).toEqual('');
  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});



export const saveScreenShot = (data, filename) => {
  const time = new Date().getTime()
    var stream = fs.createWriteStream("e2e/screenshots/"+time+'-'+filename);
    stream.write(new Buffer(data, 'base64'));
    stream.end();
  }
