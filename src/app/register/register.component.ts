import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent implements OnInit {

  constructor(private Auth: AuthService, private router: Router, private formBuilder:FormBuilder) { }

  errorMessage = ""
  emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";
  isValidFormSubmitted = null;

  userForm = this.formBuilder.group({
    email: ['', [Validators.required, Validators.pattern(this.emailPattern)]],
  });

  ngOnInit() {
  }

  registerUser(event) {
    event.preventDefault()
    
    this.isValidFormSubmitted = false;
    if (this.userForm.invalid) {
       return;
    }
    this.isValidFormSubmitted = true;
    
    let user = this.userForm.value;
    console.log(user.email)
    var newUser = this.Auth.newUser(user.email)
    if( newUser === true ){
      this.router.navigate(['admin'])
      this.Auth.setLoggedIn(true)
    }else{
      this.errorMessage = 'User already registered.'
    }
    this.userForm.reset();
  }

  get email() {
    return this.userForm.get('email');
 }   
}
