import { Component, OnInit } from '@angular/core';
import { UserlistComponent } from '../userlist/userlist.component';
@Component({
  selector: 'app-chatbox',
  templateUrl: './chatbox.component.html',
  styleUrls: ['./chatbox.component.css'],
})
export class ChatboxComponent implements OnInit {
  constructor() {}
  d = new Date();
  currentTime = this.d.toLocaleTimeString();

  currentMessage = '';
  chatlog: any = [];

  sendMessage() {
    console.log(this.currentTime);
    this.chatlog.push({
      message: this.currentMessage,
      time: this.d.toLocaleTimeString(),
    });
  }

  ngOnInit(): void {}
}
