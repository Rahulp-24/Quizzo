import { Component } from '@angular/core';
import { UserDataService } from '../user-data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-spin-wheel',
  templateUrl: './spin-wheel.component.html',
  styleUrls: ['./spin-wheel.component.css']
})
export class SpinWheelComponent {
  constructor(private es: UserDataService, private router : Router){}
  public questionNumber : number = 0;
 
  loadQuestionNumber(){

    this.questionNumber = this.es.quizNumber;
  }
  goToQuiz(){
    
    this.router.navigate(['/quiz',this.questionNumber])
  }
}
