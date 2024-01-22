import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoxHeadComponent } from './box-head.component';

describe('BoxHeadComponent', () => {
  let component: BoxHeadComponent;
  let fixture: ComponentFixture<BoxHeadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoxHeadComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BoxHeadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
