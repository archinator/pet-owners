import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { OwnerContainer } from './containers/owners/owners.container'
import { SignInContainer } from './containers/signin/signin.container'
import { SignUpContainer } from './containers/signup/signup.container'
import { OwnerDetailContainer } from './containers/owners/owner-detail.container';
import { PetComponent } from './components/pet/pet.component'
import { DashboardComponent } from './components/dashboard/dashboard.component'
import { LoginComponent } from './components/login/login.component'
import { HomeContainer } from './containers/home/home.container'

const routes: Routes = [
  { path: '', component: HomeContainer, children: [
    { path: '', redirectTo: '/dashboard', pathMatch: 'full'},
    { path: 'login', component: SignInContainer },
    { path: 'signup', component: SignUpContainer },
    { path: 'dashboard', component: DashboardComponent },
    { path: 'owners', component:OwnerContainer },
    { path: 'owners/:id', component: OwnerDetailContainer},
    { path: 'pets', component: PetComponent }
  ] }
  
]
@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
