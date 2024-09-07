import { Routes } from '@angular/router';
import { HomeDetailComponent } from './home-detail/home-detail.component';

export const routes: Routes = [
  { path: '', redirectTo: 'detail', pathMatch: 'full' },
  { path: 'detail', component: HomeDetailComponent },
];
