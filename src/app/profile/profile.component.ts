import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
  constructor() {}
  user: any[] = [];

  curr_username: string = '';
  curr_birthdate: string = '';
  curr_age: any = null; // dn't know how to initialise number
  curr_email: string = '';
  is_user = this.check_user();
  my_username = '';

  getData() {
    let data = sessionStorage.getItem('user_data') || '{}';
    this.user = JSON.parse(data);
    console.log(this.user[0].valid);
    return this.user;
  }

  editData(key: string, info: string) {
    // edits user_data from the server.js / sessionStorage
    console.log('info is : ', info);
    let data: any = sessionStorage.getItem('user_data') || '{}';
    data = JSON.parse(data); // get the current data
    data[0][key] = info; // change the value
    console.log(data[0][key]);
    console.log('Data is: ', data);
    // return data to string and store in the session
    sessionStorage.setItem('user_data', JSON.stringify(data));
    this.user = data;
    //sessionStorage.setItem('user_data', JSON.stringify(data))
  }

  check_user() {
    if (this.user.length == 0 || this.user.length == undefined) {
      console.log('FALSE IS RETURNED ');
      return false;
    }

    return true;
  }
  ngDoCheck() {
    this.is_user = this.check_user();
  }
  ngOnInit(): void {
    this.getData();
  }
}
