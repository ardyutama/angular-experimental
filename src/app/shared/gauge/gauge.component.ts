import { Component, HostBinding, Input, OnInit } from '@angular/core';

export function roundPercent(value: number): number {
  // This avoids displaying a misleading percentage such as 100% when they're
  // not quite done or 0% when they've done a little bit.
  const percent = Math.min(Math.max(Math.round(value * 100), 0), 100);
  if (percent === 0 && value > 0) return 1;
  if (percent === 100 && value < 1) return 99;
  return percent;
}
@Component({
  selector: 'app-gauge',
  templateUrl: './gauge.component.html',
  styleUrls: ['./gauge.component.css'],
  standalone: true,
})

export class GaugeComponent {
  @Input() progress = 0;
 
  @HostBinding('attr.aria-strokeDashOffset')
  get strokeDashOffset(): number {
    let max = 442.74
    return max - (max * this.percent / 100)
  }
  @Input() progressBackgroundColor = 'var(--progressions-in-progress-bg-emphasis)';

  @HostBinding('attr.aria-valuenow')
  get percent(): number {
    return roundPercent(this.progress);
  }

  @HostBinding('attr.aria-valuetext')
  get percentText(): string {
    return `${this.percent}%`;
  }
}
