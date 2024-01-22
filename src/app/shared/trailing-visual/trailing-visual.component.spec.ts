import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrailingVisualComponent } from './trailing-visual.component';

describe('TrailingVisualComponent', () => {
  let component: TrailingVisualComponent;
  let fixture: ComponentFixture<TrailingVisualComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrailingVisualComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrailingVisualComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
