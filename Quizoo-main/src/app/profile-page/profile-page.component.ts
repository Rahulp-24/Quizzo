import { Component, Renderer2, ViewChild } from '@angular/core';
import { UserDataService } from '../user-data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.css']
})
export class ProfilePageComponent {
  public name :string="";
  public email : string="";
  public score1 : number = 50;
  public score2 : number = 50;
  public score3 : number = 50;
  public score4 : number = 50;
  public score5 : number = 50;
  @ViewChild('pb1') pb1: any;
  @ViewChild('pb2') pb2: any;
  @ViewChild('pb3') pb3: any;
  @ViewChild('pb4') pb4: any;
  @ViewChild('pb5') pb5: any;

  constructor( private es: UserDataService, private router: Router,protected renderer :Renderer2){}
 ngOnInit(){
  if(this.es.logedInName !==""){
  this.name = this.es.logedInName;
  this.email = this.es.logedInEmail;
  this.score1 = this.es.userQuizScore[0];
  this.score2 = this.es.userQuizScore[1];
  this.score3 = this.es.userQuizScore[2];
  this.score4 = this.es.userQuizScore[3];
  this.score5 = this.es.userQuizScore[4];
  }
  else{
    this.router.navigate(['login']);
}
 }
 ngAfterViewInit(){
  this.renderer.setStyle(this.pb1.nativeElement,'width',`${this.score1}%`);
  this.renderer.setStyle(this.pb2.nativeElement,'width',`${this.score2}%`);
  this.renderer.setStyle(this.pb3.nativeElement,'width',`${this.score3}%`);
  this.renderer.setStyle(this.pb4.nativeElement,'width',`${this.score4}%`);
  this.renderer.setStyle(this.pb5.nativeElement,'width',`${this.score5}%`);
 }
}
