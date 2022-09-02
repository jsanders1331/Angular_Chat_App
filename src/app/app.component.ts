import { Component, Input } from '@angular/core';
import { UserlistComponent } from './userlist/userlist.component';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'week4tut';
  constructor(private router: Router, private route: ActivatedRoute) {}
  logOut() {
    sessionStorage.clear();

    alert('You are now logged out');
  }

  login() {
    let data: any = sessionStorage.getItem('user_data');
    data = JSON.parse(data);
    console.log(data);
    let current_user: any = [];
    console.log(current_user);
    if (data != undefined && data != null) {
      // this doesn't work ?
      current_user = data.find((user: any) => {
        user.valid == true;
      });
      for (let i = 0; i < data.length; i++) {
        // this works ?
        if (data[i].valid) {
          current_user = data[i];
        }
      }
      console.log(current_user);

      if (current_user.valid) {
        alert('Already logged in as:' + current_user.username);
        this.router.navigate(['/chatbox']);
      } else {
        this.router.navigate(['/login']);
      }
    }
  }
}
