import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NgChartsModule } from 'ng2-charts';
import { ActivitiesChartComponent } from './activities-chart/activities-chart.component';
import { ActivitiesTableComponent } from './activities-table/activities-table.component';
import { LegendComponent } from './components/legend/legend.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    ActivitiesChartComponent,
    ActivitiesTableComponent,
    LegendComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
