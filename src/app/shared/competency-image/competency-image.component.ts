import { Component, Input, OnInit } from '@angular/core';
import { StatsComponent } from '../stats/stats.component';
import { LabelComponent } from '../label/label.component';

type ProgressType = 'default' | 'in progress' | 'completed' | 'expire-soon' | 'expired'
@Component({
  selector: 'app-competency-image',
  templateUrl: './competency-image.component.html',
  styleUrls: ['./competency-image.component.scss'],
  standalone: true,
  imports: [StatsComponent, LabelComponent],
})
export class CompetencyImageComponent {
  @Input () progress?: ProgressType;
  @Input () mandatory: boolean = true;
  @Input () version: boolean = true;
}
