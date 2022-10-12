import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
  title = 'fileUpload';

  images: any;
  multipleImages = [];

  constructor(private http: HttpClient) {}
  user: any[] = [];

  curr_username: string = '';
  curr_birthdate: string = '';
  curr_age: any = null; // dn't know how to initialise number
  curr_email: string = '';
  is_user = this.check_user();
  my_username = '';

  img_dir: any;
  curr_dir: any; //__dirname;

  url: any = sessionStorage.getItem('profileImage'); // = this.img_dir;

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

  // test
  event: any;
  onSelect(event: any) {
    if (event.target.files[0]) {
      let fileType = event.target.files[0].type;
      let reader = new FileReader();
      reader.readAsDataURL(event.target.files[0]);
      reader.onload = (event: any) => {
        this.url = event.target.result;
      };
    }
  }

  selectImage(event: any) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.images = file;
    }
  }

  selectMultipleImage(event: any) {
    if (event.target.files.length > 0) {
      this.multipleImages = event.target.files;
    }
  }

  onSubmit() {
    const formData = new FormData();
    formData.append('file', this.images);

    this.http.post<any>('http://localhost:3000/file', formData).subscribe(
      (res) => this.storeRes(res),
      (err) => console.log(err)
    );
  }
  // HERE
  storeRes(res: any) {
    console.log(res);
    this.img_dir = res.filename;
    this.url = this.img_dir;
    sessionStorage.setItem('profileImage', this.url);
    console.log(this.img_dir);
  }

  onMultipleSubmit() {
    const formData = new FormData();
    for (let img of this.multipleImages) {
      formData.append('files', img);
    }

    this.http
      .post<any>('http://localhost:3000/multipleFiles', formData)
      .subscribe(
        (res) => console.log(res),
        (err) => console.log(err)
      );
  }

  ngDoCheck() {
    this.is_user = this.check_user();
  }
  ngOnInit(): void {
    this.getData();
  }
}
