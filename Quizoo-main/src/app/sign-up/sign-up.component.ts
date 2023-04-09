import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserDataService } from '../user-data.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {

  public user :any =[];
  public error :any;
  constructor(private router : Router,private fb: FormBuilder, private es :  UserDataService){}
  goToLogin(){
    this.router.navigate(['login']);
    
  }
    signUpForm = this.fb.group({
      userName : ['', Validators.required , Validators.minLength(4)],
      userEmail :['',[ Validators.email,Validators.required]],
      userPassword :['', [Validators.minLength(8),Validators.required]],
      userRePassword : ['', [Validators.minLength(8),Validators.required]], 
    })

  RegisterUser(){
    
    // console.log(this.signUpForm.value.userName);
    let data ={
      "email": this.signUpForm.value.userEmail,
      "name": this.signUpForm.value.userName,
      "password": this.signUpForm.value.userPassword,
      "quiz": [0,0,0,0,0],
      
    }
    this.es.postUserData(data).subscribe((response)=>{
      this.list();
    })
    // this.router.navigate(['login']);

  }
  list(){
    this.es.getUserData()
    .subscribe(data=>this.user=data,
      error=>this.error = error);
  }

    

}
