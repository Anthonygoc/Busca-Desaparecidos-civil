import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { PersonDetailsComponent } from './pages/person-details/person-details.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'pessoa/:id', component: PersonDetailsComponent },
  { path: '**', redirectTo: '' }
];
