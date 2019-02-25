import { Routes, Route } from '@angular/router';
import { SectionSalesComponent } from './app/sections/section-sales/section-sales.component';
import { SectionHeakthComponent } from './app/sections/section-heakth/section-heakth.component';
import { SectionOrdersComponent } from './app/sections/section-orders/section-orders.component';

export const appRoutes: Routes = [
  { path: 'sales', component: SectionSalesComponent },
  { path: 'heakth', component: SectionHeakthComponent },
  { path: 'orders', component: SectionOrdersComponent },

  { path: '', redirectTo: '/sales', pathMatch: 'full' },
  
];
