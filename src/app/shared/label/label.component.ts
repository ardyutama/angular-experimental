import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-label',
  templateUrl: './label.component.html',
  styleUrls: ['./label.component.css'],
  standalone: true
})
export class LabelComponent{
  @Input() version = '1.0.0';
}
