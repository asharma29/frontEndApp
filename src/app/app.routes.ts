import { Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LogInComponentComponent } from './components/log-in-component/log-in-component.component';
import { SignUpComponentComponent } from './sign-up-component/sign-up-component.component';

export const routes: Routes = [
    { path: '**', component: DashboardComponent },
    { path: 'login', component: LogInComponentComponent },
    { path: 'signup', component: SignUpComponentComponent }
];
