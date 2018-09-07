import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(private Auth: AuthService) { }

  currentUser = ""

  ngOnInit() {
    this.currentUser = this.Auth.getCurrentUser
  }

}
