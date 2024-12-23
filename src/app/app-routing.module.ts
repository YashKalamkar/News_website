import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { BusinessComponent } from './business/business.component';
import { TechnologyComponent } from './technology/technology.component';
import { EntertainmentComponent } from './entertainment/entertainment.component';
import { LastestComponent } from './lastest/lastest.component';
import { SportComponent } from './sport/sport.component';
import { ScienceComponent } from './science/science.component';
import { HealthComponent } from './health/health.component';

const routes: Routes = [
  {
    component:LoginComponent,
    path:'login'
  },
  {
    component:SignupComponent,
    path:'signup'
  },
  {
    component:LastestComponent,
    path:''
  },
  {
    component:BusinessComponent,
    path:'business'
  },
  {
    component:TechnologyComponent,
    path:'technology'
  },
  {
    component:EntertainmentComponent,
    path:'entertainment'
  },
  {
    component:SportComponent,
    path:'sport'
  },
  {
    component:ScienceComponent,
    path:'science'
  },
  {
    component:HealthComponent,
    path:'health'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
