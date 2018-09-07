import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private Auth: AuthService) { }

  ngOnInit() {
  }

  registerUser(event) {
    event.preventDefault()
    const target = event.target
    const email = target.querySelector('#email').value
    
    var newUser = this.Auth.newUser(email)
    if( newUser === true ){
      console.log('New user')
    }else{
      console.log('User registered.')
    }
    target.querySelector('#email').value = ''
  }
}
