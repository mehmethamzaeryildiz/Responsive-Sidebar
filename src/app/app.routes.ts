import { Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { StatisticsComponent } from './components/statistics/statistics.component';
import { MediaComponent } from './components/media/media.component';
import { SettingsComponent } from './components/settings/settings.component';
import { PagesComponent } from './components/pages/pages.component';

export const routes: Routes = [
    {path: '', redirectTo: 'dashboard', pathMatch: 'full'},
    {path: 'dashboard', component: DashboardComponent},
    {
        path: 'products',
        loadChildren: () => import('./components/products/products.module').then(m => m.ProductsModule)
    },
    {path: 'statistic', component: StatisticsComponent},
    {path: 'pages', component: PagesComponent},
    {
        path: 'coupens',
        loadChildren: () => import('./components/coupens/coupens.module').then(m => m.CoupensModule)
    },
    {path: 'media', component: MediaComponent},
    {path: 'settings', component: SettingsComponent},
];
