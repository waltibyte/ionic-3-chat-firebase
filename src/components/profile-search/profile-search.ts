import { DataProvider } from './../../providers/data/data';
import { Profile } from './../../models/profile/profile.interface';
import { Component, Output, EventEmitter } from '@angular/core';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs';

/**
 * Generated class for the ProfileSearchComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'app-profile-search',
  templateUrl: 'profile-search.html'
})
export class ProfileSearchComponent {

  query: string;

  profileList: Observable<Profile[]>;

  @Output() selectedProfile: EventEmitter<Profile>


  constructor(private data: DataProvider) {
    this.selectedProfile = new EventEmitter<Profile>();
  }

  selectProfile(profile: Profile){
    this.selectedProfile.emit(profile);
  }

  searchUser(query: string){
    const trimmedquery = query.trim();
    if (trimmedquery === query){
          this.profileList = this.data.searchUser(query).map(profiles => {
            return profiles.map(ref => {
              const data = ref.payload.val();
              return data;
      });
    });
  }

  }

}
