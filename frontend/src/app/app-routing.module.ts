import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { ProfileAdminComponent } from './components/profile-admin/profile-admin.component';
import { ProfileParentComponent } from './components/profile-parent/profile-parent.component';
import { ProfileStudentComponent } from './components/profile-student/profile-student.component';
import { ProfileTeacherComponent } from './components/profile-teacher/profile-teacher.component';
import { ProfileSuperComponent } from './components/profile-super/profile-super.component';
import { RequestResetComponent } from './components/password/request-reset/request-reset.component';
import { ResponseResetComponent } from './components/password/response-reset/response-reset.component';

const appRoutes: Routes =  [
  {
    path:'login',
    component: LoginComponent
  },

  {
    path:'signup',
    component: SignupComponent
  },

  {
    path:'profile-admin',
    component: ProfileAdminComponent
  },

  {
    path:'profile-parent',
    component: ProfileParentComponent
  },

  {
    path:'profile-student',
    component: ProfileStudentComponent
  },

  {
    path:'profile-super',
    component: ProfileSuperComponent
  },

  {
    path:'profile-teacher',
    component: ProfileTeacherComponent
  },

  {
    path:'request-password-reset',
    component: RequestResetComponent
  },

  {
    path:'response-password-reset',
    component: ResponseResetComponent
  }

]

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
 exports: [RouterModule]
})
export class AppRoutingModule { }
