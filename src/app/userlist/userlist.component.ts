import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css'],
})
export class UserlistComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    //sessionStorage.set('admins'); // OK LETS READ A JSON FILE AND THEN STORE IT IN SESSION STORAGE.
  }
}
