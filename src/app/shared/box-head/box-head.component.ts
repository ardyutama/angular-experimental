import { Component, Input, OnInit } from '@angular/core';
import { TrailingVisualComponent } from '../trailing-visual/trailing-visual.component';
import { CommonModule } from '@angular/common';

type variant = 'medium' | 'bold-small' | 'bold' | 'bold-emphasize'

@Component({
  selector: 'app-box-head',
  templateUrl: './box-head.component.html',
  styleUrls: ['./box-head.component.css'],
  imports: [TrailingVisualComponent, CommonModule],
  standalone: true
})
export class BoxHeadComponent {
  @Input() variant: variant = 'bold'
  @Input() title: string = 'Default Title';
  @Input() showLeadingVisual: boolean = false;
  @Input() showTrailingVisual: boolean = false;
  @Input() linkUrl: string = '';
}
