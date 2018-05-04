import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from "@angular/router";
import { Observable } from 'rxjs/Observable';
import { tap, catchError } from 'rxjs/operators';
import { of } from 'rxjs/observable/of';

import { SignUpModel } from '../../models/signup.model';
import { NetworkError } from '../../models/error.model';

@Component({
  selector: 'sign-up',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  data: SignUpModel;
  @Input() message: NetworkError;
  @Output() onSignUp = new EventEmitter<SignUpModel>() 

  constructor() {
    this.data = {
      login: '',
      password: ''
    }
   }

  ngOnInit() {
  }

  signup() {  
    this.onSignUp.emit(this.data);
  }

}
