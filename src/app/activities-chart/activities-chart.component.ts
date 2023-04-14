import { Component } from '@angular/core';
import { ChartConfiguration } from 'chart.js';

@Component({
  selector: 'app-activities-chart',
  templateUrl: './activities-chart.component.html',
  styleUrls: ['./activities-chart.component.less']
})
export class ActivitiesChartComponent {
  public barChartPlugins = [];

  STUDENTS = ['Carla S', 'Eddie F', 'Ethan H', 'Isabelle P', 'Jamie W', 'Karen O', 'Larry G', 'Lorraine T', 'Sam W', 'Sharon A']
  DATASET = [
    [3, 0, 0, 0, 9, 5, 0, 0, 2, 3],
    [0, 0, 0, 0, 2, 7, 5, 1, 5, 2],
    [3, 0, 3, 0, 4, 9, 0, 5, 0, 4],
    [3, 3, 2, 0, 3, 14, 4, 1, 2, 3],
    [0, 16, 5, 8, 12, 0, 15, 9, 2, 0], [9, 9, 8, 9, 2, 2, 2, 0, 33, 3], [19, 18, 0, 12, 0, 0, 0, 0, 2, 11]];
  ZONES = [
    {label: 'Schoolwork', backgroundColor: '#2A65CC', colorClass: 'bg-[#2A65CC]'},
    {label: 'Homework', backgroundColor: '#0E90E0', colorClass: 'bg-[#0E90E0]'},
    {label: 'Adventure Island', backgroundColor: '#46B18A', colorClass: 'bg-[#46B18A]'},
    {label: 'Training Zone', backgroundColor: '#78C758', colorClass: 'bg-[#78C758]'},
    {label: 'Arena', backgroundColor: '#FFCC00', colorClass: 'bg-[#FFCC00]'},
    {label: 'Favourites', backgroundColor: '#F586D3', colorClass: 'bg-[#F586D3]'},
    {label: 'Other', backgroundColor: '#755F98', colorClass: 'bg-[#755F98]'},
  ]

  get legendData() {
    return this.ZONES;
  }

  // ZONES = ['Schoolwork', 'Homework', 'Adventure Island', 'Training Zone', 'Arena', 'Favourites', 'Other'];
  BAR_WIDTH = 60;

  public barChartData: ChartConfiguration<'bar'>['data'] = {
    labels: this.STUDENTS,
    datasets: this.DATASET.map((data, i) => {
      const {label, backgroundColor} = this.ZONES[i];
      return {data, label, backgroundColor, barThickness: this.BAR_WIDTH};
    })
  };

  public barChartOptions: ChartConfiguration<'bar'>['options'] = {
    plugins: {
      legend: {
        display: false
      },
    },
    maintainAspectRatio: false,
    responsive: true,
    scales: {
      x: {
        ticks: {
          color: '#4A4A4A',
          maxRotation: 45,
          minRotation: 45
        },
        grid: {
          display: false
        },
        stacked: true,
      },
      y: {
        title: {display: true, text: 'Activities Completed', color: '#162736'},
        max: 80,
        ticks: {
          color: '#162736',
          callback: function(value, index, ticks) {
            return index % 2 == 0 ? value : '';
          }
        },
        grid: {
          color: function(context) {
            return context.tick.value % 20 == 0 ? '#C4C4C4' : undefined
          },
          borderDash: function(context) {
            return context.tick.value % 40 != 0 ? [4, 4] : undefined;
          }
        },
        stacked: true
      }
    },
  };
}
