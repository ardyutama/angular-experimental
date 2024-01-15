import { Component, EventEmitter, Input, Output } from '@angular/core';
@Component({
  selector: 'button-app',
  template: `
        <button [attr.aria-label]="title" class="Button size-{{size}} variant-{{variants}}" (click)="onClick()" [disabled]="disabled">
            <div>
            {{title}}
            </div>
        </button>
    `,
  standalone: true,
  styleUrls: ['./button.component.css'],
})

export class ButtonComponent {
  @Input() disabled: boolean = false;
  @Input() size: 'small' | 'medium' | 'large' = 'medium';
  @Input() variants: 'primary' | 'secondary' | 'danger' | 'invisible' | 'success' = 'primary';
  @Input() title: string = 'Default Title';

  @Output()
  onClickButton = new EventEmitter<Event>();
  onClick() {
    this.onClickButton.emit();
  }
}