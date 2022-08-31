import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { ChatboxComponent } from './chatbox/chatbox.component';
import { UserlistComponent } from './userlist/userlist.component';

@NgModule({
  declarations: [AppComponent, LoginComponent, ProfileComponent, ChatboxComponent, UserlistComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
