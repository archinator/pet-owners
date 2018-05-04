import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { catchError } from 'rxjs/operators';
import 'rxjs/add/observable/throw';

import { Owner } from '../models/owner.model';

@Injectable()
export class OwnersService {
  constructor(private http: HttpClient) {}

  getOwners(): Observable<Owner[]> {    
    return this.http
      .get<Owner[]>(`/owners`)
  }

  getOwner(id): Observable<Owner> {    
    return this.http
      .get<Owner>(`/owners/`+id)
  }
    
}