import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LaampLogoComponent } from '../logo/laamp-logo/laamp-logo.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, LaampLogoComponent],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

}
