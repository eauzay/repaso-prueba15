import {  Routes } from '@angular/router';
import { AppComponent } from './app.component';

export const routes: Routes = [
  {
    path: 'app',
    component: AppComponent
  },
  {
    path: "dashboard",
    loadChildren:() => import ("./pages/dashboard/routes")
  }
];
