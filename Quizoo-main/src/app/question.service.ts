import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http'
import { IQuestion } from './questionInterface';
import { Observable,throwError } from 'rxjs';
import { catchError } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  private _url :string="http://localhost:3000/users"
  constructor(private http : HttpClient) { }

  // getQuestionJson(){
  //   return this.http.get<any>(this._url);
  // }
  getQuestionJson():Observable<IQuestion[]>{
    return this.http.get<IQuestion[]>(this._url)
    .pipe(catchError(e=>this.errorHandler(e)));
  }
  
  // getQuestionJson():Observable<IQuestion>{
  //   return this.http.get<IQuestion>(this._url);
  // }
  errorHandler(error: HttpErrorResponse ){
    return throwError (error.message||'server Error');
    
  }
}