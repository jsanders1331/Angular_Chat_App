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
  permissions: boolean = false;
  currentUser = this.getData();

  myImage: any = '';

  constructor() {}
  d = new SuperUser();
  users = this.getData(); // idk how angular works but this will run if page is refreshed so it will reset data? []
  new_user = this.d.createUser(this.users, 'test', '123', 'user');
  is_user_auth = this.check_permission(); // Used in the HTML to bring up admin panel
  getData() {
    let data = sessionStorage.getItem('user_data') || '{}';
    let user = JSON.parse(data);
    return user;
  }

  check_permission() {
    const roles = (e: any) =>
      e.valid == true &&
      (e.role == 'admin' || e.role == 'group' || e.role == 'super'); // user is authenticated with valid field AND their role is a super user.
    if (this.users.some(roles)) {
      console.log('Permissions are valid, authenticating . . . ');
      return true;
    } else {
      console.log('Permissions invalid');
      return false;
    }
  }
  reset() {
    this.usersName = '';
    this.usersID = '';
    this.usersRole = '';
    this.usersPassword = '';
  }

  updateUsers() {
    // add new user
    let d = new SuperUser();
    d.createUser(
      this.users,
      this.usersName,
      this.usersPassword,
      this.usersRole
    );
    this.reset();
  }
  remove() {
    let d = new SuperUser();
    d.removeUser(this.usersName, this.users);
    this.reset;
  }

  test() {
    console.log('this users:', this.users);
    this.d.removeUser('Joe', this.users);
    console.log(this.users[0].username);
    console.log(this.users);
  }

  ngOnInit(): void {
    let x = sessionStorage.getItem('profileImage');
    console.log(x);
    if (x != null) {
      this.myImage = x;
    } else {
      this.myImage = 'https://freesvg.org/img/abstract-user-flat-4.png';
    }
    //sessionStorage.set('admins'); // OK LETS READ A JSON FILE AND THEN STORE IT IN SESSION STORAGE.
  }
}
