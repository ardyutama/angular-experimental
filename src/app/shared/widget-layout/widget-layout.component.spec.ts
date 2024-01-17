import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WidgetLayoutComponent } from './widget-layout.component';

describe('WidgetLayoutComponent', () => {
  let component: WidgetLayoutComponent;
  let fixture: ComponentFixture<WidgetLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WidgetLayoutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WidgetLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
