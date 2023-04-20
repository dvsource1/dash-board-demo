import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NgChartsModule } from 'ng2-charts';
import { ActivitiesChartComponent } from './activities-chart/activities-chart.component';
import { ActivitiesTableComponent } from './activities-table/activities-table.component';
import { LegendComponent } from './components/legend/legend.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CircleStatusComponent } from './components/circle-status/circle-status.component';
import { LineStatusComponent } from './components/line-status/line-status.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    ActivitiesChartComponent,
    ActivitiesTableComponent,
    LegendComponent,
    CircleStatusComponent,
    LineStatusComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgChartsModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
