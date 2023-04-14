import { Component } from '@angular/core';

@Component({
  selector: 'app-activities-table',
  templateUrl: './activities-table.component.html',
  styleUrls: ['./activities-table.component.less']
})
export class ActivitiesTableComponent {
  legendData = [
    {label: '80% - 100% score', colorClass: 'bg-[#00B271]'},
    {label: '40% - 79% score', colorClass: 'bg-[#FFCC00]'},
    {label: '0% - 39% score', colorClass: 'bg-[#FF576A]'},
  ];

  STUDENTS = [
    {
      name: 'Carla S',
      weeklyQuest: [30, 48, 0, 50],
      activitiesComplted: [
        { score: 10, chart: [10, 2, 40] },
        { score: 38, chart: [5, 58, 0] },
      ],
      timeOnActivities: [42, 155]
    },
    {
      name: 'Eddie F',
      weeklyQuest: [30, 48, 0, 50],
      activitiesComplted: [
        { score: 10, chart: [10, 2, 40] },
        { score: 38, chart: [5, 58, 0] },
      ],
      timeOnActivities: [42, 155]
    },
    {
      name: 'Isabelle P',
      weeklyQuest: [30, 48, 0, 50],
      activitiesComplted: [
        { score: 10, chart: [10, 2, 40] },
        { score: 38, chart: [5, 58, 0] },
      ],
      timeOnActivities: [42, 155]
    },    {
      name: 'Karen O',
      weeklyQuest: [30, 48, 0, 50],
      activitiesComplted: [
        { score: 10, chart: [10, 2, 40] },
        { score: 38, chart: [5, 58, 0] },
      ],
      timeOnActivities: [42, 155]
    },    {
      name: 'Sam W',
      weeklyQuest: [30, 48, 0, 50],
      activitiesComplted: [
        { score: 10, chart: [10, 2, 40] },
        { score: 38, chart: [5, 58, 0] },
      ],
      timeOnActivities: [42, 155]
    },
    {
      name: 'Carla S',
      weeklyQuest: [30, 48, 0, 50],
      activitiesComplted: [
        { score: 10, chart: [10, 2, 40] },
        { score: 38, chart: [5, 58, 0] },
      ],
      timeOnActivities: [42, 155]
    },
    {
      name: 'Eddie F',
      weeklyQuest: [30, 48, 0, 50],
      activitiesComplted: [
        { score: 10, chart: [10, 2, 40] },
        { score: 38, chart: [5, 58, 0] },
      ],
      timeOnActivities: [42, 155]
    },
    {
      name: 'Isabelle P',
      weeklyQuest: [30, 48, 0, 50],
      activitiesComplted: [
        { score: 10, chart: [10, 2, 40] },
        { score: 38, chart: [5, 58, 0] },
      ],
      timeOnActivities: [42, 155]
    },    {
      name: 'Karen O',
      weeklyQuest: [30, 48, 0, 50],
      activitiesComplted: [
        { score: 10, chart: [10, 2, 40] },
        { score: 38, chart: [5, 58, 0] },
      ],
      timeOnActivities: [42, 155]
    },    {
      name: 'Sam W',
      weeklyQuest: [30, 48, 0, 50],
      activitiesComplted: [
        { score: 10, chart: [10, 2, 40] },
        { score: 38, chart: [5, 58, 0] },
      ],
      timeOnActivities: [42, 155]
    }
  ]
}
