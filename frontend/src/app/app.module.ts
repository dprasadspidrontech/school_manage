import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { ProfileSuperComponent } from './components/profile-super/profile-super.component';
import { ProfileAdminComponent } from './components/profile-admin/profile-admin.component';
import { ProfileTeacherComponent } from './components/profile-teacher/profile-teacher.component';
import { ProfileStudentComponent } from './components/profile-student/profile-student.component';
import { ProfileParentComponent } from './components/profile-parent/profile-parent.component';
import { RequestResetComponent } from './components/password/request-reset/request-reset.component';
import { ResponseResetComponent } from './components/password/response-reset/response-reset.component';
import { AppRoutingModule } from './/app-routing.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    SignupComponent,
    ProfileSuperComponent,
    ProfileAdminComponent,
    ProfileTeacherComponent,
    ProfileStudentComponent,
    ProfileParentComponent,
    RequestResetComponent,
    ResponseResetComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
