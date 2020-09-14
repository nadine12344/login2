import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';

import { catchError, tap, map, } from 'rxjs/operators';

import { User } from './user';
@Injectable({
  providedIn: 'root'
})
export class LogRegisterService {
  private userUrl = 'api/Users/users.json';

  constructor(private http2: HttpClient) { }
  getUsers(): Observable<User[]> {
    return this.http2.get<User[]>(this.userUrl)
      .pipe(
        tap(data => console.log('All: ' + JSON.stringify(data))),
        catchError(this.handleError)
      );
  }

  // register(user: User): Observable<User> {
  //   const headers = { 'content-type': 'application/json'}  
  //   const body=JSON.stringify(user);
  //   console.log(body)
  //   return this.http2.post<User>("http://localhost:3000/users",  body,{'headers':headers}).pipe(
  //     map((data) => {
  //       //You can perform some transformation here
  //      return data;
  //    }),
  //     catchError((err) => {
  //       console.error(err);
  //       throw err;
  //     }
  //   ))
  // }
   
    
  
  private handleError(err: HttpErrorResponse): Observable<never> {

    let errorMessage = '';
    if (err.error instanceof ErrorEvent) {
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
     
      errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
    }
    console.error(errorMessage);
    return throwError(errorMessage);
  }

}
