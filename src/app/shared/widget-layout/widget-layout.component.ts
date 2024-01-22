import { Component, OnInit } from '@angular/core';
import { BoxHeadComponent } from '../box-head/box-head.component';

@Component({
  selector: 'app-widget-layout',
  templateUrl: './widget-layout.component.html',
  styleUrls: ['./widget-layout.component.css'],
  imports: [BoxHeadComponent],
  standalone: true
})
export class WidgetLayoutComponent {

}
