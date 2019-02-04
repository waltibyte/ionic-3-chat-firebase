import { Profile } from './../../models/profile/profile.interface';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AuthProvider } from '../../providers/auth/auth.service';

/**
 * Generated class for the ProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {

  existingPofile = {} as Profile;

  constructor(public navCtrl: NavController, public navParams: NavParams, private auth: AuthProvider) {
  }

  getExistingProfile(profile: Profile){
    this.existingPofile = profile
  }

  navigateToEditProfilePage(){
    this.navCtrl.push('EditProfilePage', { existingPofile: this.existingPofile })
  }

  logOut(){
    this.auth.signOut();
    this.navCtrl.setRoot('LoginPage');
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilePage');
  }

}
