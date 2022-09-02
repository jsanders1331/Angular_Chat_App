import { Component, OnInit } from '@angular/core';
import { Users, SuperUser, GroupUser } from '../users';
@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css'],
})
export class UserlistComponent implements OnInit {
  constructor() {}
  d = new SuperUser();
  new_user = this.d.createUser();
  users = this.getData(); // idk how angular works but this will run if page is refreshed so it will reset data? []

  getData() {
    let data = sessionStorage.getItem('user_data') || '{}';
    let user = JSON.parse(data);

    console.log('UserLIST Data is: ', user);
    return user;
  }

  test() {
    console.log('this users:', this.users);
    this.d.removeUser('Joe', this.users);
    console.log(this.users[0].username);
    console.log(this.users);
  }

  ngOnInit(): void {
    //sessionStorage.set('admins'); // OK LETS READ A JSON FILE AND THEN STORE IT IN SESSION STORAGE.
  }
}
