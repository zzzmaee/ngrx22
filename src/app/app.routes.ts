import { Routes } from '@angular/router';
import { CounterComponent } from './components/counter/counter.component';
import { BlogComponent } from './components/blog/blog.component';
import { HomeComponent } from './components/home/home.component';

export const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'blog', component: BlogComponent},
  {path: 'counter', component: CounterComponent}
];
