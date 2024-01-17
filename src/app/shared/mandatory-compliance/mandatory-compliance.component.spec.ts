import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MandatoryComplianceComponent } from './mandatory-compliance.component';

describe('MandatoryComplianceComponent', () => {
  let component: MandatoryComplianceComponent;
  let fixture: ComponentFixture<MandatoryComplianceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MandatoryComplianceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MandatoryComplianceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
