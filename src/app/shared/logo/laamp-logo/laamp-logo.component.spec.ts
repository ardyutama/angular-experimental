import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LaampLogoComponent } from './laamp-logo.component';

describe('LaampLogoComponent', () => {
  let component: LaampLogoComponent;
  let fixture: ComponentFixture<LaampLogoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LaampLogoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LaampLogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
