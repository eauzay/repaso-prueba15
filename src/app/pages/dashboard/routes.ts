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
  {
    path: "gallery",
    loadComponent: () => import("./gallery/gallery.component").then(m => m.GalleryComponent) //ejecute el componente una vez cargada el componente
  }
] as Route[];
