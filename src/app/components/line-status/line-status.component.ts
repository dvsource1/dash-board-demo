import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-line-status',
  templateUrl: './line-status.component.html',
  styleUrls: ['./line-status.component.less']
})
export class LineStatusComponent {
  @Input() score = 0;
}
