import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  title = 'BV-Frontend Challenge';
  isLoggedIn = false

  constructor(private Auth: AuthService, private router: Router) { }

  logOut() { 
    this.Auth.logOut() 
    this.isLoggedIn = false
    this.router.navigate(['/login'])
  }

  updateUser(){
    this.isLoggedIn = this.Auth.isLoggedIn
  }
}
