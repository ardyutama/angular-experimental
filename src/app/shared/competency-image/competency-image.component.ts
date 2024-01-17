import { Component, OnInit } from '@angular/core';
import { StatsComponent } from '../stats/stats.component';
import { LabelComponent } from '../label/label.component';

@Component({
  selector: 'app-competency-image',
  templateUrl: './competency-image.component.html',
  styleUrls: ['./competency-image.component.scss'],
  standalone: true,
  imports: [StatsComponent, LabelComponent],
})
export class CompetencyImageComponent {

 

}
