import { Component } from "@angular/core";
import { MandatoryComplianceComponent } from "src/app/shared/mandatory-compliance/mandatory-compliance.component";
import { CompetencyImageComponent } from "src/app/shared/competency-image/competency-image.component";

@Component({
    selector: 'showcase',
    templateUrl: './showcase.component.html',
    styleUrls: ['./showcase.component.scss'],
    standalone: true,
    imports: [MandatoryComplianceComponent, CompetencyImageComponent]
})

export class Showcase {
}