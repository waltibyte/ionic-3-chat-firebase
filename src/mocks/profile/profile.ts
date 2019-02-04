import { Profile } from "../../models/profile/profile.interface";

const userlist:Profile[] = [{

  firstname: 'Silva',
  lastname: 'Okere',
  avatar: 'assets/img/avatar.png',
  email: 'silva@gmail.com',
  dateOfBirth: new Date()

},
{
  firstname: 'Walter',
  lastname: 'Okere',
  avatar: 'assets/img/avatar.png',
  email: 'walter@gmail.com',
  dateOfBirth: new Date()

},
{
  firstname: 'Ben',
  lastname: 'Okere',
  avatar: 'assets/img/avatar.png',
  email: 'ben@gmail.com',
  dateOfBirth: new Date()

},
{
  firstname: 'Amarachi',
  lastname: 'Okere',
  avatar: 'assets/img/avatar.png',
  email: 'amarachi@gmail.com',
  dateOfBirth: new Date()

},
{
  firstname: 'Emmy',
  lastname: 'Okere',
  avatar: 'assets/img/avatar.png',
  email: 'emmy@gmail.com',
  dateOfBirth: new Date()

}];

export const USER_LIST = userlist;
