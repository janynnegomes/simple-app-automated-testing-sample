import { browser, by, element, WebElement, WebElementPromise } from 'protractor';

export class AppPage {
  navigateTo(): Promise<unknown> {
    return browser.get(browser.baseUrl) as Promise<unknown>;
  }

  getTitleText(): Promise<string> {
    return element(by.css('app-root .toolbar span')).getText() as Promise<string>;
  }

  getTaskForm(): WebElementPromise {
    return element(by.id('formNewTask')).getWebElement();
  }

  getInputTitle(): WebElementPromise {
    return element(by.css('#formNewTask input#title')).getWebElement() as WebElementPromise
  }
  getInputDescription(): WebElementPromise {
    return element(by.css('#formNewTask textarea#description')).getWebElement() as WebElementPromise
  }

  getButton(id:string): WebElementPromise {
    return element(by.id(id)).getWebElement() as WebElementPromise
  }
}
