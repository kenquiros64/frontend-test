import { Injectable } from '@angular/core';
import * as R from 'ramda';

@Injectable({
  providedIn: 'root'
})
export class ReportService {

  constructor() { }

  getAllReports(){
    var users = JSON.parse(localStorage.getItem('users'))
    return users
  }

  getReportByEmail(email){
    var users = JSON.parse(localStorage.getItem('users'))
    var user = R.find(R.propEq('email', email))(users);
    if( user !== undefined){
      //console.log(user)
    }else{
      //console.log("Not found")
    }
  }

  addNewReport(email, newReport){
    var users = JSON.parse(localStorage.getItem('users'))
    
    var updateReports = function(x){
      if(x.email === email){
        if(x.reports === undefined){
          x.reports = [newReport]
        }else{
          x.reports.push(newReport)
        }
      }
    }

    R.map(updateReports, users)
    localStorage.setItem('users', JSON.stringify(users))
  }
}
