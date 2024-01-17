import { Component, HostBinding, Input, OnInit } from '@angular/core';
import { GaugeComponent, roundPercent } from '../gauge/gauge.component';

@Component({
  selector: 'app-mandatory-compliance',
  templateUrl: './mandatory-compliance.component.html',
  styleUrls: ['./mandatory-compliance.component.scss'],
  standalone: true,
  imports: [GaugeComponent]
})
export class MandatoryComplianceComponent {
  title = 'Mandatory compliance:'
  completed = 33
  total = 56
  href = ""
  totalCompliance = this.completed / this.total;
  progress = roundPercent(this.totalCompliance)
  @HostBinding('attr.aria-background')
  get progressBackgroundColor(): string {
    if (this.progress < 30) {
      return 'var(--progressions-need-response-bg-emphasis)'
    } else if (this.progress >= 30 && this.progress < 80) {
      return 'var(--progressions-in-progress-bg-emphasis)'
    } else {
      return 'var(--progressions-complete-bg-emphasis)'
    }
  }

  get gaugeColor(): string {
    return this.progressBackgroundColor
  }

  description = 'It is critical that you complete these competencies so that you can perform your duties.'
}
