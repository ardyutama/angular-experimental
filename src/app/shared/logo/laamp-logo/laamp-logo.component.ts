import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-laamp-logo',
  standalone: true,
  templateUrl: './laamp-logo.component.html',
})
export class LaampLogoComponent{
  @Input() color: 'primary' | 'black' | 'white' = "primary"
  fillColor: string = '';
  

  ngOnInit() {
    this.setFillColorClass();
  }

  private setFillColorClass() {
    var root = document.documentElement;
    var style = getComputedStyle(root);
    switch (this.color) {
      case 'primary':
        this.fillColor = style.getPropertyValue('--brand')
        break;
      case 'black':
        this.fillColor = style.getPropertyValue('--foreground-default');
        break;
      case 'white':
        this.fillColor = style.getPropertyValue('--foreground-on-inverse-default');
        break;
      default:
        this.fillColor = style.getPropertyValue('--brand');
        break;
    }
  }

}
