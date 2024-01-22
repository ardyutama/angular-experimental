import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
type variant = 'icon' | 'counter'
@Component({
  selector: 'app-trailing-visual',
  templateUrl: './trailing-visual.component.html',
  styleUrls: ['./trailing-visual.component.css'],
  imports:[CommonModule],
  standalone: true,
})
export class TrailingVisualComponent {
  @Input() variant: variant = 'icon';
  @Input() counter?: number = 0;
}
