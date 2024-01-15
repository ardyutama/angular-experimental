import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-separator',
  template: `
    <div class="separator {{orientation}}"></div>
  `,
  styleUrls: ['./separator.component.css'],
  standalone: true
})
export class SeparatorComponent {
  @Input() orientation: 'horizontal' | 'vertical' = 'horizontal';
}
