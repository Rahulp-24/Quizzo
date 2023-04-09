import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { IUser } from './userInterface';
import { IQuestion } from './questionInterface';
import { catchError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {

  public logedInName: string ="";
  public logedInEmail: string =" ";
  public quizNumber : number=0;
  public userQuizScore: number[]=[];

  private _url :string="http://localhost:3000/user"
  private _url1 :string="http://localhost:3000/questions"
  private _url2 :string="http://localhost:3000/questions2"
  private _url3 :string="http://localhost:3000/questions3"
  private _url4 :string="http://localhost:3000/questions4"
  private _url5 :string="http://localhost:3000/questions5"

  constructor( private http : HttpClient) { }

   getUserData():Observable<IUser[]>{
    return this.http.get<IUser[]>(this._url)
    .pipe(catchError(e=>this.errorHandler(e)));
  } 
  postUserData(data :any):Observable<IUser[]>{
    return this.http.post<IUser[]>(this._url, data)
    .pipe(catchError(e=>this.errorHandler(e)));
  }

  putScore(email:any ,data :any):Observable<any>{
    return this.http.put<any>(this._url, data)
    .pipe(catchError(e=>this.errorHandler(e)));
  }
  getQuestionJson():Observable<IQuestion[]>{
    return this.http.get<any>(this._url1)
    .pipe(catchError(e=>this.errorHandler(e)));
    // console.log(this.http.get<any>(this._url))
  }

  errorHandler(error: HttpErrorResponse ){
    return throwError (error.message||'server Error');
    
  }

}
