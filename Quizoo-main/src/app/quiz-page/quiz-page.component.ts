import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { interval } from 'rxjs';
import { QuestionService } from '../question.service';
import { UserDataService } from '../user-data.service';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';

@Component({
    selector: 'app-quiz-page',
    templateUrl: './quiz-page.component.html',
    styleUrls: ['./quiz-page.component.css']
})
export class QuizPageComponent implements OnInit {
    public name: string = "";
    public questionList: any = [];
    public currentQuestion: number = 0;
    public points: number = 0;
    public error: any;
    public quizId: any;
    counter = 60;
    correctAnswer: number = 0;
    inCorrectAnswer: number = 0;
    interval$: any;
    progress: string = "0";    
    public user :any =[];
    isQuizCompleted: boolean = false;
    constructor(private questionService: QuestionService,private es : UserDataService,private router: Router,private route:ActivatedRoute) { }

    ngOnInit(): void {
        if(this.es.logedInName !==""){
        this.getAllQuestions();
        this.startCounter();
        
    }
    else{
        this.router.navigate(['login']);
    }
    }
    
    goBackToHome(){
        this.route.paramMap.subscribe((params:ParamMap)=>{
            let id=(params.get('id'));
            this.quizId=id;
          })
        this.es.userQuizScore[Number(this.quizId)-1] = this.points;
        this.router.navigate(['home']);
        
            
          
    }
    

    getAllQuestions() {
        this.es.getQuestionJson()
            .subscribe(res => this.questionList = res
                , err => this.error = err)     
                
    }


nextQuestion() {
    this.currentQuestion++;
    console.log(this.questionList)
}
previousQuestion() {
    this.currentQuestion--;
}
answer(currentQno: number, option: any) {

    if (currentQno === this.questionList.length) {
        this.isQuizCompleted = true;
        this.stopCounter();
    }
    if (option.correct) {
        this.points += 10;
        this.correctAnswer++;
        setTimeout(() => {
            this.currentQuestion++;
            this.resetCounter();
            this.getProgressPercent();
        }, 1000);


    } else {
        setTimeout(() => {
            this.currentQuestion++;
            this.inCorrectAnswer++;
            this.resetCounter();
            this.getProgressPercent();
        }, 1000);

        // this.points -= 10;
    }
}
startCounter() {
    this.interval$ = interval(1000)
        .subscribe(val => {
            this.counter--;
            if (this.counter === 0) {
                this.currentQuestion++;
                this.counter = 60;
                // this.points -= 10;
            }
        });
    setTimeout(() => {
        this.interval$.unsubscribe();
    }, 600000);
}
stopCounter() {
    this.interval$.unsubscribe();
    this.counter = 0;
}
resetCounter() {
    this.stopCounter();
    this.counter = 60;
    this.startCounter();
}
resetQuiz() {
    this.resetCounter();
    this.getAllQuestions();
    this.points = 0;
    this.counter = 60;
    this.currentQuestion = 0;
    this.progress = "0";

}
getProgressPercent() {
    this.progress = ((this.currentQuestion / this.questionList.length) * 100).toString();
    return this.progress;

}
}
