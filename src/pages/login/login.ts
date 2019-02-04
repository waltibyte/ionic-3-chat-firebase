import { User } from 'firebase/app';
import { DataProvider } from './../../providers/data/data';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ToastController  } from "ionic-angular";
import { LoginResponse } from './../../models/login/login-response.interface';
/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  constructor(private data: DataProvider, private toast: ToastController, private navCtrl: NavController, private navParams: NavParams) {
  }

  login(event: LoginResponse){
    if(!event.error){
      this.toast.create({
        message: `You are successfully logged in, ${event.result.user.email}`,
        duration: 3000
      }).present();
      this.data.getProfile(<User>event.result.user).subscribe(profile => {
        profile.payload.val() ? this.navCtrl.setRoot('TabsPage') : this.navCtrl.push('EditProfilePage');
      })

    }
    else {
      this.toast.create({
        message: event.error.message,
        duration: 3000
      }).present();
    }
  }

}
