import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { UserDataService } from '../user-data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  public users: any = [];
  public userLogedInName: string="";
  public error: any;
  public loginResult: any = 'no';

  constructor(private router: Router, private fb: FormBuilder, private es: UserDataService) { }


  ngOnInit() {

    this.es.getUserData()
      .subscribe(data => this.users = data
        , err => this.error = err)

    this.putScore()

    
  }


  putScore(){
    let data = {
              "email":this.es.logedInEmail,"quiz[this.quizId]":this.es.userQuizScore
            }
        
            this.es.putScore(data.email,data).subscribe((response)=>{
              this.list();
            })
  }
  list(){
    this.es.getUserData()
    .subscribe(data=>this.users=data,
      error=>this.error = error);
  }
  goSignUp() {
    this.router.navigate(['/signup']);

  }
  

  loginForm = this.fb.group({
    userEmail: ['', [Validators.email, Validators.required]],
    password: ['', [Validators.minLength(8), Validators.required]]
  })

  getMeLogedIn() {

    for (var user of this.users) {
      if (user.email === this.loginForm.value.userEmail && user.password === this.loginForm.value.password) {

        this.router.navigate(['/home'])
        console.log("login sucsess")
        this.loginResult = 'yes';
        this.es.logedInName = user.name;
        this.es.logedInEmail = user.email;
        this.es.userQuizScore = user.quiz;
        

      }

    }
    if (this.loginResult !== 'yes') {

      alert("Enter correct Email and Password");
    }
  }



}
