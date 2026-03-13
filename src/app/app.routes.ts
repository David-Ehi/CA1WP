import { Routes } from '@angular/router';

import { AboutComponent } from './about-component/about-component';
import { Home } from './home/home';
import { Details } from './details/details';

export const routes: Routes = [
    { path: '', component: Home },
    { path: 'about', component: AboutComponent },
    { path: 'movie/:id', component: Details }
];
