import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';
import { UserDataService } from './user-data.service';

@Directive({
  selector: '[appRotateWheel]'
})
export class RotateWheelDirective {
  
  degreeFinder : number=0;
  // optionArray : number[]= [0,45,90,135,180,225,270,315];
  degreeFinder1 : number=0;
  option : number =0;
  number:number = Math.ceil(Math.random() * 1000)
  constructor(private el : ElementRef, private render : Renderer2, private es: UserDataService) { }
  @HostListener('click') answer(){
    {

      this.number = (this.number) - ((this.number%360) % 72)
      // if(this.es.userQuizScore[(this.number)/72]=0)
      {
        this.render.setStyle(this.el.nativeElement,'transform',"rotate(" + (360 - this.number) + "deg)");
        if( this.es.userQuizScore[this.option]>0 ){

        }
      this.option = (this.number % 360)/72;
      this.es.quizNumber = this.option +1;
      // console.log(this.es.userQuizScore[this.es.quizNumber])
      }
      
      this.number += Math.ceil(Math.random() * 1000);

    }
  }
}


