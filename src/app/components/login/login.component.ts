import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from "@angular/router";
import { Observable } from 'rxjs/Observable';
import { tap, catchError } from 'rxjs/operators';
import { of } from 'rxjs/observable/of';
import { SignInModel } from '../../models/signin.model';
import { NetworkError } from '../../models/error.model';

@Component({
  selector: 'sign-in',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  data: SignInModel;
  @Input() message: NetworkError;
  @Output() onLogin = new EventEmitter<SignInModel>() 

  constructor() {
    this.data = {
      login: '',
      password: ''
    }
   }

  ngOnInit() {
  }

  login() {  
    this.onLogin.emit(this.data);
  }

}
