import { Routes } from '@angular/router';

import { HomeComponent } from './domains/pages/home/home.component'
import { AboutUsComponent } from './domains/pages/about-us/about-us.component'
import { ServicesComponent } from './domains/pages/services/services.component'

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'about-us',
        component: AboutUsComponent
    },
    {
        path: 'services',
        component: ServicesComponent
    }
];
