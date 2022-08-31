import { Component, OnInit } from '@angular/core';
import { UserlistComponent } from '../userlist/userlist.component';
@Component({
  selector: 'app-chatbox',
  templateUrl: './chatbox.component.html',
  styleUrls: ['./chatbox.component.css'],
})
export class ChatboxComponent implements OnInit {
  constructor() {}

  chatlog = ['Hello. How are you today?'];

  ngOnInit(): void {}
}
