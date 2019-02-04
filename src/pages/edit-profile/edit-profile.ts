import { Profile } from './../../models/profile/profile.interface';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';

/**
 * Generated class for the EditProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-edit-profile',
  templateUrl: 'edit-profile.html',
})
export class EditProfilePage {

  profile = {} as Profile;

  constructor(private toast: ToastController, public navCtrl: NavController, public navParams: NavParams) {
    this.profile = this.navParams.get('existingPofile');
  }

  verify(event: Boolean){
    console.log(event);
    event ? this.navCtrl.setRoot('TabsPage') : console.log("Not Authenicated");
    }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EditProfilePage');
  }

}
