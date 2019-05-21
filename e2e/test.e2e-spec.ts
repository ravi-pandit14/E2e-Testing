import { browser, element, by, ElementFinder } from 'protractor';
import { lottiePageObject } from './test.po';

describe('Example E2E Test', () => {

    let appPage: lottiePageObject;

    beforeEach(() => {
        appPage = new lottiePageObject();
        
        browser.get('');

    });
    it('Click button on splsh click ', () => {
       
        console.log("it('clcik button'")
        let buttonclick = appPage.getclcikButton();
       
        buttonclick.click();
        // Wait for the page transition
        browser.driver.sleep(1000);
       
    });

    it('Access button go to App', () => {
        // Click the 'click button' 
        let buttonclick = appPage.getbuttonText1()
        buttonclick.click();
        // Wait for the page transition
        browser.driver.sleep(1000);
      
    });

  
})