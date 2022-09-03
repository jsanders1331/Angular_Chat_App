import { Component, OnInit } from '@angular/core';
import { Users, SuperUser, GroupUser } from '../users';
@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css'],
})
export class UserlistComponent implements OnInit {
  usersName = '';
  usersPassword = ''; // CHANGE THIS TO EMAIL LATER.
  usersRole = '';
  usersID = '';

  constructor() {}
  d = new SuperUser();
  users = this.getData(); // idk how angular works but this will run if page is refreshed so it will reset data? []
  new_user = this.d.createUser(this.users, 'test', '123', 'user');

  getData() {
    let data = sessionStorage.getItem('user_data') || '{}';
    let user = JSON.parse(data);
    return user;
  }

  updateUsers() {
    let d = new SuperUser();
    d.createUser(
      this.users,
      this.usersName,
      this.usersPassword,
      this.usersRole
    );
    this.usersName = '';
    this.usersID = '';
    this.usersRole = '';
    this.usersPassword = '';
  }

  test() {
    console.log('this users:', this.users);
    //this.d.removeUser('Joe', this.users);
    console.log(this.users[0].username);
    console.log(this.users);
  }

  addUser() {}

  ngOnInit(): void {
    //sessionStorage.set('admins'); // OK LETS READ A JSON FILE AND THEN STORE IT IN SESSION STORAGE.
  }
}
