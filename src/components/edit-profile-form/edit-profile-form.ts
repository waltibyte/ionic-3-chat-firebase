import { Subscription } from 'rxjs/Subscription';
import { DataProvider } from './../../providers/data/data';
import { Profile } from './../../models/profile/profile.interface';
import { Component, OnDestroy, EventEmitter, Output, Input, OnInit } from '@angular/core';
import { AuthProvider } from "../../providers/auth/auth.service";
import { User } from "firebase/app";

/**
 * Generated class for the EditProfileFormComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'app-edit-profile-form',
  templateUrl: 'edit-profile-form.html'
})
export class EditProfileFormComponent implements OnInit, OnDestroy {

  @Output() saveUser: EventEmitter<Boolean>;

  private authenticatedUser$: Subscription;
  private authenticateduser: User;

  @Input()  profile: Profile;

  constructor(private data: DataProvider, private auth: AuthProvider) {
    this.authenticatedUser$ = this.auth.getAuthenticatedUser().subscribe((user: User) => {
      this.authenticateduser = user;
    });
    this.saveUser = new EventEmitter<Boolean>();
  }
  async saveProfile() {
    if (this.authenticateduser) {
      this.profile.email = this.authenticateduser.email;
      const result = await this.data.saveProfile(this.authenticateduser, this.profile);
      this.saveUser.emit(result);
    }
  }
  ngOnInit(): void {
    if(!this.profile){
      this.profile = {} as Profile;
    }
  }
  ngOnDestroy(): void {
    this.authenticatedUser$.unsubscribe();
  }
}
