import { Component } from "@angular/core";
import { ButtonComponent } from "../../shared/button/button.component";

@Component({
    selector: 'showcase',
    templateUrl: './showcase.component.html',
    styleUrls: ['./showcase.component.css'],
    standalone: true,
    imports: [ButtonComponent]
})

export class Showcase {
}