import { Routes } from '@angular/router';
import { Dashboard } from './pages/dashboard/dashboard';
import { Activity } from './pages/activity/activity';

export const routes: Routes = [
    { path: '', component: Dashboard },
    { path: 'dashboard', component: Dashboard },
    { path: 'activity', component: Activity },
];
