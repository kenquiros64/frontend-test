import { Injectable } from '@angular/core';  
import { BehaviorSubject } from 'rxjs';
import * as R from 'ramda';

@Injectable({
  providedIn: 'root'
})
export class ReportService {

  constructor() { }

  private reportsSource = new BehaviorSubject(JSON.parse(localStorage.getItem('users')))
  currentReports = this.reportsSource.asObservable()


  getAllReports(user){
    var users = JSON.parse(localStorage.getItem('users'))
    this.reportsSource = new BehaviorSubject(users)
    return users
  }

  getReportByEmail(email){
    var users = JSON.parse(localStorage.getItem('users'))
  }

  addNewReport(user, email, newReport){
    var users = JSON.parse(localStorage.getItem('users'))
    
    var updateReports = function(x){
      if(x.email === user){
        if(x.reports === undefined){
          x.reports = [newReport]
          return true
        }else{
          let ingresar = true
          x.reports.forEach(function(entry) {
            let emails = R.prop('emails', entry)
            let find = R.find(R.propEq('email_address', email))(emails)
            if( find !== undefined){
              ingresar = false
            }
          });

          if( ingresar === true){
            x.reports.push(newReport)
            return true
          }else{ 
            return false
          }
        }
      }
    }

    R.map(updateReports, users)
    this.reportsSource.next(users)
    localStorage.setItem('users', JSON.stringify(users))
  }
}