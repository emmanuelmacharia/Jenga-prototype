import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopNavComponent } from './top-nav/top-nav.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { DataCardComponent } from './data-card/data-card.component';
import { DataCardNavComponent } from './data-card-nav/data-card-nav.component';
import { DatatableComponent } from './datatable/datatable.component';
import { PopulatedExpComponent } from './populated-exp/populated-exp.component';

@NgModule({
  declarations: [
    AppComponent,
    TopNavComponent,
    SideNavComponent,
    DataCardComponent,
    DataCardNavComponent,
    DatatableComponent,
    PopulatedExpComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
