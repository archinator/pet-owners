import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { catchError } from 'rxjs/operators';
import 'rxjs/add/observable/throw';

import { SignInModel, SignInResponseModel } from '../models/signin.model';
import { SignUpModel, SignUpResponseModel } from '../models/signup.model';

@Injectable()
export class AuthService {
  constructor(
      private http: HttpClient
      ) {}

  login(data: SignInModel): Observable<SignInResponseModel> {
    return this.http.post<SignInResponseModel>('/api/signin', data)
  }

  signup(data: SignUpModel): Observable<SignUpResponseModel> {
    return this.http.post<SignUpResponseModel>('/api/signup', data)
  }
  
  setToken(data) {
    localStorage.setItem('jwtToken', data.token);
  }

  getToken(): string {
    return localStorage.getItem('jwtToken');
  }

  getRefreshToken(): string {
    return localStorage.getItem('refreshToken');
  }

  createToken(authToken, refreshToken){

  }

  removeTokens(): void {
    localStorage.clear();
  }

  refreshToken(): Observable<string> {
    let refreshAuth = this.getRefreshToken(); //get refresh token from storage
    let url: string = "auth/refresh";
    return this.http.get(url, {
      headers: new HttpHeaders().set('refreshAuthorization', refreshAuth),
      observe: 'response'
    }).map(refreshResponse => {
      let authToken: string = refreshResponse.headers.get('authorizationToken');
      let refreshToken: string = refreshResponse.headers.get('refreshToken');
      //add token to storage
      this.createToken(authToken, refreshToken); // method for adding token to cookie storage
      return authToken; //return the new authorization token
    });
  }
    
}