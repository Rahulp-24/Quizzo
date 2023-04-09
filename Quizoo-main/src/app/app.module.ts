import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { HomeComponent } from './home/home.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { QuizPageComponent } from './quiz-page/quiz-page.component';
import { ProfilePageComponent } from './profile-page/profile-page.component';
import { ChangeBgDirective } from './change-bg.directive';
import { SpinWheelComponent } from './spin-wheel/spin-wheel.component';
import { RotateWheelDirective } from './rotate-wheel.directive';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignUpComponent,
    HomeComponent,
    QuizPageComponent,
    ProfilePageComponent,
    ChangeBgDirective,
    SpinWheelComponent,
    RotateWheelDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
