import { Component, OnInit, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GaugeComponent } from '../gauge/gauge.component';

@Component({
  selector: 'app-card-role-compliance',
  standalone: true,
  imports: [CommonModule, GaugeComponent],
  templateUrl: './card-role-compliance.component.html',
  styleUrls: ['./card-role-compliance.component.css'],
})
export class CardRoleComplianceComponent {
  @Input()location: string = ''
  @Input() current: number = 2
  @Input() total: number = 10
  @Input() progress: number = this.current / this.total
}
