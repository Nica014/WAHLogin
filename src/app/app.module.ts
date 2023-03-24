import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AppRoutingModule } from './app-routing.module';
import { RegisterComponent } from './register/register.component';
import { ForgotPassComponent } from './forgot-pass/forgot-pass.component';
import { CheckEmailComponent } from './check-email/check-email.component';
import { NewPassComponent } from './new-pass/new-pass.component';
import { PassDoneComponent } from './pass-done/pass-done.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { StrengthMeterModule } from "ngx-strength-meter";
import { MatInputModule } from "@angular/material/input";
import { MatCardModule } from "@angular/material/card";

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    ForgotPassComponent,
    CheckEmailComponent,
    NewPassComponent,
    PassDoneComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatCardModule,
    StrengthMeterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

