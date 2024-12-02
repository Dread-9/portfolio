import { Routes } from '@angular/router';
import { AboutComponent } from './page/components/about/about.component';
import { ProjectsComponent } from './page/components/projects/projects.component';
import { ContactComponent } from './page/components/contact/contact.component';
import { HomeComponent } from './page/components/home/home.component';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' }, 
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'contact', component: ContactComponent }
];
