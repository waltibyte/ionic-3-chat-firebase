import * as firebase from 'firebase/app';
// import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireObject, AngularFireList } from "angularfire2/database";
import { User } from "firebase/app";
import { Profile } from "../../models/profile/profile.interface";
import "rxjs/add/operator/take";
import "rxjs/add/operator/map";
import "rxjs/add/operator/mergeMap";
import { AuthProvider } from '../auth/auth.service';

/*
  Generated class for the DataProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DataProvider {

  profileobject: AngularFireObject<Profile>;
  profilelist: AngularFireList<Profile>;

  constructor(private database: AngularFireDatabase, private auth: AuthProvider) {
  }

  searchUser(firstName: string){
    const query = this.database.list<Profile>('/profile', ref =>
    ref.orderByChild('firstname').equalTo(firstName));
    return query.snapshotChanges().take(1);
  }


  getAuthenticatedUserProfile(){
    const user = this.auth.getCurrentUser();
    if(user != null){
        return this.database.object<Profile>(`profile/${user.uid}`).snapshotChanges().take(1)
       }
  }

  getCurrentUserProfile(){
    return this.auth.getAuthenticatedUser()
    .map(user => user.uid)
      .mergeMap(authId => {
        return this.database.object<Profile>(`profile/${authId}`).snapshotChanges().take(1)
       })
  }

  getProfile(user: User){
    this.profileobject = this.database.object(`/profile/${user.uid}`);
    // return this.profileobject.take(1)

    return this.profileobject.snapshotChanges().take(1);
  }

  async saveProfile(user: User, profile: Profile){
    this.profileobject = this.database.object(`/profile/${user.uid}`)
    try{
      await this.profileobject.set(profile);
      return true;
    }
    catch(e){
      console.error(e);
      return false;
    }

  }

  setUserOnline(profkey:string, profile: Profile){
    const ref = firebase.database().ref(`/online-users/${profkey}`)
    try {
      ref.update({...profile});
      ref.onDisconnect().remove();
    }
    catch (e) {
      console.error();
    }
  }

  getOnlineUsers(){
    return this.database.list<Profile>(`online-users`).snapshotChanges();
  }

}
