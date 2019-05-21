import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { TouchID } from '@ionic-native/touch-id';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, 
       private touchId: TouchID,
    ) {

  }
  openTouchID(){
   console.log('openTouchID')
  }
}
