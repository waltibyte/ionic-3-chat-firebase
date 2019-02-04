import { LoginResponse } from './../../models/login/login-response.interface';
import { Account } from './../../models/accounts/accounts.interface';
// import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFireAuth } from "angularfire2/auth";
/*
  Generated class for the AuthProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AuthProvider {

  constructor(private auth: AngularFireAuth) {
    console.log('Hello AuthProvider Provider');
  }

  getAuthenticatedUser() {
    return this.auth.authState;
  }

  getCurrentUser() {
    return this.auth.auth.currentUser;
  }

  async SignInWithEmailandPassword(account: Account){
    try{
      return <LoginResponse>{
        result: await this.auth.auth.signInWithEmailAndPassword(account.email, account.password)
      }
    }
    catch(e){
      return <LoginResponse>{
        error: e
      };
    }

  }

  async CreateAccount(account: Account){
    try{
      return <LoginResponse>{
        result: await this.auth.auth.createUserWithEmailAndPassword(account.email, account.password)
      }
    }
    catch(e){
      return <LoginResponse>{
        error: e
      }
    }
  }

  signOut(){
    this.auth.auth.signOut();
  }

}
