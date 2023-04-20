import { Component, Input } from '@angular/core';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-circle-status',
  templateUrl: './circle-status.component.html',
  styleUrls: ['./circle-status.component.less']
})
export class CircleStatusComponent {
  @Input() score = 0;

  faCheck = faCheck;

  get gradiant() {
    return {background: this.getConicGradiantString()}
    // return `background: ${this.getConicGradiantString()};`
  }

  private getConicGradiantString() {
    const s = (this.score) * 360/ 4;
    return `conic-gradient(#009DFF 0deg ${s}deg, #e0e5e9 ${s}deg 360deg)`;
  }
}
