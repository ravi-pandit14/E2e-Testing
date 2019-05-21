import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';

/**
 * Generated class for the LottiePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-lottie',
  templateUrl: 'lottie.html',
})
export class LottiePage {


  lottieConfig: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.lottieConfig = {
      path: 'assets/idea-bulb.json',
      autoplay: true,
      loop: true,
      renderer: 'canvas',
    };
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LottiePage');
  }
  goToclcik(){
this.navCtrl.push('DisplayPage')
  }
  goToApp(){
    this.navCtrl.push(HomePage)

  }

}
