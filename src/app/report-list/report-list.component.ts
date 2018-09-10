import { Component, OnInit } from '@angular/core';
import { ReportService } from '../report.service';
import { AuthService } from '../auth.service';
import * as R from 'ramda';

@Component({
  selector: 'app-report-list',
  templateUrl: './report-list.component.html',
  styleUrls: ['./report-list.component.css']
})
export class ReportListComponent implements OnInit {

  info
  reports = []
  emails = []
  message = ""
  currentUser = ""

  userinfo = {
    names: [],
    dob: '',
    gender: '',
    emails: [],
    social: [],
    jobs: []
  }

  constructor(private Auth: AuthService, private reportService: ReportService) { }

  ngOnInit() {
    this.currentUser = this.Auth.getCurrentUser
    this.reportService.currentReports.subscribe(report => {
      this.getData(report)
    })
  }

  getData(report){
    var pred = n => n.email === this.currentUser
    this.info = R.head(R.filter(pred, report))
    this.reports = R.prop('reports', this.info)
    this.emails = []
    if(this.reports !== undefined){
      this.reports.forEach(element => {
        this.emails.push(R.head(R.prop('emails', element)))
      });
    }
  }

  updateReport($event) {
    console.log($event.srcElement.innerHTML)
    this.reports.forEach(element => {
      let email = R.prop('emails', element)
      email.forEach(email => {
        if(email.email_address === $event.srcElement.innerHTML){
          this.userinfo = {
            names: R.prop('names', element),
            dob: R.prop('dob', element),
            gender: R.prop('gender', element),
            emails: R.prop('emails', element),
            social: R.prop('social', element),
            jobs: R.prop('jobs', element)
          }
        }
      });
    });
  }

}
