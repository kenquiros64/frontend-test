import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(private Auth: AuthService, private http: HttpClient) { }

  currentUser = ""
  email = ""

  getData() {
    var host = 'https://www.beenverified.com/hk/dd/email?email='
    console.log(host.concat(this.email))
    if(this.email !== ""){
      this.http.get(host.concat(this.email)).subscribe(data => {
        console.log(data);
      });
    }else{
      console.log('No data found')
    }
  }

  ngOnInit() {
    this.currentUser = this.Auth.getCurrentUser

  
  }

}
