import { Component } from '@angular/core';
import * as faker from "@faker-js/faker/locale/en";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.less']
})
export class DashboardComponent {
  ZONES = [
    { id: 1, name: 'Schoolwork' }
  ]
  STUDENT_ACTIVITIES = (new Array(10)).fill(null).map(() => {
    const randomActivitiesCount = 10;
    return {
      student: {
        id: faker.faker.datatype.uuid(),
        name: faker.faker.name.fullName()
      },
      activities: (new Array(randomActivitiesCount).fill(null).map(() => {
        return { 
          id: faker.faker.datatype.uuid(),
          completed: faker.faker.datatype.boolean(), 
          score: 47, completedDate: '2013-03-29', zoneId: 5 };
      }))
    }
  });
}
