import { AuthProvider } from './../../providers/auth/auth.service';
import { Component, EventEmitter, Output } from '@angular/core';
// import { AngularFireAuth } from "angularfire2/auth";
import { ToastController } from 'ionic-angular';
import { Account } from './../../models/accounts/accounts.interface';
import { LoginResponse } from '../../models/login/login-response.interface';

/**
 * Generated class for the RegisterFormComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'app-register-form',
  templateUrl: 'register-form.html'
})
export class RegisterFormComponent {

  account= {} as Account;
  @Output() loginStatus: EventEmitter<LoginResponse>


  constructor(private afAuth: AuthProvider, private toast: ToastController) {
    this.loginStatus = new EventEmitter<LoginResponse>();
  }

  async register(){
      const result = await
      this.afAuth.CreateAccount(this.account);
      this.loginStatus.emit(result);
      console.log(result);

  }

}
