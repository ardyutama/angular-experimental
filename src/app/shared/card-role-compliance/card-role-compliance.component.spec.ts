import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardRoleComplianceComponent } from './card-role-compliance.component';

describe('CardRoleComplianceComponent', () => {
  let component: CardRoleComplianceComponent;
  let fixture: ComponentFixture<CardRoleComplianceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ CardRoleComplianceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardRoleComplianceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
