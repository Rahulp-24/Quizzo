import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserDataService } from '../user-data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor(private router: Router, private es : UserDataService){}
  ngOnInit(){
    if(this.es.logedInName !==""){
      
  }
  else{
      this.router.navigate(['login']);
  }
  }
  goToQuiz(){
    this.router.navigate(['/spinner']);
  }

  goToProfile(){
    this.router.navigate(['/profile']);
  }
}
