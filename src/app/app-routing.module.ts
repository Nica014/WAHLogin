import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { ForgotPassComponent } from './forgot-pass/forgot-pass.component';
import { CheckEmailComponent } from './check-email/check-email.component';
import { NewPassComponent } from './new-pass/new-pass.component';
import { PassDoneComponent } from './pass-done/pass-done.component';
import { PasswordStrengthComponent } from './password-strength/password-strength.component';
import { RegisterPaginationComponent } from './register-pagination/register-pagination.component';


const routes: Routes = [
  {
    path: 'login', 
    component: LoginComponent
  },
  {
    path: 'register', 
    component: RegisterComponent
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'forgot-pass', 
    component: ForgotPassComponent
  },
  {
    path: 'check-email', 
    component: CheckEmailComponent
  },
  {
    path: 'new-pass', 
    component: NewPassComponent 
  },
  {
    path: 'pass-done', 
    component: PassDoneComponent 
  },
  {
    path: 'password-strength', 
    component: PasswordStrengthComponent 
  },
  {
    path: 'register-pagination',
    component: RegisterPaginationComponent
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
