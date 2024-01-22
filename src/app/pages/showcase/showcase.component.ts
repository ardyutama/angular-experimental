import { Component } from '@angular/core';
import { MandatoryComplianceComponent } from 'src/app/shared/mandatory-compliance/mandatory-compliance.component';
import { CompetencyImageComponent } from 'src/app/shared/competency-image/competency-image.component';
import { WidgetLayoutComponent } from 'src/app/shared/widget-layout/widget-layout.component';
import { CardRoleComplianceComponent } from 'src/app/shared/card-role-compliance/card-role-compliance.component';
import { BoxHeadComponent } from 'src/app/shared/box-head/box-head.component';

@Component({
  selector: 'showcase',
  templateUrl: './showcase.component.html',
  styleUrls: ['./showcase.component.scss'],
  standalone: true,
  imports: [
    MandatoryComplianceComponent,
    CompetencyImageComponent,
    WidgetLayoutComponent,
    CardRoleComplianceComponent,
    BoxHeadComponent
  ],
})
export class Showcase {}
