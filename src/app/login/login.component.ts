import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private Auth: AuthService) { }

  ngOnInit() {
  }

  loginUser(event) {
    event.preventDefault()
    const target = event.target
    const email = target.querySelector('#email').value
    const password = target.querySelector('#password').value
    
    var login = this.Auth.getUserDetails(email, password)
    if(login === 1){
      console.log('YEAH')
    }else if(login === 2){
      console.log('User not registered.')
    }else{
      console.log('Your password is incorrect.')
    }
    target.querySelector('#email').value = ''
    target.querySelector('#password').value = ''
  }
}
