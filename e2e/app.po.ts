import { browser, element, by } from 'protractor';

export class TestIBAPIV3Page {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('mrk-root h1')).getText();
  }
}
