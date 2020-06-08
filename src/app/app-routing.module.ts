import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './Pages/home/home.component';


const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
    data: {}
  },
  {
    path: '**',
    redirectTo: 'home',
    data: {}
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
