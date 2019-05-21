
import { browser, element, by } from 'protractor';

export class lottiePageObject{
  browserToPage() {
    browser.get('');
  }
getbuttonText() {
    return element.all(by.css('.btn-google')).getText();
  }
  click(){
    return
  }

  getclcikButton(){
    console.log("getclcikButton()")

   return element.all(by.css('.btn-google'));
  }
  getbuttonText1() {
    return element.all(by.css('.btn-facebook'));
  }
  getTitle() {
    return element(by.css('ion-title .toolbar'));
  }
}