import { HeaderComponent } from 'src/app/shared/header/header.component';
import { Component, OnInit } from '@angular/core';
import { ButtonComponent } from 'src/app/shared/button/button.component';
import { SeparatorComponent } from 'src/app/shared/separator/separator.component';

@Component({
  selector: 'app-welcome-page',
  templateUrl: './welcome-page.component.html',
  styleUrls: ['./welcome-page.component.css'],
  standalone: true,
  imports: [HeaderComponent, ButtonComponent, SeparatorComponent]
})
export class WelcomePageComponent implements OnInit {
  user = 'rahmat@laamp.com.au';
  terms = 'https://laamp.com/terms';
  privacy = 'https://laamp.com/privacy';
  constructor() { }

  ngOnInit(): void {
  }

}
