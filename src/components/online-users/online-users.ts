import { NavController, NavParams } from 'ionic-angular';
import { Observable } from 'rxjs';
import { DataProvider } from './../../providers/data/data';
import { Component, OnInit } from '@angular/core';
import { Profile } from '../../models/profile/profile.interface';

/**
 * Generated class for the OnlineUsersComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'app-online-users',
  templateUrl: 'online-users.html'
})
export class OnlineUsersComponent implements OnInit {

  userProf: Observable<Profile[]>;

  ngOnInit(): void {
    this.setUserOnline();
    this.getOnlineUser();
  }

  constructor(private data: DataProvider, private navCtrl: NavController, private navParams: NavParams) {
  }

  setUserOnline(){
    //sets the user online from firebase
    this.data.getCurrentUserProfile().subscribe(users => {

      this.data.setUserOnline(users.payload.key, users.payload.val());
      console.log(this.data.setUserOnline(users.payload.key, users.payload.val()));
    })
  }

  getOnlineUser(){
    this.userProf = this.data.getOnlineUsers().map(users => {
      return users.map(user => ({
        $key: user.payload.key, ...user.payload.val()
      }))
    })
  }

  openChat(profile: Profile){
    this.navCtrl.push('MessagePage', { profile });
  }

}
