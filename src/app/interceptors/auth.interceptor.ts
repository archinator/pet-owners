import { Injectable, Injector } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/observable/throw'
import 'rxjs/add/operator/catch';

import { AuthService } from '../services/auth.service';


@Injectable()
export class AuthInterceptor implements HttpInterceptor {
    constructor(private authService: AuthService, private router: Router) { }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        const authorization = this.authService.getToken();
        
        const authReq = authorization 
        ? req.clone({ headers: req.headers.set('Authorization', authorization) })
        : req;
        return next.handle(authReq)
            .catch((error, caught) => {

                if (error.status === 401) {
                    this.authService.removeTokens();
                    this.router.navigate(['/login']);
                    return Observable.throw(error);
                }

                // if (error.status === 419) {
                //     return this.authService.refreshToken().flatMap(token => {
                //         const authReq = req.clone({ headers: req.headers.set('Authorization', token) });
                //         return next.handle(authReq);
                //     });
                // }

                return Observable.throw(error);

            }) as any;
    }
}