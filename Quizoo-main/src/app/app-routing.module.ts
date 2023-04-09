import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ProfilePageComponent } from './profile-page/profile-page.component';
import { QuizPageComponent } from './quiz-page/quiz-page.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { SpinWheelComponent } from './spin-wheel/spin-wheel.component';

const routes: Routes = [
  {path:"",redirectTo:"login", pathMatch:"full"},
  {path:"login",component:LoginComponent},
  {path:"signup",component:SignUpComponent},
  {path:"profile",component:ProfilePageComponent},
  {path:"home",component:HomeComponent},
  {path:"spinner",component:SpinWheelComponent},
  {path:"quiz",redirectTo:"spinner",pathMatch:"full"},
  {path:"quiz/:id", component:QuizPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
  export const routingComponents=[
    LoginComponent,
    SignUpComponent,
    HomeComponent,
    QuizPageComponent,
    ProfilePageComponent  
  ]

 
