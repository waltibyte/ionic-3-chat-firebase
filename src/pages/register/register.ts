import { LoginResponse } from './../../models/login/login-response.interface';
import { ToastController } from 'ionic-angular';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

  constructor(private toast: ToastController, public navCtrl: NavController, public navParams: NavParams) {
  }

  register(event: LoginResponse){
    if(!event.error){
      this.toast.create({
        message: `Account successfully created ${event.result.user.email}`,
        duration: 3000
      }).present();
      this.navCtrl.push('EditProfilePage');

    }
    else {
      this.toast.create({
        message: event.error.message,
        duration: 3000
      }).present();

    }
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }

}
