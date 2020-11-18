import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NetworkChartComponent } from './network-chart.component';


@NgModule({
  declarations: [
    NetworkChartComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    NetworkChartComponent,
  ]
})
export class NetworkChartModule { }
