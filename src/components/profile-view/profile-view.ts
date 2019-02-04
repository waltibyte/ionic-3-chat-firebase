import { User } from 'firebase/app';
import { AuthProvider } from './../../providers/auth/auth.service';
import { DataProvider } from './../../providers/data/data';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Profile } from '../../models/profile/profile.interface';
import { LoadingController, Loading } from 'ionic-angular';

/**
 * Generated class for the ProfileViewComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'app-profile-view',
  templateUrl: 'profile-view.html'
})
export class ProfileViewComponent implements OnInit {

  userprofile: Profile;
  loader: Loading;
  authUser: User;

  @Output() existingProfile: EventEmitter<Profile>;


  constructor(private loading: LoadingController, private data: DataProvider) {
    this.existingProfile = new EventEmitter<Profile>();
    this.loader = this.loading.create({
      content: "Loading profile..."
    });
  }

  ngOnInit(): void {
    this.loader.present();
    this.data.getAuthenticatedUserProfile().subscribe(profile => {
      this.userprofile = <Profile>profile.payload.val();
      this.existingProfile.emit(this.userprofile);
      this.loader.dismiss();
    })
/*    this.auth.getAuthenticatedUser().subscribe((user: User) => {
      this.authUser = user;
      this.data.getProfile(this.authUser).subscribe(profile => {
        this.userprofile = <Profile>profile.payload.val();
        this.existingProfile.emit(this.userprofile);
        this.loader.dismiss();
      })
    })
  */
   }

}
