import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'
import { FormsModule } from '@angular/forms';
import { StoreRouterConnectingModule, RouterStateSerializer } from '@ngrx/router-store';

import { AppComponent } from './app.component';
import { OwnerComponent } from './components/owners/owner.component';
import { PetComponent } from './components/pet/pet.component';
import { AppRoutingModule } from './/app-routing.module';

import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { HomeComponent } from './components/home/home.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { OwnerDetailComponent } from './components/owner-detail/owner-detail.component';
import { OwnerContainer } from './containers/owners/owners.container';
import { OwnerDetailContainer } from './containers/owners/owner-detail.container';
import { OwnersService } from './services/owners.service';
import { SignInContainer } from './containers/signin/signin.container';
import { SignUpContainer } from './containers/signup/signup.container';
import { NavigationContainer } from './containers/navigation/navigation.container';
import { HomeContainer } from './containers/home/home.container';
import { AuthService } from './services/auth.service';

import { AuthInterceptor } from './interceptors/auth.interceptor';

import { StoreModule } from '@ngrx/store';
import { reducers } from './store/reducers/index';
import { CustomSerializer } from './store/reducers/router.reducer';

import { EffectsModule } from '@ngrx/effects';
import { OwnersEffects } from './store/effects/owners.effects';
import { AuthEffects } from './store/effects/auth.effects';

import { StoreDevtoolsModule } from '@ngrx/store-devtools';

@NgModule({
  declarations: [
    AppComponent,
    OwnerComponent,
    PetComponent,
    DashboardComponent,
    LoginComponent,
    SignupComponent,
    HomeComponent,
    NavigationComponent,
    OwnerDetailComponent,
    OwnerDetailContainer,
    HomeContainer,
    OwnerContainer,
    SignInContainer,
    SignUpContainer,
    NavigationContainer
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    StoreModule.forRoot(reducers),
    EffectsModule.forRoot([OwnersEffects, AuthEffects]),
    StoreRouterConnectingModule,
    StoreDevtoolsModule.instrument()
  ],
  providers: [
    OwnersService,
    AuthService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    },
    {
      provide: RouterStateSerializer,
      useClass: CustomSerializer
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
