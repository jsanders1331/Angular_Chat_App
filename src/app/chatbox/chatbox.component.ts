import { Component, OnInit } from '@angular/core';
import { UserlistComponent } from '../userlist/userlist.component';
import { FormsModule } from '@angular/forms';
import { SocketService } from '../services/socket.service';
@Component({
  selector: 'app-chatbox',
  templateUrl: './chatbox.component.html',
  styleUrls: ['./chatbox.component.css'],
})
export class ChatboxComponent implements OnInit {
  constructor(private socketService: SocketService) {}
  d = new Date();
  currentTime = this.d.toLocaleTimeString();

  currentMessage = '';
  chatlog: any = [];

  messagecontent: string = '';
  messages: string[] = [];
  ioConnection: any;

  sendMessage() {
    console.log(this.currentTime);
    this.chatlog.push({
      message: this.currentMessage,
      time: this.d.toLocaleTimeString(),
    });
  }

  chat() {
    if (this.messagecontent) {
      this.socketService.send(this.messagecontent);
      this.messagecontent = '';
    } else {
      console.log('no message');
    }
  }

  private initIoConnection() {
    this.socketService.initSocket();
    this.ioConnection = this.socketService
      .getMessage()
      .subscribe((message: any) => {
        this.chatlog.push({
          message: message,
          time: this.d.toLocaleTimeString(),
        });
      });
    console.log(this.chatlog);
  }

  ngOnInit(): void {
    this.initIoConnection();
  }
}
