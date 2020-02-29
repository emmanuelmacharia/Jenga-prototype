import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts';
import { ReactiveFormsModule } from '@angular/forms';


import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopNavComponent } from './top-nav/top-nav.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { DataCardComponent } from './data-card/data-card.component';
import { DataCardNavComponent } from './data-card-nav/data-card-nav.component';
import { DatatableComponent } from './datatable/datatable.component';
import { DashboardDatacardNavComponent } from './dashboard-datacard-nav/dashboard-datacard-nav.component';
import { DashboardNavDatacard2Component } from './dashboard-nav-datacard2/dashboard-nav-datacard2.component';
import { BackgroundComponentComponent } from './background-component/background-component.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DashboardDatacardComponent } from './dashboard-datacard/dashboard-datacard.component';
import { DashDataTopComponent } from './dash-data-top/dash-data-top.component';
import { DashboardDatacardBottomComponent } from './dashboard-datacard-bottom/dashboard-datacard-bottom.component';
import { DashDataBottomComponent } from './dash-data-bottom/dash-data-bottom.component';
import { ModalComponent } from './modal/modal.component';
import { ModalLogicService } from './modal-logic.service';

@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    DashboardComponent,
    DataCardComponent,
    TopNavComponent,
    SideNavComponent,
    DataCardNavComponent,
    DatatableComponent,
    DashboardDatacardNavComponent,
    DashboardNavDatacard2Component,
    BackgroundComponentComponent,
    DashboardDatacardComponent,
    DashDataTopComponent,
    DashboardDatacardBottomComponent,
    DashDataBottomComponent,
    ModalComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ChartsModule,
    ReactiveFormsModule
  ],
  providers: [ModalLogicService],
  bootstrap: [AppComponent]
})
export class AppModule { }
