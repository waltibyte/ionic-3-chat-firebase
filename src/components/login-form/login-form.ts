import { AuthProvider } from './../../providers/auth/auth.service';
import { LoginResponse } from './../../models/login/login-response.interface';
import { Account } from '../../models/accounts/accounts.interface';
import { NavController, NavParams } from 'ionic-angular';
import { ToastController } from "ionic-angular";
import { Component, EventEmitter, Output } from '@angular/core';

/**
 * Generated class for the LoginFormComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'app-login-form',
  templateUrl: 'login-form.html'
})
export class LoginFormComponent {

account = {} as Account;
@Output() loginStatus: EventEmitter<LoginResponse>;

  constructor(private afAuth: AuthProvider, private toast: ToastController, private navCtrl: NavController, private navParams: NavParams) {
    this.loginStatus = new EventEmitter<LoginResponse>();
  }

  async login(){
      const result = await this.afAuth.SignInWithEmailandPassword(this.account)
      this.loginStatus.emit(result);
      console.log(result);
  }


  navigateToRegPage(pageName:string) {
    this.navCtrl.push(pageName);
  }

}
