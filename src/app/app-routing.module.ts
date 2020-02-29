import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DataCardComponent } from './data-card/data-card.component';
import { DashboardComponent } from './dashboard/dashboard.component';


const routes: Routes = [
  { path: 'overview', component: DashboardComponent },
  { path: 'bulkpayments', component: DataCardComponent },
  { path: '', redirectTo: '/overview', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponents = [DashboardComponent, DataCardComponent];
