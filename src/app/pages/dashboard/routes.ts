import { Route } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';

export default [
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'footer',
    component: FooterComponent,
  },
] as Route[];
