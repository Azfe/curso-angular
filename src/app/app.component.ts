import { Component, OnInit } from '@angular/core';
import firebase  from 'firebase/compat/app';
import { LoginService } from './services/login.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private loginService:LoginService){

  }

  ngOnInit(): void {

    firebase.initializeApp({
      apiKey: "AIzaSyBrePRK6bQ3j1nUPUHaErQImCRAYd1838o",
      authDomain: "angularpildoras-1fb47.firebaseapp.com",
    });    
  }

  isLoggedIn(){
    return this.loginService.isLoggedIn();
  }

  isLoggedOut(){
    return this.loginService.isLoggedOut();
  }
}
