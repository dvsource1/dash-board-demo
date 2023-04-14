import { Component, Input } from '@angular/core';

export interface LedgendEntry {
  label: string;
  colorClass: string; // bg-[#123456]
}

@Component({
  selector: 'app-legend',
  templateUrl: './legend.component.html',
  styleUrls: ['./legend.component.less']
})
export class LegendComponent {
  @Input() data: LedgendEntry[] = []
}
