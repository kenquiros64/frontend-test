import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private App: AppComponent, private Auth: AuthService, private router: Router) { }

  errorMessage = ""
  email = ""
  password = ""

  ngOnInit() {
  }

  loginUser(event) {
    event.preventDefault()
    const target = event.target
    
    var login = this.Auth.getUserDetails(this.email, this.password)
    if(login === 1){
      this.router.navigate(['admin'])
      this.Auth.setLoggedIn(true)
      this.Auth.setCurrentUser(this.email)
      this.App.updateUser()
    }else if(login === 2){
      this.errorMessage = 'User not registered.'
    }else{
      this.errorMessage = 'Your password is incorrect.'
    }
    this.email = ''
    this.password = ''
  }
}
