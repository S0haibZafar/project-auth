import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { ProfileComponent } from './pages/profile/profile.component';


const routes: Routes = [
  {
    path :'login',
    component: LoginComponent
  },
  {
    path :'register',
    component: RegisterComponent
  },
  {
    path :'**',
    component: ProfileComponent
  },
  {
    path :'dashboard',
    component: DashboardComponent
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
