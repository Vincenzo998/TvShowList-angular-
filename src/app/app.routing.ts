import { Routes, RouterModule } from '@angular/router';
import { HomeListComponent } from './components/home-list/home-list.component';
import { DetailListComponent } from './components/home-list/detail-list/detail-list.component';




const routes: Routes = [
  { path: '', redirectTo: 'HomeList', pathMatch: 'full' },
  { path: 'HomeList', component: HomeListComponent },
  { path: 'ShowDetail/:id', component: DetailListComponent }
];

export const AppRoutes = RouterModule.forRoot(routes);
