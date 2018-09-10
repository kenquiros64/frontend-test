import { Injectable } from '@angular/core';
import * as R from 'ramda';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  loggedInStatus = false
  currentUser = ""

  constructor() { }

  setLoggedIn(value: boolean){
    this.loggedInStatus = value;
  }

  setCurrentUser(user: string){
    this.currentUser = user;
  }

  get isLoggedIn(){
    return this.loggedInStatus
  }

  get getCurrentUser(){
    return this.currentUser
  }

  logOut(){
    this.loggedInStatus = false
    this.currentUser = ""
    console.log("Here")
  }

  getUserDetails(email, password){
    var users = JSON.parse(localStorage.getItem('users'));

    if( users === null ){
      return 2
    } else {
      var user = R.find(R.propEq('email', email))(users);
      if( user !== undefined){
        if(user.password === password){
          return 1
        }else{
          return 3
        }
      }else{
        return 2
      }
    }
  }

  newUser(email){
    var users = JSON.parse(localStorage.getItem('users'));
    if( users === null || users.length === 0){
      users = []
      users.push({email: R.trim(email), password: 'BV-API-Challenge​'})
      localStorage.setItem('users', JSON.stringify(users));
      return true
    } else {
      var user = R.find(R.propEq('email', email))(users);
      if( user !== undefined){
        return false
      }else{
        users.push({email: R.trim(email), password: 'BV-API-Challenge​'})
        localStorage.setItem('users', JSON.stringify(users));
        return true
      }
    }
  }
}
