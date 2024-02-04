import { Route } from '@angular/router';
import { WelcomeComponent } from './pages/welcome/welcome.component';

export const appRoutes: Route[] = [
    {
        path: '',
        redirectTo: 'welcome',
        pathMatch: 'full',
    },
    {
        path: 'welcome',
        component: WelcomeComponent,
    }
];
