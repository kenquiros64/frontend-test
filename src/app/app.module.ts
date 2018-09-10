import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule }    from '@angular/common/http';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';
import { RegisterComponent } from './register/register.component';
import { AuthGuard } from './auth.guard';
import { AuthService } from './auth.service';
import { ReportService } from './report.service';
import { ReportsComponent } from './reports/reports.component';
import { ReportListComponent } from './report-list/report-list.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AdminComponent,
    RegisterComponent,
    ReportsComponent,
    ReportListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    FontAwesomeModule,
    RouterModule.forRoot([
      {
        path: 'login',
        component: LoginComponent
      },
      {
        path: 'register',
        component: RegisterComponent
      },
      {
        path: 'admin',
        component: AdminComponent,
        canActivate: [AuthGuard]
      },
      {
        path: '',
        component: AdminComponent,
        canActivate: [AuthGuard]
      },
      { path: "report/:id", component: ReportsComponent }
    ])
  ],
  providers: [AuthService, AuthGuard, ReportService],
  bootstrap: [AppComponent]
})
export class AppModule { }
