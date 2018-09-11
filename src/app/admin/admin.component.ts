import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { ReportService } from '../report.service';
import { FormControl, FormBuilder, Validators } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { faMapMarker } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})


export class AdminComponent implements OnInit {

  constructor(private Auth: AuthService
              ,private reportService: ReportService
              ,private http: HttpClient
              ,private formBuilder:FormBuilder
            ) { }

  currentUser = ""
  emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";
  host = 'https://www.beenverified.com/hk/dd/email?email='
  isValidFormSubmitted = null;

  faMapMarker = faMapMarker

  searchForm = this.formBuilder.group({
    email: ['', [Validators.required, Validators.pattern(this.emailPattern)]],
  });

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  
  getData(event) {
    event.preventDefault()
    
    this.isValidFormSubmitted = false;
    if (this.searchForm.invalid) {
       return;
    }
    this.isValidFormSubmitted = true;
    
    let search = this.searchForm.value;

    if(search.email !== ""){
      this.http.get(this.host.concat(search.email), this.httpOptions).subscribe(data => {
        this.reportService.addNewReport(this.currentUser,search.email, data)
      });
    }
  }

  ngOnInit() {
    this.currentUser = this.Auth.getCurrentUser
  }

  get email() {
    return this.searchForm.get('email');
  }  
}
