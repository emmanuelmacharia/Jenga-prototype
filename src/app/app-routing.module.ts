import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DataCardComponent } from './data-card/data-card.component';
import { DashboardComponent } from './dashboard/dashboard.component';


const routes: Routes = [
  { path: 'overview', component: DataCardComponent },
  { path: 'bulkpayments', component: DashboardComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponents = [DashboardComponent, DataCardComponent];
