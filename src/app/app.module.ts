import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopNavComponent } from './top-nav/top-nav.component';
import { SideNavComponent } from './side-nav/side-nav.component';
// import { DataCardComponent } from './data-card/data-card.component';
import { DataCardNavComponent } from './data-card-nav/data-card-nav.component';
import { DatatableComponent } from './datatable/datatable.component';
import { PopulatedExpComponent } from './populated-exp/populated-exp.component';
import { DashboardDatacardNavComponent } from './dashboard-datacard-nav/dashboard-datacard-nav.component';
import { DashboardNavDatacard2Component } from './dashboard-nav-datacard2/dashboard-nav-datacard2.component';
// import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    TopNavComponent,
    SideNavComponent,
    DataCardNavComponent,
    DatatableComponent,
    PopulatedExpComponent,
    DashboardDatacardNavComponent,
    DashboardNavDatacard2Component,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
