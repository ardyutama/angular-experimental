import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompetencyImageComponent } from './competency-image.component';

describe('CompetencyImageComponent', () => {
  let component: CompetencyImageComponent;
  let fixture: ComponentFixture<CompetencyImageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompetencyImageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompetencyImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
